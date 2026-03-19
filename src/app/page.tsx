import { ArrowUpRight } from "@/components/arrow-up-right";
import { CopyEmail } from "@/components/copy-email";

interface Project {
  name: string;
  description: string;
  link?: string;
  linkLabel?: string;
  href?: string;
}

const projects: Project[] = [
  {
    name: "SEOPilot",
    description: "AI content automation for Shopify merchants.",
    link: "getseopilot.com",
    href: "https://getseopilot.com",
  },
  {
    name: "Clerk",
    description: "Your personal AI assistant that does the work.",
    link: "heyclerk.so",
    href: "https://heyclerk.so",
  },
  {
    name: "Sprout",
    description: "Activity finder app for toddler parents.",
    link: "sproutapp.de",
    href: "https://sprout-website-omega.vercel.app/",
  },
  {
    name: "Binj",
    description: "Social content saving with a shared feed.",
    link: "binj.app",
    href: "https://binj-web.vercel.app",
  },
  {
    name: "TweetRead",
    description: "Let your agent learn from X posts.",
    link: "tweetread.vercel.app",
    href: "https://tweetread.vercel.app/",
  },
  {
    name: "Protokoll",
    description: "Digital patient protocols for paramedics.",
    link: "nef-web.vercel.app",
    href: "https://nef-web.vercel.app/",
  },
];

interface HelpEntry {
  who: string;
  what: string;
  link?: string;
  linkLabel?: string;
  href?: string;
}

const helping: HelpEntry[] = [
  {
    who: "Agency owner",
    what: "Building her own travel app.",
    link: "bindle",
    href: "/bindle",
  },
  {
    who: "CEO",
    what: "Automating business operations with AI.",
  },
  {
    who: "Paramedics",
    what: "Digitalizing patient protocol workflows.",
  },
  {
    who: "Moms",
    what: "Building apps for their communities.",
  },
  {
    who: "Founders",
    what: "Automating daily work with AI agents.",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-text-muted pb-3 border-b border-border">
      {children}
    </div>
  );
}

function ProjectRow({ project }: { project: Project }) {
  const inner = (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="text-[0.9375rem] font-medium leading-snug mb-0.5">
          {project.name}
        </div>
        <div className="text-[0.8125rem] text-text-secondary leading-relaxed">
          {project.description}
        </div>
      </div>
      {project.link && (
        <div className="shrink-0 flex items-center gap-1 mt-0.5">
          <span className="text-[0.75rem] text-text-muted whitespace-nowrap">
            View
          </span>
          <ArrowUpRight className="text-text-faint transition-all duration-150 group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );

  if (project.href) {
    return (
      <a
        href={project.href}
        className="group block py-3.5 px-2 -mx-2 border-b border-border rounded transition-colors duration-150 hover:bg-row-hover"
        target={project.href.startsWith("/") ? undefined : "_blank"}
        rel={project.href.startsWith("/") ? undefined : "noopener"}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="block py-3.5 px-2 -mx-2 border-b border-border">
      {inner}
    </div>
  );
}

function HelpRow({ entry }: { entry: HelpEntry }) {
  const inner = (
    <div className="flex justify-between items-start gap-4">
      <div className="flex-1 min-w-0">
        <div className="text-[0.9375rem] font-medium leading-snug mb-0.5">
          {entry.who}
        </div>
        <div className="text-[0.8125rem] text-text-secondary leading-relaxed">
          {entry.what}
        </div>
      </div>
      {entry.link && (
        <div className="shrink-0 flex items-center gap-1 mt-0.5">
          <span className="text-[0.75rem] text-text-muted whitespace-nowrap">
            {entry.link}
          </span>
          <ArrowUpRight className="text-text-faint transition-all duration-150 group-hover:text-text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      )}
    </div>
  );

  if (entry.href) {
    return (
      <a
        href={entry.href}
        className="group block py-3.5 px-2 -mx-2 border-b border-border rounded transition-colors duration-150 hover:bg-row-hover"
        target={entry.href.startsWith("/") ? undefined : "_blank"}
        rel={entry.href.startsWith("/") ? undefined : "noopener"}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="block py-3.5 px-2 -mx-2 border-b border-border">
      {inner}
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-[600px] mx-auto px-6 pt-20 pb-16 max-sm:px-5 max-sm:pt-12 max-sm:pb-12">
      {/* Header */}
      <header className="mb-14">
        <h1 className="font-serif font-normal text-[1.75rem] tracking-tight leading-tight mb-3 max-sm:text-[1.5rem]">
          Florian Thompson
        </h1>
        <p className="text-[0.9375rem] text-text-secondary leading-relaxed mb-5">
          I like to build things. Technical founder based in Munich.
          <br className="max-sm:hidden" /> Previously Clarity Money,
          Goldman Sachs in New York,
          <br className="max-sm:hidden" /> then co-founded Hazil Studios,
          a Shopify agency
          <br className="max-sm:hidden" /> that launched 500+ stores
          (UPS, NYFW).
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
            href="https://github.com/florianthompson"
            target="_blank"
            rel="noopener"
            className="text-[0.8125rem] text-text-muted no-underline transition-colors duration-150 hover:text-text-primary"
          >
            GitHub
          </a>
          <span className="text-border select-none">·</span>
          <CopyEmail email="florian@hazil.studio" />
        </div>
      </header>

      {/* What I'm building */}
      <section className="mb-12">
        <SectionLabel>What I&apos;m building</SectionLabel>
        {projects.map((project) => (
          <ProjectRow key={project.name} project={project} />
        ))}
      </section>

      {/* Who I'm helping use AI */}
      <section className="mb-12">
        <SectionLabel>Who I&apos;m helping use AI</SectionLabel>
        {helping.map((entry) => (
          <HelpRow key={entry.who} entry={entry} />
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-border pt-8 mt-4">
        <div className="text-[0.75rem] text-text-muted">
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
