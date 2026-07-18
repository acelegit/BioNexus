-- ============================================================================
-- BioNexus — Security hardening migration
-- Run this ONCE in the Supabase dashboard → SQL Editor (project wzjmjerqegbtofctcdvb).
-- Addresses audit findings F-01 (profiles readable by anyone) and F-05 (avatars
-- bucket listable by anyone). Safe to re-run (idempotent).
-- After running, the BioNexus client uses the bx_username_taken() RPC below for
-- registration / rename checks (it falls back to a direct select only if the RPC
-- is missing, so run this file so the secure path is used).
-- ============================================================================

-- ── F-01 ─ Profiles: readable ONLY by their owner (was: SELECT USING (true)) ──
alter table public.profiles enable row level security;

-- Replace the permissive "read everything" policy created by supabase-schema.sql.
drop policy if exists "profiles_select_all"  on public.profiles;
drop policy if exists "profiles_select_own"  on public.profiles;
create policy "profiles_select_own" on public.profiles
  for select using (auth.uid() = id);

-- Username availability check WITHOUT exposing any profile row: a SECURITY DEFINER
-- function that returns only true/false. Used at registration and rename.
create or replace function public.bx_username_taken(name text)
returns boolean
language sql
security definer
set search_path = public
as $$
  -- excludes the caller's own row, so a logged-in user renaming to their own
  -- current name isn't reported as "taken"; for anon (auth.uid() null) it checks all.
  select exists (
    select 1 from public.profiles
    where lower(username) = lower(name) and id is distinct from auth.uid()
  );
$$;
revoke all on function public.bx_username_taken(text) from public;
grant execute on function public.bx_username_taken(text) to anon, authenticated;

-- (INSERT/UPDATE own-row policies from supabase-schema.sql remain unchanged and correct.)

-- ── F-05 ─ Avatars storage: disable anonymous LISTING (enumeration of user IDs) ──
-- Individual avatars stay publicly viewable via the bucket's PUBLIC object URL
-- (public buckets bypass RLS for /object/public/...), so display is unaffected.
-- We only restrict the SELECT policy that governs the authenticated list/object API
-- to each user's own folder — killing anonymous `POST /storage/v1/object/list/avatars`.
drop policy if exists "avatars_public_read" on storage.objects;
drop policy if exists "avatars_list_own"    on storage.objects;
create policy "avatars_list_own" on storage.objects
  for select using (
    bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]
  );

-- (avatars_upload_self / avatars_update_self / avatars_delete_self remain unchanged.)
