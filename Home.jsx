import { Link } from "react-router-dom";
import { watches, brands } from "../data/watches.js";
import WatchCard from "../components/WatchCard.jsx";

export default function Home() {
  const featured = watches.slice(0, 6);
  const editorialPick = watches[2] || watches[0];

  const scrollToFeatured = () => {
    document.getElementById("featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* HERO */}
      <section className="dijamin-hero d-flex align-items-center">
        <div className="container text-center text-white py-5 position-relative" style={{ zIndex: 2 }}>
          <p className="eyebrow mb-3" style={{ color: "rgba(255,255,255,0.7)" }}>
            di-jam-in · sejak 2025
          </p>
          <h1 className="display-1 fw-normal mb-4" style={{ lineHeight: 1.05 }}>
            Timeless Luxury,<br />
            <em style={{ color: "var(--dj-gold-soft)" }}>di-jam-in.</em>
          </h1>
          <p className="mx-auto mb-5" style={{ maxWidth: 580, color: "rgba(255,255,255,0.82)", fontSize: "1.1rem" }}>
            Kurasi jam tangan mewah dari brand legendaris dunia. Pilih yang paling kamu banget — tanpa ribet, tanpa drama.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <button onClick={scrollToFeatured} className="btn btn-light btn-lg px-4">
              Jelajahi Koleksi
            </button>
            <Link to="/brands" className="btn btn-outline-light btn-lg px-4">
              Lihat Brand
            </Link>
          </div>
        </div>
      </section>

      {/* BRAND SHOWCASE */}
      <section className="dj-section-sm">
        <div className="container">
          <div className="text-center mb-5">
            <p className="eyebrow mb-3">Maison Pilihan</p>
            <h2 className="display-5 mb-2">Lima Nama, Satu Standar</h2>
          </div>
          <div className="row g-4 justify-content-center align-items-stretch">
            {brands.map((b) => (
              <div className="col-6 col-md-4 col-lg-2" key={b.slug}>
                <Link to="/brands" className="text-decoration-none">
                  <div className="dijamin-brand-pill text-center p-4 h-100">
                    <div className="dijamin-monogram mb-2">{b.monogram}</div>
                    <div className="fw-semibold" style={{ color: "var(--dj-ink)" }}>{b.name}</div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="dj-divider container" />

      {/* PRODUCT HIGHLIGHT */}
      <section id="featured" className="dj-section">
        <div className="container">
          <div className="d-flex justify-content-between align-items-end flex-wrap mb-5 gap-3">
            <div>
              <p className="eyebrow mb-2">Pilihan Editor</p>
              <h2 className="display-4 mb-0">Lagi Hits<br />di di-jam-in</h2>
            </div>
            <p className="text-muted mb-0" style={{ maxWidth: 380 }}>
              Enam jam tangan yang lagi paling banyak dilirik. Dari yang klasik sampai yang sporty —
              ada buat semua selera.
            </p>
          </div>
          <div className="row g-4">
            {featured.map((w) => (
              <div className="col-12 col-sm-6 col-lg-4" key={w.id}>
                <WatchCard watch={w} />
              </div>
            ))}
          </div>
          <div className="text-center mt-5 pt-3">
            <Link to="/collections" className="btn btn-dark btn-lg px-4">
              Lihat Semua Koleksi
            </Link>
          </div>
        </div>
      </section>

      {/* EDITORIAL */}
      <section className="dj-editorial dj-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="dijamin-detail-img-wrap" style={{ background: "linear-gradient(160deg, #efe7d7, #d8c8a8)" }}>
                <img src={editorialPick.image} alt={editorialPick.name} className="dijamin-detail-img" />
              </div>
            </div>
            <div className="col-lg-6">
              <p className="eyebrow mb-3">Editorial</p>
              <h2 className="display-4 mb-4">Bukan sekadar penunjuk waktu.</h2>
              <p className="dj-quote mb-4">
                “Jam yang tepat itu kayak partner — diem-diem nemenin kamu di setiap momen penting,
                tanpa harus banyak omong.”
              </p>
              <p className="mb-4">
                Setiap mahakarya yang kita pilih punya cerita: dari workshop kecil di pegunungan Swiss,
                sampai jadi simbol pencapaian di pergelangan kamu. Itu sebabnya kita kurasi pelan-pelan,
                bukan asal banyak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
