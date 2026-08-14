"use client";

import { useEffect, useRef, useState } from "react";
import SiteHeader from "./_components/SiteHeader";

const labels = ["品牌介紹", "我們的服務", "品牌產品", "技術應用", "產品畫面", "行動呼籲"];
const serviceItems = [
  "企業資料整合",
  "專屬知識庫建置",
  "生成式 AI 導入",
  "AGI 與 AI Agent 開發",
  "系統與場域整合",
];
const productItems = ["企業知識庫", "生成式 AI 服務", "AGI", "Wally 系列"];
const abilities = [
  ["RAG", "精準檢索", "從企業知識中找出可信脈絡"],
  ["REASON", "推理生成", "結合事實資料與模型推理"],
  ["MCP", "系統串接", "連接外部工具與企業既有系統"],
  ["AGENT", "代理執行", "拆解任務並完成跨系統工作"],
];

export default function Home() {
  const storyRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);
  const active = Math.min(5, Math.floor(progress * 6));

  useEffect(() => {
    const update = () => {
      const story = storyRef.current;
      if (!story) return;
      const travel = Math.max(1, story.offsetHeight - window.innerHeight);
      setProgress(Math.min(0.9999, Math.max(0, -story.getBoundingClientRect().top / travel)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const phase = (scene: number) => Math.min(1, Math.max(0, (progress - scene / 6) * 6));
  const jump = (scene: number) => {
    const story = storyRef.current;
    if (story) {
      window.scrollTo({
        top: story.offsetTop + (story.offsetHeight - window.innerHeight) * (scene / 6 + 0.01),
        behavior: "smooth",
      });
    }
  };

  const contactLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <SiteHeader />

      <section id="story" ref={storyRef} className="scroll-story" aria-label="SynaiQ 首頁內容">
        <div className="sticky-stage" id="top">
          <div className="ambient ambient-one" style={{ transform: `translateY(${progress * 90}px)` }} />
          <div className="ambient ambient-two" />
          <div className="tech-grid" />
          <div className="story-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
          <div className="scene-index" aria-hidden="true"><strong>0{active + 1}</strong><span>/ 06</span></div>

          <section id="brand" className={`scene scene-hero ${active === 0 ? "is-active" : ""}`} aria-hidden={active !== 0}>
            <div className="eyebrow">ABOUT SYNAIQ</div>
            <h1>讓企業知識<span>成為可行動的智慧</span></h1>
            <p>鑫揚智能科技以 SynaiQ 為核心品牌，專注企業知識庫、生成式 AI 與 AGI 技術整合，協助組織將資料轉化為能理解、推理與執行的智慧資產。</p>
            <div className="hero-actions">
              <a className="primary-button" href="#services" onClick={(event) => { event.preventDefault(); jump(1); }}>認識我們的服務</a>
              <a className="text-link" href="#contact" onClick={contactLink}>了解 SynaiQ</a>
            </div>
            <div className="orbital-mark" aria-hidden="true"><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="orbit-core">Q</span></div>
            <div className="scroll-hint" aria-hidden="true"><span />向下捲動</div>
          </section>

          <section id="services" className={`scene scene-split scene-data ${active === 1 ? "is-active" : ""}`} aria-hidden={active !== 1}>
            <div className="scene-copy">
              <div className="eyebrow">OUR SERVICES</div>
              <h2>從資料整理，<br />到智慧系統正式落地。</h2>
              <p>從企業資料盤點、知識庫建置與 AI 模型整合，到互動介面與場域導入，提供符合組織需求的完整規劃。</p>
              <ul className="service-list">
                {serviceItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="document-cloud" aria-hidden="true">
              {["PDF", "DOC", "XLS", "IMG", "SCAN"].map((item, i) => <div className={`document-card document-${i + 1}`} key={item} style={{ translate: `${(1 - phase(1)) * (i % 2 ? 150 : -150)}px ${(1 - phase(1)) * (i - 2) * 70}px` }}><span>{item}</span><i /><i /><i /></div>)}
              <div className="ingestion-target">資料<br />整合</div>
            </div>
          </section>

          <section id="products" className={`scene scene-split scene-core ${active === 2 ? "is-active" : ""}`} aria-hidden={active !== 2}>
            <div className="knowledge-network" aria-hidden="true">
              <div className="core-rings"><span /><span /><span /></div>
              <div className="knowledge-core"><small>SYNAIQ</small><strong>PRODUCT<br />SYSTEM</strong></div>
              {productItems.map((item, i) => <span className={`node node-${i + 1}`} key={item}>{item}</span>)}
            </div>
            <div className="scene-copy"><div className="eyebrow">OUR PRODUCTS</div><h2>從知識底座，<br />到智慧互動。</h2><p>SynaiQ 提供企業知識庫、生成式 AI、AGI 與 Wally 系列，讓企業依照需求選擇合適的導入方式。</p></div>
          </section>

          <section id="technology" className={`scene scene-reason ${active === 3 ? "is-active" : ""}`} aria-hidden={active !== 3}>
            <div className="scene-heading"><div className="eyebrow">TECHNOLOGY APPLICATIONS</div><h2>從精準回答，到主動完成任務。</h2></div>
            <div className="capability-flow">{abilities.map(([code, title, copy]) => <article className="capability-card" key={code}><div className="capability-code">{code}</div><strong>{title}</strong><p>{copy}</p><span className="flow-dot" /></article>)}</div>
          </section>

          <section id="experience" className={`scene scene-split scene-products ${active === 4 ? "is-active" : ""}`} aria-hidden={active !== 4}>
            <div className="product-visual"><div className="product-halo" /><img className="wally-main" src="/brand/wally-2-cutout.png" alt="Wally 系列產品示意圖" /></div>
            <div className="scene-copy"><div className="eyebrow">PRODUCT EXPERIENCE</div><h2>看見智慧，<br />如何真正落地。</h2><div className="product-pills"><span>Wally 系列產品視覺</span><span>企業知識庫畫面</span><span>AI Agent 操作畫面</span><span>客製化應用介面</span></div><p>透過軟體平台、企業系統與實體載具呈現產品體驗，讓智慧進入使用者每天工作的場景。</p></div>
          </section>

          <section id="action" className={`scene scene-cta ${active === 5 ? "is-active" : ""}`} aria-hidden={active !== 5}>
            <div className="cta-ring" aria-hidden="true"><span /><span /></div>
            <div className="cta-content"><div className="eyebrow">YOUR KNOWLEDGE. YOUR INTELLIGENCE.</div><h2>下一個成長動能，<br />從企業自己的知識開始。</h2><p>雲端、本地端或混合部署，讓 SynaiQ 與你的組織一起演進。</p><a className="primary-button" href="#contact" onClick={contactLink}>開始規劃專屬方案</a></div>
          </section>

          <div className="scene-nav" aria-label="首頁內容進度">{labels.map((label, i) => <button type="button" key={label} className={i === active ? "active" : ""} aria-label={label} onClick={() => jump(i)} />)}</div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy"><div className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</div><h2>準備好讓知識<br />開始行動了嗎？</h2><p>告訴我們你的資料現況、應用場景與導入目標。</p></div>
        <div className="contact-actions"><a href="mailto:service@synaiq.com"><small>EMAIL SUPPORT</small><strong>service@synaiq.com</strong><span>↗</span></a><a href="tel:+886423931368"><small>SERVICE CALL</small><strong>+886 4 2393 1368</strong><span>↗</span></a><div><small>COMPANY HQ</small><strong>台中市西屯區文心路二段 201 號 11 樓之 8</strong></div></div>
      </section>

      <footer><img src="/brand/synaiq-logo-light.svg" alt="SynaiQ" /><p>鑫揚智能科技股份有限公司</p><span>© 2026 SynaiQ. All rights reserved.</span></footer>
    </main>
  );
}
