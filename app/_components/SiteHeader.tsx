"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !isMenuOpen) return;
      event.preventDefault();
      setIsMenuOpen(false);
      requestAnimationFrame(() => menuButtonRef.current?.focus());
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMenuOpen]);

  const closeMenu = (restoreFocus = false) => {
    setIsMenuOpen(false);
    if (restoreFocus) requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  const isCurrent = (href: string) => {
    if (pathname === href) return true;
    if (href !== "/products") return false;
    return ["/wally", "/knowledge-base", "/generative-ai", "/agi"].some((path) => pathname?.startsWith(path));
  };

  return (
    <>
      <a className="skip-link" href="#main-content">跳至主要內容</a>
      <header className="site-header">
      {/* Native navigation keeps vinext production routing from intercepting the home link. */}
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="brand" href="/" aria-label="SynaiQ 首頁" onClick={() => closeMenu()}>
        <Image src="/brand/synaiq-logo-light.svg" alt="SynaiQ" width={164} height={28} priority />
      </a>
      <button
        ref={menuButtonRef}
        className={`menu-toggle${isMenuOpen ? " is-open" : ""}`}
        type="button"
        aria-controls="mobile-navigation"
        aria-expanded={isMenuOpen}
        aria-label={isMenuOpen ? "關閉主要導覽" : "開啟主要導覽"}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </button>
      <nav id="mobile-navigation" aria-label="主要導覽" data-open={isMenuOpen}>
        <a href="/about" aria-current={isCurrent("/about") ? "page" : undefined} onClick={() => closeMenu()}>關於公司</a>
        <a href="/products" aria-current={isCurrent("/products") ? "page" : undefined} onClick={() => closeMenu()}>產品</a>
        <a href="/media" aria-current={isCurrent("/media") ? "page" : undefined} onClick={() => closeMenu()}>媒體中心</a>
        <a className="nav-cta" href="/contact" aria-current={isCurrent("/contact") ? "page" : undefined} onClick={() => closeMenu()}>聯絡我們</a>
      </nav>
      </header>
    </>
  );
}
