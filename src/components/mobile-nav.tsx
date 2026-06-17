"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "@/components/ui/button";
import { Portal, PortalBackdrop } from "@/components/portal";
import { XIcon, MenuIcon } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { CalEmbed } from "@/components/cal-embed";
import { PhoneCallIcon } from "lucide-react";

export function MobileNav() {
  const t = useTranslations("Header");
  const [open, setOpen] = React.useState(false);

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
    <div className="md:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-label="Toggle menu"
        className="md:hidden"
        onClick={() => setOpen(!open)}
        size="icon"
        variant="outline"
      >
        {open ? (
          <XIcon className="size-4.5" />
        ) : (
          <MenuIcon className="size-4.5" />
        )}
      </Button>
      {open && (
        <Portal className="top-14" id="mobile-menu">
          <PortalBackdrop />
          <div
            className={cn(
              "data-[slot=open]:zoom-in-97 ease-out data-[slot=open]:animate-in",
              "size-full p-4",
            )}
            data-slot={open ? "open" : "closed"}
          >
            <div className="grid gap-y-2">
              {navLinks.map((link) => (
                <Button
                  asChild
                  className="justify-start"
                  key={link.label}
                  variant="ghost"
                >
                  <Link href={link.href}>{link.label}</Link>
                </Button>
              ))}
            </div>
            <div className="mt-12 flex flex-col gap-2">
              <Button size="sm" variant="outline" className="w-full">
                {t("demo")}
              </Button>
              <CalEmbed>
                <Button size="sm" className="font-normal w-full">
                  <PhoneCallIcon />
                  {t("bookACall")}
                </Button>
              </CalEmbed>
            </div>
          </div>
        </Portal>
      )}
    </div>
  );
}
