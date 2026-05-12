import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <p className="text-uppercase small text-muted" style={{ letterSpacing: "0.25em" }}>
              Tentang Kami
            </p>
            <h1 className="display-4 fw-bold mb-3">Cerita di Balik di-jam-in</h1>
            <p className="lead text-muted">
              Kita bikin di-jam-in karena percaya: jam tangan yang tepat bisa ngubah cara kamu tampil dan ngerasain waktu.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold">Kurasi Jujur</h3>
                <p className="text-muted mb-0">
                  Yang masuk koleksi cuma yang emang layak. Nggak ada gimmick, nggak ada paid placement.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold">Cerita yang Hidup</h3>
                <p className="text-muted mb-0">
                  Setiap jam punya cerita. Kita tulis biar kamu nggak cuma beli produk — tapi juga ngerti kenapa dia spesial.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-0 shadow-sm h-100">
              <div className="card-body p-4">
                <h3 className="h5 fw-bold">Komunitas Hangat</h3>
                <p className="text-muted mb-0">
                  Kita bukan toko biasa. Kita tempat ngumpul buat siapa aja yang sayang sama dunia horologi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
