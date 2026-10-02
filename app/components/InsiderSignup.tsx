"use client";

import { useState } from "react";

const interests = ["Pistachio & Sweets", "Balsamic & EVOO", "Gift Boxes"];

export default function InsiderSignup() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="bg-parchment border border-[#e4d3d6] rounded p-8 sm:p-12 lg:p-16 max-w-4xl mx-auto shadow-sm">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase block mb-2">
          JOIN LA TAGLIA INSIDER
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-ink mb-3">
          Be the first to hear about new discoveries
        </h3>
        <p className="text-sm text-ink-secondary leading-relaxed">
          Regional features, rare barrel releases and limited harvests directly
          from Italy. Create an account and receive{" "}
          <strong className="text-primary font-bold">10% off</strong> your first
          order.
        </p>
      </div>

      {submitted ? (
        <p className="text-center text-primary font-bold font-serif text-lg">
          Grazie! Welcome to La Taglia Insider.
        </p>
      ) : (
        <form
          className="space-y-4 max-w-lg mx-auto"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <input
                type="email"
                placeholder="Enter your email address"
                required
                className="w-full h-12 px-4 rounded bg-white border border-border-line text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
              />
            </div>
            <input
              type="text"
              placeholder="Zip code"
              className="w-full h-12 px-4 rounded bg-white border border-border-line text-sm focus:ring-1 focus:ring-primary focus:border-primary outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 py-2 text-xs text-ink-secondary">
            {interests.map((label) => (
              <label key={label} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  className="rounded text-primary focus:ring-primary h-4 w-4"
                />
                <span>{label}</span>
              </label>
            ))}
          </div>

          <button
            type="submit"
            className="w-full bg-gold hover:bg-gold-hover text-button-ink text-sm font-bold tracking-wider py-4 rounded uppercase transition-colors shadow"
          >
            SIGN UP &amp; SAVE 10%
          </button>
        </form>
      )}
    </div>
  );
}
