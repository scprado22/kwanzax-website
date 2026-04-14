/*
  # Fix Security Issues - Drop Unused and Duplicate Indexes

  1. Drop Unused Indexes
    - Drop `idx_quotes_status` - not used for queries
    - Drop `idx_quotes_created_at` - not used for queries
    - Drop `idx_quotes_client_email` - not used for queries
    - Drop `idx_contacts_status` - not used for queries
    - Drop `idx_contacts_created_at` - not used for queries
    - Drop `idx_services_category` - not used for queries
    - Drop `idx_services_is_active` - not used for queries
    - Drop `idx_tech_news_week` - not used for queries
    - Drop `idx_tech_news_created` - not used for queries
    - Drop `idx_career_apps_status` - not used for queries
    
  2. Drop Duplicate Indexes
    - Keep `idx_career_applications_created_at`, drop `idx_career_apps_created`
    - Keep `idx_career_applications_email`, drop `idx_career_apps_email`

  This improves database performance by reducing index maintenance overhead.
*/

-- Drop unused indexes from quotes table
DROP INDEX IF EXISTS idx_quotes_status;
DROP INDEX IF EXISTS idx_quotes_created_at;
DROP INDEX IF EXISTS idx_quotes_client_email;

-- Drop unused indexes from contacts table
DROP INDEX IF EXISTS idx_contacts_status;
DROP INDEX IF EXISTS idx_contacts_created_at;

-- Drop unused indexes from services table
DROP INDEX IF EXISTS idx_services_category;
DROP INDEX IF EXISTS idx_services_is_active;

-- Drop unused indexes from tech_news table
DROP INDEX IF EXISTS idx_tech_news_week;
DROP INDEX IF EXISTS idx_tech_news_created;

-- Drop unused index from career_applications table
DROP INDEX IF EXISTS idx_career_apps_status;

-- Drop duplicate indexes from career_applications table
DROP INDEX IF EXISTS idx_career_apps_created;
DROP INDEX IF EXISTS idx_career_apps_email;
