/*
  # Create case_studies table

  1. New Tables
    - `case_studies`
      - `id` (uuid, primary key)
      - `slug` (text, unique) - URL-friendly identifier
      - `title` (text) - Case study title
      - `tags` (jsonb) - Array of tags/categories
      - `blurb` (text) - Short description
      - `industry` (text) - Industry/sector
      - `duration` (text) - Project duration
      - `team` (text) - Team size
      - `challenge` (text) - Client challenge description
      - `solution` (text) - Solution provided
      - `results` (jsonb) - Array of measurable results
      - `tech` (jsonb) - Array of technologies used
      - `is_featured` (boolean) - Whether to feature on homepage
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on `case_studies` table
    - Add policy for public read access (portfolio is public)
    - Add policy for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS case_studies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text UNIQUE NOT NULL,
  title text NOT NULL,
  tags jsonb DEFAULT '[]'::jsonb,
  blurb text NOT NULL,
  industry text NOT NULL,
  duration text NOT NULL,
  team text NOT NULL,
  challenge text NOT NULL,
  solution text NOT NULL,
  results jsonb DEFAULT '[]'::jsonb,
  tech jsonb DEFAULT '[]'::jsonb,
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE case_studies ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view case studies"
  ON case_studies
  FOR SELECT
  USING (true);

CREATE POLICY "Authenticated users can insert case studies"
  ON case_studies
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update case studies"
  ON case_studies
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete case studies"
  ON case_studies
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_case_studies_slug ON case_studies(slug);
CREATE INDEX IF NOT EXISTS idx_case_studies_featured ON case_studies(is_featured) WHERE is_featured = true;
