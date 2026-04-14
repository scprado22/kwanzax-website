import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

function generateSlug(name: string): string {
  const timestamp = Date.now().toString(36);
  const cleanName = name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 30);
  return `${cleanName}-${timestamp}`;
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  if (req.method !== 'POST') {
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      { status: 405, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const formData = await req.formData();

    const fullName = formData.get('full_name')?.toString();
    const email = formData.get('email')?.toString();
    const phone = formData.get('phone')?.toString();
    const location = formData.get('location')?.toString();
    const position = formData.get('position')?.toString();
    const linkedin = formData.get('linkedin')?.toString() || null;
    const message = formData.get('message')?.toString() || null;
    const cvFile = formData.get('cv') as File;

    if (!fullName || !email || !phone || !location || !position || !cvFile) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    if (cvFile.size > 10 * 1024 * 1024) {
      return new Response(
        JSON.stringify({ error: 'CV file size must be less than 10MB' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const allowedTypes = [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(cvFile.type)) {
      return new Response(
        JSON.stringify({ error: 'CV must be PDF or DOC/DOCX format' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const slug = generateSlug(fullName);
    const fileExt = cvFile.name.split('.').pop();
    const fileName = `${slug}.${fileExt}`;
    const filePath = `applications/${fileName}`;

    const cvBuffer = await cvFile.arrayBuffer();
    const { error: uploadError } = await supabase.storage
      .from('career-cvs')
      .upload(filePath, cvBuffer, {
        contentType: cvFile.type,
        upsert: false
      });

    if (uploadError) {
      console.error('Upload error:', uploadError);
      return new Response(
        JSON.stringify({ error: 'Failed to upload CV' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { data: urlData } = supabase.storage
      .from('career-cvs')
      .getPublicUrl(filePath);

    const { data, error: insertError } = await supabase
      .from('career_applications')
      .insert({
        nome: fullName,
        email,
        phone,
        location,
        position,
        linkedin,
        message,
        cv_url: urlData.publicUrl,
        slug,
        status: 'pending'
      })
      .select()
      .single();

    if (insertError) {
      console.error('Insert error:', insertError);
      
      await supabase.storage
        .from('career-cvs')
        .remove([filePath]);

      return new Response(
        JSON.stringify({ error: 'Failed to save application' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ ok: true, slug, data }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});