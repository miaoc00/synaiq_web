import Image from "next/image";
import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

const services = ["同一人物形象可跨圖片與影片維持一致，不需重複拍攝", "可建立企業專屬數位模特，支援多視角與動態展示", "生成流程可依企業場域調整", "以網頁介面操作，不需具備人工智慧或影像製作專業", "介面可依企業品牌調整，以企業名義對外提供服務", "可介接企業既有系統，將生成能力嵌入現行作業流程", "可依需求規劃雲端或本地端部署與素材管理方式"];
const steps = ["盤點資料與應用目標", "確認使用者、權限與工作流程", "建立原型並驗證輸出品質", "串接企業系統並分階段上線", "持續更新資料與優化應用"];

export const metadata: Metadata = {
  title: "生成式 AI 服務",
  description: "把品牌素材與人物形象轉化為可重複產出的內容，並逐步融入企業工作流程。",
};

export default function GenerativeAiPage() {
  return (
    <SubpageShell
      eyebrow="GENERATIVE AI SERVICES"
      title="讓品牌素材與人物形象，轉化為穩定可重複產出的內容。"
      description="將品牌素材與人物形象，轉化為規格穩定、可重複產出的圖片與影片。目前已應用於服飾業的線上試穿與商品情境影像產製。"
      pageClassName="evidence-page generative-page"
      heroVisual={(
        <figure className="subpage-hero-evidence">
          <div className="subpage-hero-evidence-media"><Image src="/brand/media-factory.png" alt="生成式 AI 服飾商品情境影像成果畫面" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <figcaption>媒體工廠.png｜服飾業應用成果</figcaption>
        </figure>
      )}
      action={{
        href: "/contact",
        label: "討論生成流程",
        eyebrow: "START WITH ONE CONTENT FLOW",
        title: "先選一個內容流程，開始驗證。",
        description: "帶著素材來源、使用者與預期產出，我們一起拆解可先試做的工作流程。",
      }}
    >
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">SERVICE SCOPE</div><h2>讓生成內容穩定、可重複，也能融入企業流程。</h2></div><ul className="subpage-list">{services.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">ADOPTION FLOW</div><h2>分階段驗證，再逐步擴大應用。</h2><ol className="subpage-list ordered">{steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
    </SubpageShell>
  );
}
