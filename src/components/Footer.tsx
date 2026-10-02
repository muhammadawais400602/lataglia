export default function Footer() {
  return (
    <footer className="mt-24 border-t border-brand-200 bg-brand-100/60">
      <div className="container-x py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display text-xl mb-2">La Taglia</div>
          <p className="text-brand-700">Hand-cut pasta. Honest ingredients. Open since 2019.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Visit</div>
          <p className="text-brand-700">42 Vicolo del Pane<br />Rome · Open Tue–Sun · 12–23</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Contact</div>
          <p className="text-brand-700">hello@lataglia.example<br />+39 06 1234 5678</p>
        </div>
      </div>
      <div className="container-x py-4 text-xs text-brand-700 border-t border-brand-200">
        © {new Date().getFullYear()} La Taglia · All rights reserved
      </div>
    </footer>
  );
}
