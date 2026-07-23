import { ImageResponse } from "next/og";
import { getPayload } from "payload";
import config from "@payload-config";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "LevIQ Blog";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { slug } = await params;

  let title = "LevIQ Blog";
  try {
    const payload = await getPayload({ config });
    const { docs } = await payload.find({
      collection: "posts",
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
    });
    if (docs[0]?.title) title = docs[0].title;
  } catch {
    // Fall back to the generic title if the database is unavailable.
  }

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "#0a0a0a",
        color: "#ffffff",
        padding: "72px 80px",
        justifyContent: "space-between",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{ fontSize: 44, fontWeight: 700, letterSpacing: "-0.02em" }}
        >
          LevIQ
        </div>
        <div style={{ fontSize: 26, color: "#a1a1a1" }}>Blog</div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: title.length > 70 ? 56 : 72,
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: "-0.02em",
          maxWidth: 1040,
        }}
      >
        {title}
      </div>

      <div style={{ fontSize: 26, color: "#a1a1a1" }}>leviq.de/blog</div>
    </div>,
    size,
  );
}
