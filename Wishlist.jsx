import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { watches } from "../data/watches.js";
import WatchCard from "../components/WatchCard.jsx";

const KEY = "dijamin-wishlist";

export function useWishlist() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || "[]");
      setIds(saved);
    } catch {
      setIds([]);
    }
  }, []);

  const toggle = (id) => {
    setIds((prev) => {
      const next = prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id];
      localStorage.setItem(KEY, JSON.stringify(next));
      return next;
    });
  };

  const has = (id) => ids.includes(id);
  return { ids, toggle, has };
}

export default function Wishlist() {
  const { ids } = useWishlist();
  const list = watches.filter((w) => ids.includes(w.id));

  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <div className="text-center mb-5">
          <p className="text-uppercase small text-muted" style={{ letterSpacing: "0.25em" }}>
            Wishlist Kamu
          </p>
          <h1 className="display-4 fw-bold">Jam Tangan Idamanmu</h1>
          <p className="text-muted">
            Semua jam yang udah kamu tandain ada di sini. Tinggal pilih mana yang mau dibawa pulang. 😉
          </p>
        </div>

        {list.length === 0 ? (
          <div className="text-center py-5">
            <p className="text-muted mb-4">Wishlist kamu masih kosong nih.</p>
            <Link to="/collections" className="btn btn-dark btn-lg">
              Mulai Jelajah Koleksi
            </Link>
          </div>
        ) : (
          <div className="row g-4">
            {list.map((w) => (
              <div className="col-12 col-sm-6 col-lg-4" key={w.id}>
                <WatchCard watch={w} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
