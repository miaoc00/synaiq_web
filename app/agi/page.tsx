import SubpageShell from "../_components/SubpageShell";

const features = ["建置企業專屬知識庫（RAG），提供更精準的內容回覆", "結合文字與影像查詢結果，提供更多元的資料呈現", "支援多模態語意萃取，以及結構化與非結構化知識索引", "依據企業授權提供任務代理服務，提升工作生產力", "透過模型上下文協定（MCP）串接不同的外部系統", "支援多種操作介面，對應不同使用情境", "依照任務目標混合運用不同 AI 能力"];

export default function AgiPage() {
  return (
    <SubpageShell eyebrow="AGI FOR ENTERPRISE" title="從理解企業知識，到主動完成任務。" description="企業專屬人工智慧整合框架，整合文字資料、影像資料、推理生成與代理執行，讓 AI 從資訊回應進一步延伸到工具調用與任務完成。" action={{ href: "/contact", label: "規劃 AGI 應用" }}>
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">CORE CAPABILITIES</div><h2>知識、推理、工具與代理執行。</h2></div><ol className="subpage-list ordered">{features.map((feature) => <li key={feature}>{feature}</li>)}</ol></section>
      <section className="subpage-section"><div className="eyebrow">OPERATING FLOW</div><h2>企業資料 → 知識索引 → 語意檢索 → 推理生成 → 工具串接 → 代理執行</h2><div className="deployment-tags"><span>雲端部署</span><span>本地端部署</span><span>混合部署</span></div></section>
    </SubpageShell>
  );
}
