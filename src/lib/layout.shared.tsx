import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { BookOpenCheck, BookOpenText, Package, Puzzle } from "lucide-react";
import Image from "next/image";
import { appName, gitConfig } from "./shared";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <Image
            src="/brand/logo-wordmark-light.svg"
            alt={appName}
            width={120}
            height={80}
            className="h-9 w-30 object-cover dark:hidden"
          />
          <Image
            src="/brand/logo-wordmark-dark.svg"
            alt=""
            aria-hidden="true"
            width={120}
            height={80}
            className="hidden h-9 w-30 object-cover dark:block"
          />
        </span>
      ),
      url: "/",
    },
    links: [
      { text: "Home", url: "/" },
      {
        type: "menu",
        text: "Docs",
        items: [
          {
            text: "Guide",
            url: "/docs/guide",
            active: "nested-url",
            icon: <BookOpenCheck />,
            description:
              "Install MIVO and get started with the essential setup guides.",
          },
          {
            text: "Manual",
            url: "/docs/manual",
            active: "nested-url",
            icon: <BookOpenText />,
            description:
              "Explore detailed references for MIVO features and settings.",
          },
        ],
      },
      {
        type: "menu",
        text: "Downloads",
        items: [
          {
            text: "Plugins",
            url: "/plugins",
            icon: <Puzzle />,
            description: "Browse community plugins that extend MIVO.",
          },
          {
            text: "Releases",
            url: "/releases",
            icon: <Package />,
            description: "Download the latest and previous MIVO versions.",
          },
        ],
      },
      {
        type: "menu",
        text: "Community",
        items: [
          {
            text: "Changelog",
            url: "https://github.com/mivodev/mivo/releases",
            external: true,
            description: "Read the project changelog on GitHub.",
          },
          {
            text: "Contributing",
            url: "https://github.com/mivodev/mivo/blob/main/CONTRIBUTING.md",
            external: true,
            description: "Learn how to contribute to MIVO.",
          },
          {
            text: "Forum (Discussions)",
            url: "https://github.com/orgs/mivodev/discussions",
            external: true,
            description: "Ask questions and share ideas with the community.",
          },
          {
            text: "Star on GitHub",
            url: "https://github.com/mivodev/mivo/stargazers",
            external: true,
            description: "Support the project by starring the repository.",
          },
        ],
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
