import { Plug, Smartphone, Wrench, Zap } from "lucide-react";

const highlights = [
  {
    title: "Blazing Fast",
    description: "No heavy frameworks like Laravel. Pure PHP 8.0+ performance.",
    icon: Zap,
  },
  {
    title: "Mobile First",
    description: "Fully responsive design that feels like a native app.",
    icon: Smartphone,
  },
  {
    title: "API First",
    description:
      "Built-in REST API with CORS support for 3rd party integrations.",
    icon: Plug,
  },
  {
    title: "Developer Friendly",
    description:
      "Clean architecture, CLI tools (php mivo), and easy extension.",
    icon: Wrench,
  },
];

export function WhyMivo() {
  return (
    <section className="grid gap-10 border-t border-fd-border pt-12 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-fd-foreground">
          Why MIVO?
        </h2>
        <p className="mt-4 leading-7 text-fd-muted-foreground">
          MIVO is a next-generation{" "}
          <strong className="font-semibold text-fd-foreground">
            Mikrotik Voucher Management System
          </strong>
          , engineered to deliver premium user experience even on low-end
          hardware.
        </p>
      </div>

      <div>
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-fd-muted-foreground">
          Key Highlights
        </h3>
        <ul className="grid gap-5 sm:grid-cols-2">
          {highlights.map(({ title, description, icon: Icon }) => (
            <li key={title} className="flex items-start gap-3">
              <Icon
                aria-hidden="true"
                className="mt-1 size-5 shrink-0 text-fd-primary"
              />
              <p className="leading-7 text-fd-muted-foreground">
                <strong className="font-semibold text-fd-foreground">
                  {title}:
                </strong>{" "}
                {description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
