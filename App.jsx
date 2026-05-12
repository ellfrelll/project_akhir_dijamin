import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import { isLoggedIn } from "./auth.js";
import Brands from "./pages/Brands.jsx";
import Collections from "./pages/Collections.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Wishlist from "./pages/Wishlist.jsx";
import WatchDetail from "./pages/WatchDetail.jsx";
import NotFound from "./pages/NotFound.jsx";

import AdminLayout from "./admin/AdminLayout.jsx";
import AdminDashboard from "./admin/pages/AdminDashboard.jsx";
import AdminUsers from "./admin/pages/AdminUsers.jsx";
import AdminWatches from "./admin/pages/AdminWatches.jsx";
import AdminSettings from "./admin/pages/AdminSettings.jsx";
import AdminMessages from "./admin/pages/AdminMessages.jsx";

function RequireAuth({ children }) {
  if (!isLoggedIn()) return <Navigate to="/login" replace />;
  return children;
}

function PublicShell({ children }) {
  const location = useLocation();
  const bare = location.pathname.startsWith("/admin") || location.pathname === "/login";
  if (bare) return children;
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

function AppRoutes() {
  return (
    <PublicShell>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/watch/:id" element={<WatchDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Navigate to="/admin" replace />} />

        <Route path="/admin" element={<RequireAuth><AdminLayout /></RequireAuth>}>
          <Route index element={<AdminDashboard />} />
          <Route path="messages" element={<AdminMessages />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="watches" element={<AdminWatches />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </PublicShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
