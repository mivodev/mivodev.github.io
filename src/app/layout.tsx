import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Provider } from "@/components/provider";
import { siteUrl } from "@/lib/site-config";
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "MIVO | Mikrotik Voucher Management",
  description:
    "Modern, lightweight, and efficient Mikrotik Voucher Management for low-end devices.",
  icons: {
    icon: [
      {
        url: "/brand/logo-m-dark.svg",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/brand/logo-m.svg",
        media: "(prefers-color-scheme: light)",
      },
    ],
  },
  openGraph: {
    title: "MIVO | Mikrotik Voucher Management",
    description:
      "Modern, lightweight, and efficient Mikrotik Voucher Management for low-end devices.",
    images: ["/brand/logo-wordmark-bg-white.png"],
  },
};

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
