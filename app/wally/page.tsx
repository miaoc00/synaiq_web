import SubpageShell from "../_components/SubpageShell";

const features = ["支援語音、文字、觸控與影像識別互動", "可建置企業專屬知識庫與影像資料庫", "支援擬真口型同步、客製化數位人物與聲線", "支援雲端模式與本地端架構建置及部署", "可透過 MCP 串接外部系統與 IoT 周邊裝置", "提供中文、英文、日文、韓文等多語言語音服務"];
const models = ["Wally 1", "Wally Plus 1", "Wally 2", "Wally Plus 2", "Wally Mini"];

export default function WallyPage() {
  return (
    <SubpageShell eyebrow="WALLY SERIES" title="讓企業智慧，以更自然的方式與人互動。" description="Wally 系列提供企業在不同場域中的多元應用，透過數位人物、企業知識與數位內容的整合，提供更專業的 AI 互動服務。" action={{ href: "/contact", label: "預約展示" }}>
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">CORE FEATURES</div><h2>把企業知識帶進真實互動場域。</h2></div><ul className="subpage-list">{features.map((feature) => <li key={feature}>{feature}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">SERIES MODELS</div><h2>Wally 系列型號</h2><div className="model-grid">{models.map((model) => <article className="model-card" key={model}><strong>{model}</strong><span>正式定位與規格待補</span></article>)}</div></section>
    </SubpageShell>
  );
}
