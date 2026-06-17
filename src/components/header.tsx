"use client";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";
import { useScroll } from "@/hooks/use-scroll";
import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Link } from "@/i18n/navigation";

export function Header() {
  const t = useTranslations("Header");
  const scrolled = useScroll(10);

  const navLinks = [
    {
      label: t("blog"),
      href: "/blog" as const,
    },
    {
      label: t("pricing"),
      href: "/pricing" as const,
    },
    {
      label: t("about"),
      href: "/about" as const,
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto w-full max-w-4xl border-transparent border-b md:rounded-md md:border md:transition-all md:ease-out",
        {
          "border-border bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/50 md:top-2 md:max-w-3xl md:shadow":
            scrolled,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-4 md:h-12 md:transition-all md:ease-out",
          {
            "md:px-2": scrolled,
          },
        )}
      >
        <a
          className="rounded-md p-2 hover:bg-muted dark:hover:bg-muted/50"
          href="#"
        >
          <Logo className="h-4" />
        </a>
        <div className="hidden items-center gap-2 md:flex">
          <div>
            {navLinks.map((link) => (
              <Button asChild key={link.label} size="sm" variant="ghost">
                <Link href={link.href}>{link.label}</Link>
              </Button>
            ))}
          </div>
          <Show when="signed-out">
            <SignInButton>
              <Button size="sm" variant="outline">
                {t("signIn")}
              </Button>
            </SignInButton>
            <SignUpButton>
              <Button size="sm">{t("getStarted")}</Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
        <MobileNav />
      </nav>
    </header>
  );
}
