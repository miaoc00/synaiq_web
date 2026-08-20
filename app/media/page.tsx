import type { Metadata } from "next";
import ContentStatus from "../_components/ContentStatus";
import EmptyState from "../_components/EmptyState";
import SubpageShell from "../_components/SubpageShell";

export const metadata: Metadata = {
  title: "媒體中心",
  description: "查看 SynaiQ 已確認的活動與社群入口；新聞資料確認後再逐項公開。",
};

export default function MediaPage() {
  return (
    <SubpageShell
      eyebrow="MEDIA CENTER"
      title="掌握 SynaiQ 最新消息與應用動態。"
      description="媒體中心將收錄新聞、活動與社群內容；正式資料確認後再逐項公開。"
      pageClassName="media-page"
      action={{
        href: "/contact",
        label: "聯絡 SynaiQ",
        eyebrow: "MEDIA & PARTNERSHIPS",
        title: "想了解活動或合作資訊？",
        description: "目前未公開的新聞與活動欄位，會在資料確認後更新；其他詢問歡迎直接聯絡我們。",
      }}
    >
      <section className="subpage-section media-section" aria-labelledby="news-heading">
        <div className="eyebrow">NEWS</div>
        <h2 id="news-heading">新聞集錦</h2>
        <EmptyState title="目前沒有可公開的新聞" description="新聞標題、日期與來源確認後，才會在這裡逐項更新。" action={{ href: "/contact", label: "聯絡 SynaiQ" }} />
      </section>

      <section className="subpage-section media-section" aria-labelledby="events-heading">
        <div className="eyebrow">EVENTS</div>
        <h2 id="events-heading">活動訊息</h2>
        <article className="media-event-card">
          <ContentStatus tone="draft">暫存活動／資料待補</ContentStatus>
          <h3>台灣國際淨零永續展</h3>
          <dl className="event-details">
            <div><dt>日期</dt><dd>10/14–16（年份待補）</dd></div>
            <div><dt>攤位</dt><dd>攤位編號 M1105a</dd></div>
            <div><dt>地點</dt><dd>地點待補</dd></div>
            <div><dt>報名連結</dt><dd>報名網址待補</dd></div>
          </dl>
          <div className="event-image-placeholder" role="img" aria-label="活動圖片待補">活動圖片待補</div>
        </article>
      </section>

      <section className="subpage-section media-section" aria-labelledby="social-heading">
        <div className="eyebrow">SOCIAL</div>
        <h2 id="social-heading">社群平台</h2>
        <div className="social-card">
          <ContentStatus>已確認連結</ContentStatus>
          <h3>Instagram</h3>
          <p>追蹤 SynaiQ 的最新內容與應用動態。</p>
          <a className="primary-button" href="https://www.instagram.com/synaiq.ai/" target="_blank" rel="noopener noreferrer" aria-label="在新分頁開啟 SynaiQ Instagram">前往 Instagram ↗</a>
        </div>
      </section>
    </SubpageShell>
  );
}
