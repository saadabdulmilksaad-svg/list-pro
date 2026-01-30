
const API_BASE_URL = "http://127.0.0.1:8000/api";

export async function getAllTools() {
  const res = await fetch(`${API_BASE_URL}/tools`);
  if (!res.ok) throw new Error("فشل جلب الأدوات");
  return res.json();
}

export async function getToolsByCategory(category) {
  const res = await fetch(`${API_BASE_URL}/tools/category/${category}`);
  if (!res.ok) throw new Error("فشل جلب الأدوات حسب الفئة");
  return res.json();
}

