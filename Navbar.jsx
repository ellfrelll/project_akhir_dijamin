import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Halaman dengan hero gelap → navbar transparan + teks terang di top.
  // Halaman lain → langsung pakai background terang + teks gelap.
  const darkHeroPages = ["/"];
  const onDarkHero = darkHeroPages.includes(location.pathname);

  const navClass = `navbar navbar-expand-lg fixed-top dijamin-navbar ${
    scrolled || !onDarkHero ? "is-solid" : "is-transparent"
  }`;

  return (
    <nav className={navClass}>
      <div className="container">
        <Link className="navbar-brand fw-bold dijamin-brand" to="/">
          <span className="brand-dot">●</span> di-jam-in
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
            {[
              { to: "/", label: "Beranda" },
              { to: "/brands", label: "Brand" },
              { to: "/collections", label: "Koleksi" },
              { to: "/about", label: "Tentang" },
              { to: "/contact", label: "Kontak" },
            ].map((l) => (
              <li className="nav-item" key={l.to}>
                <NavLink
                  end={l.to === "/"}
                  to={l.to}
                  className={({ isActive }) =>
                    "nav-link dijamin-link" + (isActive ? " active" : "")
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <Link className="btn btn-dijamin ms-lg-3" to="/wishlist">
                ♥ Wishlist
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
