// === PAGE: Login ===
// halaman login admin — simple, satu form aja
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../auth.js";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // === SECTION: Login Logic ===
  // ngecek email & password, kalau bener masuk dashboard
  const onSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (login(email, password)) {
        navigate("/admin");
      } else {
        setError("Email atau password salah. Coba lagi ya.");
        setLoading(false);
      }
    }, 350); // smooth transition dikit
  };

  return (
    <div className="dj-login-wrap dj-fade-in">
      <div className="dj-login-card">
        <Link to="/" className="dj-login-brand">
          <span className="brand-dot">●</span> di-jam-in
        </Link>
        <h1 className="dj-login-title">Masuk Admin</h1>
        <p className="dj-login-sub">Login dulu buat akses dashboard.</p>

        <form onSubmit={onSubmit} className="mt-3">
          <div className="mb-3">
            <label className="form-label small fw-semibold">Email</label>
            <input
              type="email"
              className="form-control"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <label className="form-label small fw-semibold">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="dj-login-error">{error}</div>}

          <button type="submit" className="btn btn-dijamin w-100 mt-2" disabled={loading}>
            {loading ? "Memuat..." : "Masuk"}
          </button>

          <div className="dj-login-hint mt-3">
            <strong>Demo:</strong> admin@gmail.com / admin123
          </div>
        </form>
      </div>
    </div>
  );
}
