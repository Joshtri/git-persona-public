"use client";

import { useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "motion/react";
import {
  Check,
  Key as KeyRound,
  ArrowsRotateRight as Loader2,
  Envelope as Mail,
  ShieldCheck,
  Person as User,
} from "@gravity-ui/icons";
import { useCallback, useEffect, useRef } from "react";
import { AppWindow } from "../app-window";
import { Section, SectionHeading } from "../ui/section";
import { Reveal } from "../ui/reveal";

const DICEBEAR = "https://api.dicebear.com/9.x/avataaars/svg";

const demoProfiles = [
  {
    id: "personal",
    name: "Personal",
    email: "sara@hey.com",
    user: "sara-codes",
    key: "id_ed25519_personal",
    color: "#218bd0",
    avatar: `${DICEBEAR}?seed=SaraPersonal&backgroundColor=b6e3f4&clothingColor=3c4f5c`,
  },
  {
    id: "company",
    name: "Company",
    email: "sara.k@acme.dev",
    user: "sara-acme",
    key: "id_ed25519_acme",
    color: "#0ea5e9",
    avatar: `${DICEBEAR}?seed=SaraCompany&backgroundColor=c0aede&clothingColor=1d5f8a`,
  },
  {
    id: "client",
    name: "Client A",
    email: "sara@novastudio.io",
    user: "sara-nova",
    key: "id_rsa_nova",
    color: "#c2820b",
    avatar: `${DICEBEAR}?seed=SaraClient&backgroundColor=ffd5dc&clothingColor=7c4a03`,
  },
] as const;

type Phase = "idle" | "switching" | "done";

export function Preview() {
  const [activeId, setActiveId] = useState<string>("personal");
  const [phase, setPhase] = useState<Phase>("idle");
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const { t } = useTranslation();

  useEffect(() => {
    const pending = timers.current;
    return () => pending.forEach(clearTimeout);
  }, []);

  const switchTo = useCallback(
    (id: string) => {
      if (id === activeId || phase === "switching") return;
      setPhase("switching");
      timers.current.push(
        setTimeout(() => {
          setActiveId(id);
          setPhase("done");
        }, 650),
        setTimeout(() => setPhase("idle"), 2400),
      );
    },
    [activeId, phase],
  );

  const active = demoProfiles.find((p) => p.id === activeId) ?? demoProfiles[0];

  return (
    <Section id="preview">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
        <SectionHeading
          align="left"
          eyebrow={t("preview.eyebrow")}
          title={
            <Trans
              i18nKey="preview.title"
              components={{ grad: <span className="text-gradient" /> }}
            />
          }
          description={t("preview.description")}
        />

        <Reveal className="relative">
          <div className="glow absolute inset-x-0 -z-10 mx-auto h-64 max-w-lg opacity-60" />
          <AppWindow title="GitPersona — Quick Switch">
            <div className="grid bg-surface sm:grid-cols-[220px_1fr]">
              {/* Profile list */}
              <div
                role="tablist"
                aria-label="Demo profiles"
                className="flex flex-row gap-1.5 border-b border-white/[0.06] p-3 sm:flex-col sm:border-r sm:border-b-0"
              >
                <p className="hidden px-2 pt-1 pb-2 text-[10px] font-semibold tracking-widest text-subtle uppercase sm:block">
                  {t("preview.profiles")}
                </p>
                {demoProfiles.map((p) => {
                  const isActive = p.id === activeId;
                  return (
                    <button
                      key={p.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => switchTo(p.id)}
                      style={
                        isActive
                          ? {
                              borderColor: `${p.color}55`,
                              backgroundColor: `${p.color}14`,
                            }
                          : undefined
                      }
                      className={`group flex flex-1 items-center gap-2.5 rounded-xl border px-2.5 py-2 text-left transition-all sm:flex-none ${
                        isActive
                          ? "text-foreground"
                          : "border-transparent hover:bg-white/[0.03]"
                      }`}
                    >
                      <span
                        aria-hidden
                        className="flex size-9 shrink-0 overflow-hidden rounded-full transition-transform group-hover:scale-105"
                        style={{ border: `1.5px solid ${p.color}55` }}
                      >
                        <img
                          src={p.avatar}
                          alt={p.name}
                          width={36}
                          height={36}
                          className="size-full object-cover"
                          loading="eager"
                        />
                      </span>
                      <span className="flex min-w-0 flex-col">
                        <span
                          className={`truncate text-[12.5px] font-semibold leading-tight ${
                            isActive ? "text-foreground" : "text-muted"
                          }`}
                        >
                          {p.name}
                        </span>
                        <span className="hidden truncate text-[10.5px] text-subtle sm:block">
                          {p.email}
                        </span>
                      </span>
                      {isActive && (
                        <Check
                          className="ml-auto hidden size-4 shrink-0 sm:block"
                          style={{ color: p.color }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Result panel */}
              <div className="relative min-h-[280px] p-5">
                <AnimatePresence mode="wait">
                  {phase === "switching" ? (
                    <motion.div
                      key="switching"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex h-full flex-col items-center justify-center gap-3 text-muted"
                    >
                      <Loader2 className="size-6 animate-spin text-accent-soft" />
                      <p className="font-mono text-[11px]">
                        {t("preview.switchingStatus")}
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={active.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      <div className="space-y-2 rounded-xl border border-white/[0.06] bg-black/10 p-4 font-mono text-[11.5px]">
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-subtle">
                            <User className="size-3.5" /> user.name
                          </span>
                          <span className="text-foreground">Sara Kim</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-subtle">
                            <Mail className="size-3.5" /> user.email
                          </span>
                          <span style={{ color: active.color }}>
                            {active.email}
                          </span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-subtle">
                            <KeyRound className="size-3.5" /> ssh key
                          </span>
                          <span style={{ color: active.color }}>{active.key}</span>
                        </div>
                        <div className="flex items-center justify-between gap-4">
                          <span className="flex items-center gap-2 text-subtle">
                            <ShieldCheck className="size-3.5" /> github.com
                          </span>
                          <span style={{ color: active.color }}>
                            @{active.user}
                          </span>
                        </div>
                      </div>

                      <p className="text-center font-mono text-[10.5px] text-subtle">
                        {phase === "done"
                          ? t("preview.timingNoTerminal")
                          : `${t("preview.activeProfile")}: ${active.name}`}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {phase === "done" && (
                    <motion.div
                      key="toast"
                      initial={{ opacity: 0, y: -12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.96 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="pointer-events-none absolute top-3 right-3 left-3 z-10 flex items-center gap-2 rounded-lg border border-success/25 bg-success/[0.08] px-3.5 py-2.5 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.6)] backdrop-blur-md sm:left-auto"
                    >
                      <Check className="size-4 shrink-0 text-success" />
                      <div>
                        <p className="text-[12px] font-semibold text-success">
                          {t("preview.switchComplete")}
                        </p>
                        <p className="text-[10.5px] text-subtle">
                          {t("preview.everythingUpdated")}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </AppWindow>
        </Reveal>
      </div>
    </Section>
  );
}
