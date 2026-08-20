import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

const products = [
  ["企業知識庫", "將分散文件與資料整理成可搜尋、可追溯、可持續更新的企業知識網絡。", "/knowledge-base"],
  ["生成式 AI 服務", "運用企業資料與情境脈絡，協助內容生成、資訊整理與決策支援。", "/generative-ai"],
  ["AGI", "整合知識、推理、工具串接與代理執行，形成企業專屬的人工智慧整合框架。", "/agi"],
  ["Wally 系列", "整合數位人物、企業知識與互動載具，提供多語言、跨系統的 AI 互動服務。", "/wally"],
];

export const metadata: Metadata = {
  title: "產品總覽",
  description: "從企業知識庫、生成式 AI 與 AGI，到 Wally 系列互動設備，探索 SynaiQ 的產品路徑。",
};

export default function ProductsPage() {
  return (
    <SubpageShell
      title="從企業知識底座，延伸到每一個智慧應用場景。"
      description="SynaiQ 以企業知識為核心，整合生成式 AI、AGI 與互動載具，讓組織依照資料現況、工作流程與服務場域選擇合適的導入方式。"
      action={{ href: "/contact", label: "討論導入需求", eyebrow: null }}
      pageClassName="products-page"
    >
      <section className="subpage-section" aria-label="SynaiQ 產品分類">
        <nav className="product-page-grid" aria-label="選擇產品">
          {products.map(([title, description, href]) => (
            <a className="product-page-card" href={href} key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
              <span className="product-card-action">了解產品 <span aria-hidden="true">→</span></span>
            </a>
          ))}
        </nav>
      </section>
    </SubpageShell>
  );
}
