"use client";

import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import {
  DashboardMockup,
  RepoMappingMockup,
  SettingsMockup,
  SshMockup,
} from "../mockups";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";
import { AnimatePresence, motion } from "motion/react";

const viewIds = ["dashboard", "profiles", "ssh", "settings"] as const;
type ViewId = (typeof viewIds)[number];

const viewMockup: Record<ViewId, React.ReactNode> = {
  dashboard: <DashboardMockup />,
  profiles: <RepoMappingMockup />,
  ssh: <SshMockup />,
  settings: <SettingsMockup />,
};

export function Screenshots() {
  const [active, setActive] = useState<ViewId>("dashboard");
  const { t } = useTranslation();

  return (
    <Section id="screenshots">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-center lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t("screenshots.eyebrow")}
            title={
              <Trans
                i18nKey="screenshots.title"
                components={{ grad: <span className="text-gradient" /> }}
              />
            }
            description={t("screenshots.description")}
          />

          <div
            role="tablist"
            aria-label="App screenshots"
            className="mt-10 flex flex-col gap-1.5"
          >
            {viewIds.map((id) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActive(id)}
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
                    {t(`screenshots.${id}.label`)}
                  </span>
                  {isActive && (
                    <p className="mt-1 text-[13px] leading-relaxed text-subtle">
                      {t(`screenshots.${id}.caption`)}
                    </p>
                  )}
                </button>
              );
            })}
          </div>
        </div>

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
              {viewMockup[active]}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </Section>
  );
}
