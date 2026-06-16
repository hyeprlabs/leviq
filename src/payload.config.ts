import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

// Plugins
import { mcpPlugin, MCPPluginConfig } from "@payloadcms/plugin-mcp";
import { payloadMcpOAuth } from "@brainwebuk/payload-plugin-mcp-oauth";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Posts } from "./collections/Posts";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// Assign ONCE to a const and reuse the same reference in both calls. ⚠️
const options: MCPPluginConfig = {
  collections: {
    posts: {
      description: "Blog posts for my /blog Page.",
      enabled: true,
    },
  },
};

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Posts],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
  }),
  plugins: [
    mcpPlugin(options),
    payloadMcpOAuth({
      issuer: `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`,
      mcpPluginOptions: options,
    }),
  ],
});
