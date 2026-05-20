import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";
export const dynamic = "force-static";

const SIZE = { width: 1200, height: 630 };

/**
 * Dynamic Open Graph image renderer.
 * Query: ?title=…&subtitle=…&eyebrow=…
 * Falls back to the site default when no params.
 */
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "AZ Concept";
  const subtitle = searchParams.get("subtitle") ?? "Métallerie d’architecture.";
  const eyebrow = searchParams.get("eyebrow") ?? "AZ / Concept — Atelier Nº 01";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 80px",
          background:
            "radial-gradient(80% 60% at 50% 110%, rgba(201,163,92,0.35) 0%, transparent 60%), " +
            "radial-gradient(60% 80% at 50% 0%, rgba(107,138,168,0.22) 0%, transparent 70%), " +
            "#0a0a0d",
          color: "#f1ede4",
          fontFamily: "serif",
        }}
      >
        {/* Top rail */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "ui-monospace, monospace",
            fontSize: 18,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "rgba(241,237,228,0.55)",
          }}
        >
          <span>{eyebrow}</span>
          <span style={{ color: "#c9a35c" }}>MMXXVI</span>
        </div>

        {/* Title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 28,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#c9a35c",
              fontFamily: "ui-monospace, monospace",
              marginBottom: 28,
            }}
          >
            Édition 2026
          </div>
          <div
            style={{
              fontSize: 132,
              lineHeight: 0.92,
              letterSpacing: "-0.035em",
              fontWeight: 400,
              color: "#f1ede4",
              maxWidth: 1080,
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.05,
              letterSpacing: "-0.018em",
              fontStyle: "italic",
              color: "#c9a35c",
              fontWeight: 300,
              marginTop: 24,
              maxWidth: 1080,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* Bottom rail */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            borderTop: "1px solid rgba(241,237,228,0.12)",
            fontFamily: "ui-monospace, monospace",
            fontSize: 22,
            letterSpacing: "0.12em",
            color: "rgba(241,237,228,0.7)",
          }}
        >
          <span style={{ fontSize: 36, fontFamily: "serif", letterSpacing: "-0.04em" }}>
            AZ<span style={{ fontStyle: "italic", color: "#c9a35c" }}>concept</span>
            <span style={{ color: "#c9a35c" }}>.</span>
          </span>
          <span style={{ textTransform: "uppercase" }}>
            azconcept.fr · Île-de-France
          </span>
        </div>
      </div>
    ),
    {
      width: SIZE.width,
      height: SIZE.height,
    }
  );
}
