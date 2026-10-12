"use client";
import { useTheme } from "fumadocs-ui/provider/base";
import { RootProvider } from "fumadocs-ui/provider/next";
import { type ReactNode, useEffect } from "react";
import SearchDialog from "@/components/search";

function FaviconThemeSync() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    if (!resolvedTheme) return;

    const iconUrl =
      resolvedTheme === "dark" ? "/brand/logo-m-dark.svg" : "/brand/logo-m.svg";

    document
      .querySelectorAll<HTMLLinkElement>('link[rel~="icon"]')
      .forEach((icon) => {
        icon.href = iconUrl;
      });
  }, [resolvedTheme]);

  return null;
}

export function Provider({ children }: { children: ReactNode }) {
  return (
    <RootProvider search={{ SearchDialog }}>
      <FaviconThemeSync />
      {children}
    </RootProvider>
  );
}
