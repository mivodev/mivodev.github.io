import { Box, MonitorSmartphone, ShieldCheck, Zap } from "lucide-react";

const features = [
  {
    title: "Lightweight Core",
    description:
      "Built on a custom minimal MVC framework (~50KB core) optimized for STB/Android.",
    icon: Zap,
  },
  {
    title: "Modern UI/UX",
    description:
      "Fresh Glassmorphism design system using TailwindCSS and Alpine.js.",
    icon: MonitorSmartphone,
  },
  {
    title: "Docker Ready",
    description:
      "Official Alpine-based image (~50MB) with Nginx and Supervisor.",
    icon: Box,
  },
  {
    title: "Secure",
    description:
      "Environment-based config (.env), encrypted credentials, and secure sessions.",
    icon: ShieldCheck,
  },
];

export function FeatureGrid() {
  return (
    <section aria-label="MIVO features">
      <div className="grid gap-4 sm:grid-cols-2">
        {features.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-xl border border-fd-border bg-fd-card p-6"
          >
            <div className="mb-5 flex size-10 items-center justify-center rounded-lg bg-fd-accent text-fd-accent-foreground">
              <Icon aria-hidden="true" className="size-5" />
            </div>
            <h2 className="text-lg font-semibold text-fd-foreground">
              {title}
            </h2>
            <p className="mt-2 leading-7 text-fd-muted-foreground">
              {description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
