/*
  # KwanzaX Career Applications

  1. New Tables
    - `career_applications`
      - `id` (uuid, primary key)
      - `full_name` (text) - Candidate full name
      - `email` (text) - Contact email
      - `phone` (text) - Phone number
      - `location` (text) - Current location
      - `position` (text) - Position/area of interest
      - `linkedin` (text) - LinkedIn profile URL
      - `message` (text, nullable) - Optional message
      - `cv_url` (text) - URL to uploaded CV in storage
      - `cv_filename` (text) - Original filename
      - `status` (text) - Application status (pending, reviewing, accepted, rejected)
      - `created_at` (timestamptz) - Submission timestamp
      - `slug` (text, unique) - Unique identifier for application
      
  2. Storage
    - Create bucket for CVs
    - Set up policies for secure upload/download
    
  3. Security
    - Enable RLS
    - Only authenticated admins can read applications
    - Public can insert (for application submission)
*/

CREATE TABLE IF NOT EXISTS career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  location text NOT NULL,
  position text NOT NULL,
  linkedin text,
  message text,
  cv_url text NOT NULL,
  cv_filename text NOT NULL,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now(),
  slug text UNIQUE NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_career_apps_created ON career_applications(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_career_apps_status ON career_applications(status);
CREATE INDEX IF NOT EXISTS idx_career_apps_email ON career_applications(email);

ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can manage applications"
  ON career_applications FOR ALL
  TO service_role
  USING (true)
  WITH CHECK (true);

INSERT INTO storage.buckets (id, name, public)
VALUES ('career-cvs', 'career-cvs', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Anyone can upload CVs"
  ON storage.objects FOR INSERT
  TO public
  WITH CHECK (bucket_id = 'career-cvs');

CREATE POLICY "Service role can read CVs"
  ON storage.objects FOR SELECT
  TO service_role
  USING (bucket_id = 'career-cvs');
