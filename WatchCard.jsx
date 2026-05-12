import { Link } from "react-router-dom";

function Stars({ rating }) {
  return (
    <span className="text-warning small" aria-label={`Rating ${rating}/5`}>
      {"★".repeat(rating)}
      <span className="text-muted">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default function WatchCard({ watch }) {
  return (
    <div className="card dijamin-card h-100 border-0 shadow-sm">
      <div className="dijamin-card-img-wrap">
        <img src={watch.image} alt={watch.name} className="dijamin-card-img" loading="lazy" />
        <span className="badge bg-dark dijamin-card-label">{watch.label}</span>
      </div>
      <div className="card-body d-flex flex-column">
        <div className="text-uppercase small text-muted mb-1" style={{ letterSpacing: "0.08em" }}>
          {watch.brand}
        </div>
        <h5 className="card-title mb-1">{watch.name}</h5>
        <p className="text-muted small mb-2 fst-italic">{watch.tagline}</p>
        <div className="d-flex align-items-center gap-2 mb-3">
          <Stars rating={watch.rating} />
          <span className="small text-muted">{watch.score.toFixed(2)}/5</span>
        </div>
        <Link to={`/watch/${watch.id}`} className="btn btn-outline-dark mt-auto">
          Lihat Detail
        </Link>
      </div>
    </div>
  );
}
