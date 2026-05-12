// === SECTION: Auth Helper ===
// simple banget — cuma cek localStorage, no backend
const KEY = "dj-auth";
const DUMMY = { email: "admin@gmail.com", password: "admin123" };

export function login(email, password) {
  // ngecek email & password (dummy login)
  if (email === DUMMY.email && password === DUMMY.password) {
    localStorage.setItem(KEY, "true");
    return true;
  }
  return false;
}

export function logout() {
  // hapus session
  localStorage.removeItem(KEY);
}

export function isLoggedIn() {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(KEY) === "true";
}
