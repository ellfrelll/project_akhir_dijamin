// === PAGE: Users ===
// daftar user + search bar buat cari nama/email
import { useState } from "react";
import DataTable from "../components/DataTable.jsx";

const USERS = [
  { id: 1, name: "Andi Pratama", email: "andi@mail.com", role: "Reviewer", joined: "2025-04-12" },
  { id: 2, name: "Rina Saputri", email: "rina@mail.com", role: "Reviewer", joined: "2025-03-22" },
  { id: 3, name: "Bagas Kurniawan", email: "bagas@mail.com", role: "Kontributor", joined: "2025-02-09" },
  { id: 4, name: "Citra Wulandari", email: "citra@mail.com", role: "Kontributor", joined: "2024-12-30" },
  { id: 5, name: "Dimas Aditya", email: "dimas@mail.com", role: "Reviewer", joined: "2024-11-18" },
  { id: 6, name: "Eka Lestari", email: "eka@mail.com", role: "Admin", joined: "2024-10-02" },
];

export default function AdminUsers() {
  const [q, setQ] = useState("");
  const filtered = USERS.filter(
    (u) =>
      u.name.toLowerCase().includes(q.toLowerCase()) ||
      u.email.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="dj-fade-in">
      <div className="dj-panel">
        <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
          <div>
            <div className="dj-panel-title">Daftar User</div>
            <div className="dj-panel-sub">{filtered.length} pengguna</div>
          </div>
          <input
            className="form-control"
            style={{ maxWidth: 260 }}
            placeholder="Cari nama atau email…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
        </div>

        <DataTable
          columns={[
            { key: "id", label: "#", width: 50 },
            { key: "name", label: "Nama" },
            { key: "email", label: "Email" },
            {
              key: "role",
              label: "Role",
              render: (r) => {
                const tone =
                  r.role === "Admin" ? "dj-badge-ink" :
                  r.role === "Kontributor" ? "dj-badge-amber" : "dj-badge-blue";
                return <span className={`dj-badge ${tone}`}>{r.role}</span>;
              },
            },
            { key: "joined", label: "Bergabung", width: 130 },
          ]}
          rows={filtered}
        />
      </div>
    </div>
  );
}
