// === COMPONENT: StatCard ===
// kartu ringkasan reusable — tinggal kasih icon, label, value, delta
export default function StatCard({ icon: Icon, label, value, delta, tone = "gold" }) {
  return (
    <div className="dj-stat-card h-100">
      <div className="d-flex align-items-start justify-content-between">
        <div>
          <div className="dj-stat-label">{label}</div>
          <div className="dj-stat-value">{value}</div>
          {delta != null && (
            <div className={`dj-stat-delta ${delta >= 0 ? "up" : "down"}`}>
              {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%{" "}
              <span className="text-muted">vs minggu lalu</span>
            </div>
          )}
        </div>
        {Icon && (
          <span className={`dj-stat-icon dj-tone-${tone}`}>
            <Icon size={20} />
          </span>
        )}
      </div>
    </div>
  );
}
