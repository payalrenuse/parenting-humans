const API_URL = "http://localhost:1337/api";

export async function getStories() {
  const res = await fetch(`${API_URL}/stories?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch stories");

  return res.json(); // keep full response
}

export async function getEvents() {
  const res = await fetch(`${API_URL}/events?populate=*`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch events");

  const data = await res.json();

  return data.data; // IMPORTANT (old structure)
}
  export async function getStoryBySlug(slug: string) {
  const res = await fetch(
    `http://localhost:1337/api/stories?filters[slug][$eq]=${slug}&populate=*`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch story");
  }

  const json = await res.json();

  console.log("API RESPONSE:", json); // 👈 IMPORTANT DEBUG

  if (!json.data || json.data.length === 0) {
    return null;
  }

  const item = json.data[0];

  // 🔥 IMPORTANT: NO attributes
  return item;
}