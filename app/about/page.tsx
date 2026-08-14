import SubpageShell from "../_components/SubpageShell";

const leadership = [
  ["Wilson Chiu", "鉅瀚綠能總經理", "國立交通大學工業工程與管理研究所"],
  ["Sunny Kang", "鑫揚智能科技執行長", "鉅詢永續策略總經理、鑫揚智能科技營運長"],
  ["Leef Lee", "財務長", "國立成功大學會計系、財會協理"],
  ["Yi Shyang Lou", "總經理特助", "國立中央大學資訊管理研究所博士"],
  ["Dale Lin", "全端暨韌體總工程師", "國立中興大學電機工程研究所"],
  ["Daniel Shih", "專利策略師", "國立陽明交通大學科技管理研究所"],
];

export default function AboutPage() {
  return (
    <SubpageShell
      eyebrow="ABOUT SYNAIQ"
      title="將企業內部知識，轉化為可運用的智慧資產。"
      description="SynaiQ 是一家專注於專屬知識庫模型訂製服務的創新科技公司，協助企業與組織建立貼合自身需求的智能系統，讓人工智慧真正融入決策與日常運作。"
      action={{ href: "/contact", label: "聯絡我們" }}
    >
      <section className="subpage-section subpage-two-column">
        <div><div className="eyebrow">OUR APPROACH</div><h2>把企業知識，變成可持續成長的智慧資產。</h2></div>
        <div className="subpage-copy"><p>我們以企業內部知識轉化為核心，透過軟硬體整合與跨系統協作，為不同產業建立可持續發展的 AI 應用環境。</p><ul className="subpage-list"><li>專屬知識庫模型訂製服務</li><li>AI 智能系統整合</li><li>Wally 系列數位人互動系統</li></ul></div>
      </section>
      <section className="subpage-section">
        <div className="eyebrow">TEAM</div><h2>經營團隊與技術團隊</h2>
        <div className="team-grid">{leadership.map(([name, role, background]) => <article className="team-card" key={name}><strong>{name}</strong><span>{role}</span><p>{background}</p></article>)}</div>
      </section>
      <section className="subpage-section subpage-two-column">
        <div><div className="eyebrow">VISION</div><h2>讓 AI 真正融入企業的日常運作。</h2></div>
        <ul className="subpage-list"><li>以使用者為中心的 AI 互動設計</li><li>具備場域導向的 AI 系統整合能力</li><li>提供高標準資安與可分階段導入的架構</li></ul>
      </section>
    </SubpageShell>
  );
}
