import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { createMcpOAuthMiddleware } from "@brainwebuk/payload-plugin-mcp-oauth/middleware";
import createMiddleware from "next-intl/middleware";
import { NextResponse } from "next/server";
import { routing } from "./i18n/routing";

const intl = createMiddleware(routing);

const mcpOAuth = createMcpOAuthMiddleware();

const locales = `(${routing.locales.join("|")})`;

const isProtected = createRouteMatcher([
  `/${locales}?/dashboard(.*)`,
  `/${locales}?/forum(.*)`,
]);

const isBlacklisted = createRouteMatcher([
  "/api(.*)",
  "/trpc(.*)",
  "/__clerk(.*)",
  "/.well-known(.*)",
  "/admin(.*)",
  "/payload(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtected(req)) await auth.protect();

  if (isBlacklisted(req)) {
    return mcpOAuth(req) ?? NextResponse.next();
  }
  return intl(req);
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
