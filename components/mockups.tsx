import {
  BranchesDown,
  Check,
  ChevronsExpandVertical,
  CircleCheck,
  CircleInfo,
  Folder,
  Gear,
  House,
  Key,
  ListTimeline,
  Lock,
  Person,
  Sliders,
} from "@gravity-ui/icons";
import Image from "next/image";
import type { ComponentType, ReactNode, SVGAttributes } from "react";
import { AppWindow } from "./app-window";

type Icon = ComponentType<SVGAttributes<SVGElement>>;

/* ------------------------------------------------------------------ *
 * Shared pieces — mirror the real GitPersona desktop app (gitswitch-desktop)
 * ------------------------------------------------------------------ */

function Avatar({
  initials,
  tone = "bg-accent/25 text-accent-soft",
  size = "size-8 text-[11px]",
}: {
  initials: string;
  tone?: string;
  size?: string;
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center rounded-full font-semibold ${tone} ${size}`}
    >
      {initials}
    </span>
  );
}

function Badge({
  children,
  variant = "default",
}: {
  children: ReactNode;
  variant?: "default" | "success" | "warning";
}) {
  const tones = {
    default: "bg-white/[0.06] text-muted",
    success: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
  } as const;
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[9.5px] font-semibold ${tones[variant]}`}
    >
      {children}
    </span>
  );
}

type SidebarView =
  | "dashboard"
  | "profiles"
  | "repos"
  | "ssh"
  | "credentials"
  | "rules"
  | "activity"
  | "settings"
  | "about";

function NavItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: Icon;
  label: string;
  active?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center gap-2.5 rounded-md px-2.5 py-1.5 text-[12px] ${
        active
          ? "bg-accent/15 font-medium text-accent-soft"
          : "text-subtle hover:text-muted"
      }`}
    >
      {active && (
        <span className="absolute top-1 bottom-1 left-0 w-0.5 rounded-full bg-accent" />
      )}
      <Icon className="size-3.5 shrink-0" />
      {label}
    </div>
  );
}

function NavGroup({
  label,
  items,
  active,
}: {
  label: string;
  items: { icon: Icon; label: string; view: SidebarView }[];
  active: SidebarView;
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <p className="px-2.5 pt-0.5 pb-1 text-[9px] font-semibold tracking-widest text-subtle uppercase">
        {label}
      </p>
      {items.map((it) => (
        <NavItem
          key={it.label}
          icon={it.icon}
          label={it.label}
          active={active === it.view}
        />
      ))}
    </div>
  );
}

function Sidebar({ active }: { active: SidebarView }) {
  return (
    <div className="hidden w-48 shrink-0 flex-col border-r border-white/[0.06] bg-white/[0.015] sm:flex">
      {/* Brand */}
      <div className="flex h-11 items-center gap-2.5 border-b border-white/[0.06] px-3.5">
        <Image
          src="/gitpersona-icon.png"
          alt="GitPersona"
          width={22}
          height={22}
          className="rounded-md"
        />
        <span className="text-[12.5px] font-semibold tracking-tight">
          GitPersona
        </span>
      </div>

      {/* Active-profile switcher */}
      <div className="mx-2.5 mt-3 mb-1 flex items-center gap-2 rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5">
        <Avatar initials="SK" size="size-5 text-[8px]" />
        <div className="flex min-w-0 flex-col leading-tight">
          <span className="truncate text-[11px] font-medium">Personal</span>
          <span className="truncate text-[9px] text-subtle">sara@hey.com</span>
        </div>
        <ChevronsExpandVertical className="ml-auto size-3 shrink-0 text-subtle" />
      </div>

      {/* Nav */}
      <nav className="flex flex-1 flex-col gap-3 overflow-hidden px-2 py-2">
        <NavItem icon={House} label="Dashboard" active={active === "dashboard"} />
        <div className="mx-1 h-px bg-white/[0.06]" />
        <NavGroup
          label="Identities"
          active={active}
          items={[
            { icon: Person, label: "Profiles", view: "profiles" },
            { icon: Key, label: "SSH Keys", view: "ssh" },
            { icon: Lock, label: "Credentials", view: "credentials" },
          ]}
        />
        <NavGroup
          label="Workspace"
          active={active}
          items={[
            { icon: Folder, label: "Repositories", view: "repos" },
            { icon: Sliders, label: "Rules", view: "rules" },
            { icon: ListTimeline, label: "Activity", view: "activity" },
          ]}
        />
        <NavGroup
          label="System"
          active={active}
          items={[
            { icon: Gear, label: "Settings", view: "settings" },
            { icon: CircleInfo, label: "About", view: "about" },
          ]}
        />
      </nav>

      {/* Footer */}
      <div className="flex items-center justify-between border-t border-white/[0.06] px-3 py-2.5">
        <span className="text-[10px] text-subtle">v0.9.6</span>
        <span className="rounded border border-white/[0.08] bg-white/[0.03] px-1 text-[9px] text-subtle">
          ⌘K
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Shared card primitives
 * ------------------------------------------------------------------ */

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] ${className}`}
    >
      {children}
    </div>
  );
}

function CardTitle({
  title,
  children,
}: {
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="flex items-center justify-between px-3.5 pt-3 pb-2">
      <div className="flex items-center gap-2">
        <h4 className="text-[10px] font-semibold tracking-wider text-subtle uppercase">
          {title}
        </h4>
        {children}
      </div>
    </div>
  );
}

function StatRow({
  stats,
}: {
  stats: { label: string; value: string }[];
}) {
  return (
    <div
      className="grid gap-px bg-white/[0.06]"
      style={{ gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="flex flex-col items-center gap-0.5 bg-surface p-3"
        >
          <span className="text-[15px] font-semibold text-foreground">
            {s.value}
          </span>
          <span className="text-[9px] tracking-wider text-subtle uppercase">
            {s.label}
          </span>
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Dashboard — hero mockup (mirrors DashboardView)
 * ------------------------------------------------------------------ */

export function DashboardMockup({ className = "" }: { className?: string }) {
  return (
    <AppWindow className={className} title="GitPersona — Dashboard">
      <div className="flex h-[500px] bg-background">
        <Sidebar active="dashboard" />

        <div className="min-w-0 flex-1 space-y-3.5 overflow-hidden p-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[15px] font-semibold tracking-tight">
                Dashboard
              </h3>
              <p className="text-[11px] text-subtle">Tuesday, August 20</p>
            </div>
            <Badge variant="success">
              <span className="size-1.5 rounded-full bg-success" />
              Git detected
            </Badge>
          </div>

          {/* Two-up: Active Profile + System Status */}
          <div className="grid grid-cols-2 gap-3.5">
            <Card className="border-accent/30 bg-accent/[0.04]">
              <CardTitle title="Active Profile" />
              <div className="flex items-center gap-3 px-3.5 pb-3.5">
                <Avatar initials="SK" size="size-10 text-[13px]" />
                <div className="flex min-w-0 flex-col gap-0.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12.5px] font-semibold">Personal</span>
                    <span className="size-1.5 rounded-full bg-success" />
                  </div>
                  <span className="truncate text-[10.5px] text-muted">
                    Sara Keller
                  </span>
                  <span className="truncate font-mono text-[9.5px] text-subtle">
                    sara@hey.com
                  </span>
                  <span className="mt-1 w-fit">
                    <Badge>
                      <Key className="size-2.5" />
                      GPG signed
                    </Badge>
                  </span>
                </div>
              </div>
            </Card>

            <Card>
              <CardTitle title="System Status" />
              <div className="flex flex-col gap-2 px-3.5 pb-3.5">
                {[
                  { label: "Git installation", status: "detected", ok: true },
                  { label: "Global config", status: "~/.gitconfig", ok: true },
                  { label: "SSH keys", status: "3 managed", ok: true },
                  { label: "GPG agent", status: "inactive", ok: false },
                ].map((r) => (
                  <div
                    key={r.label}
                    className="flex items-center justify-between text-[11px]"
                  >
                    <span className="text-muted">{r.label}</span>
                    <span className="flex items-center gap-1.5">
                      <span className={r.ok ? "text-success" : "text-subtle"}>
                        {r.status}
                      </span>
                      <CircleCheck
                        className={`size-3 ${r.ok ? "text-success" : "text-subtle"}`}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* SSH Identities */}
          <Card>
            <CardTitle title="SSH Identities" />
            <StatRow
              stats={[
                { label: "Total", value: "3" },
                { label: "Assigned", value: "2" },
                { label: "Unassigned", value: "1" },
              ]}
            />
            <div className="flex items-center gap-2 border-t border-white/[0.06] px-3.5 py-2.5">
              <Key className="size-3.5 shrink-0 text-subtle" />
              <span className="text-[11px] text-muted">Active identity</span>
              <span className="font-mono text-[11px] font-medium">
                id_ed25519_personal
              </span>
            </div>
          </Card>
        </div>
      </div>
    </AppWindow>
  );
}

/* ------------------------------------------------------------------ *
 * Repositories — mirrors ReposView (folder → profile mapping)
 * ------------------------------------------------------------------ */

export function RepoMappingMockup({ className = "" }: { className?: string }) {
  const rows = [
    { path: "~/work/acme-api", profile: "Acme Corp", branch: "main", tone: "text-sky-300" },
    { path: "~/work/acme-web", profile: "Acme Corp", branch: "develop", tone: "text-sky-300" },
    { path: "~/dev/side-project", profile: "Personal", branch: "main", tone: "text-accent-soft" },
    { path: "~/clients/nova-app", profile: "Client — Nova", branch: "release", tone: "text-amber-300" },
  ];
  return (
    <AppWindow className={className} title="GitPersona — Repositories">
      <div className="flex h-[440px] bg-background">
        <Sidebar active="repos" />
        <div className="flex-1 space-y-2 p-4">
          <h3 className="text-[15px] font-semibold tracking-tight">
            Repositories
          </h3>
          <p className="pb-2 text-[11px] text-subtle">
            Each folder is bound to an identity — enter it and the right identity
            is already set.
          </p>
          {rows.map((r) => (
            <div
              key={r.path}
              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
            >
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="flex items-center gap-2 font-mono text-[11px] text-muted">
                  <Folder className="size-3.5 text-subtle" />
                  {r.path}
                </span>
                <span className="flex items-center gap-1.5 pl-5.5 text-[9.5px] text-subtle">
                  <BranchesDown className="size-3" />
                  <span className="font-mono">{r.branch}</span>
                </span>
              </span>
              <span className={`text-[11px] font-medium ${r.tone}`}>
                {r.profile}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1 font-mono text-[10px] text-subtle">
            <Check className="size-3 text-success" />
            Rules map repositories by path, remote host, or owner
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ------------------------------------------------------------------ *
 * SSH — mirrors SshView
 * ------------------------------------------------------------------ */

export function SshMockup({ className = "" }: { className?: string }) {
  const keys = [
    { name: "id_ed25519_personal", host: "github.com — sara-codes", ok: true },
    { name: "id_ed25519_acme", host: "github.com — sara-acme", ok: true },
    { name: "id_rsa_nova", host: "gitlab.novastudio.io", ok: false },
  ];
  return (
    <AppWindow className={className} title="GitPersona — SSH Keys">
      <div className="flex h-[440px] bg-background">
        <Sidebar active="ssh" />
        <div className="flex-1 space-y-2 p-4">
          <h3 className="text-[15px] font-semibold tracking-tight">SSH Keys</h3>
          <p className="pb-2 text-[11px] text-subtle">
            Keys load and unload automatically when you switch profile.
          </p>
          {keys.map((k) => (
            <div
              key={k.name}
              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
            >
              <span className="flex items-center gap-2.5">
                <Key className="size-3.5 text-subtle" />
                <span>
                  <span className="block font-mono text-[11px] text-muted">
                    {k.name}
                  </span>
                  <span className="block text-[9.5px] text-subtle">{k.host}</span>
                </span>
              </span>
              <Badge variant={k.ok ? "success" : "warning"}>
                {k.ok ? "Verified" : "Passphrase"}
              </Badge>
            </div>
          ))}
          <div className="rounded-lg border border-white/[0.05] bg-black/10 p-3 font-mono text-[10px] leading-relaxed text-subtle">
            <span className="text-accent-soft">$</span> ssh -T git@github.com
            <br />
            <span className="text-success">
              Hi sara-codes! You&apos;ve successfully authenticated.
            </span>
          </div>
        </div>
      </div>
    </AppWindow>
  );
}

/* ------------------------------------------------------------------ *
 * Settings — mirrors SettingsView
 * ------------------------------------------------------------------ */

export function SettingsMockup({ className = "" }: { className?: string }) {
  const settings = [
    { label: "Auto-scan repositories on startup", on: true },
    { label: "Keep running in tray", on: true },
    { label: "Record activity in the audit log", on: true },
    { label: "Launch at login", on: false },
  ];
  return (
    <AppWindow className={className} title="GitPersona — Settings">
      <div className="flex h-[440px] bg-background">
        <Sidebar active="settings" />
        <div className="flex-1 space-y-2 p-4">
          <h3 className="text-[15px] font-semibold tracking-tight">Settings</h3>
          <p className="pb-2 text-[11px] text-subtle">
            Everything stays on your machine. No account required.
          </p>
          {settings.map((s) => (
            <div
              key={s.label}
              className="flex items-center justify-between rounded-lg border border-white/[0.06] bg-white/[0.02] px-3.5 py-2.5"
            >
              <span className="text-[11.5px] text-muted">{s.label}</span>
              <span
                className={`flex h-4.5 w-8 items-center rounded-full px-0.5 transition-colors ${
                  s.on ? "justify-end bg-accent" : "justify-start bg-white/10"
                }`}
              >
                <span className="size-3.5 rounded-full bg-white shadow" />
              </span>
            </div>
          ))}
          <div className="flex items-center gap-2 pt-1 text-[10px] text-subtle">
            <CircleCheck className="size-3.5 text-success" />
            Credentials stored in your OS secure storage
          </div>
        </div>
      </div>
    </AppWindow>
  );
}
