"use client";

import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";
import { GithubIcon } from "@/components/icons/github-icon";
import { InstagramIcon } from "@/components/icons/instagram-icon";
import { XIcon } from "@/components/icons/x-icon";
import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { FullWidthDivider } from "@/components/full-width-divider";

export function Footer() {
  const t = useTranslations("Footer");

  const company = [
    {
      title: t("company.aboutUs"),
      href: "#",
    },
    {
      title: t("company.careers"),
      href: "#",
    },
    {
      title: t("company.brandAssets"),
      href: "#",
    },
    {
      title: t("company.privacyPolicy"),
      href: "#",
    },
    {
      title: t("company.termsOfService"),
      href: "#",
    },
  ];

  const resources = [
    {
      title: t("resources.blog"),
      href: "#",
    },
    {
      title: t("resources.helpCenter"),
      href: "#",
    },
    {
      title: t("resources.contactSupport"),
      href: "#",
    },
    {
      title: t("resources.community"),
      href: "#",
    },
    {
      title: t("resources.security"),
      href: "#",
    },
  ];
  return (
    <footer
      className={cn(
        "relative mx-auto max-w-4xl",
        "dark:bg-[radial-gradient(35%_80%_at_15%_0%,--theme(--color-foreground/.1),transparent)]",
      )}
    >
      <FullWidthDivider position="top" />
      <div className="grid max-w-5xl grid-cols-6 gap-6 p-4">
        <div className="col-span-6 flex flex-col gap-4 pt-5 md:col-span-4">
          <a className="w-max" href="#">
            <Logo className="h-5" />
          </a>
          <p className="max-w-sm text-balance text-muted-foreground text-sm">
            {t("tagline")}
          </p>
          <div className="flex gap-2 hidden">
            {socialLinks.map((item, index) => (
              <Button
                asChild
                key={`social-${item.link}-${index}`}
                size="icon"
                variant="outline"
              >
                <a href={item.link} target="_blank">
                  {item.icon}
                </a>
              </Button>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-muted-foreground text-xs">
            {t("resourcesTitle")}
          </span>
          <div className="mt-2 flex flex-col gap-2">
            {resources.map(({ href, title }) => (
              <a
                className="w-max text-sm hover:underline"
                href={href}
                key={title}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-span-3 w-full md:col-span-1">
          <span className="text-muted-foreground text-xs">
            {t("companyTitle")}
          </span>
          <div className="mt-2 flex flex-col gap-2">
            {company.map(({ href, title }) => (
              <a
                className="w-max text-sm hover:underline"
                href={href}
                key={title}
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <FullWidthDivider />
      <div className="flex items-center justify-center gap-2 py-4">
        <p className="text-center font-light text-muted-foreground text-sm">
          {t("copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
}

const socialLinks = [
  {
    icon: <GithubIcon />,
    link: "#",
  },
  {
    icon: <InstagramIcon />,
    link: "#",
  },
  {
    icon: <XIcon />,
    link: "#",
  },
];
