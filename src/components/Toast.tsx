import { useEffect, useRef, useState } from 'react';

export function useToast() {
  const [message, setMessage] = useState<string | null>(null);
  const timer = useRef<number>();
  useEffect(() => () => window.clearTimeout(timer.current), []);
  function show(text: string) {
    setMessage(text);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setMessage(null), 2400);
  }
  return { message, show };
}

export function Toast({ message }: { message: string | null }) {
  return (
    <div
      role="status"
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 pointer-events-none flex items-center gap-3 px-6 py-3.5 rounded-full bg-surface-container-lowest text-on-surface shadow-xl ${message ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0'}`}
    >
      <span className="material-symbols-outlined text-pistachio-light text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
      <span className="font-button text-button font-semibold">{message}</span>
    </div>
  );
}
