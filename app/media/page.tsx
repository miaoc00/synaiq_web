import SubpageShell from "../_components/SubpageShell";

const mediaSections = [
  ["新聞集錦", "新聞標題、發布日期、內容摘要與原始來源待補。"],
  ["活動訊息", "活動名稱、日期、地點、報名網址與活動圖片待補。"],
  ["影音刊物", "影片標題、YouTube 網址、影片摘要與封面圖片待補。"],
  ["社群平台", "YouTube、Facebook、Instagram 正式網址待補。"],
];

export default function MediaPage() {
  return (
    <SubpageShell
      eyebrow="MEDIA CENTER"
      title="掌握 SynaiQ 最新消息與應用動態。"
      description="媒體中心將收錄新聞、活動、影音與社群內容；正式資料確認後再逐項公開。"
      action={{ href: "/contact", label: "聯絡我們" }}
    >
      <section className="subpage-section">
        <div className="media-page-grid">{mediaSections.map(([title, description]) => <article className="media-page-card" key={title}><div className="eyebrow">待補資料</div><h2>{title}</h2><p>{description}</p></article>)}</div>
      </section>
    </SubpageShell>
  );
}
