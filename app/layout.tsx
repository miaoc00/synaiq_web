import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SynaiQ｜讓企業知識成為可行動的智慧",
  description: "SynaiQ 企業專屬 AGI 知識中樞，整合知識庫、生成式 AI、MCP、Agentic Mode 與 Wally 數位人。",
  icons: { icon: "/brand/synaiq-logo-light.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-Hant"><body>{children}</body></html>;
}
