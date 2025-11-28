const BACKEND_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

export async function fetchWeather(lat, lon) {
  const res = await fetch(`${BACKEND_BASE}/api/weather?lat=${lat}&lon=${lon}`);
  return res.json();
}

export async function fetchConvert(from, to, amount) {
  const res = await fetch(`${BACKEND_BASE}/api/convert?from=${from}&to=${to}&amount=${amount}`);
  return res.json();
}

export async function fetchQuote() {
  const res = await fetch(`${BACKEND_BASE}/api/quote`);
  return res.json();
}
