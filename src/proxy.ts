import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { createMcpOAuthMiddleware } from "@brainwebuk/payload-plugin-mcp-oauth/middleware";

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)", "/forum(.*)"]);

const mcpOAuth = createMcpOAuthMiddleware(); // accepts { apiRoute, mcpEndpointPath, ... }

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
  return mcpOAuth(req);
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
    // Always run for Clerk-specific frontend API routes
    "/__clerk/(.*)",
    // MCP Oauth
    "/.well-known/oauth-authorization-server",
    "/.well-known/oauth-protected-resource",
  ],
};
