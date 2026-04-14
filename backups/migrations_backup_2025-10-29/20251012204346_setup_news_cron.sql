/*
  # Setup Cron Job for Tech News

  1. Schedule
    - Every Sunday at 09:00 Asia/Dubai time (05:00 UTC)
    - Calls the fetch-tech-news edge function
    
  2. Implementation
    - Uses pg_cron extension
    - Uses pg_net to call the edge function
*/

CREATE EXTENSION IF NOT EXISTS pg_cron;
CREATE EXTENSION IF NOT EXISTS pg_net;

SELECT cron.schedule(
  'fetch-tech-news-weekly',
  '0 5 * * 0',
  $$
  SELECT net.http_post(
    url := current_setting('app.settings.api_url') || '/functions/v1/fetch-tech-news',
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || current_setting('app.settings.service_role_key')
    ),
    body := '{}'::jsonb
  );
  $$
);
