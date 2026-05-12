// === PAGE: Dashboard ===
// ringkasan platform review jam — bukan toko
import { useEffect, useState } from "react";
import { Watch, Users, Star, MessageSquare, Mail } from "lucide-react";
import { FAKE_REVIEWS } from "../../data/fakeReviews.js";
import {
  ResponsiveContainer, AreaChart, Area,
  XAxis, YAxis, Tooltip, CartesianGrid,
} from "recharts";
import StatCard from "../components/StatCard.jsx";
import { watches, brands } from "../../data/watches.js";

const REVIEWS_KEY = "dj-user-reviews";
const MSG_KEY = "dj-messages";

function initFakeReviews() {
  // Inject fake reviews to localStorage on first load
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    const existing = raw ? JSON.parse(raw) : [];
    const fakeIds = new Set(FAKE_REVIEWS.map((r) => r.id));
    const userOnly = existing.filter((r) => !fakeIds.has(r.id) && !r.id.startsWith("s"));
    const merged = [...userOnly, ...FAKE_REVIEWS];
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(merged));
    return merged;
  } catch {
    return FAKE_REVIEWS;
  }
}

function loadReviews() {
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    return raw ? JSON.parse(raw) : FAKE_REVIEWS;
  } catch { return FAKE_REVIEWS; }
}

function loadMessages() {
  try {
    const raw = localStorage.getItem(MSG_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// trafik kunjungan halaman review mingguan
const chartData = [
  { day: "Sen", kunjungan: 180, ulasan: 8 },
  { day: "Sel", kunjungan: 260, ulasan: 14 },
  { day: "Rab", kunjungan: 240, ulasan: 11 },
  { day: "Kam", kunjungan: 390, ulasan: 21 },
  { day: "Jum", kunjungan: 470, ulasan: 27 },
  { day: "Sab", kunjungan: 580, ulasan: 35 },
  { day: "Min", kunjungan: 520, ulasan: 30 },
];

const starLabel = (s) => ["", "Sangat Buruk", "Buruk", "Cukup", "Bagus", "Sangat Bagus"][s] || "-";

export default function AdminDashboard() {
  const [loading, setLoading] = useState(true);
  const [reviews, setReviews] = useState([]);
  const [msgCount, setMsgCount] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => {
      const allReviews = initFakeReviews();
      setReviews(allReviews);
      setMsgCount(loadMessages().length);
      setLoading(false);
    }, 350);
    return () => clearTimeout(t);
  }, []);

  const avgScore = reviews.length
    ? (reviews.reduce((a, r) => a + r.score, 0) / reviews.length).toFixed(1)
    : "—";

  const recentReviews = [...reviews].reverse().slice(0, 5);

  if (loading) {
    return <div className="dj-admin-loading"><div className="dj-spinner" /></div>;
  }

  return (
    <div className="dj-fade-in">

      {/* === SECTION: Stat Cards — review site metrics === */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-sm-6 col-xl-3">
          <StatCard icon={Watch} label="Total Jam Diulas" value={watches.length} delta={2} tone="gold" />
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <StatCard icon={Users} label="Pengunjung (7h)" value="2.841" delta={11} tone="brown" />
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <StatCard icon={Star} label="Total Ulasan" value={reviews.length} delta={5} tone="ink" />
        </div>
        <div className="col-12 col-sm-6 col-xl-3">
          <StatCard icon={Mail} label="Pesan Masuk" value={msgCount || 5} tone="gold" />
        </div>
      </div>

      {/* === SECTION: Chart + Brand === */}
      <div className="row g-3 mb-4">
        <div className="col-12 col-xl-8">
          <div className="dj-panel h-100">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <div className="dj-panel-title">Aktivitas Mingguan</div>
                <div className="dj-panel-sub">Kunjungan & ulasan masuk 7 hari terakhir</div>
              </div>
            </div>
            <div style={{ width: "100%", height: 260 }}>
              <ResponsiveContainer>
                <AreaChart data={chartData} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="djVisits" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#b8924f" stopOpacity={0.45} />
                      <stop offset="100%" stopColor="#b8924f" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="djReviews" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3a2a1f" stopOpacity={0.35} />
                      <stop offset="100%" stopColor="#3a2a1f" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.06)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={{ borderRadius: 8, border: "1px solid rgba(0,0,0,0.08)", fontSize: 12 }} />
                  <Area type="monotone" dataKey="kunjungan" stroke="#b8924f" fill="url(#djVisits)" strokeWidth={2} name="Kunjungan" />
                  <Area type="monotone" dataKey="ulasan" stroke="#3a2a1f" fill="url(#djReviews)" strokeWidth={2} name="Ulasan" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="col-12 col-xl-4">
          <div className="dj-panel h-100">
            <div className="dj-panel-title mb-3">Brand Diulas</div>
            <ul className="list-unstyled mb-0">
              {brands.map((b) => {
                const count = watches.filter(w => w.brand === b.name).length;
                return (
                  <li key={b.slug} className="d-flex align-items-center gap-3 py-2 border-bottom dj-row-hover">
                    <span className="dj-brand-mini">{b.monogram}</span>
                    <div className="flex-grow-1">
                      <div className="fw-semibold">{b.name}</div>
                      <div className="small text-muted">{count} jam · {b.accent}</div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* === SECTION: Recent User Reviews === */}
      <div className="dj-panel">
        <div className="dj-panel-title mb-1">Ulasan Pengguna Terbaru</div>
        <div className="dj-panel-sub mb-3">Rating yang dikirim langsung dari halaman detail jam</div>

        {recentReviews.length === 0 ? (
          <div className="dj-empty-state">
            <Star size={40} strokeWidth={1.2} />
            <div className="dj-empty-title">Belum ada ulasan</div>
            <div className="dj-empty-sub">Ulasan dari pengguna akan muncul di sini setelah mereka rating jam di halaman detail.</div>
          </div>
        ) : (
          <div className="dj-review-admin-list">
            {recentReviews.map((r, i) => (
              <div key={i} className="dj-review-admin-row">
                <div className="dj-review-admin-meta">
                  <span className="dj-review-admin-name">{r.name || "Anonim"}</span>
                  <span className="dj-review-admin-watch">{r.watchName}</span>
                </div>
                <div className="dj-review-admin-stars">
                  {"★".repeat(r.score)}{"☆".repeat(5 - r.score)}
                  <span className="dj-review-admin-label">{starLabel(r.score)}</span>
                </div>
                {r.comment && <div className="dj-review-admin-comment">"{r.comment}"</div>}
                <div className="dj-review-admin-time">{r.time}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
