import { useMemo, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";
import { SiHtml5, SiReact, SiPython, SiNodedotjs } from "react-icons/si";
import { FaJava } from "react-icons/fa";

// One-page portfolio inspired by the purple, bubble-style hero you shared.
// Drop this file into a React project (e.g., src/App.tsx) with Tailwind CSS enabled.
// Libraries used: framer-motion, react-icons
// NOTE: Using FaJava (Font Awesome) instead of SiJava to avoid missing export issues in some react-icons versions.

// Helper: build the alert message for blocked external links (kept separate so we can test it)
function formatExternalLinkAlert(url: string) {
  return "External links are disabled in this preview. In production this will open in a new tab: " + url;
}

// Helper: compute the title attribute for links
function computeLinkTitle(to: string): string | undefined {
  return !to.startsWith("#") && to !== "#" ? "Opens in new tab (disabled in preview)" : undefined;
}

// SmartLink prevents the preview iframe from trying to navigate away (which shows
// "content is blocked"). It smooth-scrolls for in-page #hash links and, for
// external links (including mailto:), attempts to open a new tab; if blocked by
// the preview sandbox, it shows a brief alert. Replace '#' placeholders with real
// URLs in production.
function SmartLink({
  to,
  className,
  children,
  title,
}: {
  to: string;
  className?: string;
  children: ReactNode;
  title?: string;
}) {
  function onClick(e: MouseEvent<HTMLAnchorElement>) {
    if (!to) return;
    if (to === "#") {
      e.preventDefault();
      console.info("Demo link clicked. Replace '#' with a real URL.");
      return;
    }
    if (to.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(to);
      (el as HTMLElement | null)?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (to !== location.hash) history.replaceState(null, "", to);
      return;
    }
    e.preventDefault();
    const win = window.open(to, "_blank", "noopener,noreferrer");
    if (!win) {
      // eslint-disable-next-line no-alert
      alert(formatExternalLinkAlert(to));
    }
  }
  const computedTitle = title ?? computeLinkTitle(to);
  return (
    <a href={to} onClick={onClick} className={className} title={computedTitle}>
      {children}
    </a>
  );
}

export default function App() {
  const nav = [
    { id: "about", label: "About" },
    { id: "work", label: "Work" },
    { id: "travel", label: "Travel" },
    { id: "contact", label: "Contact" },
  ];

  const projects = [
    {
      title: "Health Tracker Dashboard",
      desc: "Responsive dashboard with charts, filters, and export — React + TypeScript.",
      tags: ["React", "TS", "Charts"],
      href: "#"
    },
    {
      title: "API Design System",
      desc: "Reusable API utilities with error handling and caching layers.",
      tags: ["Node.js", "REST", "OpenAPI"],
      href: "#"
    },
    {
      title: "JSONForms Extensions",
      desc: "Custom AJV validators, UX rules, and schema-driven components.",
      tags: ["JSON Schema", "AJV", "UX"],
      href: "#"
    },
  ];

  return (
    <div className="min-h-screen text-white bg-[radial-gradient(ellipse_at_top_right,theme(colors.indigo.900),theme(colors.violet.800))]">
      {/* Navbar */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/5">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <SmartLink to="#about" className="group inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-violet-300 ring-4 ring-violet-500/30 group-hover:ring-violet-400/40 transition" />
            <span className="font-semibold tracking-wide">SP</span>
          </SmartLink>
          <ul className="flex items-center gap-6 text-sm uppercase tracking-widest text-violet-200">
            {nav.map((n) => (
              <li key={n.id}>
                <SmartLink to={`#${n.id}`} className="hover:text-white transition-colors">{n.label}</SmartLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="about" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="relative z-10">
            <div className="h-1 w-16 bg-violet-300/80 mb-8" />
            <h1 className="text-4xl font-light leading-tight text-violet-50 sm:text-5xl">
              Hello, I’m <span className="font-semibold">Sanket Pande</span>.
              <br />a full‑stack developer
              <br />located in Pune, India
            </h1>

            <p className="mt-6 max-w-prose text-violet-200">
              I build delightful web apps with React, TypeScript, and Node.js —
              with a focus on performance, accessibility, and clean design.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-violet-200">
              <SmartLink to="#work" className="rounded-full bg-white/10 px-5 py-2 backdrop-blur hover:bg-white/15 transition">Explore</SmartLink>
              <span className="opacity-50">•</span>
              <SmartLink to="#work" className="hover:text-white">Experience</SmartLink>
              <span className="opacity-50">•</span>
              <SmartLink to="#contact" className="hover:text-white">Contact</SmartLink>
            </div>
          </div>

          {/* Skill bubbles (right) */}
          <div className="relative z-0 min-h-[420px] md:min-h-[560px]">
            <Bubbles />
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-4">
          <h2 className="text-2xl font-semibold tracking-tight">Selected Work</h2>
          <SmartLink to="#" className="text-sm text-violet-200 hover:text-white">View all</SmartLink>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20">
              <h3 className="text-lg font-medium group-hover:text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-violet-200">{p.desc}</p>
              <ul className="mt-4 flex flex-wrap gap-2 text-xs text-violet-200">
                {p.tags.map((t) => (
                  <li key={t} className="rounded-full bg-white/10 px-2 py-1">{t}</li>
                ))}
              </ul>
              <div className="mt-5">
                <SmartLink to={p.href} className="text-sm text-violet-200 underline decoration-violet-300/40 underline-offset-4 hover:text-white">Case study →</SmartLink>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Travel / Writing */}
      <section id="travel" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-6 text-2xl font-semibold tracking-tight">Writing & Notes</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {[
            {
              title: "Designing schema-driven forms with JSON Schema",
              date: "Aug 2025",
            },
            { title: "Docker + Pi: a tidy homelab stack", date: "Aug 2025" },
          ].map((p) => (
            <SmartLink key={p.title} to="#" className="block rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20">
              <p className="text-sm text-violet-200">{p.date}</p>
              <h3 className="mt-2 text-lg font-medium text-white/90">{p.title}</h3>
              <p className="mt-2 text-sm text-violet-200">Read more →</p>
            </SmartLink>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10 md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight">Let’s build something great</h2>
          <p className="mt-2 max-w-prose text-violet-200">
            I’m open to full-time roles and interesting freelance work. If my
            work resonates, drop a note and I’ll get back within a day.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <SmartLink
              to="mailto:hello@sanket.dev?subject=Project%20inquiry"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-violet-900 hover:bg-violet-50"
            >
              Email me
            </SmartLink>
            <SmartLink
              to="#"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
            >
              Download résumé
            </SmartLink>
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-6xl px-6 py-12 text-center text-sm text-violet-200">
        © {new Date().getFullYear()} Sanket Pande · Built with React & Tailwind
      </footer>
    </div>
  );
}

function Bubbles() {
  const items = useMemo(
    () => [
      {
        key: "html",
        size: 88,
        x: "right-8 md:right-24",
        y: "top-10",
        color: "from-violet-300 to-violet-200",
        label: "HTML",
        Icon: SiHtml5,
      },
      {
        key: "react",
        size: 128,
        x: "right-8 md:right-10",
        y: "top-32",
        color: "from-violet-200 to-violet-100",
        label: "React",
        Icon: SiReact,
      },
      {
        key: "python",
        size: 136,
        x: "right-24",
        y: "top-56 md:top-48",
        color: "from-violet-400 to-violet-300",
        label: "Python",
        Icon: SiPython,
      },
      {
        key: "node",
        size: 120,
        x: "right-36 md:right-56",
        y: "top-80 md:top-72",
        color: "from-violet-200 to-violet-100",
        label: "Node.js",
        Icon: SiNodedotjs,
      },
      {
        key: "java",
        size: 180,
        x: "right-4 md:right-10",
        y: "top-96 md:top-80",
        color: "from-violet-300 to-violet-200",
        label: "Java",
        Icon: FaJava,
      },
      // subtle back bubbles
      { key: "b1", size: 80, x: "right-2 md:right-6", y: "top-2", color: "from-violet-700 to-violet-800", label: "", Icon: null },
      { key: "b2", size: 120, x: "right-40", y: "top-14", color: "from-violet-700 to-violet-800", label: "", Icon: null },
      { key: "b3", size: 96, x: "right-16", y: "top-64", color: "from-violet-700 to-violet-800", label: "", Icon: null },
    ],
    []
  );

  return (
    <div className="absolute inset-0">
      {items.map((b, idx) => (
        <FloatingBubble {...b} delay={idx * 0.12} key={b.key} />
      ))}
    </div>
  );
}

function FloatingBubble({
  size,
  x,
  y,
  color,
  label,
  Icon,
  delay = 0,
}: {
  size: number;
  x: string;
  y: string;
  color: string;
  label: string;
  Icon: any;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12, delay }}
      className={`absolute ${x} ${y}`}
      style={{ width: size, height: size }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 6 + Math.random() * 2, repeat: Infinity }}
        className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${color} text-indigo-950 shadow-xl shadow-indigo-950/10 ring-1 ring-white/20`}
      >
        {Icon ? (
          <div className="flex flex-col items-center justify-center">
            <Icon className="text-2xl opacity-90" />
            <span className="mt-1 text-xs font-semibold opacity-90">{label}</span>
          </div>
        ) : (
          <span className="sr-only">decorative bubble</span>
        )}
      </motion.div>
    </motion.div>
  );
}

// Dev sanity checks (lightweight tests): ensure required icons resolved and helper functions behave.
function _devIconSanityCheck() {
  const required: Record<string, any> = { SiHtml5, SiReact, SiPython, SiNodedotjs, FaJava };
  const missing = Object.entries(required).filter(([, v]) => !v).map(([k]) => k);
  if (missing.length) {
    // eslint-disable-next-line no-console
    console.error("Missing react-icons exports:", missing.join(", "));
  }
}

function _devHelperTests() {
  try {
    // formatExternalLinkAlert tests
    const url = "https://example.com";
    const msg = formatExternalLinkAlert(url);
    console.assert(msg.includes(url), "Alert message should include the URL");
    console.assert(msg.endsWith(url), "Alert message should end with the URL");
    console.assert(msg.includes(": "), "Alert message should contain a colon and space");

    // computeLinkTitle tests
    console.assert(computeLinkTitle("#about") === undefined, "Hash link should have undefined title");
    console.assert(computeLinkTitle("#") === undefined, "Placeholder '#' should have undefined title");
    console.assert(typeof computeLinkTitle("https://x.dev") === "string", "External link should have a title");
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("Dev helper tests failed:", err);
  }
}

if (typeof window !== "undefined") {
  _devIconSanityCheck();
  _devHelperTests();
}
