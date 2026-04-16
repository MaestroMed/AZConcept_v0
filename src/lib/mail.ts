/**
 * Minimal mail helper. Sends via Resend when RESEND_API_KEY is set,
 * otherwise logs to console (dev / preview fallback).
 *
 * ENV to set in production:
 *   RESEND_API_KEY         → secret
 *   CONTACT_INBOX          → e.g. "contact@azconcept.fr"
 *   CONTACT_FROM           → e.g. "AZ Concept <noreply@azconcept.fr>"
 */

interface SendArgs {
  subject: string;
  html: string;
  replyTo?: string;
}

export async function send({ subject, html, replyTo }: SendArgs): Promise<{ ok: boolean; id?: string }> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_INBOX;
  const from = process.env.CONTACT_FROM;

  if (!apiKey || !to || !from) {
    // Dev / preview: log instead of sending
    console.log("[mail:dev]", { subject, to, from, replyTo, html });
    return { ok: true };
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      reply_to: replyTo,
    }),
  });

  if (!res.ok) {
    const txt = await res.text().catch(() => "");
    console.error("[mail] Resend failed:", res.status, txt);
    return { ok: false };
  }

  const json = (await res.json()) as { id?: string };
  return { ok: true, id: json.id };
}

/** Simple HTML escape for embedding user input. */
export function esc(value: unknown): string {
  const s = String(value ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/** Format an object as a simple definition list for email body. */
export function asDl(data: Record<string, unknown>): string {
  return `<dl style="font-family:system-ui,sans-serif;font-size:14px;">${Object.entries(data)
    .filter(([k]) => !k.startsWith("hp_"))
    .map(
      ([k, v]) =>
        `<dt style="color:#666;margin-top:10px"><strong>${esc(k)}</strong></dt><dd style="margin:4px 0 0 0">${esc(v)}</dd>`
    )
    .join("")}</dl>`;
}
