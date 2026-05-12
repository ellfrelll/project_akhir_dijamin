// === COMPONENT: DataTable ===
// tabel reusable — kasih `columns` (key, label, render) sama `rows` doang
export default function DataTable({ columns, rows, empty = "Belum ada data." }) {
  return (
    <div className="dj-table-wrap">
      <table className="dj-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} style={{ width: c.width }}>{c.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 && (
            <tr>
              <td colSpan={columns.length} className="text-center text-muted py-4">
                {empty}
              </td>
            </tr>
          )}
          {rows.map((row, i) => (
            <tr key={row.id ?? i}>
              {columns.map((c) => (
                <td key={c.key}>{c.render ? c.render(row) : row[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
