/*
  # Setup Cron Job for Tech News

  1. Requirements
    - pg_cron extension must be enabled
    - Function to call the edge function weekly
  
  2. Schedule
    - Every Sunday at 09:00 Asia/Dubai time (05:00 UTC)
  
  3. Implementation
    - Create cron job that calls the fetch-tech-news edge function
*/

-- Enable pg_cron if not already enabled
CREATE EXTENSION IF NOT EXISTS pg_cron;

-- Delete existing cron job if exists
SELECT cron.unschedule('fetch-tech-news-weekly');

-- Create cron job for Sunday 09:00 GST (05:00 UTC)
SELECT cron.schedule(
  'fetch-tech-news-weekly',
  '0 5 * * 0',
  $$
  SELECT
    net.http_post(
      url:=current_setting('app.settings.supabase_url') || '/functions/v1/fetch-tech-news',
      headers:=jsonb_build_object(
        'Content-Type','application/json',
        'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
      ),
      body:='{}'::jsonb
    ) as request_id;
  $$
);