/*
  # Fix Security Issues - Move pg_net Extension

  1. Extension Issue
    - `pg_net` extension is currently installed in the public schema
    - Should be moved to the extensions schema for better security and organization

  2. Security Impact
    Having extensions in the public schema can create naming conflicts and
    potential security issues. Extensions should be isolated in their own schema.

  Note: This migration creates the extensions schema if it doesn't exist,
  then moves pg_net to that schema.
*/

-- Create extensions schema if it doesn't exist
CREATE SCHEMA IF NOT EXISTS extensions;

-- Move pg_net extension to extensions schema
DO $$
BEGIN
  -- Check if pg_net exists in public schema
  IF EXISTS (
    SELECT 1 FROM pg_extension 
    WHERE extname = 'pg_net' 
    AND extnamespace = (SELECT oid FROM pg_namespace WHERE nspname = 'public')
  ) THEN
    -- Drop and recreate in the correct schema
    DROP EXTENSION IF EXISTS pg_net CASCADE;
    CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
  ELSE
    -- Just ensure it exists in extensions schema
    CREATE EXTENSION IF NOT EXISTS pg_net WITH SCHEMA extensions;
  END IF;
END $$;
