"use client";

import Link from "next/link";
import { useState } from "react";

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="SynaiQ 首頁" onClick={closeMenu}>
        <img src="/brand/synaiq-logo-light.svg" alt="SynaiQ" />
      </Link>
      <button
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
        <Link href="/about" onClick={closeMenu}>關於公司</Link>
        <Link href="/products" onClick={closeMenu}>產品</Link>
        <Link href="/media" onClick={closeMenu}>媒體中心</Link>
        <Link className="nav-cta" href="/contact" onClick={closeMenu}>聯絡我們</Link>
      </nav>
    </header>
  );
}
