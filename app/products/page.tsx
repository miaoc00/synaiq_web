import SubpageShell from "../_components/SubpageShell";

const products = [
  ["Wally 系列", "整合數位人物、企業知識與互動載具，提供多語言、跨系統的 AI 互動服務。", "/wally"],
  ["企業知識庫", "將分散文件與資料整理成可搜尋、可追溯、可持續更新的企業知識網絡。", "/knowledge-base"],
  ["生成式 AI 服務", "運用企業資料與情境脈絡，協助內容生成、資訊整理與決策支援。", "/generative-ai"],
  ["AGI", "整合知識、推理、工具串接與代理執行，形成企業專屬的人工智慧整合框架。", "/agi"],
];

export default function ProductsPage() {
  return (
    <SubpageShell
      eyebrow="PRODUCTS"
      title="從企業知識底座，延伸到每一個智慧應用場景。"
      description="SynaiQ 以企業知識為核心，整合生成式 AI、AGI 與互動載具，讓組織依照資料現況、工作流程與服務場域選擇合適的導入方式。"
      action={{ href: "/contact", label: "討論導入需求" }}
    >
      <section className="subpage-section">
        <div className="product-page-grid">{products.map(([title, description, href]) => <article className="product-page-card" key={title}><div className="eyebrow">PRODUCT</div><h2>{title}</h2><p>{description}</p><a className="text-link" href={href}>了解更多 ↗</a></article>)}</div>
      </section>
    </SubpageShell>
  );
}
