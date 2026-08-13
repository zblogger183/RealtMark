import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#1c4b42",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 28,
              height: 28,
              border: "3px solid #b4e717",
              transform: "rotate(45deg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 10, height: 10, border: "2px solid #b4e717", transform: "rotate(-45deg)" }} />
          </div>
          <div style={{ fontSize: 32, fontWeight: 700, color: "#ffffff" }}>RealtMark</div>
        </div>

        <div style={{ display: "flex", marginTop: 48, fontSize: 60, fontWeight: 700, color: "#ffffff", maxWidth: 980 }}>
          Digital growth partner for real estate across Dubai and the Gulf.
        </div>

        <div style={{ display: "flex", marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.75)", maxWidth: 860 }}>
          SEO, paid media, and content systems built for qualified buyer and investor leads.
        </div>
      </div>
    ),
    { ...size }
  );
}
