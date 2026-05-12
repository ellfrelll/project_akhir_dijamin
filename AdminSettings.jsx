// === PAGE: Settings ===
// atur profil admin + toggle dark mode
import { useEffect, useState } from "react";

export default function AdminSettings() {
  const [dark, setDark] = useState(
    typeof window !== "undefined" && localStorage.getItem("dj-admin-theme") === "dark"
  );
  const [name, setName] = useState("Admin di-jam-in");
  const [email, setEmail] = useState("admin@di-jam-in.id");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dj-admin-dark", dark);
    localStorage.setItem("dj-admin-theme", dark ? "dark" : "light");
  }, [dark]);

  const onSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 1800);
  };

  return (
    <div className="dj-fade-in">
      <div className="row g-3">
        <div className="col-12 col-lg-7">
          <div className="dj-panel">
            <div className="dj-panel-title mb-1">Profil Admin</div>
            <div className="dj-panel-sub mb-4">Atur informasi akun kamu</div>
            <form onSubmit={onSave} className="d-grid gap-3">
              <div>
                <label className="form-label small fw-semibold">Nama</label>
                <input className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label className="form-label small fw-semibold">Email</label>
                <input className="form-control" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="d-flex align-items-center gap-2">
                <button className="btn btn-dark px-4" type="submit">Simpan</button>
                {saved && <span className="text-success small dj-fade-in">✓ Tersimpan</span>}
              </div>
            </form>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <div className="dj-panel">
            <div className="dj-panel-title mb-1">Tampilan</div>
            <div className="dj-panel-sub mb-4">Mode terang atau gelap</div>
            <div className="d-flex align-items-center justify-content-between p-3 rounded dj-toggle-row">
              <div>
                <div className="fw-semibold">Dark Mode</div>
                <div className="small text-muted">Aktifkan tema gelap untuk panel admin</div>
              </div>
              <label className="dj-switch">
                <input type="checkbox" checked={dark} onChange={(e) => setDark(e.target.checked)} />
                <span />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
