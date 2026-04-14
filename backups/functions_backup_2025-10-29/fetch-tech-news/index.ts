import { createClient } from 'npm:@supabase/supabase-js@2';

const FEEDS = [
  'https://techcrunch.com/feed/',
  'https://www.theverge.com/rss/index.xml',
  'https://www.technologyreview.com/feed/',
  'https://www.wired.com/feed/rss',
  'https://feeds.arstechnica.com/arstechnica/index',
  'https://venturebeat.com/category/ai/feed/',
];

const KEYWORDS = [
  'ai', 'artificial intelligence', 'machine learning', 'ml', 'llm',
  'software', 'developer', 'dev', 'cloud', 'kubernetes', 'serverless',
  'data', 'analytics', 'security', 'cyber', 'privacy', 'blockchain'
];

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface FeedItem {
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

function hasKeyword(text: string): boolean {
  const lower = text.toLowerCase();
  return KEYWORDS.some(k => lower.includes(k));
}

function summarize(text: string, max = 240): string {
  const clean = text.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();
  return clean.length > max ? clean.slice(0, max - 3) + '...' : clean;
}

function normalizeUrl(url: string): string {
  try {
    const u = new URL(url);
    u.hash = '';
    return u.toString();
  } catch {
    return url;
  }
}

function getSource(url: string): string {
  try {
    return new URL(url).hostname.replace('www.', '');
  } catch {
    return 'source';
  }
}

async function parseFeed(feedUrl: string): Promise<FeedItem[]> {
  try {
    const response = await fetch(feedUrl, {
      headers: { 'User-Agent': 'KwanzaX-NewsBot/1.0' }
    });
    const xml = await response.text();
    
    const items: FeedItem[] = [];
    const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/g;
    let match;
    
    while ((match = itemRegex.exec(xml)) !== null) {
      const itemXml = match[1];
      const title = itemXml.match(/<title[^>]*><!\[CDATA\[([^\]]+)\]\]><\/title>|<title[^>]*>([^<]+)<\/title>/)?.[1] || itemXml.match(/<title[^>]*><!\[CDATA\[([^\]]+)\]\]><\/title>|<title[^>]*>([^<]+)<\/title>/)?.[2] || '';
      const link = itemXml.match(/<link[^>]*>([^<]+)<\/link>/)?.[1] || '';
      const pubDate = itemXml.match(/<pubDate[^>]*>([^<]+)<\/pubDate>/)?.[1] || new Date().toISOString();
      const description = itemXml.match(/<description[^>]*><!\[CDATA\[([^\]]+)\]\]><\/description>|<description[^>]*>([^<]+)<\/description>/)?.[1] || itemXml.match(/<description[^>]*><!\[CDATA\[([^\]]+)\]\]><\/description>|<description[^>]*>([^<]+)<\/description>/)?.[2] || '';
      
      if (title && link) {
        items.push({ title, link, pubDate, description });
      }
    }
    
    return items;
  } catch (error) {
    console.error(`Error parsing feed ${feedUrl}:`, error);
    return [];
  }
}

async function fetchAllNews(): Promise<any[]> {
  const allItems = await Promise.all(FEEDS.map(feed => parseFeed(feed)));
  const flat = allItems.flat();
  
  const filtered = flat.filter(item => {
    const text = `${item.title} ${item.description}`;
    return hasKeyword(text);
  });
  
  const deduped = new Map();
  for (const item of filtered) {
    const url = normalizeUrl(item.link);
    if (!deduped.has(url)) {
      deduped.set(url, item);
    }
  }
  
  const items = Array.from(deduped.values());
  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());
  
  return items.slice(0, 6).map(item => ({
    title: item.title,
    url: normalizeUrl(item.link),
    summary: summarize(item.description || item.title),
    source: getSource(item.link),
    published_at: new Date(item.pubDate).toISOString(),
    tag: 'AI/Software'
  }));
}

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const now = new Date();
    const weekSlug = now.toISOString().split('T')[0];

    const { data: existing } = await supabase
      .from('tech_news')
      .select('url')
      .eq('week_slug', weekSlug);

    if (existing && existing.length >= 4) {
      return new Response(
        JSON.stringify({ message: 'News already fetched for this week', count: existing.length }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const news = await fetchAllNews();

    const toInsert = news.map(item => ({
      ...item,
      week_slug: weekSlug
    }));

    const { data, error } = await supabase
      .from('tech_news')
      .insert(toInsert)
      .select();

    if (error) {
      console.error('Insert error:', error);
      return new Response(
        JSON.stringify({ error: error.message }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, inserted: data?.length || 0, items: data }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Function error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});