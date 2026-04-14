/*
  # Fix Security Issues - Function Search Path

  1. Functions to Fix
    - `generate_quote_number` - add SET search_path = public
    - `set_quote_number` - add SET search_path = public
    - `update_updated_at_column` - add SET search_path = public

  2. Security Impact
    Functions with mutable search_path can be vulnerable to schema poisoning attacks.
    Setting an explicit search_path prevents malicious users from creating objects
    in schemas that appear earlier in the search path.

  This migration recreates all functions with secure search_path settings.
*/

-- Recreate generate_quote_number with secure search_path
CREATE OR REPLACE FUNCTION public.generate_quote_number()
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
DECLARE
  new_number text;
  year_prefix text;
  sequence_num int;
BEGIN
  year_prefix := TO_CHAR(NOW(), 'YYYY');
  
  SELECT COUNT(*) + 1 INTO sequence_num
  FROM quotes
  WHERE quote_number LIKE year_prefix || '-%';
  
  new_number := year_prefix || '-' || LPAD(sequence_num::text, 4, '0');
  
  RETURN new_number;
END;
$function$;

-- Recreate set_quote_number with secure search_path
CREATE OR REPLACE FUNCTION public.set_quote_number()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  IF NEW.quote_number IS NULL OR NEW.quote_number = '' THEN
    NEW.quote_number := generate_quote_number();
  END IF;
  RETURN NEW;
END;
$function$;

-- Recreate update_updated_at_column with secure search_path
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $function$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$function$;
