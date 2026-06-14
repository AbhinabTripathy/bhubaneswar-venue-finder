import { useMemo, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { CheckCircle2, Loader2 } from "lucide-react";

const RATES: Record<string, number> = {
  "20 Seater": 499,
  "40 Seater": 799,
};

function hoursBetween(start: string, end: string) {
  if (!start || !end) return 0;
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const diff = (eh + em / 60) - (sh + sm / 60);
  return diff > 0 ? diff : 0;
}

export function BookingForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({
    name: "", phone: "", email: "",
    space: "20 Seater",
    booking_date: "",
    start_time: "10:00",
    end_time: "13:00",
    purpose: "",
    guest_count: "",
    message: "",
  });

  const hours = hoursBetween(form.start_time, form.end_time);
  const price = useMemo(
    () => Math.round(hours * (RATES[form.space] ?? 0)),
    [hours, form.space],
  );

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.email || !form.booking_date) {
      toast.error("Please fill in your details and pick a date.");
      return;
    }
    if (hours <= 0) {
      toast.error("End time must be after start time.");
      return;
    }
    setSubmitting(true);
    const { error } = await supabase.from("bookings").insert({
      name: form.name,
      phone: form.phone,
      email: form.email,
      space: form.space,
      booking_date: form.booking_date,
      start_time: form.start_time,
      end_time: form.end_time,
      purpose: form.purpose || null,
      guest_count: form.guest_count ? Number(form.guest_count) : null,
      message: form.message || null,
      estimated_price: price,
    });
    setSubmitting(false);
    if (error) {
      console.error(error);
      toast.error("Could not submit. Please try again.");
      return;
    }
    setDone(true);
    toast.success("Booking request received! We'll confirm shortly.");
  };

  if (done) {
    return (
      <div className="rounded-3xl border border-[var(--green)]/30 bg-[var(--green)]/5 p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--green)] text-white">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="mt-5 text-2xl">Booking request sent</h3>
        <p className="mt-2 text-muted-foreground">
          Thanks, {form.name.split(" ")[0]}. Our team will WhatsApp you shortly to confirm
          your slot on {new Date(form.booking_date).toLocaleDateString("en-IN", { dateStyle: "long" })}.
        </p>
        <button
          onClick={() => { setDone(false); setForm({ ...form, name: "", phone: "", email: "", message: "" }); }}
          className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:bg-accent"
        >
          Make another booking
        </button>
      </div>
    );
  }

  const input = "h-12 w-full rounded-xl border border-input bg-background px-4 text-base outline-none transition focus:border-[var(--orange)] focus:ring-2 focus:ring-[var(--orange)]/20";
  const label = "mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted-foreground";

  return (
    <form onSubmit={submit} className="grid gap-5 rounded-3xl border border-border bg-card p-6 shadow-card md:p-10">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Your name</label>
          <input className={input} value={form.name} onChange={(e) => set("name", e.target.value)} placeholder="Priya Sharma" />
        </div>
        <div>
          <label className={label}>Phone</label>
          <input className={input} value={form.phone} onChange={(e) => set("phone", e.target.value)} placeholder="+91 98765 43210" />
        </div>
      </div>
      <div>
        <label className={label}>Email</label>
        <input type="email" className={input} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder="you@example.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label}>Space</label>
          <select className={input} value={form.space} onChange={(e) => set("space", e.target.value)}>
            <option>20 Seater</option>
            <option>40 Seater</option>
          </select>
        </div>
        <div>
          <label className={label}>Date</label>
          <input type="date" className={input} value={form.booking_date} onChange={(e) => set("booking_date", e.target.value)} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label className={label}>Start time</label>
          <input type="time" className={input} value={form.start_time} onChange={(e) => set("start_time", e.target.value)} />
        </div>
        <div>
          <label className={label}>End time</label>
          <input type="time" className={input} value={form.end_time} onChange={(e) => set("end_time", e.target.value)} />
        </div>
        <div>
          <label className={label}>Guests</label>
          <input type="number" min={1} className={input} value={form.guest_count} onChange={(e) => set("guest_count", e.target.value)} placeholder="12" />
        </div>
      </div>

      <div>
        <label className={label}>Purpose</label>
        <input className={input} value={form.purpose} onChange={(e) => set("purpose", e.target.value)} placeholder="Workshop, meetup, photoshoot…" />
      </div>

      <div>
        <label className={label}>Anything else?</label>
        <textarea rows={3} className={`${input} h-auto py-3`} value={form.message} onChange={(e) => set("message", e.target.value)} placeholder="Setup needs, catering, etc." />
      </div>

      <div className="flex flex-col gap-4 rounded-2xl bg-cream p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estimated total</div>
          <div className="mt-1 font-display text-3xl text-ink">
            ₹{price.toLocaleString("en-IN")}
            <span className="ml-2 text-sm font-sans text-muted-foreground">
              {hours > 0 ? `${hours} hr × ₹${RATES[form.space]}` : "Pick a time range"}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-warm-gradient px-7 text-sm font-semibold text-white shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
        >
          {submitting ? <Loader2 className="animate-spin" size={18} /> : null}
          Request Booking
        </button>
      </div>
    </form>
  );
}
