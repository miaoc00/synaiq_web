import SubpageShell from "../_components/SubpageShell";

export default function ContactPage() {
  return (
    <SubpageShell
      eyebrow="LET&apos;S BUILD WHAT&apos;S NEXT"
      title="準備好讓企業知識開始行動了嗎？"
      description="歡迎告訴我們你的資料現況、應用場景與導入目標，我們將與你一起討論合適的智慧應用方向。"
    >
      <section className="subpage-section contact-page-grid">
        <a className="contact-page-card" href="tel:+886423931368"><div className="eyebrow">SERVICE CALL</div><strong>+886 4 2393 1368</strong><span>撥打電話 ↗</span></a>
        <a className="contact-page-card" href="mailto:service@synaiq.com"><div className="eyebrow">EMAIL SUPPORT</div><strong>service@synaiq.com</strong><span>寄送 Email ↗</span></a>
        <div className="contact-page-card"><div className="eyebrow">COMPANY HQ</div><strong>鑫揚智能科技股份有限公司</strong><span>台中市西屯區文心路二段 201 號 11 樓之 8</span></div>
      </section>
    </SubpageShell>
  );
}
