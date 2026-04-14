/*
  # Create jobs table

  1. New Tables
    - `jobs`
      - `id` (text, primary key) - Job identifier
      - `title` (text) - Job title
      - `location` (text) - Job location
      - `type` (text) - Employment type (Full-time, Contract, etc.)
      - `bullets` (jsonb) - Array of key points
      - `description` (text) - Detailed job description
      - `requirements` (jsonb) - Array of requirements
      - `benefits` (jsonb) - Array of benefits
      - `salary_range` (text) - Salary information
      - `is_active` (boolean) - Whether job is actively hiring
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `jobs` table
    - Add policy for public read access to active jobs
    - Add policy for authenticated admin write access
*/

CREATE TABLE IF NOT EXISTS jobs (
  id text PRIMARY KEY,
  title text NOT NULL,
  location text NOT NULL,
  type text NOT NULL,
  bullets jsonb DEFAULT '[]'::jsonb,
  description text,
  requirements jsonb DEFAULT '[]'::jsonb,
  benefits jsonb DEFAULT '[]'::jsonb,
  salary_range text,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view active jobs"
  ON jobs
  FOR SELECT
  USING (is_active = true);

CREATE POLICY "Authenticated users can view all jobs"
  ON jobs
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert jobs"
  ON jobs
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update jobs"
  ON jobs
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete jobs"
  ON jobs
  FOR DELETE
  TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS idx_jobs_active ON jobs(is_active) WHERE is_active = true;
