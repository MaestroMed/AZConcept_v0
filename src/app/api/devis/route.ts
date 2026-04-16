import { NextResponse } from "next/server";
import { rateLimit, getIp } from "@/lib/rateLimit";
import { send, asDl, esc } from "@/lib/mail";

export async function POST(request: Request) {
  const ip = getIp(request);
  const { allowed, retryAfter } = rateLimit(`devis:${ip}`, { max: 5, windowMs: 10 * 60 * 1000 });
  if (!allowed) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez plus tard." },
      { status: 429, headers: { "Retry-After": String(retryAfter) } }
    );
  }

  try {
    const data = (await request.json()) as Record<string, string>;

    // Honeypot
    if (data.hp_website && data.hp_website.trim() !== "") {
      return NextResponse.json({ success: true });
    }

    if (!data.email || !data.nom || !data.message || !data.typeProjet) {
      return NextResponse.json({ error: "Champs obligatoires manquants." }, { status: 400 });
    }

    const html = `
      <h2 style="font-family:system-ui,sans-serif">Nouvelle demande de devis — AZ Concept</h2>
      ${asDl(data)}
    `;

    const result = await send({
      subject: `Devis — ${esc(data.typeProjet ?? "Projet")} — ${esc(data.nom)}`,
      html,
      replyTo: data.email,
    });

    if (!result.ok) {
      return NextResponse.json({ error: "Erreur d'envoi." }, { status: 500 });
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
