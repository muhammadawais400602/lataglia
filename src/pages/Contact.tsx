import { FormEvent, useState } from 'react';
import Layout from '../components/Layout';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <Layout>
      <section className="container-x py-20 grid md:grid-cols-2 gap-16">
        <div>
          <p className="uppercase tracking-widest text-xs text-brand-700 mb-4">Reservations</p>
          <h1 className="text-5xl mb-6">Book a table</h1>
          <p className="text-brand-700 mb-8">
            Tables for 2–6. For larger parties, email <a className="underline" href="mailto:events@lataglia.example">events@lataglia.example</a>.
          </p>
          <dl className="space-y-4 text-brand-900">
            <div>
              <dt className="font-semibold">Address</dt>
              <dd className="text-brand-700">42 Vicolo del Pane, Rome</dd>
            </div>
            <div>
              <dt className="font-semibold">Hours</dt>
              <dd className="text-brand-700">Tuesday – Sunday · 12:00 – 23:00</dd>
            </div>
            <div>
              <dt className="font-semibold">Phone</dt>
              <dd className="text-brand-700">+39 06 1234 5678</dd>
            </div>
          </dl>
        </div>

        <form onSubmit={submit} className="bg-white p-8 rounded-2xl border border-brand-200 shadow-sm space-y-4">
          {sent ? (
            <div className="text-center py-10">
              <h2 className="text-2xl mb-2">Grazie!</h2>
              <p className="text-brand-700">We'll confirm your table by email within a few hours.</p>
            </div>
          ) : (
            <>
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <div className="grid grid-cols-2 gap-4">
                <Field label="Date" name="date" type="date" required />
                <Field label="Time" name="time" type="time" required />
              </div>
              <Field label="Party size" name="size" type="number" min={1} max={6} defaultValue={2} required />
              <label className="block text-sm">
                <span className="font-medium">Notes</span>
                <textarea name="notes" rows={3} className="mt-1 w-full rounded-md border border-brand-200 bg-brand-50 px-3 py-2" />
              </label>
              <button type="submit" className="btn-primary w-full justify-center">Request table</button>
            </>
          )}
        </form>
      </section>
    </Layout>
  );
}

type FieldProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string };
function Field({ label, ...rest }: FieldProps) {
  return (
    <label className="block text-sm">
      <span className="font-medium">{label}</span>
      <input {...rest} className="mt-1 w-full rounded-md border border-brand-200 bg-brand-50 px-3 py-2" />
    </label>
  );
}
