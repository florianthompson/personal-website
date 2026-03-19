"use client";

import { useState } from "react";

/* ── Tiny SVG helpers ── */

function CheckSvg() {
  return (
    <svg viewBox="0 0 14 14" fill="none" style={{ width: 11, height: 11 }}>
      <path
        d="M2 7.5L5.5 11L12 3"
        stroke="#fff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRight({ style }: { style?: React.CSSProperties }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 16 16"
      fill="none"
      style={style}
    >
      <path
        d="M6 4L10 8L6 12"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ── Nav ── */

function Nav() {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "rgba(6,6,10,0.8)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div
          style={{
            background: "var(--red)",
            color: "#fff",
            fontFamily: "var(--mono)",
            fontWeight: 800,
            fontSize: 12,
            letterSpacing: "0.05em",
            padding: "7px 9px",
            borderRadius: 8,
            lineHeight: 1,
          }}
        >
          NEF
        </div>
        <span
          style={{
            fontWeight: 800,
            fontSize: 16,
            letterSpacing: "-0.02em",
            color: "#fff",
          }}
        >
          Protokoll
        </span>
      </div>
      <a
        href="#waitlist"
        style={{
          background: "var(--red)",
          color: "#fff",
          border: "none",
          padding: "10px 22px",
          borderRadius: 10,
          fontFamily: "var(--sans)",
          fontWeight: 700,
          fontSize: 14,
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-1px)";
          e.currentTarget.style.boxShadow = "0 4px 24px rgba(239,68,68,0.3)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "";
          e.currentTarget.style.boxShadow = "";
        }}
      >
        Auf Warteliste →
      </a>
    </nav>
  );
}

/* ── Hero ── */

function Hero() {
  return (
    <section
      style={{
        position: "relative",
        padding: "160px 40px 100px",
        maxWidth: 1200,
        margin: "0 auto",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)",
          top: -200,
          right: -100,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 8,
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: 100,
          padding: "8px 18px 8px 10px",
          fontSize: 13,
          fontWeight: 600,
          color: "var(--text-muted)",
          marginBottom: 32,
          animation: "fadeUp 0.6s ease both",
        }}
      >
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "var(--green)",
            animation: "pulse-dot 2s ease infinite",
          }}
        />
        In Entwicklung — Bald verfügbar
      </div>

      <h1
        style={{
          fontSize: "clamp(42px, 6vw, 76px)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1.05,
          color: "#fff",
          marginBottom: 24,
          animation: "fadeUp 0.6s ease 0.1s both",
        }}
      >
        Schichtübergabe.
        <br />
        <span
          style={{
            background: "linear-gradient(135deg, var(--red), #f97316)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Digital. Sicher. Lückenlos.
        </span>
      </h1>

      <p
        style={{
          fontSize: "clamp(17px, 2vw, 20px)",
          lineHeight: 1.6,
          color: "var(--text-muted)",
          maxWidth: 600,
          margin: "0 auto 48px",
          fontWeight: 500,
          animation: "fadeUp 0.6s ease 0.2s both",
        }}
      >
        Das digitale Übergabeprotokoll für Rettungsdienste. Fahrzeuge,
        Medikamente und Ausrüstung — alles geprüft, dokumentiert und in
        Echtzeit synchronisiert.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 16,
          flexWrap: "wrap",
          animation: "fadeUp 0.6s ease 0.3s both",
        }}
      >
        <a
          href="#waitlist"
          style={{
            background: "var(--red)",
            color: "#fff",
            border: "none",
            padding: "16px 36px",
            borderRadius: 14,
            fontFamily: "var(--sans)",
            fontWeight: 800,
            fontSize: 17,
            cursor: "pointer",
            transition: "transform 0.2s, box-shadow 0.2s",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-2px)";
            e.currentTarget.style.boxShadow =
              "0 8px 32px rgba(239,68,68,0.35)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M3 9.5L7 13.5L15 5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Benachrichtigt werden
        </a>
        <a
          href="#demo"
          style={{
            background: "var(--surface)",
            color: "var(--text)",
            border: "1px solid var(--border)",
            padding: "16px 36px",
            borderRadius: 14,
            fontFamily: "var(--sans)",
            fontWeight: 700,
            fontSize: 17,
            cursor: "pointer",
            transition: "border-color 0.2s, background 0.2s",
            textDecoration: "none",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
            e.currentTarget.style.background = "rgba(255,255,255,0.04)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "";
            e.currentTarget.style.background = "";
          }}
        >
          Demo ansehen ↓
        </a>
      </div>
    </section>
  );
}

/* ── Stats ── */

function StatsBar() {
  const stats = [
    { num: "91", label: "Prüfpositionen" },
    { num: "4", label: "Kategorien" },
    { num: "<2 min", label: "Pro Übergabe" },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 48,
        padding: "48px 40px",
        maxWidth: 800,
        margin: "0 auto",
        animation: "fadeUp 0.6s ease 0.4s both",
      }}
    >
      {stats.map((s) => (
        <div key={s.label} style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 36,
              fontWeight: 700,
              color: "#fff",
              letterSpacing: "-0.03em",
            }}
          >
            {s.num}
          </div>
          <div
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--text-muted)",
              marginTop: 4,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Benefits ── */

const benefits = [
  {
    icon: "📋",
    bg: "rgba(239,68,68,0.1)",
    title: "Vollständige Checkliste",
    desc: "Alle 91 Prüfpositionen aus dem NEF-Protokoll — Fahrzeug, Ausrüstung, 68 Medikamente und Betäubungsmittel. Nichts wird vergessen.",
  },
  {
    icon: "📝",
    bg: "rgba(245,158,11,0.1)",
    title: "Schichtnotizen & Übergabe",
    desc: "Offene Mängel werden der nächsten Schicht angezeigt. Jede Crew sieht sofort, was noch aussteht — mit Bestätigungsfunktion.",
  },
  {
    icon: "🏢",
    bg: "rgba(139,92,246,0.1)",
    title: "Leitstelle-Zuweisung",
    desc: "Aufgaben die Disposition, Beschaffung oder Werkstatt erfordern, werden direkt an die Leitstelle weitergeleitet — mit Tracking.",
  },
  {
    icon: "🚗",
    bg: "rgba(34,197,94,0.1)",
    title: "Fahrzeug-Zuordnung",
    desc: "Jedes Protokoll wird einem Fahrzeug zugeordnet. Mehrere NEF? Kein Problem — jedes Fahrzeug hat seinen eigenen Status und Historie.",
  },
  {
    icon: "⚡",
    bg: "rgba(59,130,246,0.1)",
    title: "Schnelle Erfassung",
    desc: "\u201EAlle auswählen\u201C pro Kategorie, klare Fortschrittsanzeige und optimiert für den Einsatz auf dem Smartphone — auch mit Handschuhen.",
  },
  {
    icon: "🔒",
    bg: "rgba(236,72,153,0.1)",
    title: "BTM-Dokumentation",
    desc: "Betäubungsmittel werden separat erfasst — ohne Sammel-Check. Fentanyl, Morphin und Piritramid einzeln verifiziert und dokumentiert.",
  },
];

function Benefits() {
  return (
    <section
      style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 40px" }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--red)",
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Warum NEF Protokoll
      </div>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#fff",
          textAlign: "center",
          marginBottom: 64,
        }}
      >
        Schluss mit Papierprotokollen
        <br />
        und vergessenen Checks
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 20,
        }}
        className="benefits-grid"
      >
        {benefits.map((b) => (
          <div
            key={b.title}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 18,
              padding: "32px 28px",
              transition: "border-color 0.3s, transform 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
              e.currentTarget.style.transform = "translateY(-4px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.transform = "";
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                marginBottom: 20,
                background: b.bg,
              }}
            >
              {b.icon}
            </div>
            <h3
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#fff",
                marginBottom: 8,
                letterSpacing: "-0.01em",
              }}
            >
              {b.title}
            </h3>
            <p
              style={{
                fontSize: 14,
                lineHeight: 1.6,
                color: "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              {b.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ── Phone Demo ── */

function MiniCheckItem({
  done,
  label,
}: {
  done: boolean;
  label: string;
}) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderBottom: "1px solid rgba(255,255,255,0.02)",
      }}
    >
      <div
        style={{
          width: 18,
          height: 18,
          minWidth: 18,
          borderRadius: 5,
          border: done
            ? "2px solid var(--green)"
            : "2px solid rgba(255,255,255,0.15)",
          background: done ? "var(--green)" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {done && <CheckSvg />}
      </div>
      <span
        style={{
          fontSize: 12,
          fontWeight: 500,
          color: "var(--text)",
          opacity: done ? 0.4 : 1,
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function MiniSection({
  icon,
  title,
  count,
  countColor,
  barWidth,
  barColor,
  chevronRotated,
  children,
}: {
  icon: string;
  title: string;
  count: string;
  countColor?: string;
  barWidth: string;
  barColor: string;
  chevronRotated?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      style={{
        margin: "0 16px 6px",
        background: "var(--surface2)",
        borderRadius: 12,
        border: "1px solid rgba(255,255,255,0.04)",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "12px 12px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 28,
              height: 28,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "rgba(255,255,255,0.04)",
              borderRadius: 7,
              fontSize: 15,
            }}
          >
            {icon}
          </div>
          <div>
            <div
              style={{ fontSize: 13, fontWeight: 700, color: "#fff" }}
            >
              {title}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 10,
                fontWeight: 600,
                color: countColor || "var(--text-muted)",
              }}
            >
              {count}
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div
            style={{
              width: 32,
              height: 3,
              background: "rgba(255,255,255,0.06)",
              borderRadius: 100,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "100%",
                width: barWidth,
                background: barColor,
                borderRadius: 100,
              }}
            />
          </div>
          <ChevronRight
            style={chevronRotated ? { transform: "rotate(90deg)" } : undefined}
          />
        </div>
      </div>
      {children && (
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          {children}
        </div>
      )}
    </div>
  );
}

function PhoneDemo() {
  return (
    <section
      id="demo"
      style={{
        position: "relative",
        maxWidth: 1100,
        margin: "0 auto",
        padding: "80px 40px 100px",
      }}
    >
      <div
        style={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          color: "var(--red)",
          marginBottom: 16,
          textAlign: "center",
        }}
      >
        Interaktive Demo
      </div>
      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#fff",
          textAlign: "center",
          marginBottom: 16,
        }}
      >
        So sieht die App aus
      </h2>
      <p
        style={{
          textAlign: "center",
          fontSize: 16,
          color: "var(--text-muted)",
          fontWeight: 500,
          marginBottom: 48,
        }}
      >
        Scrolle durch das Protokoll — direkt im Browser
      </p>

      {/* Phone frame */}
      <div
        style={{
          width: 375,
          margin: "0 auto",
          background: "#0a0a0b",
          borderRadius: 36,
          border: "2px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03), 0 0 120px rgba(239,68,68,0.06)",
          overflow: "hidden",
          position: "relative",
        }}
        className="phone-frame"
      >
        {/* Notch */}
        <div
          style={{
            width: 120,
            height: 28,
            background: "#0a0a0b",
            borderRadius: "0 0 18px 18px",
            margin: "0 auto",
            position: "relative",
            zIndex: 5,
          }}
        />

        {/* Phone content */}
        <div
          style={{
            padding: "0 0 20px",
            maxHeight: 680,
            overflowY: "auto",
            scrollbarWidth: "none",
          }}
        >
          {/* Status bar */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "6px 20px",
            }}
          >
            <span
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                fontWeight: 600,
                opacity: 0.4,
              }}
            >
              14:32
            </span>
            <div style={{ display: "flex", gap: 6 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 10,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 100,
                  color: "var(--amber)",
                  background: "rgba(245,158,11,0.1)",
                }}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <path
                    d="M2 3.5h11M2 7h7M2 10.5h9"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                1 offen
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                  fontSize: 10,
                  fontWeight: 600,
                  padding: "3px 8px",
                  borderRadius: 100,
                  color: "var(--purple)",
                  background: "rgba(139,92,246,0.1)",
                }}
              >
                <svg
                  width="11"
                  height="11"
                  viewBox="0 0 13 13"
                  fill="none"
                >
                  <rect
                    x="1"
                    y="3"
                    width="11"
                    height="8"
                    rx="1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M4 1v2M9 1v2"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                  />
                  <circle
                    cx="6.5"
                    cy="7"
                    r="1.5"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
                2 Leitstelle
              </div>
            </div>
          </div>

          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 20px 10px",
            }}
          >
            <div
              style={{
                background: "var(--red)",
                color: "#fff",
                fontFamily: "var(--mono)",
                fontWeight: 800,
                fontSize: 11,
                padding: "8px 9px",
                borderRadius: 8,
                lineHeight: 1,
              }}
            >
              NEF
            </div>
            <div>
              <h3
                style={{
                  fontSize: 18,
                  fontWeight: 800,
                  color: "#fff",
                  letterSpacing: "-0.02em",
                  margin: 0,
                }}
              >
                Schichtprotokoll
              </h3>
              <p
                style={{
                  fontSize: 11,
                  color: "var(--text-muted)",
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Fahrzeug-Übergabecheck
              </p>
            </div>
          </div>

          {/* Vehicle */}
          <div style={{ margin: "4px 16px 12px" }}>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--text-muted)",
                marginBottom: 6,
              }}
            >
              Fahrzeug
            </div>
            <div
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "11px 14px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#fff" }}>
                  MB RK 2233
                </div>
                <div
                  style={{
                    fontSize: 11,
                    color: "var(--text-muted)",
                  }}
                >
                  NEF
                </div>
              </div>
              <ChevronRight />
            </div>
          </div>

          {/* Progress */}
          <div style={{ margin: "0 18px 14px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginBottom: 6,
              }}
            >
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  opacity: 0.4,
                }}
              >
                Fortschritt
              </span>
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 13,
                  fontWeight: 700,
                }}
              >
                <span style={{ color: "var(--red)" }}>32</span> / 91
              </span>
            </div>
            <div
              style={{
                height: 4,
                background: "rgba(255,255,255,0.06)",
                borderRadius: 100,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "35%",
                  background: "var(--red)",
                  borderRadius: 100,
                  animation: "progressGrow 2s ease 1s both",
                }}
              />
            </div>
          </div>

          {/* Sections */}
          <MiniSection
            icon="🚗"
            title="Fahrzeug"
            count="8/8 ✓"
            countColor="var(--green)"
            barWidth="100%"
            barColor="var(--green)"
          />

          <MiniSection
            icon="🧰"
            title="Ausrüstung"
            count="9/12"
            barWidth="75%"
            barColor="var(--red)"
            chevronRotated
          >
            <MiniCheckItem done label="EKG" />
            <MiniCheckItem done label="Medumat" />
            <MiniCheckItem done label="Sauerstoff / Ersatzflasche" />
            <MiniCheckItem done={false} label="Absauger" />
            <MiniCheckItem done label="Videolaryngoskop" />
            <MiniCheckItem done={false} label="Ozo-Bohrer" />
            <MiniCheckItem done label="Perfusor" />
            <MiniCheckItem done label="REBEL-Tasche" />
            <MiniCheckItem done={false} label="Thoraxdrainage-Set" />
            <MiniCheckItem done label="Beckenschlinge" />
          </MiniSection>

          <MiniSection
            icon="💊"
            title="Medikamente"
            count="12/68"
            barWidth="18%"
            barColor="var(--red)"
          />

          <MiniSection
            icon="🔒"
            title="Betäubungsmittel"
            count="3/3 ✓"
            countColor="var(--green)"
            barWidth="100%"
            barColor="var(--green)"
          />

          {/* Submit button */}
          <div style={{ margin: "16px 16px 0" }}>
            <div
              style={{
                width: "100%",
                padding: 14,
                background: "var(--red)",
                borderRadius: 12,
                textAlign: "center",
              }}
            >
              <div
                style={{ color: "#fff", fontSize: 15, fontWeight: 800 }}
              >
                Protokoll absenden
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: 11,
                  fontWeight: 600,
                  fontFamily: "var(--mono)",
                  marginTop: 2,
                }}
              >
                32/91 geprüft
              </div>
            </div>
            <p
              style={{
                textAlign: "center",
                fontSize: 11,
                color: "var(--amber)",
                marginTop: 8,
                fontWeight: 500,
              }}
            >
              ⚠ 59 Positionen nicht geprüft — wird bei Abgabe markiert
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Waitlist ── */

function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit() {
    if (!email || !email.includes("@")) {
      setError(true);
      return;
    }
    setSubmitted(true);
  }

  return (
    <section
      id="waitlist"
      style={{
        position: "relative",
        maxWidth: 700,
        margin: "0 auto",
        padding: "80px 40px 120px",
        textAlign: "center",
      }}
    >
      {/* Glow */}
      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)",
          bottom: -200,
          left: -150,
          pointerEvents: "none",
        }}
      />

      <h2
        style={{
          fontSize: "clamp(28px, 4vw, 42px)",
          fontWeight: 800,
          letterSpacing: "-0.03em",
          color: "#fff",
          marginBottom: 12,
        }}
      >
        Bereit für die digitale Übergabe?
      </h2>
      <p
        style={{
          fontSize: 17,
          color: "var(--text-muted)",
          fontWeight: 500,
          lineHeight: 1.6,
          marginBottom: 40,
        }}
      >
        Wir informieren dich, sobald NEF Protokoll verfügbar ist. Kein Spam
        — nur ein Ping zum Launch.
      </p>

      {!submitted ? (
        <div>
          <div
            style={{
              display: "flex",
              gap: 12,
              maxWidth: 480,
              margin: "0 auto",
            }}
            className="waitlist-form"
          >
            <input
              type="email"
              placeholder="deine@email.de"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setError(false);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              style={{
                flex: 1,
                background: "var(--surface)",
                border: error
                  ? "1px solid #ef4444"
                  : "1px solid var(--border)",
                borderRadius: 14,
                padding: "16px 20px",
                fontFamily: "var(--sans)",
                fontSize: 16,
                fontWeight: 500,
                color: "var(--text)",
                outline: "none",
                transition: "border-color 0.2s",
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: "var(--red)",
                color: "#fff",
                border: "none",
                padding: "16px 28px",
                borderRadius: 14,
                fontFamily: "var(--sans)",
                fontWeight: 800,
                fontSize: 16,
                cursor: "pointer",
                transition: "transform 0.2s, box-shadow 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow =
                  "0 8px 32px rgba(239,68,68,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "";
                e.currentTarget.style.boxShadow = "";
              }}
            >
              Eintragen
            </button>
          </div>
          <p
            style={{
              fontSize: 13,
              color: "rgba(255,255,255,0.2)",
              marginTop: 16,
              fontWeight: 500,
            }}
          >
            Kostenlos · Kein Spam · Jederzeit abmeldbar
          </p>
        </div>
      ) : (
        <div style={{ animation: "fadeUp 0.4s ease both" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "rgba(34,197,94,0.1)",
              border: "2px solid rgba(34,197,94,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
            }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 12.5L10 17.5L19 7"
                stroke="#22c55e"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Du bist dabei!
          </h3>
          <p
            style={{
              fontSize: 15,
              color: "var(--text-muted)",
              marginBottom: 0,
            }}
          >
            Wir melden uns, sobald NEF Protokoll live geht.
          </p>
        </div>
      )}
    </section>
  );
}

/* ── Divider ── */

function SectionDivider() {
  return (
    <div
      style={{
        height: 1,
        maxWidth: 1100,
        margin: "0 auto",
        background:
          "linear-gradient(90deg, transparent, var(--border), transparent)",
      }}
    />
  );
}

/* ── Page ── */

export default function NefProtokoll() {
  return (
    <>
      <Nav />
      <Hero />
      <StatsBar />
      <SectionDivider />
      <Benefits />
      <SectionDivider />
      <PhoneDemo />
      <SectionDivider />
      <Waitlist />
      <footer
        style={{
          borderTop: "1px solid var(--border)",
          padding: "32px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: 1200,
          margin: "0 auto",
        }}
        className="nef-footer"
      >
        <span
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.2)",
            fontWeight: 500,
          }}
        >
          © 2026 NEF Protokoll
        </span>
        <span
          style={{
            fontSize: 13,
            color: "rgba(255,255,255,0.2)",
            fontWeight: 500,
          }}
        >
          Entwickelt für den Rettungsdienst
        </span>
      </footer>
    </>
  );
}
