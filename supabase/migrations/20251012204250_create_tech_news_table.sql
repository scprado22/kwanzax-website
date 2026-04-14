/*
  # KwanzaX Tech Weekly - News Storage

  1. New Tables
    - `tech_news`
      - `id` (uuid, primary key)
      - `title` (text) - Article title
      - `url` (text, unique) - Article URL
      - `summary` (text) - Short summary (220-260 chars)
      - `source` (text) - Source domain (TechCrunch, etc)
      - `published_at` (timestamptz) - Original publish date
      - `tag` (text) - Category tag
      - `created_at` (timestamptz) - When saved to our DB
      - `week_slug` (text) - YYYY-MM-DD for grouping
      
  2. Indexes
    - Index on `week_slug` for fast weekly queries
    - Index on `published_at` for date sorting
    - Unique constraint on `url` for deduplication
    
  3. Security
    - Enable RLS
    - Allow public read access (news is public)
    - Only edge function can insert (service role)
*/

CREATE TABLE IF NOT EXISTS tech_news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  url text NOT NULL UNIQUE,
  summary text NOT NULL,
  source text NOT NULL,
  published_at timestamptz NOT NULL,
  tag text DEFAULT 'AI/Software',
  created_at timestamptz DEFAULT now(),
  week_slug text NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_tech_news_week ON tech_news(week_slug DESC);
CREATE INDEX IF NOT EXISTS idx_tech_news_published ON tech_news(published_at DESC);
CREATE INDEX IF NOT EXISTS idx_tech_news_created ON tech_news(created_at DESC);

ALTER TABLE tech_news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read tech news"
  ON tech_news FOR SELECT
  TO public
  USING (true);
