"use client";

import { useDetectedOS, type DetectedOS } from "@/lib/use-detected-os";
import { AppleIcon, TuxIcon, WindowsIcon } from "./icons";

export const OS_ICONS: Record<DetectedOS, (props: { className?: string }) => React.ReactElement> = {
  windows: WindowsIcon,
  macos: AppleIcon,
  linux: TuxIcon,
};

/** Platform logo matching the visitor's OS (Windows during SSR). */
export function OSIcon({ className }: { className?: string }) {
  const Icon = OS_ICONS[useDetectedOS()];
  return <Icon className={className} />;
}

const OS_NAMES: Record<DetectedOS, string> = {
  windows: "Windows",
  macos: "macOS",
  linux: "Linux",
};

export function useDetectedOSName(): string {
  return OS_NAMES[useDetectedOS()];
}
