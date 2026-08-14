import SubpageShell from "../_components/SubpageShell";

const services = ["企業內容生成", "文件摘要與資訊整理", "問答與知識查詢", "影像與多模態內容應用", "工作流程與既有系統整合", "客製化介面與權限設計"];
const steps = ["盤點資料與應用目標", "確認使用者、權限與工作流程", "建立原型並驗證輸出品質", "串接企業系統並分階段上線", "持續更新資料與優化應用"];

export default function GenerativeAiPage() {
  return (
    <SubpageShell eyebrow="GENERATIVE AI SERVICES" title="讓生成式 AI，真正理解企業的工作脈絡。" description="以企業知識與實際工作情境為基礎，規劃內容生成、資訊整理、洞察摘要與決策支援等應用，讓 AI 產出更貼近組織需求。">
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">SERVICE SCOPE</div><h2>從一個明確場景開始導入。</h2></div><ul className="subpage-list">{services.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">ADOPTION FLOW</div><h2>分階段驗證，再逐步擴大應用。</h2><ol className="subpage-list ordered">{steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
    </SubpageShell>
  );
}
