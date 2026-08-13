import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
            width: 17,
            height: 17,
            border: "2.5px solid #b4e717",
            transform: "rotate(45deg)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{ width: 6, height: 6, border: "1.5px solid #b4e717", transform: "rotate(-45deg)" }} />
        </div>
      </div>
    ),
    { ...size }
  );
}
