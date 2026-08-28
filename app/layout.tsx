/* eslint-disable @next/next/no-sync-scripts -- Local Impeccable live-review bridge is intentionally synchronous. */
import type { Metadata, Viewport } from "next";
import "./globals.css";
import homeSource from "@/content/pages/home.md?raw";
import { parsePageMarkdown } from "./_content/markdown";

const homeContent = parsePageMarkdown(homeSource);

export const metadata: Metadata = {
  title: {
    default: homeContent.text("metadata.title"),
    template: homeContent.text("metadata.title-template"),
  },
  description: homeContent.text("metadata.description"),
  icons: { icon: "/brand/synaiq-logo-light.svg" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
