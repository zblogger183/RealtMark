import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c4b42",
        }}
      >
        <div
          style={{
            width: 96,
            height: 96,
            border: "14px solid #b4e717",
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 34, height: 34, border: "8px solid #b4e717", transform: "rotate(-45deg)" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
