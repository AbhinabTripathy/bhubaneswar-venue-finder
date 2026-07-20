import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Nav } from "@/components/site/Nav";
import { Logo } from "@/components/site/Logo";
import { BookingForm } from "@/components/site/BookingForm";
import heroImg from "@/assets/hero-venue.jpg";
import space20 from "@/assets/space-20.jpg";
import space40 from "@/assets/space-40.jpg";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";
import {
  Wifi, Projector, Snowflake, PenLine, Plug, Coffee, Car, Armchair,
  Calendar, Clock, MapPin, Phone, Mail, MessageCircle, ArrowRight,
  Sparkles, Users, IndianRupee, Camera, Building2, Star, Check, ChevronDown,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Urban Vibes Space — A Space to Connect & Celebrate | Bhubaneswar" },
      { name: "description", content: "Bhubaneswar's modern venue for meetings, workshops, networking events, photoshoots & community gatherings. 20 & 40 seater spaces. Hourly & daily bookings." },
      { property: "og:title", content: "Urban Vibes Space — A Space to Connect & Celebrate | Bhubaneswar" },
      { property: "og:description", content: "Bhubaneswar's modern venue for meetings, workshops, networking events, photoshoots & community gatherings. 20 & 40 seater spaces. Hourly & daily bookings." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Spaces />
      <Pricing />
      <Gallery />
      <Events />
      <Amenities />
      <Book />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <Toaster position="top-center" richColors />
    </div>
  );
}

/* ----------------------------- Hero ----------------------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-white">
      <img
        src={heroImg}
        alt="Networking event at Urban Vibes Space"
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/50 to-ink" />
      <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[var(--orange)]/30 blur-3xl" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-5 pb-20 pt-36 md:px-8 md:pt-40">
        <div className="max-w-3xl animate-float-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-white/85 backdrop-blur">
            <Sparkles size={14} className="text-[var(--orange)]" />
            Bhubaneswar, Odisha
          </span>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-balance md:text-7xl lg:text-8xl">
            Connect.{" "}
            <span className="italic text-[var(--orange)]">Create.</span>{" "}
            Celebrate.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80 text-pretty md:text-xl">
            Urban Vibes Space is Bhubaneswar's modern venue for meetings, workshops, networking
            events, photoshoots, content creation, and community gatherings.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#book"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-warm-gradient px-7 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.03]"
            >
              Book a Space <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Schedule a Visit
            </a>
          </div>

          <ul className="mt-10 grid max-w-2xl grid-cols-2 gap-x-6 gap-y-3 text-sm text-white/80 sm:grid-cols-2 md:grid-cols-4">
            {[
              "20 Seater Meeting Room",
              "40 Seater Event Hall",
              "Hourly & Daily Bookings",
              "Projector & WiFi",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={16} className="text-[var(--green)]" /> {t}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Startup Saturdays", "Creator Meetups", "Workshops", "Photoshoots", "Networking Nights", "Product Launches", "Team Offsites"];
  return (
    <div className="overflow-hidden border-y border-border bg-cream py-5">
      <div className="flex animate-[scroll_30s_linear_infinite] gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-xl italic text-ink-soft">
            {t} <span className="mx-6 text-[var(--orange)]">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes scroll { from{transform:translateX(0)} to{transform:translateX(-33.333%)} }`}</style>
    </div>
  );
}

/* ----------------------------- About ----------------------------- */
function About() {
  const features = [
    { icon: Calendar, title: "Flexible Bookings", desc: "By the hour or by the day — your call." },
    { icon: Wifi, title: "High-Speed WiFi", desc: "Reliable internet built for video calls & streaming." },
    { icon: Sparkles, title: "Event Ready", desc: "Projector, mic, lighting and a stage setup." },
    { icon: Camera, title: "Content Creation Friendly", desc: "Great natural light, photogenic corners." },
    { icon: MapPin, title: "Prime Location", desc: "In the heart of Bhubaneswar, easy to reach." },
    { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium space, fair rates, no surprises." },
  ];
  return (
    <Section id="about" eyebrow="Why Urban Vibes?" title="A space designed for the way you actually work">
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        A thoughtfully designed venue for startups, businesses, creators, communities, and
        professionals looking for an inspiring space to host events and meetings.
      </p>
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-card transition-all hover:-translate-y-1 hover:border-[var(--orange)]/30 hover:shadow-glow"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cream text-[var(--orange)] transition-colors group-hover:bg-warm-gradient group-hover:text-white">
              <f.icon size={22} />
            </div>
            <h3 className="mt-5 text-xl">{f.title}</h3>
            <p className="mt-2 text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Spaces ----------------------------- */
function Spaces() {
  const spaces = [
    {
      img: space20, name: "20 Seater Space", price: "₹499", unit: "/hour",
      tags: ["Workshops", "Team Meetings", "Training", "Startup Discussions"],
    },
    {
      img: space40, name: "40 Seater Space", price: "₹799", unit: "/hour",
      tags: ["Networking Events", "Seminars", "Product Launches", "Community Gatherings"],
    },
  ];
  return (
    <Section id="spaces" eyebrow="Our Spaces" title="Two rooms. Endless possibilities.">
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {spaces.map((s) => (
          <article key={s.name} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-all hover:-translate-y-1 hover:shadow-glow">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={s.img} alt={s.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              <div className="absolute right-4 top-4 rounded-full bg-white/95 px-4 py-1.5 text-sm font-semibold text-ink backdrop-blur">
                <span className="text-[var(--orange)]">{s.price}</span>
                <span className="text-muted-foreground">{s.unit}</span>
              </div>
            </div>
            <div className="p-7">
              <h3 className="text-3xl">{s.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <span key={t} className="rounded-full bg-cream px-3 py-1 text-xs font-medium text-ink-soft">{t}</span>
                ))}
              </div>
              <a href="#book" className="mt-6 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-[var(--orange)]">
                Book Now <ArrowRight size={16} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Pricing ----------------------------- */
function Pricing() {
  const tiers = [
    { name: "20 Seater", hourly: "499", daily: "2,999", highlighted: false },
    { name: "40 Seater", hourly: "799", daily: "4,999", highlighted: true },
  ];
  const perks = ["Projector Available", "WiFi Included", "Tea & Coffee", "Flexible Seating"];
  return (
    <Section id="pricing" eyebrow="Pricing" title="Honest rates. No surprises." dark>
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`relative overflow-hidden rounded-3xl border p-8 md:p-10 ${
              t.highlighted
                ? "border-[var(--orange)]/40 bg-gradient-to-br from-[var(--orange)]/15 to-transparent"
                : "border-white/10 bg-white/[0.03]"
            }`}
          >
            {t.highlighted && (
              <span className="absolute right-6 top-6 rounded-full bg-[var(--orange)] px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-3xl text-white">{t.name}</h3>
            <div className="mt-6 flex items-baseline gap-2 text-white">
              <span className="font-display text-6xl">₹{t.hourly}</span>
              <span className="text-white/60">/hour</span>
            </div>
            <div className="mt-2 text-white/70">or <span className="text-white">₹{t.daily}</span> / day</div>
            <ul className="mt-8 space-y-3">
              {perks.map((p) => (
                <li key={p} className="flex items-center gap-3 text-white/85">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--green)]/20 text-[var(--green)]">
                    <Check size={14} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <a href="#book" className="mt-8 inline-flex h-12 w-full items-center justify-center rounded-full bg-warm-gradient px-6 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02]">
              Reserve {t.name}
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Gallery ----------------------------- */
function Gallery() {
  const photos = [
    { src: g1, alt: "Workshop", label: "Workshops" },
    { src: g2, alt: "Startup meetup", label: "Startup Meetups" },
    { src: g3, alt: "Podcast", label: "Content Creation" },
    { src: g4, alt: "Networking", label: "Networking" },
    { src: g5, alt: "Photoshoot", label: "Photoshoots" },
    { src: g6, alt: "Corporate session", label: "Corporate Sessions" },
  ];
  return (
    <Section id="gallery" eyebrow="Gallery" title="The kind of moments we host">
      <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {photos.map((p, i) => (
          <figure
            key={p.src}
            className={`group relative overflow-hidden rounded-2xl bg-muted ${
              i === 0 ? "col-span-2 row-span-2 aspect-square" : i === 4 ? "col-span-2 aspect-[16/9]" : "aspect-square"
            }`}
          >
            <img src={p.src} alt={p.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <figcaption className="absolute bottom-4 left-4 translate-y-2 text-sm font-medium text-white opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              {p.label}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Events ----------------------------- */
function Events() {
  const events = [
    { title: "Startup Saturday", date: "Sat, 21 Jun", time: "5:00 PM", tag: "Networking" },
    { title: "Creator Meetup", date: "Sun, 29 Jun", time: "11:00 AM", tag: "Community" },
    { title: "AI Community Meetup", date: "Sat, 5 Jul", time: "4:00 PM", tag: "Tech" },
    { title: "Open Networking Night", date: "Fri, 11 Jul", time: "7:00 PM", tag: "Social" },
  ];
  return (
    <Section id="events" eyebrow="Upcoming Events" title="Drop by, meet your people">
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {events.map((e) => (
          <div key={e.title} className="group flex flex-col rounded-3xl border border-border bg-card p-6 shadow-card transition hover:-translate-y-1 hover:border-[var(--orange)]/30 hover:shadow-glow">
            <span className="self-start rounded-full bg-[var(--green)]/10 px-3 py-1 text-xs font-semibold text-[var(--green)]">
              {e.tag}
            </span>
            <h3 className="mt-4 text-2xl">{e.title}</h3>
            <div className="mt-4 space-y-1.5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Calendar size={15} /> {e.date}</div>
              <div className="flex items-center gap-2"><Clock size={15} /> {e.time}</div>
            </div>
            <a href="#book" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--orange)] transition group-hover:gap-3">
              Register <ArrowRight size={15} />
            </a>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Amenities ----------------------------- */
function Amenities() {
  const items = [
    { icon: Wifi, label: "High Speed WiFi" },
    { icon: Projector, label: "Projector" },
    { icon: Snowflake, label: "Air Conditioning" },
    { icon: PenLine, label: "Whiteboard" },
    { icon: Plug, label: "Power Backup" },
    { icon: Coffee, label: "Tea & Coffee" },
    { icon: Car, label: "Parking" },
    { icon: Armchair, label: "Flexible Seating" },
  ];
  return (
    <Section id="amenities" eyebrow="Amenities" title="Everything you need, already set up">
      <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {items.map((a) => (
          <div key={a.label} className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-7 text-center transition hover:border-[var(--orange)]/30 hover:bg-cream">
            <a.icon className="text-[var(--orange)]" size={26} />
            <span className="text-sm font-medium text-ink">{a.label}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Book ----------------------------- */
function Book() {
  return (
    <section id="book" className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="absolute -right-32 top-10 h-96 w-96 rounded-full bg-[var(--orange)]/20 blur-3xl" />
      <div className="absolute -left-32 bottom-10 h-96 w-96 rounded-full bg-[var(--green)]/15 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Eyebrow>Book Your Space</Eyebrow>
          <h2 className="mt-3 font-display text-4xl text-balance md:text-5xl">
            Tell us what you're hosting — we'll handle the rest.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Submit a request and our team will reach out on WhatsApp within a few hours to confirm
            your slot, walk you through the space, and lock in any extras.
          </p>
          <ul className="mt-8 space-y-3 text-ink-soft">
            {[
              { icon: Users, t: "Free walkthrough before you book" },
              { icon: Building2, t: "Setup options for any kind of event" },
              { icon: IndianRupee, t: "Transparent pricing, auto-calculated" },
            ].map((i) => (
              <li key={i.t} className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-warm-gradient text-white"><i.icon size={16} /></span>
                {i.t}
              </li>
            ))}
          </ul>
        </div>
        <BookingForm />
      </div>
    </section>
  );
}

/* ----------------------------- Testimonials ----------------------------- */
function Testimonials() {
  const items = [
    { quote: "We hosted our first 30-person product launch here. Setup was effortless and the team made us feel taken care of.", name: "Ananya Mishra", role: "Startup Founder" },
    { quote: "Best workshop venue in Bhubaneswar. The space photographs beautifully and attendees actually want to hang back.", name: "Rohit Patnaik", role: "Workshop Organizer" },
    { quote: "Booked for an internal offsite. Hourly pricing meant we paid exactly for what we needed. Smooth, professional, premium.", name: "Sneha Das", role: "Corporate Team Lead" },
  ];
  return (
    <Section id="testimonials" eyebrow="Loved by our community" title="What people say">
      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {items.map((t) => (
          <figure key={t.name} className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <div className="flex gap-0.5 text-[var(--orange)]">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} fill="currentColor" strokeWidth={0} />)}
            </div>
            <blockquote className="mt-4 font-display text-xl leading-snug text-ink text-balance">
              "{t.quote}"
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-warm-gradient font-semibold text-white">
                {t.name[0]}
              </div>
              <div>
                <div className="text-sm font-semibold text-ink">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- FAQ ----------------------------- */
function FAQ() {
  const qa = [
    { q: "Can I book hourly?", a: "Yes — both spaces are available by the hour with a 1-hour minimum, or a flat day rate if you'd rather not watch the clock." },
    { q: "Do you provide a projector?", a: "Absolutely. A full-HD projector, screen, and HDMI/USB-C adapters come included at no extra cost." },
    { q: "Can I host workshops?", a: "Workshops are one of our most-loved use cases. Flexible seating, whiteboards, and breakout space included." },
    { q: "Can I book for photoshoots?", a: "Yes. Great natural light, brick wall textures, and clean backdrops — content creators love it." },
    { q: "Is parking available?", a: "On-site parking is available for 2-wheelers, and ample street parking for 4-wheelers right outside." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section id="faq" eyebrow="FAQ" title="Questions, answered">
      <div className="mx-auto mt-14 max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card shadow-card">
        {qa.map((item, i) => {
          const isOpen = open === i;
          return (
            <button
              key={item.q}
              onClick={() => setOpen(isOpen ? null : i)}
              className="block w-full px-6 py-5 text-left md:px-8"
              aria-expanded={isOpen}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-display text-lg text-ink md:text-xl">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[var(--orange)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                />
              </div>
              <div
                className={`grid transition-all duration-300 ${isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              >
                <p className="overflow-hidden text-muted-foreground">{item.a}</p>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}

/* ----------------------------- Contact ----------------------------- */
function Contact() {
  return (
    <Section id="contact" eyebrow="Visit Us" title="Come see the space" dark>
      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-display text-3xl text-white">Urban Vibes Space</h3>
          <p className="mt-2 text-white/70">A Space To Connect & Celebrate</p>

          <div className="mt-8 space-y-5 text-white/85">
            <ContactRow icon={MapPin} label="Bhubaneswar, Odisha, India" />
            <ContactRow icon={Phone} label="+91 98765 43210" href="tel:+919876543210" />
            <ContactRow icon={Mail} label="hello@urbanvibesspace.com" href="mailto:hello@urbanvibesspace.com" />
            <ContactRow icon={MessageCircle} label="WhatsApp Us" href="https://wa.me/919876543210" />
          </div>

          <a
            href="https://wa.me/919876543210?text=Hi%20Urban%20Vibes%2C%20I%27d%20like%20to%20schedule%20a%20visit."
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex h-12 items-center gap-2 rounded-full bg-[var(--green)] px-6 text-sm font-semibold text-white shadow-glow transition hover:brightness-110"
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </a>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 shadow-card">
          <iframe
            title="Map to Urban Vibes Space"
            src="https://www.google.com/maps?q=Bhubaneswar%2C+Odisha&output=embed"
            className="h-[420px] w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </Section>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: any; label: string; href?: string }) {
  const content = (
    <span className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[var(--orange)]">
        <Icon size={18} />
      </span>
      <span>{label}</span>
    </span>
  );
  return href ? <a href={href} className="block transition hover:text-white">{content}</a> : <div>{content}</div>;
}

/* ----------------------------- Footer ----------------------------- */
function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-16 text-white/70">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Logo className="h-12 w-auto" />
            <p className="mt-4 max-w-sm text-sm">
              A Space To Connect & Celebrate. Bhubaneswar's modern venue for meetings, events,
              and the community moments in between.
            </p>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white">Explore</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { h: "#top", l: "Home" }, { h: "#spaces", l: "Spaces" },
                { h: "#pricing", l: "Pricing" }, { h: "#events", l: "Events" },
                { h: "#gallery", l: "Gallery" }, { h: "#contact", l: "Contact" },
              ].map((x) => (
                <li key={x.l}><a href={x.h} className="hover:text-[var(--orange)]">{x.l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-sm uppercase tracking-widest text-white">Visit</h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Bhubaneswar, Odisha</li>
              <li><a href="tel:+919876543210" className="hover:text-[var(--orange)]">+91 98765 43210</a></li>
              <li><a href="mailto:hello@urbanvibesspace.com" className="hover:text-[var(--orange)]">hello@urbanvibesspace.com</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-3 pt-6 text-xs text-white/50 sm:flex-row">
          <span>© 2026 Urban Vibes Space. All Rights Reserved.</span>
          <span>Made with care in Bhubaneswar.</span>
        </div>
      </div>
    </footer>
  );
}

/* ----------------------------- WhatsApp FAB ----------------------------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/919876543210?text=Hi%20Urban%20Vibes%2C%20I%27d%20like%20to%20book%20a%20space."
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="animate-pulse-ring fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--green)] text-white shadow-glow transition-transform hover:scale-110"
    >
      <MessageCircle size={26} />
    </a>
  );
}

/* ----------------------------- Primitives ----------------------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[var(--orange)]/30 bg-[var(--orange)]/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--orange)]">
      {children}
    </span>
  );
}

function Section({
  id, eyebrow, title, children, dark = false,
}: {
  id: string; eyebrow: string; title: string; children: React.ReactNode; dark?: boolean;
}) {
  return (
    <section id={id} className={`py-24 md:py-32 ${dark ? "bg-ink text-white" : "bg-background"}`}>
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="max-w-3xl">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className={`mt-3 font-display text-4xl text-balance md:text-5xl lg:text-6xl ${dark ? "text-white" : "text-ink"}`}>
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
