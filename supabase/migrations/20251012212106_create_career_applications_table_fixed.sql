/*
  # Create Career Applications Table

  1. New Tables
    - `career_applications`
      - `id` (uuid, primary key)
      - `slug` (text, unique)
      - `nome` (text, NOT NULL)
      - `email` (text, NOT NULL)
      - `phone` (text)
      - `location` (text)
      - `position` (text)
      - `linkedin` (text)
      - `message` (text)
      - `cv_url` (text)
      - `status` (text, default 'pending')
      - `created_at` (timestamptz, default now())
  
  2. Security
    - Enable RLS on `career_applications` table
    - Only service role can read/write
    - Applications are sensitive data

  3. Indexes
    - Index on `email` for lookups
    - Index on `created_at` for sorting
*/

CREATE TABLE IF NOT EXISTS career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  nome text NOT NULL,
  email text NOT NULL,
  phone text,
  location text,
  position text,
  linkedin text,
  message text,
  cv_url text,
  status text DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE career_applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Service role can read applications"
  ON career_applications
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can insert applications"
  ON career_applications
  FOR INSERT
  TO service_role
  WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_career_applications_email ON career_applications(email);
CREATE INDEX IF NOT EXISTS idx_career_applications_created_at ON career_applications(created_at DESC);