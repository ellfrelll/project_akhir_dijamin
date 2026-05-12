// === LAYOUT: Admin Dashboard ===
import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard, Users, Watch, Inbox, Star,
  Settings as SettingsIcon, Menu, Moon, Sun, LogOut, ChevronDown,
} from "lucide-react";
import { logout } from "../auth.js";

const MSG_KEY = "dj-messages";

const NAV = [
  { to: "/admin", label: "Dashboard", icon: LayoutDashboard, end: true },
  { to: "/admin/messages", label: "Ulasan", icon: Star },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/watches", label: "Watches", icon: Watch },
  { to: "/admin/settings", label: "Settings", icon: SettingsIcon },
];

const TITLES = {
  "/admin": "Dashboard",
  "/admin/messages": "Ulasan Komunitas",
  "/admin/users": "Users",
  "/admin/watches": "Watches",
  "/admin/settings": "Settings",
};

function getUnreadCount() {
  try {
    const raw = localStorage.getItem(MSG_KEY);
    if (!raw) return 0;
    const msgs = JSON.parse(raw);
    return msgs.filter(m => !m.read).length;
  } catch { return 0; }
}

export default function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("dj-admin-theme") === "dark";
  });
  const [unreadCount, setUnreadCount] = useState(getUnreadCount);

  useEffect(() => {
    document.body.classList.toggle("dj-admin-dark", dark);
    localStorage.setItem("dj-admin-theme", dark ? "dark" : "light");
    return () => document.body.classList.remove("dj-admin-dark");
  }, [dark]);

  useEffect(() => {
    setOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const interval = setInterval(() => setUnreadCount(getUnreadCount()), 3000);
    return () => clearInterval(interval);
  }, []);

  const title = TITLES[location.pathname] || "Admin";

  return (
    <div className="dj-admin">
      <aside className={`dj-admin-sidebar ${open ? "is-open" : ""}`}>
        <div className="dj-admin-brand">
          <span className="brand-dot">●</span> di-jam-in
          <div className="dj-admin-brand-sub">Admin Panel</div>
        </div>

        <nav className="dj-admin-nav">
          {NAV.map((item) => {
            const Icon = item.icon;
            const isMessages = item.to === "/admin/messages";
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) => "dj-admin-link" + (isActive ? " active" : "")}
              >
                <Icon size={18} />
                <span>{item.label}</span>
                {isMessages && unreadCount > 0 && (
                  <span className="dj-nav-badge">{unreadCount}</span>
                )}
              </NavLink>
            );
          })}
        </nav>

        <Link to="/" className="dj-admin-link mt-auto">
          <LogOut size={18} />
          <span>Back to site</span>
        </Link>
      </aside>

      {open && <div className="dj-admin-backdrop" onClick={() => setOpen(false)} />}

      <div className="dj-admin-main">
        <header className="dj-admin-topbar">
          <button
            className="btn btn-sm btn-light dj-admin-burger"
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
          >
            <Menu size={18} />
          </button>

          <h1 className="dj-admin-title">{title}</h1>

          <div className="ms-auto d-flex align-items-center gap-2">
            <button
              className="btn btn-sm btn-light dj-admin-iconbtn"
              onClick={() => setDark(v => !v)}
              aria-label="Toggle theme"
            >
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {unreadCount > 0 && location.pathname !== "/admin/messages" && (
              <NavLink to="/admin/messages" className="dj-topbar-msg-btn" title={`${unreadCount} pesan belum dibaca`}>
                <Inbox size={16} />
                <span className="dj-topbar-badge">{unreadCount}</span>
              </NavLink>
            )}

            <div className="dj-admin-profile">
              <button
                className="dj-admin-profile-btn"
                onClick={() => setProfileOpen(v => !v)}
              >
                <span className="dj-admin-avatar">DA</span>
                <span className="d-none d-sm-inline">Admin</span>
                <ChevronDown size={14} />
              </button>
              {profileOpen && (
                <div className="dj-admin-dropdown">
                  <div className="px-3 py-2 small text-muted">Signed in as</div>
                  <div className="px-3 pb-2 fw-semibold">admin@gmail.com</div>
                  <hr className="my-1" />
                  <Link to="/admin/settings" className="dj-admin-dd-item">Settings</Link>
                  <Link to="/" className="dj-admin-dd-item">View site</Link>
                  <hr className="my-1" />
                  <button
                    type="button"
                    className="dj-admin-dd-item w-100 text-start"
                    onClick={() => { logout(); navigate("/login", { replace: true }); }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        <div className="dj-admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
