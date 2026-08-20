import Image from "next/image";
import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

const leadership = [
  { name: "Wilson Chiu", role: "鉅瀚綠能總經理", background: "國立交通大學工業工程與管理研究所", photo: "/brand/team/wilson-web-1.jpg", alt: "Wilson Chiu 個人照片" },
  { name: "Sunny Kang", role: "鑫揚智能科技執行長", background: "鉅詢永續策略總經理、鑫揚智能科技營運長", photo: "/brand/team/sunny-web-1.1.jpg", alt: "Sunny Kang 個人照片" },
  { name: "Leef Lee", role: "財務長", background: "國立成功大學會計系、財會協理", photo: "/brand/team/leff-web-1.jpg", alt: "Leef Lee 個人照片" },
];

const technical = [
  { name: "Yi Shyang Lou", role: "總經理特助", background: "國立中央大學資訊管理研究所博士", photo: "/brand/team/lou-web-1.jpg", alt: "Yi Shyang Lou 個人照片" },
  { name: "Dale Lin", role: "全端暨韌體總工程師", background: "國立中興大學電機工程研究所", photo: "/brand/team/dale-web-1.jpg", alt: "Dale Lin 個人照片" },
  { name: "Daniel Shih", role: "專利策略師", background: "國立陽明交通大學科技管理研究所", photo: "/brand/team/daniel-web-1.jpg", alt: "Daniel Shih 個人照片" },
];

export const metadata: Metadata = {
  title: "關於公司",
  description: "認識 SynaiQ 如何把企業內部知識轉化為可運用的智慧資產。",
};

function TeamGroup({ eyebrow, title, members }: { eyebrow: string; title: string; members: typeof leadership }) {
  return (
    <div className="team-group">
      <div className="eyebrow">{eyebrow}</div>
      <h3 className="team-group-title">{title}</h3>
      <div className="team-grid">{members.map((member) => <article className="team-card" key={member.name}><div className="team-photo"><Image src={member.photo} alt={member.alt} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 33vw" /></div><h3 className="team-card-name">{member.name}</h3><span>{member.role}</span><p>{member.background}</p></article>)}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <SubpageShell
      eyebrow="ABOUT SYNAIQ"
      title="將企業內部知識，轉化為可運用的智慧資產。"
      description="SynaiQ 是一家專注於專屬知識庫模型訂製服務的創新科技公司，協助企業與組織建立貼合自身需求的智能系統，讓人工智慧真正融入決策與日常運作。"
      pageClassName="about-page"
      action={{ href: "/contact", label: "聯絡我們" }}
    >
      <section className="subpage-section subpage-two-column">
        <div><div className="eyebrow">OUR APPROACH</div><h2>把企業知識，變成可持續成長的智慧資產。</h2></div>
        <div className="subpage-copy"><p>我們以企業內部知識轉化為核心，透過軟硬體整合與跨系統協作，為不同產業建立可持續發展的 AI 應用環境。</p><ul className="subpage-list"><li>專屬知識庫模型訂製服務</li><li>AI 智能系統整合</li><li>Wally 系列數位人互動系統</li></ul></div>
      </section>
      <section className="subpage-section">
        <div className="eyebrow">TEAM</div><h2>經營團隊與技術團隊</h2>
        <TeamGroup eyebrow="LEADERSHIP TEAM" title="經營團隊" members={leadership} />
        <TeamGroup eyebrow="TECHNICAL TEAM" title="技術團隊" members={technical} />
      </section>
      <section className="subpage-section subpage-two-column">
        <div><div className="eyebrow">VISION</div><h2>讓 AI 真正融入企業的日常運作。</h2></div>
        <ul className="subpage-list"><li>以使用者為中心的 AI 互動設計</li><li>具備場域導向的 AI 系統整合能力</li><li>依組織需求規劃部署與分階段導入方式</li></ul>
      </section>
    </SubpageShell>
  );
}
