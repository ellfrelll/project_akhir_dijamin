import { useState } from "react";
import { watches } from "../data/watches.js";
import WatchCard from "../components/WatchCard.jsx";

const collections = ["Semua", "Klasik", "Sport", "Modern"];

export default function Collections() {
  const [filter, setFilter] = useState("Semua");
  const list = filter === "Semua" ? watches : watches.filter((w) => w.collection === filter);

  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small text-muted" style={{ letterSpacing: "0.25em" }}>
            Koleksi Lengkap
          </p>
          <h1 className="display-4 fw-bold">Cari yang Pas Buat Kamu</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: 600 }}>
            Mau yang klasik, sporty, atau modern? Pilih kategorinya, biar makin gampang nemuin yang cocok.
          </p>
        </div>

        <div className="d-flex flex-wrap gap-2 justify-content-center mb-5">
          {collections.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`btn ${filter === c ? "btn-dark" : "btn-outline-dark"}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="row g-4">
          {list.map((w) => (
            <div className="col-12 col-sm-6 col-lg-4" key={w.id}>
              <WatchCard watch={w} />
            </div>
          ))}
        </div>

        {list.length === 0 && (
          <div className="text-center text-muted py-5">Belum ada produk di kategori ini.</div>
        )}
      </div>
    </div>
  );
}
