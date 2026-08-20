import Image from "next/image";
import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

type WallyModel = {
  id: string;
  name: string;
  src: string;
  alt: string;
  positioning: string;
  features: string[];
  scenario: string;
};

const features = [
  "支援語音、文字、觸控與影像識別互動",
  "可建置企業專屬知識庫與影像資料庫",
  "支援擬真口型同步、客製化數位人物與聲線",
  "支援雲端模式與本地端架構建置及部署",
  "可透過模型上下文協定（MCP）串接外部系統與 IoT 周邊裝置",
  "提供中文、英文、日文、韓文等多語言語音服務",
];

const models: WallyModel[] = [
  {
    id: "wally-1",
    name: "Wally 1",
    src: "/brand/wally-1.png",
    alt: "Wally 1 產品照片",
    positioning: "定點式智慧互動服務設備，提供穩定、高效率的 AI 智慧應答與數位接待服務。",
    features: ["長期定點部署", "高穩定度與一致服務品質", "適合高頻率諮詢"],
    scenario: "櫃檯、入口、大廳與資訊服務站",
  },
  {
    id: "wally-1-plus",
    name: "Wally 1 Plus",
    src: "/brand/wally/wally-1-plus.png",
    alt: "Wally 1 Plus 產品照片",
    positioning: "在 Wally 1 AI 功能基礎上，整合自主移動模組，於指定空間內進行自主移動服務。",
    features: ["自主移動巡航（需建圖）", "擴大服務覆蓋範圍", "適合中大型與具動線場域"],
    scenario: "中大型與具動線的服務空間",
  },
  {
    id: "wally-2",
    name: "Wally 2",
    src: "/brand/wally/wally-2.png",
    alt: "Wally 2 產品照片",
    positioning: "以 55 吋透明 OLED 顯示為核心的 AI 數位人解決方案，主打高科技形象展示與智慧互動整合。",
    features: ["高展示震撼度", "定點式智慧接待與導覽", "適合品牌形象與展示空間"],
    scenario: "品牌形象與展示空間",
  },
  {
    id: "wally-2-plus",
    name: "Wally 2 Plus",
    src: "/brand/wally-2-plus.png",
    alt: "Wally 2 Plus 產品照片",
    positioning: "在透明 OLED 顯示基礎上整合自主移動底盤，可於場域內巡航導覽與定點講解。",
    features: ["巡航移動＋語音巡講", "高展示與高互動並重", "適合展會、展館與大型公共空間"],
    scenario: "展會、展館與大型公共空間",
  },
  {
    id: "wally-mini",
    name: "Wally Mini",
    src: "/brand/wally-mini.png",
    alt: "Wally Mini 產品照片",
    positioning: "專為高機動部署、即時互動與陪伴型應用設計的非行走式行動陪伴型 AI 數位人。",
    features: ["原地互動", "水平方向 360° AI 人臉追蹤", "隨身攜帶與快速部署"],
    scenario: "陪伴型應用與需要快速部署的互動場景",
  },
];

const supportingVisuals = [
  { title: "Wally 系列總覽", src: "/brand/wally/wally-series.png", alt: "Wally 系列產品總覽" },
  { title: "Wally 2 形象圖", src: "/brand/wally/wally-2-hero.png", alt: "Wally 2 形象圖" },
  { title: "Wally 2 去背主視覺", src: "/brand/wally-2-cutout.png", alt: "Wally 2 去背主視覺" },
];

const comparisonRows = [
  ["Wally 1", "櫃檯、入口、大廳與資訊服務站", "定點互動"],
  ["Wally 1 Plus", "中大型與具動線的服務空間", "自主移動（需建圖）"],
  ["Wally 2", "品牌形象與展示空間", "55 吋透明 OLED 定點展示"],
  ["Wally 2 Plus", "展會、展館與大型公共空間", "透明 OLED＋巡航移動"],
  ["Wally Mini", "陪伴型與需要快速部署的互動場景", "非行走式、原地互動"],
];

export const metadata: Metadata = {
  title: "Wally 系列",
  description: "比較 Wally 1、Wally 1 Plus、Wally 2、Wally 2 Plus 與 Wally Mini 的場域與互動方式。",
};

export default function WallyPage() {
  return (
    <SubpageShell
      eyebrow="WALLY SERIES"
      title="讓企業智慧，以更自然的方式與人互動。"
      description="Wally 系列提供企業在不同場域中的多元應用，透過數位人物、企業知識與數位內容的整合，提供更專業的 AI 互動服務。"
      pageClassName="wally-page"
      heroVisual={(
        <figure className="subpage-hero-evidence">
          <div className="subpage-hero-evidence-media"><Image src="/brand/wally/wally-series.png" alt="Wally 系列產品總覽" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <figcaption>Wally 系列總覽｜五型號同頁比較</figcaption>
        </figure>
      )}
      action={{
        href: "/contact",
        label: "預約展示",
        eyebrow: "CHOOSE BY SCENE",
        title: "先從場域需求，選擇合適型號。",
        description: "告訴我們需要定點互動、自主移動或快速部署，我們再一起縮小選擇範圍。",
      }}
    >
      <section className="subpage-section wally-selection-section" aria-labelledby="wally-selection-heading">
        <div className="eyebrow">START WITH THE SCENE</div>
        <h2 id="wally-selection-heading">先問兩件事，再看型號。</h2>
        <div className="wally-selection-grid">
          <div><strong>需要在場域內移動？</strong><span>選擇 Wally 1 Plus 或 Wally 2 Plus。</span></div>
          <div><strong>需要定點或快速部署？</strong><span>比較 Wally 1、Wally 2 或 Wally Mini。</span></div>
        </div>
      </section>

      <section className="subpage-section" aria-labelledby="wally-models-heading">
        <div className="eyebrow">SERIES MODELS</div>
        <h2 id="wally-models-heading">Wally 系列型號</h2>
        <nav className="model-anchor-nav" aria-label="Wally 型號導覽">
          {models.map((model) => <a key={model.id} href={`#${model.id}`}>{model.name}</a>)}
        </nav>
        <div className="model-comparison" role="table" aria-label="Wally 型號快速比較">
          <div className="model-comparison-row model-comparison-head" role="row"><span role="columnheader">型號</span><span role="columnheader">適合場域</span><span role="columnheader">互動方式</span></div>
          {comparisonRows.map(([name, scenario, mode]) => <div className="model-comparison-row" role="row" key={name}><strong role="cell">{name}</strong><span role="cell">{scenario}</span><span role="cell">{mode}</span></div>)}
        </div>
        <div className="model-grid">
          {models.map((model, index) => (
            <article className={`model-card model-card-${model.id}`} id={model.id} key={model.id}>
              <div className="model-card-media">
                <Image src={model.src} alt={model.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, (max-width: 1199px) 33vw, 20vw" priority={index === 0} />
              </div>
              <div className="model-card-content">
                <h3>{model.name}</h3>
                <p>{model.positioning}</p>
                <ul className="model-feature-list">{model.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <p className="model-scenario"><span>適用場域</span>{model.scenario}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="subpage-section subpage-two-column">
        <div><div className="eyebrow">CORE FEATURES</div><h2>把企業知識帶進真實互動場域。</h2></div>
        <ul className="subpage-list">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
      </section>

      <section className="subpage-section" aria-labelledby="wally-supporting-heading">
        <div className="eyebrow">SUPPORTING VISUALS</div>
        <h2 id="wally-supporting-heading">Wally 系列補充視覺</h2>
        <div className="product-photo-grid">{supportingVisuals.map((photo) => <figure className="product-photo-card" key={photo.src}><div className="product-photo-media"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><figcaption>{photo.title}</figcaption></figure>)}</div>
      </section>
    </SubpageShell>
  );
}
