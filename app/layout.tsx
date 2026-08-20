import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SynaiQ｜企業知識庫、生成式 AI 與 AGI 整合",
    template: "%s｜SynaiQ",
  },
  description: "SynaiQ 協助企業整理知識、串接既有系統，並依照工作流程導入生成式 AI、AGI 與 Wally 系列互動設備。",
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
