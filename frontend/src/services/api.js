export const API_URL = "http://127.0.0.1:8000/api";

export const fetchTools = async () => {
  const response = await fetch(`${API_URL}/tools`);
  if (!response.ok) {
    throw new Error("Failed to fetch tools");
  }
  return response.json();
};

export const fetchToolById = async (id) => {
  const response = await fetch(`${API_URL}/tools/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch tool");
  }
  return response.json();
};
