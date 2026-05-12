// === PAGE: Main Data (Watches) ===
// data utama proyek ini — manajemen jam (search by nama/brand)
import { useState } from "react";
import DataTable from "../components/DataTable.jsx";
import { watches } from "../../data/watches.js";

export default function AdminWatches() {
  const [q, setQ] = useState("");
  const filtered = watches.filter(
    (w) =>
      w.name.toLowerCase().includes(q.toLowerCase()) ||
      w.brand.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="dj-fade-in">
      <div className="dj-panel">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div>
            <div className="dj-panel-title">Manajemen Jam</div>
            <div className="dj-panel-sub">{filtered.length} item</div>
          </div>
          <input
            className="form-control"
            style={{ maxWidth: 260 }}
            placeholder="Cari nama / brand…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <DataTable
          columns={[
            {
              key: "image",
              label: "",
              width: 70,
              render: (r) => (
                <div className="dj-thumb">
                  <img src={r.image} alt={r.name} />
                </div>
              ),
            },
            { key: "name", label: "Nama" },
            { key: "brand", label: "Brand", width: 140 },
            { key: "collection", label: "Koleksi", width: 110 },
            {
              key: "score",
              label: "Rating",
              width: 90,
              render: (r) => <span className="fw-semibold">{r.score}★</span>,
            },
          ]}
          rows={filtered}
        />
      </div>
    </div>
  );
}
