import { useState } from "react";
import { brands, watches } from "../data/watches.js";
import WatchCard from "../components/WatchCard.jsx";

export default function Brands() {
  const [active, setActive] = useState(brands[0].name);
  const filtered = watches.filter((w) => w.brand === active);

  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small text-muted" style={{ letterSpacing: "0.25em" }}>
            Brand Mewah Dunia
          </p>
          <h1 className="display-4 fw-bold">Pilih Brand Favoritmu</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
            Lima nama besar horologi dunia. Klik salah satunya buat lihat koleksi yang tersedia.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          {brands.map((b) => (
            <button
              key={b.slug}
              onClick={() => setActive(b.name)}
              className={`btn ${active === b.name ? "btn-dark" : "btn-outline-dark"}`}
            >
              {b.name}
            </button>
          ))}
        </div>

        {brands
          .filter((b) => b.name === active)
          .map((b) => (
            <div key={b.slug} className="card border-0 bg-light p-4 p-md-5 mb-5">
              <div className="d-flex align-items-center gap-4 flex-wrap">
                <div className="dijamin-monogram-lg">{b.monogram}</div>
                <div>
                  <h2 className="fw-bold mb-1">{b.name}</h2>
                  <p className="text-muted small mb-2">{b.accent}</p>
                  <p className="mb-0">{b.blurb}</p>
                </div>
              </div>
            </div>
          ))}

        <div className="row g-4">
          {filtered.map((w) => (
            <div className="col-12 col-sm-6 col-lg-4" key={w.id}>
              <WatchCard watch={w} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
