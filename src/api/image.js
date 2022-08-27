const BASE_URL = process.env.BASE_URL || "http://localhost:5000";

export const fetchImages = async (
  path = "",
  body = null,
  headers = {},
  method = "GET"
) => {
  const res = await fetch(BASE_URL + path, {
    method,
    headers,
    body: body && JSON.stringify(body),
  });

  if (!res.ok) {
    throw await res.json();
  }

  return await res.json();
};
