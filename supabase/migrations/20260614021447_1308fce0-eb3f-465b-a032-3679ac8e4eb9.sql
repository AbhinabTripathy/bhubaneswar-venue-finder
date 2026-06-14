
CREATE TABLE public.bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  space TEXT NOT NULL,
  booking_date DATE NOT NULL,
  start_time TEXT NOT NULL,
  end_time TEXT NOT NULL,
  purpose TEXT,
  guest_count INTEGER,
  message TEXT,
  estimated_price INTEGER,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.bookings TO anon, authenticated;
GRANT ALL ON public.bookings TO service_role;
ALTER TABLE public.bookings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a booking" ON public.bookings FOR INSERT TO anon, authenticated WITH CHECK (true);

CREATE TABLE public.contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  kind TEXT NOT NULL DEFAULT 'contact',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contacts TO anon, authenticated;
GRANT ALL ON public.contacts TO service_role;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit a contact" ON public.contacts FOR INSERT TO anon, authenticated WITH CHECK (true);
