"use client";

import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "./_components/SiteHeader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const labels = ["品牌介紹", "我們的服務", "品牌產品", "技術應用", "產品畫面", "行動呼籲"];
const sceneIds = ["brand", "services", "products", "technology", "experience", "action"];
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
const experienceItems = ["數位人多多", "Wally 1", "Wally Mini"];

const scrollBehavior = (): ScrollBehavior =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";

export default function Home() {
  const storyRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const ambientRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [isDesktopStory, setIsDesktopStory] = useState(false);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const syncStoryMode = () => setIsDesktopStory(desktopQuery.matches);
    syncStoryMode();
    desktopQuery.addEventListener("change", syncStoryMode);
    return () => desktopQuery.removeEventListener("change", syncStoryMode);
  }, []);

  useGSAP(() => {
    const story = storyRef.current;
    const progressElement = progressRef.current;
    if (!story || !progressElement || !isDesktopStory) return;

    const scenes = gsap.utils.toArray<HTMLElement>(story.querySelectorAll(".scene"));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const setProgress = gsap.quickSetter(progressElement, "scaleX");
    const updateStoryState = (progress: number) => {
      setProgress(progress);
      const nextActive = Math.min(scenes.length - 1, Math.floor(progress * scenes.length));
      if (nextActive !== activeRef.current) {
        activeRef.current = nextActive;
        setActive(nextActive);
      }
    };

    story.classList.add("has-gsap-motion");
    gsap.set(scenes, { autoAlpha: 0, yPercent: 4, scale: 0.988, pointerEvents: "none" });
    gsap.set(scenes[0], { autoAlpha: 1, yPercent: 0, scale: 1, pointerEvents: "auto" });

    if (reducedMotion) {
      const reducedTrigger = ScrollTrigger.create({
        trigger: story,
        start: "top top",
        end: "bottom bottom",
        onUpdate: (self) => {
          const nextActive = Math.min(scenes.length - 1, Math.floor(self.progress * scenes.length));
          if (nextActive !== activeRef.current) {
            gsap.set(scenes, { autoAlpha: 0, yPercent: 0, scale: 1, pointerEvents: "none" });
            gsap.set(scenes[nextActive], { autoAlpha: 1, pointerEvents: "auto" });
          }
          updateStoryState(self.progress);
        },
      });
      updateStoryState(reducedTrigger.progress);
      return () => story.classList.remove("has-gsap-motion");
    }

    const playhead = { progress: 0 };
    const timeline = gsap.timeline({
      defaults: { overwrite: "auto" },
      scrollTrigger: {
        trigger: story,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.65,
        invalidateOnRefresh: true,
        onUpdate: (self) => updateStoryState(self.progress),
      },
    });

    timeline.to(playhead, { progress: 1, duration: scenes.length, ease: "none" }, 0);
    if (ambientRef.current) {
      timeline.to(ambientRef.current, { y: 90, x: -36, scale: 1.08, duration: scenes.length, ease: "none" }, 0);
    }

    scenes.slice(1).forEach((scene, index) => {
      const sceneNumber = index + 1;
      const previousScene = scenes[sceneNumber - 1];
      timeline
        .to(previousScene, {
          autoAlpha: 0,
          yPercent: -3,
          scale: 0.995,
          clipPath: "inset(0 0 8% 0)",
          pointerEvents: "none",
          duration: 0.24,
          ease: "power2.in",
        }, sceneNumber - 0.16)
        .fromTo(scene, {
          autoAlpha: 0,
          yPercent: 4,
          scale: 0.988,
          clipPath: "inset(9% 0 0 0)",
        }, {
          autoAlpha: 1,
          yPercent: 0,
          scale: 1,
          clipPath: "inset(0% 0% 0% 0%)",
          pointerEvents: "auto",
          duration: 0.38,
          ease: "power3.out",
          immediateRender: false,
        }, sceneNumber - 0.04);
    });

    timeline.fromTo(".document-card", {
      x: (index) => index % 2 ? 150 : -150,
      y: (index) => (index - 2) * 62,
      autoAlpha: 0,
    }, {
      x: 0,
      y: 0,
      autoAlpha: 1,
      stagger: 0.04,
      duration: 0.42,
      ease: "power3.out",
    }, 0.82);
    timeline.fromTo(".knowledge-network .node", { autoAlpha: 0, scale: 0.72 }, {
      autoAlpha: 1,
      scale: 1,
      stagger: 0.045,
      duration: 0.32,
      ease: "power3.out",
    }, 1.84);
    timeline.fromTo(".capability-card", { autoAlpha: 0, y: 28 }, {
      autoAlpha: 1,
      y: 0,
      stagger: 0.055,
      duration: 0.34,
      ease: "power3.out",
    }, 2.82);
    timeline.fromTo(".experience-main-visual", { autoAlpha: 0, yPercent: 14, scale: 0.94 }, {
      autoAlpha: 1,
      yPercent: 0,
      scale: 1,
      duration: 0.48,
      ease: "power3.out",
    }, 3.78);
    timeline.fromTo(".product-halo", { autoAlpha: 0, scale: 0.78 }, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.55,
      ease: "power2.out",
    }, 3.72);
    timeline.fromTo(".cta-ring", { autoAlpha: 0, scale: 0.88 }, {
      autoAlpha: 1,
      scale: 1,
      duration: 0.54,
      ease: "power3.out",
    }, 4.78);

    updateStoryState(timeline.scrollTrigger?.progress ?? 0);
    return () => story.classList.remove("has-gsap-motion");
  }, { scope: storyRef, dependencies: [isDesktopStory], revertOnUpdate: true });

  const jump = (scene: number) => {
    const story = storyRef.current;
    if (!isDesktopStory) {
      document.getElementById(sceneIds[scene])?.scrollIntoView({ behavior: scrollBehavior() });
    } else if (story) {
      const settledProgress = scene === 0 ? 0.01 : Math.min(0.999, (scene + 0.38) / sceneIds.length);
      window.scrollTo({
        top: story.offsetTop + (story.offsetHeight - window.innerHeight) * settledProgress,
        behavior: scrollBehavior(),
      });
    }
  };

  const contactLink = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: scrollBehavior() });
  };

  const sceneIsHidden = (scene: number) => (isDesktopStory ? active !== scene : undefined);

  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>

      <section id="story" ref={storyRef} className="scroll-story" aria-label="SynaiQ 首頁內容">
        <div className="sticky-stage" id="top">
          <div ref={ambientRef} className="ambient ambient-one" />
          <div className="ambient ambient-two" />
          <div className="story-progress" aria-hidden="true"><span ref={progressRef} /></div>

          <section id="brand" className={`scene scene-hero ${active === 0 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(0)} inert={sceneIsHidden(0)}>
            <div className="scene-hero-copy">
              <h1>讓企業知識<span>進入日常工作流程</span></h1>
              <p>SynaiQ 整合企業知識庫、生成式 AI 與 AGI，協助團隊整理分散資料、找到需要的資訊，並逐步把重複工作交給 AI 執行。</p>
              <div className="hero-actions">
                <a className="primary-button" href="#services" onClick={(event) => { event.preventDefault(); jump(1); }}>認識我們的服務</a>
                <a className="text-link" href="#contact" onClick={contactLink}>了解 SynaiQ</a>
              </div>
            </div>
            <div className="hero-human-visual">
              <div className="hero-human-halo" aria-hidden="true" />
              <Image className="hero-digital-human" src="/brand/duoduo-cutout.png" alt="SynaiQ 數位人多多形象示意圖" fill priority sizes="(max-width: 767px) 78vw, (max-width: 1200px) 36vw, 560px" style={{ objectFit: "contain", objectPosition: "center top" }} />
            </div>
            <div className="scroll-hint" aria-hidden="true"><span />向下捲動</div>
          </section>

          <section id="services" className={`scene scene-split scene-data ${active === 1 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(1)} inert={sceneIsHidden(1)}>
            <div className="scene-copy">
              <h2>從資料整理，<br />到系統導入。</h2>
              <p>從資料盤點、知識庫建置與模型整合，到操作介面與場域部署，依照組織現況分階段規劃。</p>
              <ul className="service-list">
                {serviceItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
            <div className="document-cloud" aria-hidden="true">
              {["PDF", "DOC", "XLS", "IMG", "SCAN"].map((item, i) => <div className={`document-card document-${i + 1}`} key={item}><span>{item}</span><i /><i /><i /></div>)}
              <div className="ingestion-target">資料<br />整合</div>
            </div>
          </section>

          <section id="products" className={`scene scene-split scene-core ${active === 2 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(2)} inert={sceneIsHidden(2)}>
            <div className="knowledge-network" aria-hidden="true">
              <div className="core-rings"><span /><span /><span /></div>
              <div className="knowledge-core"><small>SYNAIQ</small><strong>PRODUCT<br />SYSTEM</strong></div>
              {productItems.map((item, i) => <span className={`node node-${i + 1}`} key={item}>{item}</span>)}
            </div>
            <div className="scene-copy"><h2>同一套知識底座，<br />支援不同應用場景。</h2><p>從企業知識庫、生成式 AI 與 AGI，到 Wally 系列互動設備，依照工作流程與使用場域選擇導入方式。</p></div>
          </section>

          <section id="technology" className={`scene scene-reason ${active === 3 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(3)} inert={sceneIsHidden(3)}>
            <div className="scene-heading"><h2>先找到需要的資訊，<br />再串接系統完成工作。</h2></div>
            <div className="capability-flow">{abilities.map(([code, title, copy]) => <article className="capability-card" key={code}><div className="capability-code">{code}</div><strong>{title}</strong><p>{copy}</p><span className="flow-dot" /></article>)}</div>
          </section>

          <section id="experience" className={`scene scene-split scene-products ${active === 4 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(4)} inert={sceneIsHidden(4)}>
            <div className="product-visual experience-visual">
              <div className="product-halo" aria-hidden="true" />
              <div className="experience-main-visual"><Image className="experience-human" src="/brand/duoduo-cutout.png" alt="SynaiQ 數位人多多與 Wally 互動示意" fill sizes="(max-width: 900px) 64vw, 30vw" style={{ objectFit: "contain", objectPosition: "center top" }} /></div>
              <div className="experience-support" aria-label="Wally 輔助產品視覺">
                <div className="experience-support-item"><Image src="/brand/wally-1.png" alt="Wally 1 產品照片" fill sizes="120px" /></div>
                <div className="experience-support-item"><Image src="/brand/wally-mini.png" alt="Wally Mini 產品照片" fill sizes="120px" /></div>
              </div>
              <p className="experience-caption">數位人形象與 Wally 互動示意</p>
            </div>
            <div className="scene-copy"><h2>從軟體介面，<br />到現場互動設備。</h2><div className="product-pills">{experienceItems.map((label) => <span key={label}>{label}</span>)}</div><p>同一套企業知識可依照使用情境，呈現在工作平台、既有系統或 Wally 系列設備上。</p></div>
          </section>

          <section id="action" className={`scene scene-cta ${active === 5 ? "is-active" : ""}`} aria-hidden={sceneIsHidden(5)} inert={sceneIsHidden(5)}>
            <div className="cta-content"><h2>從一個明確的<br />使用場景開始。</h2><p>我們會先釐清資料來源、使用對象與預期成果，再確認適合的部署方式。</p><a className="primary-button" href="#contact" onClick={contactLink}>討論導入需求</a></div>
          </section>

          <nav className="scene-nav" aria-label="首頁內容進度">{labels.map((label, i) => <button type="button" key={label} className={i === active ? "active" : ""} aria-label={label} aria-current={i === active ? "step" : undefined} onClick={() => jump(i)} />)}</nav>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy"><h2>想先解決哪一段<br />工作流程？</h2><p>告訴我們目前的資料來源、使用者與遇到的問題。</p></div>
        <div className="contact-actions"><a href="mailto:service@synaiq.com"><small>EMAIL SUPPORT</small><strong>service@synaiq.com</strong><span>↗</span></a><a href="tel:+886423931368"><small>SERVICE CALL</small><strong>+886 4 2393 1368</strong><span>↗</span></a><div><small>COMPANY HQ</small><strong>台中市西屯區文心路二段 201 號 11 樓之 8</strong></div></div>
      </section>

        <footer><Image src="/brand/synaiq-logo-light.svg" alt="SynaiQ" width={145} height={25} /><p>鑫揚智能科技股份有限公司</p><span>© 2026 SynaiQ. All rights reserved.</span></footer>
      </main>
    </>
  );
}
