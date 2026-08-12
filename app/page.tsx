"use client";

import { useEffect, useRef, useState } from "react";

const labels = ["品牌開場", "資料匯入", "知識中樞", "推理與執行", "產品輸出", "開始行動"];
const abilities = [
  ["RAG", "精準檢索", "從企業知識中找出可信脈絡"],
  ["REASON", "推理生成", "結合事實資料與模型推理"],
  ["MCP", "系統串接", "連接外部工具與既有系統"],
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
      setProgress(Math.min(.9999, Math.max(0, -story.getBoundingClientRect().top / travel)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => { window.removeEventListener("scroll", update); window.removeEventListener("resize", update); };
  }, []);

  const phase = (scene: number) => Math.min(1, Math.max(0, (progress - scene / 6) * 6));
  const jump = (scene: number) => {
    const story = storyRef.current;
    if (story) window.scrollTo({ top: story.offsetTop + (story.offsetHeight - innerHeight) * (scene / 6 + .01), behavior: "smooth" });
  };

  return <main>
    <header className="site-header">
      <a className="brand" href="#top" aria-label="SynaiQ 首頁"><img src="/brand/synaiq-logo-light.svg" alt="SynaiQ" /></a>
      <nav aria-label="主要導覽"><a href="#story">智慧核心</a><a href="#solutions">產品能力</a><a href="#about">關於我們</a><a className="nav-cta" href="#contact">聯絡我們</a></nav>
    </header>

    <section id="story" ref={storyRef} className="scroll-story" aria-label="SynaiQ 智慧演進故事">
      <div className="sticky-stage" id="top">
        <div className="ambient ambient-one" style={{ transform: `translateY(${progress * 90}px)` }} /><div className="ambient ambient-two" /><div className="tech-grid" />
        <div className="story-progress" aria-hidden="true"><span style={{ transform: `scaleX(${progress})` }} /></div>
        <div className="scene-index" aria-hidden="true"><strong>0{active + 1}</strong><span>/ 06</span></div>

        <section className={`scene scene-hero ${active === 0 ? "is-active" : ""}`} aria-hidden={active !== 0}>
          <div className="eyebrow">ENTERPRISE INTELLIGENCE, EVOLVED</div>
          <h1>讓企業知識<span>成為可行動的智慧</span></h1>
          <p>SynaiQ 將分散資料轉化為企業專屬的 AGI 知識中樞，從理解、推理到執行，一路串起。</p>
          <div className="hero-actions"><a className="primary-button" href="#solutions">探索核心能力</a><a className="text-link" href="#contact">規劃專屬方案 ↗</a></div>
          <div className="orbital-mark" aria-hidden="true"><span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="orbit-core">Q</span></div>
          <div className="scroll-hint" aria-hidden="true"><span />向下捲動</div>
        </section>

        <section className={`scene scene-split scene-data ${active === 1 ? "is-active" : ""}`} aria-hidden={active !== 1}>
          <div className="scene-copy"><div className="eyebrow">01 / MULTIMODAL INPUT</div><h2>所有企業資料，<br />從此讀得懂。</h2><p>PDF、Word、Excel、圖片、掃描與手寫內容，都能進入同一條知識脈絡。</p></div>
          <div className="document-cloud" aria-hidden="true">
            {["PDF", "DOC", "XLS", "IMG", "SCAN"].map((item, i) => <div className={`document-card document-${i + 1}`} key={item} style={{ translate: `${(1 - phase(1)) * (i % 2 ? 150 : -150)}px ${(1 - phase(1)) * (i - 2) * 70}px` }}><span>{item}</span><i /><i /><i /></div>)}
            <div className="ingestion-target">語意<br />萃取</div>
          </div>
        </section>

        <section className={`scene scene-split scene-core ${active === 2 ? "is-active" : ""}`} aria-hidden={active !== 2}>
          <div className="knowledge-network" aria-hidden="true"><div className="core-rings"><span /><span /><span /></div><div className="knowledge-core"><small>SYNAIQ</small><strong>KNOWLEDGE<br />CORE</strong></div>{["語意索引", "來源引用", "權限治理", "跨模態", "持續更新", "知識關聯"].map((x, i) => <span className={`node node-${i + 1}`} key={x}>{x}</span>)}</div>
          <div className="scene-copy"><div className="eyebrow">02 / KNOWLEDGE CORE</div><h2>知識不只被儲存，<br />更被理解與連結。</h2><p>多模態語意萃取、結構化索引與來源追溯，形成可信賴的企業知識網絡。</p></div>
        </section>

        <section className={`scene scene-reason ${active === 3 ? "is-active" : ""}`} aria-hidden={active !== 3}>
          <div className="scene-heading"><div className="eyebrow">03 / REASON &amp; ACT</div><h2>從精準回答，到主動完成任務。</h2></div>
          <div className="capability-flow">{abilities.map(([code, title, copy]) => <article className="capability-card" key={code}><div className="capability-code">{code}</div><strong>{title}</strong><p>{copy}</p><span className="flow-dot" /></article>)}</div>
        </section>

        <section className={`scene scene-split scene-products ${active === 4 ? "is-active" : ""}`} aria-hidden={active !== 4}>
          <div className="product-visual" aria-hidden="true"><div className="product-halo" /><img className="wally-main" src="/brand/wally-2-cutout.png" alt="" /></div>
          <div className="scene-copy"><div className="eyebrow">04 / INTELLIGENCE, DELIVERED</div><h2>一個智慧核心，<br />驅動多種企業應用。</h2><div className="product-pills"><span>Wally 數位人</span><span>企業知識庫</span><span>生成式 AI</span><span>AGI</span></div><p>依照情境選擇介面，讓知識透過軟體、系統或實體載具抵達每個需要它的人。</p></div>
        </section>

        <section className={`scene scene-cta ${active === 5 ? "is-active" : ""}`} aria-hidden={active !== 5}>
          <div className="cta-ring" aria-hidden="true"><span /><span /></div><div className="cta-content"><div className="eyebrow">YOUR KNOWLEDGE. YOUR INTELLIGENCE.</div><h2>下一個成長動能，<br />從企業自己的知識開始。</h2><p>雲端、本地端或混合部署，讓 SynaiQ 與你的組織一起演進。</p><a className="primary-button" href="#contact">開始規劃專屬方案</a></div>
        </section>

        <div className="scene-nav" aria-label="場景進度">{labels.map((x, i) => <button type="button" key={x} className={i === active ? "active" : ""} aria-label={x} onClick={() => jump(i)} />)}</div>
      </div>
    </section>

    <section id="about" className="about-section light-section">
      <div className="section-number">01</div><div className="about-heading"><div className="eyebrow dark">WHY SYNAIQ</div><h2>把企業內部知識，<br />轉化為可持續成長的智慧資產。</h2></div>
      <div className="about-copy"><p>SynaiQ 專注於企業專屬知識庫模型與 AI 智能系統整合，讓人工智慧真正融入決策與日常運作。</p><div className="value-list"><span><strong>01</strong>以使用者為中心的互動設計</span><span><strong>02</strong>場域導向的系統整合能力</span><span><strong>03</strong>高標準資安與分階段導入</span></div></div>
    </section>

    <section id="solutions" className="solutions-section light-section">
      <div className="solutions-heading"><div><div className="eyebrow dark">BUILT FOR THE REAL WORLD</div><h2>智慧落地的四種方式</h2></div><p>從知識底座到前台互動，選擇最符合組織現況的起點。</p></div>
      <div className="solution-grid">{[["01", "企業知識庫", "建立可搜尋、可追溯、可持續更新的組織記憶。"], ["02", "生成式 AI", "以企業脈絡生成內容、洞察與決策支援。"], ["03", "AGI 框架", "整合推理、工具與代理執行，形成專屬智慧中樞。"], ["04", "Wally 系列", "讓專屬知識透過擬真數位人進入實體服務場域。"]].map(([n, t, c]) => <article className="solution-card" key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p><a href="#contact" aria-label={`了解${t}`}>↗</a></article>)}</div>
    </section>

    <section id="contact" className="contact-section">
      <div className="contact-copy"><div className="eyebrow">LET&apos;S BUILD WHAT&apos;S NEXT</div><h2>準備好讓知識<br />開始行動了嗎？</h2><p>告訴我們你的資料現況、應用場景與導入目標。</p></div>
      <div className="contact-actions"><a href="mailto:service@synaiq.com"><small>EMAIL SUPPORT</small><strong>service@synaiq.com</strong><span>↗</span></a><a href="tel:+886423931368"><small>SERVICE CALL</small><strong>+886 4 2393 1368</strong><span>↗</span></a><div><small>COMPANY HQ</small><strong>台中市西屯區文心路二段201號11樓之8</strong></div></div>
    </section>

    <footer><img src="/brand/synaiq-logo-light.svg" alt="SynaiQ" /><p>鑫揚智能科技股份有限公司</p><span>© 2026 SynaiQ. All rights reserved.</span></footer>
  </main>;
}
