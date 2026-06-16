import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["*.app.github.dev"],
  rewrites: async () => {
    return {
      beforeFiles: [
        // MCP OAuth - Rewrite OAuth discovery documents from root to /api
        {
          source: "/.well-known/oauth-authorization-server",
          destination: "/api/.well-known/oauth-authorization-server",
        },
        {
          source: "/.well-known/oauth-protected-resource",
          destination: "/api/.well-known/oauth-protected-resource",
        },
        // MCP OAuth - Rewrite bare-host POST requests (Claude.ai connectors) to MCP endpoint
        {
          source: "/",
          destination: "/api/mcp",
          has: [
            { type: "header", key: "content-type", value: "application/json" },
          ],
          methods: ["POST"],
        },
      ],
    };
  },
  /* config options here */
};

export default withPayload(nextConfig);
