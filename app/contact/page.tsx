import type { Metadata } from "next";
import SubpageShell from "../_components/SubpageShell";

const consultationSteps = [
  ["01", "資料來源", "目前有哪些文件、資料或系統需要整理？"],
  ["02", "使用對象", "誰會查詢、使用或維護這些內容？"],
  ["03", "預期成果", "哪一段工作流程最希望先被改善？"],
];

export const metadata: Metadata = {
  title: "聯絡我們",
  description: "提供資料來源、使用對象與導入目標，與 SynaiQ 討論企業知識與 AI 應用方向。",
};

export default function ContactPage() {
  return (
    <SubpageShell
      eyebrow="LET'S BUILD WHAT'S NEXT"
      title="準備好讓企業知識開始行動了嗎？"
      description="歡迎告訴我們你的資料現況、應用場景與導入目標，我們將與你一起討論合適的智慧應用方向。"
      pageClassName="contact-page"
      action={{
        href: "mailto:service@synaiq.com",
        label: "寄送初步需求",
        eyebrow: "START A CONSULTATION",
        title: "帶著三個線索，開始討論導入。",
        description: "資料來源、使用對象與希望改善的流程，會讓第一次討論更聚焦。",
      }}
    >
      <section className="subpage-section contact-page-grid">
        <a className="contact-page-card" href="tel:+886423931368"><div className="eyebrow">SERVICE CALL</div><strong>+886 4 2393 1368</strong><span>撥打電話 ↗</span></a>
        <a className="contact-page-card" href="mailto:service@synaiq.com"><div className="eyebrow">EMAIL SUPPORT</div><strong>service@synaiq.com</strong><span>寄送 Email ↗</span></a>
        <div className="contact-page-card"><div className="eyebrow">COMPANY HQ</div><strong>鑫揚智能科技股份有限公司</strong><span>台中市西屯區文心路二段 201 號 11 樓之 8</span></div>
      </section>
      <section className="subpage-section consultation-section" aria-labelledby="consultation-heading">
        <div className="eyebrow">CONSULTATION FLOW</div>
        <h2 id="consultation-heading">第一次討論，先從三個問題開始。</h2>
        <ol className="consultation-flow">
          {consultationSteps.map(([number, title, description]) => <li key={number}><span>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}
        </ol>
      </section>
    </SubpageShell>
  );
}
