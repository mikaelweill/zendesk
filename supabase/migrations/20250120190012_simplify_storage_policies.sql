-- Drop existing policies
drop policy if exists "Authenticated users can upload attachments" on storage.objects;
drop policy if exists "Users can view attachments of their tickets" on storage.objects;

-- Recreate policies with simpler rules for upload
create policy "Authenticated users can upload attachments"
on storage.objects for insert
to authenticated
with check (
  bucket_id = 'attachments' and
  storage.foldername(name)::text ~ '^tickets/'
);

create policy "Users can view attachments of their tickets"
on storage.objects for select
to authenticated
using (
  bucket_id = 'attachments' and
  storage.foldername(name)::text ~ '^tickets/' and
  exists (
    select 1 from tickets
    where 
      substring(storage.foldername(name)::text from '^tickets/([^/]+)') = tickets.id::text and
      (
        tickets.client_id = auth.uid() or
        tickets.agent_id = auth.uid() or
        exists (
          select 1 from users
          where users.id = auth.uid()
          and users.role in ('agent', 'admin')
        )
      )
  )
); 