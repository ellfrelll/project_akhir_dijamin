// === PAGE: Admin Messages + Ulasan Komunitas ===
import { useEffect, useState, useCallback } from "react";
import { Trash2, RefreshCw, Mail, MailOpen, Inbox, Star, ThumbsUp, MessageSquare } from "lucide-react";
import { FAKE_REVIEWS } from "../../data/fakeReviews.js";

const MSG_KEY = "dj-messages";
const REVIEWS_KEY = "dj-user-reviews";

// ── SEED pesan contact ────────────────────────────────────────────────────────
const SEED_MESSAGES = [
  { id: "seed-1", name: "Mr. Tono", email: "tono@gmail.com", message: "Halo, gue penasaran soal Rolex Submariner. Kalau mau beli jam ini, kira-kira gue bisa dapetin di mana ya? Ada rekomendasi dealer resminya?", time: "04/05/2026 10:32", read: true, type: "contact" },
  { id: "seed-2", name: "Mr. Agus", email: "agus.collector@yahoo.com", message: "Mau nanya, untuk Patek Philippe Nautilus itu authorized dealer terdekat di Jakarta di mana ya? Dan biasanya waiting list-nya berapa lama?", time: "04/05/2026 14:15", read: false, type: "contact" },
  { id: "seed-3", name: "Sintya", email: "sintya.w@outlook.com", message: "Kak, gue udah baca review AP Royal Oak di sini dan tertarik banget. Tapi belum tau mau mulai nyari info-nya dari mana. Ada saran nggak buat yang baru mau masuk dunia jam mewah?", time: "03/05/2026 09:48", read: false, type: "contact" },
  { id: "seed-4", name: "Toni", email: "toni.jkt@gmail.com", message: "Selamat sore, gue mau minta rekomendasi — antara Omega Speedmaster sama Seamaster mana yang lebih cocok buat first luxury watch? Udah baca reviewnya tapi masih bingung.", time: "02/05/2026 16:22", read: true, type: "contact" },
  { id: "seed-5", name: "Rigel", email: "rigel.id@gmail.com", message: "Bang, web ini informatif banget! Gue mau nanya, kalau mau mulai koleksi TAG Heuer dengan budget terbatas, seri mana yang paling worth it menurut review di sini?", time: "01/05/2026 11:05", read: true, type: "contact" },
];

// ── helpers messages ──────────────────────────────────────────────────────────
function loadMessages() {
  if (typeof window === "undefined") return SEED_MESSAGES;
  try {
    const raw = localStorage.getItem(MSG_KEY);
    const userMsgs = raw ? JSON.parse(raw) : [];
    const seedIds = new Set(SEED_MESSAGES.map((m) => m.id));
    return [...userMsgs.filter((m) => !seedIds.has(m.id)), ...SEED_MESSAGES];
  } catch { return SEED_MESSAGES; }
}
function saveUserMessages(items) {
  localStorage.setItem(MSG_KEY, JSON.stringify(items.filter((m) => !m.id.startsWith("seed-"))));
}

// ── helpers reviews ───────────────────────────────────────────────────────────
function initAndLoadReviews() {
  if (typeof window === "undefined") return FAKE_REVIEWS;
  try {
    const raw = localStorage.getItem(REVIEWS_KEY);
    const existing = raw ? JSON.parse(raw) : [];
    const fakeIds = new Set(FAKE_REVIEWS.map((r) => r.id));
    const userOnly = existing.filter((r) => !fakeIds.has(r.id));
    const merged = [...userOnly, ...FAKE_REVIEWS];
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(merged));
    return merged;
  } catch { return FAKE_REVIEWS; }
}
function saveUserReviews(items) {
  const fakeIds = new Set(FAKE_REVIEWS.map((r) => r.id));
  localStorage.setItem(REVIEWS_KEY, JSON.stringify(items.filter((r) => !fakeIds.has(r.id))));
}
const STARS = ["", "Sangat Buruk", "Buruk", "Cukup", "Bagus", "Sangat Bagus"];

// ── sub-components ────────────────────────────────────────────────────────────
function StarDisplay({ score }) {
  return (
    <span style={{ color: "#c8a040", fontSize: "0.88rem", letterSpacing: 1 }}>
      {"★".repeat(score)}{"☆".repeat(5 - score)}
    </span>
  );
}

function MessageCard({ msg, onDelete, onToggleRead }) {
  const initials = msg.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className={"dj-msg-card" + (msg.read ? " is-read" : " is-unread")}>
      <div className="dj-msg-card-avatar">{initials}</div>
      <div className="dj-msg-card-body">
        <div className="dj-msg-card-header">
          <div className="dj-msg-card-name">
            {msg.name}
            {!msg.read && <span className="dj-new-badge">Baru</span>}
            {msg.email && <span className="dj-msg-email">{msg.email}</span>}
          </div>
          <div className="dj-msg-card-time">{msg.time}</div>
        </div>
        <div className="dj-msg-card-text">{msg.message}</div>
      </div>
      <div className="dj-msg-card-actions">
        <button className={"dj-icon-btn" + (msg.read ? "" : " is-active")} onClick={() => onToggleRead(msg.id)} title={msg.read ? "Tandai belum dibaca" : "Tandai sudah dibaca"}>
          {msg.read ? <MailOpen size={14} /> : <Mail size={14} />}
        </button>
        <button className="dj-icon-btn dj-icon-btn-danger" onClick={() => onDelete(msg)} title="Hapus pesan">
          <Trash2 size={14} />
        </button>
      </div>
    </div>
  );
}

function ReviewCard({ r, onLike, onDelete, onToggleRead }) {
  const initials = r.name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();
  return (
    <div className={"dj-msg-card" + (r.read ? " is-read" : " is-unread")}>
      <div className="dj-msg-card-avatar">{initials}</div>
      <div className="dj-msg-card-body">
        <div className="dj-msg-card-header">
          <div className="dj-msg-card-name">
            {r.name}
            {!r.read && <span className="dj-new-badge">Baru</span>}
          </div>
          <div className="dj-msg-card-time">{r.time}</div>
        </div>
        <div className="dj-cf-watchrow">
          <span className="dj-cf-watchname">{r.watchName}</span>
          <StarDisplay score={r.score} />
          <span className="dj-cf-scorelabel">{STARS[r.score]}</span>
        </div>
        {r.comment && <div className="dj-msg-card-text" style={{ fontStyle: "italic" }}>"{r.comment}"</div>}
        <div className="dj-cf-likes"><ThumbsUp size={12} /><span>{r.likes} orang setuju</span></div>
      </div>
      <div className="dj-msg-card-actions">
        <button className="dj-icon-btn dj-icon-btn-like" onClick={() => onLike(r.id)} title="Setuju"><ThumbsUp size={14} /></button>
        <button className={"dj-icon-btn" + (r.read ? "" : " is-active")} onClick={() => onToggleRead(r.id)} title={r.read ? "Tandai belum dibaca" : "Tandai sudah dibaca"}><MessageSquare size={14} /></button>
        <button className="dj-icon-btn dj-icon-btn-danger" onClick={() => onDelete(r)} title="Hapus"><Trash2 size={14} /></button>
      </div>
    </div>
  );
}

// ── main ──────────────────────────────────────────────────────────────────────
export default function AdminMessages() {
  const [tab, setTab] = useState("pesan"); // "pesan" | "ulasan"

  // ── Messages state ──
  const [messages, setMessages] = useState(loadMessages);
  const [msgFilter, setMsgFilter] = useState("semua");
  const [msgPulse, setMsgPulse] = useState(false);

  // ── Reviews state ──
  const [reviews, setReviews] = useState(() => initAndLoadReviews());
  const [revFilter, setRevFilter] = useState("semua");
  const [revPulse, setRevPulse] = useState(false);

  // ── Polling realtime ──
  const refreshMessages = useCallback(() => {
    const fresh = loadMessages();
    setMessages((prev) => {
      if (fresh.length > prev.length) { setMsgPulse(true); setTimeout(() => setMsgPulse(false), 1500); }
      return fresh;
    });
  }, []);

  useEffect(() => {
    const iv = setInterval(refreshMessages, 2000);
    return () => clearInterval(iv);
  }, [refreshMessages]);

  useEffect(() => {
    const handler = () => refreshMessages();
    window.addEventListener("dj-messages-updated", handler);
    return () => window.removeEventListener("dj-messages-updated", handler);
  }, [refreshMessages]);

  // ── Message actions ──
  const onMsgDelete = (msg) => {
    if (confirm(`Hapus pesan dari ${msg.name}?`)) {
      setMessages((prev) => { const next = prev.filter((m) => m.id !== msg.id); saveUserMessages(next); return next; });
    }
  };
  const onMsgToggleRead = (id) => {
    setMessages((prev) => { const next = prev.map((m) => m.id === id ? { ...m, read: !m.read } : m); saveUserMessages(next); return next; });
  };
  const markAllMsgRead = () => {
    setMessages((prev) => { const next = prev.map((m) => ({ ...m, read: true })); saveUserMessages(next); return next; });
  };

  // ── Review actions ──
  const onRevLike = (id) => setReviews((prev) => prev.map((r) => r.id === id ? { ...r, likes: r.likes + 1 } : r));
  const onRevDelete = (r) => {
    if (confirm(`Hapus ulasan dari ${r.name}?`)) {
      setReviews((prev) => { const next = prev.filter((x) => x.id !== r.id); saveUserReviews(next); return next; });
    }
  };
  const onRevToggleRead = (id) => {
    setReviews((prev) => { const next = prev.map((r) => r.id === id ? { ...r, read: !r.read } : r); saveUserReviews(next); return next; });
  };
  const markAllRevRead = () => setReviews((prev) => prev.map((r) => ({ ...r, read: true })));

  // ── Counts ──
  const unreadMsg = messages.filter((m) => !m.read).length;
  const unreadRev = reviews.filter((r) => !r.read).length;
  const avgScore = reviews.length ? (reviews.reduce((a, r) => a + r.score, 0) / reviews.length).toFixed(1) : "—";

  const filteredMsg = messages.filter((m) => {
    if (msgFilter === "baru") return !m.read;
    if (msgFilter === "dibaca") return m.read;
    return true;
  });

  const filteredRev = reviews.filter((r) => {
    if (revFilter === "baru") return !r.read;
    if (revFilter === "bintang5") return r.score === 5;
    return true;
  });

  return (
    <div className="dj-fade-in">
      {/* Tab switcher */}
      <div className="dj-cf-filters mb-4" style={{ borderBottom: "1px solid rgba(0,0,0,0.08)", paddingBottom: "0" }}>
        <button
          className={"dj-cf-filter-btn" + (tab === "pesan" ? " active" : "")}
          onClick={() => setTab("pesan")}
          style={{ fontSize: "0.95rem", padding: "10px 20px" }}
        >
          <Mail size={14} style={{ marginRight: 6 }} />
          Pesan Masuk
          {unreadMsg > 0 && <span className="dj-new-badge" style={{ marginLeft: 6 }}>{unreadMsg}</span>}
        </button>
        <button
          className={"dj-cf-filter-btn" + (tab === "ulasan" ? " active" : "")}
          onClick={() => setTab("ulasan")}
          style={{ fontSize: "0.95rem", padding: "10px 20px" }}
        >
          <Star size={14} style={{ marginRight: 6 }} />
          Ulasan Komunitas
          {unreadRev > 0 && <span className="dj-new-badge" style={{ marginLeft: 6 }}>{unreadRev}</span>}
        </button>
      </div>

      {/* ── TAB: PESAN ── */}
      {tab === "pesan" && (
        <div className="dj-panel">
          <div className="dj-inbox-header">
            <div>
              <div className="dj-panel-title">
                Pesan Masuk
                {msgPulse && <span className="dj-live-dot" title="Pesan baru!" />}
              </div>
              <div className="dj-panel-sub">{messages.length} pesan &bull; {unreadMsg} belum dibaca</div>
            </div>
            <div className="dj-inbox-actions">
              {unreadMsg > 0 && (
                <button className="dj-btn dj-btn-ghost dj-btn-sm" onClick={markAllMsgRead}>
                  <MailOpen size={14} /> Baca Semua
                </button>
              )}
              <button className="dj-btn dj-btn-ghost dj-btn-sm" onClick={refreshMessages}><RefreshCw size={14} /></button>
            </div>
          </div>
          <div className="dj-live-bar">
            <span className="dj-live-pulse" />
            <span>Live — pesan dari form Contact langsung muncul di sini secara realtime</span>
          </div>
          <div className="dj-cf-filters">
            {[["semua", "Semua"], ["baru", "Belum Dibaca"], ["dibaca", "Sudah Dibaca"]].map(([val, label]) => (
              <button key={val} className={"dj-cf-filter-btn" + (msgFilter === val ? " active" : "")} onClick={() => setMsgFilter(val)}>{label}</button>
            ))}
          </div>
          {filteredMsg.length === 0 && (
            <div className="dj-empty-state">
              <Inbox size={42} strokeWidth={1.2} />
              <div className="dj-empty-title">Tidak ada pesan</div>
              <div className="dj-empty-sub">Pesan dari halaman Contact akan langsung muncul di sini.</div>
            </div>
          )}
          <div className="dj-msg-list">
            {filteredMsg.map((msg) => <MessageCard key={msg.id} msg={msg} onDelete={onMsgDelete} onToggleRead={onMsgToggleRead} />)}
          </div>
        </div>
      )}

      {/* ── TAB: ULASAN ── */}
      {tab === "ulasan" && (
        <div className="dj-panel">
          <div className="dj-inbox-header">
            <div>
              <div className="dj-panel-title">
                Ulasan Komunitas
                {revPulse && <span className="dj-live-dot" title="Ulasan baru!" />}
              </div>
              <div className="dj-panel-sub">
                {reviews.length} ulasan &bull; {unreadRev} belum dibaca &bull; avg ⭐ {avgScore}
              </div>
            </div>
            <div className="dj-inbox-actions">
              {unreadRev > 0 && (
                <button className="dj-btn dj-btn-ghost dj-btn-sm" onClick={markAllRevRead}>
                  <MessageSquare size={14} /> Baca Semua
                </button>
              )}
            </div>
          </div>
          <div className="dj-live-bar">
            <span className="dj-live-pulse" />
            <span>Live — ulasan dari halaman detail jam muncul otomatis</span>
          </div>
          <div className="dj-cf-filters">
            {[["semua", "Semua"], ["baru", "Belum Dibaca"], ["bintang5", "⭐ Bintang 5"]].map(([val, label]) => (
              <button key={val} className={"dj-cf-filter-btn" + (revFilter === val ? " active" : "")} onClick={() => setRevFilter(val)}>{label}</button>
            ))}
          </div>
          {filteredRev.length === 0 && (
            <div className="dj-empty-state">
              <Star size={42} strokeWidth={1.2} />
              <div className="dj-empty-title">Tidak ada ulasan</div>
              <div className="dj-empty-sub">Coba filter lain atau tunggu ulasan baru masuk.</div>
            </div>
          )}
          <div className="dj-msg-list">
            {filteredRev.map((r) => <ReviewCard key={r.id} r={r} onLike={onRevLike} onDelete={onRevDelete} onToggleRead={onRevToggleRead} />)}
          </div>
        </div>
      )}
    </div>
  );
}
