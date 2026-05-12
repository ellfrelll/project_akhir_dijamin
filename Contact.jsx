// === PAGE: Contact ===
// === SECTION: Real-time Message === // simulasi pesan masuk otomatis ke admin
import { useState } from "react";
import { Send, CheckCircle, Clock, MapPin, Phone } from "lucide-react";

const MSG_KEY = "dj-messages";

function saveMessage(name, email, message) {
  let msgs = [];
  try {
    const raw = localStorage.getItem(MSG_KEY);
    msgs = raw ? JSON.parse(raw) : [];
  } catch {
    msgs = [];
  }
  const newMsg = {
    id: `msg-${Date.now()}`,
    name,
    email,
    message,
    time: new Date().toLocaleString("id-ID", {
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit",
    }).replace(",", ""),
    read: false,
    type: "contact",
  };
  msgs.unshift(newMsg);
  localStorage.setItem(MSG_KEY, JSON.stringify(msgs));
  // Trigger storage event for cross-tab realtime
  window.dispatchEvent(new Event("dj-messages-updated"));
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      saveMessage(form.name, form.email, form.message);
      setSending(false);
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 5000);
    }, 600);
  };

  return (
    <div className="dijamin-page-top">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7 text-center mb-5">
            <p className="eyebrow mb-3">Kontak Kami</p>
            <h1 className="display-4 fw-bold">Ada yang Mau Ditanyain?</h1>
            <p className="text-muted mt-3">
              Tim kita selalu siap bantu. Tinggal isi form di bawah, kita bales secepatnya.
            </p>
          </div>
        </div>

        <div className="row justify-content-center g-4">
          <div className="col-lg-3 col-md-4">
            <div className="dj-contact-info-card">
              <div className="dj-contact-info-item">
                <div className="dj-contact-info-icon"><Clock size={18} /></div>
                <div>
                  <div className="dj-contact-info-label">Jam Operasional</div>
                  <div className="dj-contact-info-val">Sen–Sab, 10:00–20:00</div>
                </div>
              </div>
              <div className="dj-contact-info-item">
                <div className="dj-contact-info-icon"><MapPin size={18} /></div>
                <div>
                  <div className="dj-contact-info-label">Lokasi</div>
                  <div className="dj-contact-info-val">Jawa-Tengah, Indonesia</div>
                </div>
              </div>
              <div className="dj-contact-info-item">
                <div className="dj-contact-info-icon"><Phone size={18} /></div>
                <div>
                  <div className="dj-contact-info-label">WhatsApp</div>
                  <div className="dj-contact-info-val">+62 812-3456-7890</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-8">
            {sent && (
              <div className="dj-contact-success">
                <CheckCircle size={20} />
                <span>Pesan kamu udah masuk. ✨</span>
              </div>
            )}
            <div className="dj-contact-form-card">
              <form onSubmit={onSubmit}>
                <div className="row g-3 mb-3">
                  <div className="col-sm-6">
                    <label className="dj-form-label">Nama</label>
                    <input
                      type="text"
                      required
                      className="dj-form-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Nama kamu"
                    />
                  </div>
                  <div className="col-sm-6">
                    <label className="dj-form-label">Email</label>
                    <input
                      type="email"
                      required
                      className="dj-form-input"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="kamu@email.com"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="dj-form-label">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    className="dj-form-input"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tulis pesan kamu di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className={"dj-btn dj-btn-primary dj-btn-lg" + (sending ? " dj-btn-loading" : "")}
                  disabled={sending}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  {sending ? (
                    <span className="dj-btn-spinner" />
                  ) : (
                    <><Send size={16} />&nbsp; Kirim Pesan</>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
