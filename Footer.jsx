import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="dijamin-footer">
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-4">
            <div className="footer-brand mb-3">
              <span style={{ color: "var(--dj-gold)" }}>●</span> di-jam-in
            </div>
            <p className="footer-tagline mb-4">
              Tempatnya jam tangan mewah pilihan. Kurasi kita selalu jujur — yang masuk sini
              emang layak jadi penemen waktu kamu.
            </p>
            <div>
              <a href="#" className="footer-social" aria-label="Instagram">IG</a>
              <a href="#" className="footer-social" aria-label="Twitter">X</a>
              <a href="#" className="footer-social" aria-label="Facebook">FB</a>
              <a href="#" className="footer-social" aria-label="YouTube">YT</a>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg-2 offset-lg-1">
            <h6 className="footer-title">Jelajahi</h6>
            <ul className="list-unstyled mb-0">
              <li><Link className="footer-link" to="/">Beranda</Link></li>
              <li><Link className="footer-link" to="/collections">Koleksi</Link></li>
              <li><Link className="footer-link" to="/wishlist">Wishlist</Link></li>
              <li><Link className="footer-link" to="/about">Tentang</Link></li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg-2">
            <h6 className="footer-title">Brand</h6>
            <ul className="list-unstyled mb-0">
              <li><Link className="footer-link" to="/brands">Rolex</Link></li>
              <li><Link className="footer-link" to="/brands">Omega</Link></li>
              <li><Link className="footer-link" to="/brands">Patek Philippe</Link></li>
              <li><Link className="footer-link" to="/brands">Audemars Piguet</Link></li>
              <li><Link className="footer-link" to="/brands">TAG Heuer</Link></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <h6 className="footer-title">Kontak</h6>
            <ul className="list-unstyled mb-0">
              <li className="footer-text mb-2">halo@di-jam-in.id</li>
              <li className="footer-text mb-2">+62 812 3456 7890</li>
              <li className="footer-text mb-3">Jawa-Tengah, Indonesia</li>
              <li><Link className="footer-link" to="/contact">Kirim pesan →</Link></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="d-flex justify-content-between flex-wrap gap-2 footer-bottom">
          <span>© {new Date().getFullYear()} di-jam-in. Semua hak dilindungi.</span>
        </div>
      </div>
    </footer>
  );
}
