import type { ReactNode } from "react";
import Image from "next/image";
import SiteHeader from "./SiteHeader";

type SubpageShellProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  action?: { href: string; label: string };
};

export default function SubpageShell({ eyebrow, title, description, children, action }: SubpageShellProps) {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="subpage" tabIndex={-1}>
        <div className="subpage-main">
          <section className="subpage-hero">
            <div className="eyebrow">{eyebrow}</div>
            <h1>{title}</h1>
            <p>{description}</p>
          </section>
          {children}
          {action ? (
            <section className="subpage-cta">
              <div>
                <div className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</div>
                <h2>從一個明確場景，開始下一步。</h2>
              </div>
              <a className="primary-button" href={action.href}>{action.label}</a>
            </section>
          ) : null}
        </div>
        <footer><Image src="/brand/synaiq-logo-light.svg" alt="SynaiQ" width={145} height={25} /><p>鑫揚智能科技股份有限公司</p><span>© 2026 SynaiQ. All rights reserved.</span></footer>
      </main>
    </>
  );
}
