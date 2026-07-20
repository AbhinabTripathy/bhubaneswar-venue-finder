
DROP POLICY IF EXISTS "Anyone can submit a booking" ON public.bookings;
CREATE POLICY "Anyone can submit a booking"
ON public.bookings
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(phone) BETWEEN 5 AND 30
  AND length(email) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND length(space) BETWEEN 1 AND 80
  AND booking_date >= CURRENT_DATE
  AND length(start_time) BETWEEN 4 AND 8
  AND length(end_time) BETWEEN 4 AND 8
  AND (purpose IS NULL OR length(purpose) <= 300)
  AND (message IS NULL OR length(message) <= 2000)
  AND (guest_count IS NULL OR (guest_count > 0 AND guest_count <= 1000))
  AND (estimated_price IS NULL OR (estimated_price >= 0 AND estimated_price <= 10000000))
  AND status = 'pending'
);

DROP POLICY IF EXISTS "Anyone can submit a contact" ON public.contacts;
CREATE POLICY "Anyone can submit a contact"
ON public.contacts
FOR INSERT
TO anon, authenticated
WITH CHECK (
  length(name) BETWEEN 1 AND 120
  AND length(email) BETWEEN 3 AND 200
  AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
  AND (phone IS NULL OR length(phone) BETWEEN 5 AND 30)
  AND length(message) BETWEEN 1 AND 2000
  AND length(kind) BETWEEN 1 AND 40
);
