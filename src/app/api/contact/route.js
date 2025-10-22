export async function POST(request) {
  const data = await request.json().catch(() => ({}));
  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  // Placeholder: here you could send email or store in DB.
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}

