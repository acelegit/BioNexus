

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  username text unique not null,
  avatar_url text,
  xp integer default 0,
  bones_viewed text[] default '{}',
  sections_visited text[] default '{}',
  chatbot_uses integer default 0,
  quiz_plays jsonb default '{"easy":0,"medium":0,"hard":0}'::jsonb,
  quiz_perfect jsonb default '{"easy":0,"medium":0,"hard":0}'::jsonb,
  days_active text[] default '{}',
  created_at timestamptz default now()
);

create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  username text not null,
  avatar_url text,
  rating integer not null check (rating >= 1 and rating <= 5),
  text text not null check (length(text) between 10 and 600),
  created_at timestamptz default now()
);

create index if not exists reviews_created_idx on public.reviews(created_at desc);

alter table public.profiles enable row level security;
alter table public.reviews  enable row level security;

drop policy if exists "profiles_select_all"   on public.profiles;
drop policy if exists "profiles_insert_self"  on public.profiles;
drop policy if exists "profiles_update_self"  on public.profiles;
drop policy if exists "reviews_select_all"    on public.reviews;
drop policy if exists "reviews_insert_self"   on public.reviews;
drop policy if exists "reviews_update_self"   on public.reviews;
drop policy if exists "reviews_delete_self"   on public.reviews;

create policy "profiles_select_all"  on public.profiles for select using (true);
create policy "profiles_insert_self" on public.profiles for insert with check (auth.uid() = id);
create policy "profiles_update_self" on public.profiles for update using (auth.uid() = id);

create policy "reviews_select_all"   on public.reviews  for select using (true);
create policy "reviews_insert_self"  on public.reviews  for insert with check (auth.uid() = user_id);
create policy "reviews_update_self"  on public.reviews  for update using (auth.uid() = user_id);
create policy "reviews_delete_self"  on public.reviews  for delete using (auth.uid() = user_id);

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, username)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data->>'username',
      split_part(new.email, '@', 1)
    )
  )
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

insert into storage.buckets (id, name, public)
values ('avatars', 'avatars', true)
on conflict (id) do nothing;

drop policy if exists "avatars_public_read" on storage.objects;
drop policy if exists "avatars_upload_self" on storage.objects;
drop policy if exists "avatars_update_self" on storage.objects;
drop policy if exists "avatars_delete_self" on storage.objects;

create policy "avatars_public_read"
  on storage.objects for select
  using (bucket_id = 'avatars');

create policy "avatars_upload_self"
  on storage.objects for insert
  with check (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "avatars_update_self"
  on storage.objects for update
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);

create policy "avatars_delete_self"
  on storage.objects for delete
  using (bucket_id = 'avatars' and auth.uid()::text = (storage.foldername(name))[1]);
