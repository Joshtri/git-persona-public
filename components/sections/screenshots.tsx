"use client";

import { useState } from "react";
import {
  DashboardMockup,
  RepoMappingMockup,
  SettingsMockup,
  SshMockup,
} from "../mockups";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";
import { AnimatePresence, motion } from "motion/react";

const views = [
  {
    id: "dashboard",
    label: "Dashboard",
    caption: "Every identity and its status, at a glance.",
  },
  {
    id: "profiles",
    label: "Repository Mapping",
    caption: "Folders bound to identities — switching happens by location.",
  },
  {
    id: "ssh",
    label: "SSH Keys",
    caption: "Keys generated, routed, and verified per profile.",
  },
  {
    id: "settings",
    label: "Settings",
    caption: "Guards, auto-switching, and signing — dark mode by default.",
  },
] as const;

type ViewId = (typeof views)[number]["id"];

export function Screenshots() {
  const [active, setActive] = useState<ViewId>("dashboard");

  return (
    <Section id="screenshots">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-16">
        {/* Left: heading + vertical tabs, each revealing its caption when active */}
        <div>
          <SectionHeading
            align="left"
            eyebrow="Inside the app"
            title={
              <>
                A tool you&apos;ll <span className="text-gradient">want</span> to
                open.
              </>
            }
            description="Native-feeling, dark by default, fast as a light switch."
          />

          <div
            role="tablist"
            aria-label="App screenshots"
            className="mt-10 flex flex-col gap-1.5"
          >
            {views.map((v) => {
              const isActive = active === v.id;
              return (
                <button
                  key={v.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(v.id)}
                  className={`rounded-xl border px-4 py-3 text-left transition-all ${
                    isActive
                      ? "border-accent/30 bg-accent/[0.08]"
                      : "border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <span
                    className={`text-sm font-semibold tracking-tight transition-colors ${
                      isActive ? "text-accent-soft" : "text-muted"
                    }`}
                  >
                    {v.label}
                  </span>
                  {isActive && (
                    <p className="mt-1 text-[13px] leading-relaxed text-subtle">
                      {v.caption}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: live mockup */}
        <Reveal className="relative">
          <div aria-hidden className="glow absolute -inset-12 -z-10 opacity-50" />
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              {active === "dashboard" && <DashboardMockup />}
              {active === "profiles" && <RepoMappingMockup />}
              {active === "ssh" && <SshMockup />}
              {active === "settings" && <SettingsMockup />}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}
