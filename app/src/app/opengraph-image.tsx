import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Match Moment Analyzer — AI analysis of Dhoni's 2011 World Cup Final innings";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0C0C0C",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(0,200,150,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,150,0.05) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Top accent line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "4px",
            background: "linear-gradient(90deg, transparent, #00C896, transparent)",
          }}
        />

        {/* Cricket ball icon */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            borderRadius: "50%",
            border: "3px solid rgba(0,200,150,0.4)",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              background: "#00C896",
            }}
          />
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            marginBottom: "16px",
          }}
        >
          Match Moment Analyzer
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "24px",
            color: "#9CA3AF",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.5,
          }}
        >
          AI-powered analysis of Dhoni&apos;s match-winning innings in the 2011 ICC World Cup Final
        </div>

        {/* Badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "40px",
            padding: "10px 24px",
            borderRadius: "8px",
            border: "1px solid rgba(0,200,150,0.3)",
            background: "rgba(0,200,150,0.08)",
          }}
        >
          <div
            style={{
              fontSize: "14px",
              fontWeight: 700,
              color: "#00C896",
              letterSpacing: "3px",
              textTransform: "uppercase" as const,
            }}
          >
            Video Analysis
          </div>
        </div>

        {/* Bottom credit */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            fontSize: "16px",
            color: "#52525B",
          }}
        >
          match-analyzer.vercel.app — by Neha
        </div>
      </div>
    ),
    { ...size }
  );
}
