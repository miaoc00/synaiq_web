import SubpageShell from "../_components/SubpageShell";

const capabilities = ["匯入 PDF、Word、Excel、圖片、掃描與手寫資料", "多模態語意萃取", "結構化與非結構化知識索引", "語意檢索與來源引用", "企業權限與資料治理", "雲端、本地端或混合部署"];

export default function KnowledgeBasePage() {
  return (
    <SubpageShell eyebrow="ENTERPRISE KNOWLEDGE HUB" title="讓分散的企業資料，成為可信賴的知識網絡。" description="整合文件、圖片、掃描與既有資料來源，透過語意萃取、結構化索引與來源追溯，建立可搜尋、可理解、可持續更新的企業專屬知識中樞。">
      <section className="subpage-section subpage-two-column"><div><div className="eyebrow">CORE CAPABILITIES</div><h2>讓資料不只被保存，更能被理解與使用。</h2></div><ul className="subpage-list">{capabilities.map((item) => <li key={item}>{item}</li>)}</ul></section>
      <section className="subpage-section"><div className="eyebrow">USE CASES</div><h2>從查詢、訓練到組織記憶。</h2><p className="subpage-wide-copy">內部知識查詢、文件與制度搜尋、教育訓練與新人支援、客戶服務與技術支援，以及專案經驗與組織記憶保存。</p></section>
    </SubpageShell>
  );
}
