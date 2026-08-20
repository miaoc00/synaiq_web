import Image from "next/image";
import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

const capabilities = ["支援多種格式文件解析與建檔", "以自然語言提問，答案附上原文出處，可開啟原檔核對", "查無依據時明確告知，不以推測內容作答", "問題籠統時主動反問澄清", "文件可持續增補與汰換，不需重新建置整套系統", "支援本地端部署選項，依需求規劃資料環境"];
const screenshots = [
  { src: "/brand/knowledge-workflow.jpg", alt: "企業管理系知識庫流程與工作流介面截圖", caption: "企業管理系知識庫.jpg｜流程／知識庫工作流介面截圖" },
];

export const metadata: Metadata = {
  title: "企業知識庫",
  description: "把企業文件整理成可查詢、可追溯的知識資產，作為生成式 AI 與 AGI 的工作底座。",
};

export default function KnowledgeBasePage() {
  return (
    <SubpageShell
      eyebrow="ENTERPRISE KNOWLEDGE HUB"
      title="讓分散的企業資料，成為可信賴的知識網絡。"
      description="將散落在資料夾的文件、規章與案例，轉化為可查詢、可追溯的知識資產，並可作為 AGI 的知識底座。"
      pageClassName="evidence-page knowledge-page"
      heroVisual={(
        <figure className="subpage-hero-evidence">
          <div className="subpage-hero-evidence-media"><Image src="/brand/knowledge-base.png" alt="企業知識庫介面截圖" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
          <figcaption>知識庫.png｜企業知識庫介面截圖</figcaption>
        </figure>
      )}
      action={{
        href: "/contact",
        label: "討論知識庫需求",
        eyebrow: "START WITH YOUR DOCUMENTS",
        title: "從一組文件，開始整理知識。",
        description: "準備資料來源、使用對象與查詢場景，我們一起確認第一個可驗證的知識流程。",
      }}
    >
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">CORE CAPABILITIES</div><h2>讓企業文件成為可查詢、可追溯的知識資產。</h2></div><ul className="subpage-list">{capabilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">USE CASES</div><h2>從文件查詢，到 AGI 知識底座。</h2><p className="subpage-wide-copy">支援文件、規章與案例查詢，提供原文出處供核對，並可持續增補與汰換企業文件。</p></section>
      <section className="subpage-section" aria-labelledby="knowledge-screenshots-heading"><div className="eyebrow">PRODUCT SCREENS</div><h2 id="knowledge-screenshots-heading">企業知識庫介面</h2><div className="screenshot-grid">{screenshots.map((screenshot) => <figure className="screenshot-card" key={screenshot.src}><div className="screenshot-media"><Image src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 767px) 100vw, 50vw" /></div><figcaption>{screenshot.caption}</figcaption></figure>)}</div></section>
    </SubpageShell>
  );
}
