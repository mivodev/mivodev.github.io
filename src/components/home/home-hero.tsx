import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import styles from "./home-hero.module.css";

export function HomeHero() {
  return (
    <section
      className={`${styles.hero} grid items-center gap-12 md:grid-cols-[1.15fr_0.85fr] md:gap-16`}
    >
      <div className="flex flex-col items-start">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-fd-muted-foreground">
          MIVO
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl lg:text-6xl">
          Mikrotik Voucher Management
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-fd-muted-foreground">
          Modern, Lightweight, and Efficient. Built for low-end devices with
          premium UX.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/docs/guide"
            className="inline-flex min-h-11 items-center gap-2 rounded-md bg-fd-primary px-5 py-2.5 text-sm font-medium text-fd-primary-foreground transition-opacity hover:opacity-85"
          >
            Get Started
            <ArrowRight aria-hidden="true" className="size-4" />
          </Link>
          <Link
            href="https://github.com/mivodev/mivo/pkgs/container/mivo"
            className="inline-flex min-h-11 items-center rounded-md border border-fd-border px-5 py-2.5 text-sm font-medium text-fd-foreground transition-colors hover:bg-fd-accent hover:text-fd-accent-foreground"
            target="_blank"
            rel="noreferrer"
          >
            Docker Image
          </Link>
        </div>
      </div>

      <div
        className={`${styles.visual} flex min-h-64 items-center justify-center rounded-2xl p-10 md:min-h-80`}
      >
        <Image
          src="/brand/logo-m.svg"
          alt="MIVO logo"
          width={220}
          height={220}
          className="size-44 dark:hidden md:size-52"
          priority
        />
        <Image
          src="/brand/logo-m-dark.svg"
          alt=""
          aria-hidden="true"
          width={220}
          height={220}
          className="hidden size-44 dark:block md:size-52"
          priority
        />
      </div>
    </section>
  );
}
