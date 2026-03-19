import { ArrowUpRight } from "@/components/arrow-up-right";

interface Project {
  name: string;
  description: string;
  tags: string[];
  href?: string;
}

const liveProjects: Project[] = [
  {
    name: "Clerk",
    description:
      "Your personal AI assistant that does the work.",
    tags: ["AI Assistant"],
    href: "https://heyclerk.so",
  },
  {
    name: "SEOPilot",
    description:
      "AI content automation SaaS for Shopify merchants. Generates product-aware SEO articles and auto-publishes to stores.",
    tags: ["Shopify", "Claude API", "Next.js"],
    href: "#",
  },
  {
    name: "TweetRead",
    description:
      "REST API for AI agents to extract linked article content from X posts.",
    tags: ["Next.js", "REST API", "AI Agents"],
    href: "#",
  },
  {
    name: "Hazil Studios",
    description:
      "Shopify development and AI consulting agency. Clients include UPS and New York Fashion Week. 500+ stores launched.",
    tags: ["Shopify", "Liquid", "Meta Ads"],
    href: "#",
  },
];

const devProjects: Project[] = [
  {
    name: "Sprout",
    description:
      "Toddler activity finder app with freemium model and guided onboarding.",
    tags: ["Expo", "Supabase", "RevenueCat"],
  },
  {
    name: "Binj",
    description:
      "Cross-platform social content saving app with a Venmo-style global feed.",
    tags: ["React Native", "Supabase"],
  },
];

function Tag({
  children,
  variant,
}: {
  children: React.ReactNode;
  variant: "live" | "dev";
}) {
  return (
    <span
      className={`font-mono text-[0.6875rem] px-2.5 py-0.5 rounded-[3px] leading-snug ${
        variant === "live"
          ? "bg-tag-live-bg text-tag-live-text"
          : "bg-tag-dev-bg text-tag-dev-text"
      }`}
    >
      {children}
    </span>
  );
}

function ProjectRow({
  project,
  variant,
}: {
  project: Project;
  variant: "live" | "dev";
}) {
  const inner = (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 min-w-0">
        <div
          className={`text-[0.9375rem] font-medium leading-snug mb-1 ${
            variant === "dev" ? "text-text-secondary" : ""
          }`}
        >
          {project.name}
        </div>
        <div
          className={`text-[0.8125rem] leading-relaxed mb-2.5 ${
            variant === "dev" ? "text-text-muted" : "text-text-secondary"
          }`}
        >
          {project.description}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={tag} variant={variant}>
              {tag}
            </Tag>
          ))}
        </div>
      </div>
      {project.href && (
        <ArrowUpRight className="shrink-0 mt-0.5 text-text-faint transition-all duration-150 group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        className="group block py-4 px-2 -mx-2 border-b border-border rounded transition-colors duration-150 hover:bg-row-hover"
        target="_blank"
        rel="noopener"
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="block py-4 px-2 -mx-2 border-b border-border">{inner}</div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-text-muted pb-3 border-b border-border">
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-[640px] mx-auto px-6 pt-20 pb-16 max-sm:px-5 max-sm:pt-12 max-sm:pb-12">
      {/* Header */}
      <header className="mb-16">
        <h1 className="font-serif font-normal text-4xl tracking-tight leading-tight mb-2.5 max-sm:text-3xl">
          Florian Thompson
        </h1>
        <p className="text-[1.05rem] italic font-serif mb-2 max-sm:text-base">
          I like to build things.
        </p>
        <p className="text-sm text-text-secondary leading-relaxed mb-5">
          Technical founder from Munich. Spent 9 years in New York — Clarity
          Money, Goldman Sachs, and a Shopify agency. Now back in Munich.
        </p>
        <div className="flex flex-wrap gap-5">
          <a
            href="https://linkedin.com/in/"
            target="_blank"
            rel="noopener"
            className="text-[0.8125rem] text-text-muted no-underline transition-colors duration-150 hover:text-text-primary"
          >
            LinkedIn
          </a>
          <span className="text-border select-none">·</span>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener"
            className="text-[0.8125rem] text-text-muted no-underline transition-colors duration-150 hover:text-text-primary"
          >
            GitHub
          </a>
          <span className="text-border select-none">·</span>
          <a
            href="mailto:florian@hazilstudios.com"
            className="text-[0.8125rem] text-text-muted no-underline transition-colors duration-150 hover:text-text-primary"
          >
            Email
          </a>
        </div>
      </header>

      {/* Live Projects */}
      <section className="mb-14">
        <SectionLabel>Live</SectionLabel>
        {liveProjects.map((project) => (
          <ProjectRow key={project.name} project={project} variant="live" />
        ))}
      </section>

      {/* In Development */}
      <section className="mb-14">
        <SectionLabel>In Development</SectionLabel>
        {devProjects.map((project) => (
          <ProjectRow key={project.name} project={project} variant="dev" />
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 mt-4">
        <div className="text-[0.8125rem] text-text-muted leading-loose">
          Clarity Money{" "}
          <span className="inline-block mx-1.5 opacity-45">→</span> Goldman
          Sachs <span className="inline-block mx-1.5 opacity-45">→</span>{" "}
          E-Commerce{" "}
          <span className="inline-block mx-1.5 opacity-45">→</span> Hazil
          Studios <span className="inline-block mx-1.5 opacity-45">→</span>{" "}
          Munich
        </div>
      </footer>
    </div>
  );
}
