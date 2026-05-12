import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWatch, watches } from "../data/watches.js";
import { useWishlist } from "./Wishlist.jsx";
import WatchCard from "../components/WatchCard.jsx";
import { ThumbsUp, Star } from "lucide-react";

const REVIEWS_KEY = "dj-user-reviews";

function loadReviews(watchId) {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : [];
    return all.filter(r => r.watchId === watchId);
  } catch { return []; }
}

function saveReview(review) {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    const all = raw ? JSON.parse(raw) : [];
    all.push(review);
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(all));
  } catch {}
}

function nowTime() {
  return new Date().toLocaleString("id-ID", {
    year: "numeric", month: "2-digit", day: "2-digit",
    hour: "2-digit", minute: "2-digit",
  }).replace(",", "");
}

const STAR_LABELS = ["", "Sangat Buruk", "Buruk", "Cukup", "Bagus", "Sangat Bagus"];

// === SECTION: Quick Rating — pre-filled dari score watch ===
function QuickRating({ watch, onSubmit }) {
  // pre-fill ke score terdekat dari watch.score
  const defaultScore = Math.round(watch.score);
  const [score, setScore] = useState(defaultScore);
  const [hovered, setHovered] = useState(0);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = {
      id: `u${Date.now()}`,
      watchId: watch.id,
      watchName: watch.name,
      score,
      name: name.trim() || "Anonim",
      comment: comment.trim(),
      time: nowTime(),
      likes: 0,
      read: false,
    };
    saveReview(review);
    setDone(true);
    onSubmit(review);
  };

  if (done) {
    return (
      <div className="dj-review-success">
        <span className="dj-review-success-icon">✓</span>
        <div>
          <div className="dj-review-success-title">Makasih udah kasih pendapat!</div>
          <div className="dj-review-success-sub">{"★".repeat(score)} · {STAR_LABELS[score]}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="dj-quick-rating-wrap">
      {/* Rating bintang — langsung kelihatan, pre-filled */}
      <div className="dj-qr-label">Rating kamu untuk jam ini:</div>
      <div className="dj-qr-stars-row">
        {[1,2,3,4,5].map(n => (
          <button
            key={n}
            type="button"
            className={"dj-star-btn" + (n <= (hovered || score) ? " active" : "")}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setScore(n)}
          >★</button>
        ))}
        <span className="dj-qr-score-text">{STAR_LABELS[hovered || score]}</span>
      </div>

      {/* Toggle form detail */}
      {!open ? (
        <button className="dj-btn dj-btn-ghost dj-btn-sm dj-qr-detail-btn" onClick={() => setOpen(true)}>
          + Tambah komentar (opsional)
        </button>
      ) : (
        <div className="dj-qr-detail-form">
          <input
            type="text"
            className="dj-form-input"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Nama kamu (opsional)"
            maxLength={50}
          />
          <textarea
            className="dj-form-input"
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Ceritain pendapat kamu singkat..."
            rows={2}
            maxLength={200}
          />
        </div>
      )}

      <button
        className="dj-btn dj-btn-primary"
        onClick={handleSubmit}
        style={{ marginTop: "0.75rem" }}
      >
        <Star size={14} /> Kirim Ulasan
      </button>
    </div>
  );
}

// === SECTION: Review List with Like ===
function ReviewItem({ r }) {
  const [likes, setLikes] = useState(r.likes || 0);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) return;
    setLikes(l => l + 1);
    setLiked(true);
  };

  return (
    <div className="dj-review-item">
      <div className="dj-review-header">
        <div className="dj-review-avatar">{(r.name || "A")[0].toUpperCase()}</div>
        <div>
          <div className="dj-review-name">{r.name}</div>
          <div className="dj-review-stars">
            <span style={{ color: "#c8a040" }}>{"★".repeat(r.score)}</span>
            <span style={{ color: "#ccc" }}>{"★".repeat(5 - r.score)}</span>
            <span style={{ fontSize: "0.72rem", color: "#9a8a78", marginLeft: 6 }}>{STAR_LABELS[r.score]}</span>
          </div>
        </div>
        <div className="dj-review-time ms-auto">{r.time}</div>
      </div>
      {r.comment && <div className="dj-review-comment">"{r.comment}"</div>}
      <button
        className={"dj-like-btn" + (liked ? " liked" : "")}
        onClick={handleLike}
        disabled={liked}
      >
        <ThumbsUp size={13} />
        <span>{liked ? "Setuju!" : "Setuju"}</span>
        {likes > 0 && <span className="dj-like-count">{likes}</span>}
      </button>
    </div>
  );
}

export default function WatchDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const watch = getWatch(id);
  const { has, toggle } = useWishlist();
  const [reviews, setReviews] = useState([]);
  const [hasRated, setHasRated] = useState(false);

  useEffect(() => {
    if (watch) setReviews(loadReviews(watch.id));
  }, [watch?.id]);

  if (!watch) {
    return (
      <div className="dijamin-page-top">
        <div className="container py-5 text-center">
          <h2 className="fw-bold">Jamnya nggak ketemu 😅</h2>
          <p className="text-muted">Mungkin udah pindah atau salah link.</p>
          <Link to="/collections" className="btn btn-dark mt-3">Balik ke Koleksi</Link>
        </div>
      </div>
    );
  }

  const related = watches.filter(w => w.brand === watch.brand && w.id !== watch.id).slice(0, 3);
  const inWish = has(watch.id);

  const allScores = reviews.map(r => r.score);
  const liveAvg = allScores.length
    ? ((watch.score * 10 + allScores.reduce((a, b) => a + b, 0)) / (10 + allScores.length)).toFixed(1)
    : watch.score.toFixed(1);

  const onNewReview = (review) => {
    setReviews(prev => [...prev, review]);
    setHasRated(true);
  };

  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <button onClick={() => navigate(-1)} className="btn btn-link text-dark p-0 mb-4">← Balik</button>

        <div className="row g-5 align-items-start">
          <div className="col-lg-6">
            <div className="dijamin-detail-img-wrap">
              <img src={watch.image} alt={watch.name} className="dijamin-detail-img" />
            </div>
          </div>

          <div className="col-lg-6">
            <span className="badge bg-dark mb-3">{watch.label}</span>
            <p className="text-uppercase small text-muted mb-1" style={{ letterSpacing: "0.2em" }}>
              {watch.brand} · {watch.collection}
            </p>
            <h1 className="display-5 fw-bold mb-2">{watch.name}</h1>
            <p className="lead fst-italic text-muted mb-3">{watch.tagline}</p>

            {/* Live rating display */}
            <div className="dj-rating-display mb-4">
              <span className="dj-rating-stars-big">{"★".repeat(Math.round(Number(liveAvg)))}</span>
              <span className="dj-rating-score">{liveAvg}</span>
              <span className="dj-rating-detail">/ 5 · {reviews.length > 0 ? `${reviews.length} ulasan` : "Belum ada ulasan pengguna"}</span>
            </div>

            <p className="mb-4">{watch.description}</p>

            <h5 className="fw-bold mb-3">Spesifikasi</h5>
            <div className="row g-2 mb-4">
              {watch.specs.map(s => (
                <div className="col-sm-6" key={s.label}>
                  <div className="border rounded p-3 h-100">
                    <div className="text-uppercase small text-muted" style={{ letterSpacing: "0.1em" }}>{s.label}</div>
                    <div className="fw-semibold">{s.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="d-flex gap-2 flex-wrap mb-4">
              <button
                onClick={() => toggle(watch.id)}
                className={`dj-btn ${inWish ? "dj-btn-danger" : "dj-btn-outline"}`}
              >
                {inWish ? "♥ Disimpan" : "♡ Simpan ke Wishlist"}
              </button>
            </div>

            {/* === SECTION: Quick Rating — langsung di sini === */}
            {!hasRated ? (
              <QuickRating watch={watch} onSubmit={onNewReview} />
            ) : (
              <div className="dj-review-success" style={{ marginTop: 0 }}>
                <span className="dj-review-success-icon">✓</span>
                <div>
                  <div className="dj-review-success-title">Ulasan kamu sudah tersimpan!</div>
                  <div className="dj-review-success-sub">Makasih udah berkontribusi ke komunitas 🙏</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* === SECTION: Community Reviews === */}
        <div className="mt-5 pt-3">
          <div className="d-flex align-items-baseline gap-3 mb-4">
            <h3 className="fw-bold mb-0">Ulasan Komunitas</h3>
            <span className="text-muted small">{reviews.length} ulasan</span>
          </div>

          {reviews.length === 0 ? (
            <div className="dj-review-empty">
              Belum ada ulasan. Jadi yang pertama kasih pendapat! 👆
            </div>
          ) : (
            <div className="dj-review-list">
              {[...reviews].reverse().map((r, i) => (
                <ReviewItem key={r.id || i} r={r} />
              ))}
            </div>
          )}
        </div>

        {related.length > 0 && (
          <div className="mt-5 pt-5">
            <h3 className="fw-bold mb-4">Dari brand yang sama</h3>
            <div className="row g-4">
              {related.map(w => (
                <div className="col-12 col-sm-6 col-lg-4" key={w.id}>
                  <WatchCard watch={w} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
