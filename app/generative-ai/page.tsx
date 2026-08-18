import Image from "next/image";
import SubpageShell from "../_components/SubpageShell";

const services = ["同一人物形象可跨圖片與影片維持一致，不需重複拍攝", "可建立企業專屬數位模特，支援多視角與動態展示", "生成流程可依企業場域調整", "以網頁介面操作，不需具備人工智慧或影像製作專業", "介面可依企業品牌調整，以企業名義對外提供服務", "可介接企業既有系統，將生成能力嵌入現行作業流程", "支援雲端與本地端部署，素材與成品不外流"];
const steps = ["盤點資料與應用目標", "確認使用者、權限與工作流程", "建立原型並驗證輸出品質", "串接企業系統並分階段上線", "持續更新資料與優化應用"];

export default function GenerativeAiPage() {
  return (
    <SubpageShell eyebrow="GENERATIVE AI SERVICES" title="讓品牌素材與人物形象，轉化為穩定可重複產出的內容。" description="將品牌素材與人物形象，轉化為規格穩定、可重複產出的圖片與影片。目前已應用於服飾業的線上試穿與商品情境影像產製。">
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">SERVICE SCOPE</div><h2>讓生成內容穩定、可重複，也能融入企業流程。</h2></div><ul className="subpage-list">{services.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">ADOPTION FLOW</div><h2>分階段驗證，再逐步擴大應用。</h2><ol className="subpage-list ordered">{steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
      <section className="subpage-section" aria-labelledby="generative-result-heading"><div className="eyebrow">RESULT PREVIEW</div><h2 id="generative-result-heading">服飾業應用成果</h2><figure className="screenshot-card screenshot-card-single"><div className="screenshot-media"><Image src="/brand/media-factory.png" alt="生成式 AI 服飾商品情境影像成果畫面" fill sizes="(max-width: 767px) 100vw, 760px" /></div><figcaption>媒體工廠.png｜生成式 AI 服飾商品情境影像成果畫面</figcaption></figure></section>
    </SubpageShell>
  );
}
