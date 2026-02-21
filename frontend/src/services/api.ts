const API_URL = import.meta.env.VITE_API_URL

export async function apiFetch(endpoint: string, options?: RequestInit) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  })

  if (!response.ok) {
    throw new Error("API error")
  }

  return response.json()
}