import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="dijamin-page-top">
      <div className="container py-5 text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <h2 className="fw-bold mb-3">Halamannya nggak ketemu</h2>
        <p className="text-muted mb-4">Mungkin udah pindah atau salah ketik URL.</p>
        <Link to="/" className="btn btn-dark btn-lg">Balik ke Beranda</Link>
      </div>
    </div>
  );
}
