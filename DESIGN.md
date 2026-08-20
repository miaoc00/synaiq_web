---
name: SynaiQ
description: 以企業知識為核心的高科技智慧中樞設計系統
colors:
  ink: "#120725"
  purple: "#612271"
  violet: "#8b5fd3"
  lavender: "#c498ee"
  gold: "#d0ae68"
  paper: "#f5f1ea"
  white: "#ffffff"
typography:
  display:
    fontFamily: '"SynaiQ Noto Sans CJK TC", "Source Han Sans TC", "思源黑體 TC", "Noto Sans TC", sans-serif'
    fontSize: "clamp(2.625rem, 4.6vw, 5.125rem)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.03em"
  body:
    fontFamily: '"SynaiQ Noto Sans CJK TC", "Source Han Sans TC", "思源黑體 TC", "Noto Sans TC", sans-serif'
    fontSize: "clamp(0.9375rem, 1.15vw, 1.125rem)"
    fontWeight: 500
    lineHeight: 1.8
    letterSpacing: "normal"
  label:
    fontFamily: '"SynaiQ Noto Sans CJK TC", "Source Han Sans TC", "思源黑體 TC", "Noto Sans TC", sans-serif'
    fontSize: "0.6875rem"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "0.18em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "14px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "28px"
  2xl: "44px"
  3xl: "72px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "50px"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "11px 18px"
---

# Design System: SynaiQ

## Overview

**Creative North Star: "企業知識中樞"**

SynaiQ 的介面是一個可被看見、理解並操作的企業知識中樞。畫面從深色資料空間中建立清楚層次，讓知識、推理、工具與代理執行形成連續關係；產品介面與已確認成果是視覺證據，抽象光網只負責說明連結，不取代證據。

系統允許更強的玻璃、景深、發光與動態展示，但每一項效果都必須服務資訊層級或狀態回饋。高科技感來自精準的空間、光線與互動，而不是堆疊裝飾。品牌 Medium 字體已由使用者提供 `NotoSansCJKtc-Medium.otf`，網站以專案字型名稱 `SynaiQ Noto Sans CJK TC` 載入，Source Han Sans TC 與系統中文字型保留為載入失敗時的 fallback。

**Key Characteristics:**

- 深色企業資料空間與紫色知識層次
- 金色作為決策、焦點與可操作訊號
- 玻璃、景深、柔光與軌道形成高科技展示感
- 真實產品介面優先於通用 AI 抽象圖形
- 思源黑體 Medium 統一中文品牌聲音

## Colors

色彩沿用程式中的技術 token 名稱，不另外賦予隱喻式品牌名稱。

### Primary

- **Gold:** 只用於主要 CTA、目前狀態、focus ring 與少量關鍵訊號。
- **Purple:** 品牌能量、互動層次與深色表面的次級強調色。

### Secondary

- **Violet:** 知識節點、互動光層與圖像深度的中間色。
- **Lavender:** 高亮層、連結軌跡與大型視覺的柔光色。

### Neutral

- **Ink:** 全站主要深色背景與玻璃表面的基底。
- **Paper:** 需要高反差說明或淺色證據畫布時使用。
- **White:** 主要文字；降低透明度後可作次要文字與邊界。

**The Signal Rule.** Gold 必須保持稀少；同一畫面只指向一個主要決策或目前狀態。

**The Evidence Contrast Rule.** 產品截圖需要清楚的中性畫布或邊界，不讓紫色光暈污染介面內容。

## Typography

**Display Font:** `SynaiQ Noto Sans CJK TC` Medium（使用者提供的 `NotoSansCJKtc-Medium.otf`）
**Body Font:** `SynaiQ Noto Sans CJK TC` Medium
**Label Font:** `SynaiQ Noto Sans CJK TC` Medium

**Character:** 字型統一為理性、穩定的中文無襯線系統。展示感由尺度、空間與光影建立，不再依賴 Georgia 的西文襯線氣質。

### Hierarchy

- **Display:** Medium、大尺度、緊密行距；只用於每幕唯一主張。
- **Headline:** Medium、明確分行；負責把能力轉成企業結果。
- **Title:** Medium；用於產品、證據與流程節點。
- **Body:** Medium、寬鬆行距，正文行寬控制在約 70ch 內。
- **Label:** Medium、小尺寸、高字距；只標示系統狀態、章節與技術分類。

**The One Typeface Rule.** 中文品牌畫面統一使用思源黑體 Medium；層級用尺度、字距與明暗建立，不混用裝飾性中文襯線字。

## Layout

桌機首頁以全視窗章節建立敘事，但每一幕必須能被章節索引直接探索。兩欄構圖讓產品證據與價值主張互相支撐；抽象圖解只能位於次要層，真實截圖、產品或流程成為視覺焦點。

內容寬度使用流動式外距，主要斷點為 1200px、900px、767px 與 560px。900px 以下切換為自然直向閱讀；取消不必要的整屏最低高度，確保手機能快速掃描產品入口、證據與 CTA。觸控目標至少 44px，fixed header 下的目標段落必須保留停靠空間。

**The Scan Before Story Rule.** 故事可以逐幕展開，但章節名稱與產品入口必須先可被辨識，不要求訪客記住無文字圓點。

## Elevation & Depth

系統採高立體度的混合層次：深色背景承載大尺度模糊光暈，玻璃表面用半透明背景、細邊框與 backdrop blur 建立前後關係，焦點物件再使用定向陰影與局部發光。光暈是空間與狀態訊號，不可平均套在所有元件上。

### Shadow Vocabulary

- **CTA Lift:** 中度垂直陰影，hover 時提高並稍微放大陰影範圍。
- **Glass Float:** 長距離柔影，讓文件、產品證據與節點浮在資料空間前方。
- **Knowledge Glow:** 紫色或 Lavender 的低透明發光，只用於知識核心與連結狀態。
- **Product Grounding:** 深色 drop-shadow 將去背產品固定在場景中，避免漂浮感。

**The Directed Light Rule.** 每一幕只允許一個主要光源與一個焦點發光；其餘表面靠邊界與明暗層級區分。

## Shapes

圓形與軌道代表知識連結；膠囊代表可操作入口或短狀態；證據卡使用中度圓角與清楚矩形框架，維持產品畫面的可信度。玻璃卡片可使用 12–14px 圓角，主要 CTA 與章節膠囊使用全圓角。避免將所有容器都做成相同膠囊，造成互動與裝飾無法區分。

## Components

### Buttons

- **Shape:** 主要與次要 CTA 使用膠囊形；最小高度 44px，主要 CTA 為 50px。
- **Primary:** Gold 底與 Ink 文字，hover 上移並增加定向陰影。
- **Hover / Focus:** hover 可增加亮度、景深或微量光暈；focus 必須保留 2px Gold 外框，不以光暈取代可見焦點。
- **Ghost:** 透明背景、細白邊框；hover 時邊框與文字轉為 Gold。

### Cards / Containers

- **Corner Style:** 證據卡與玻璃卡使用中度圓角。
- **Background:** 深色玻璃表面；產品截圖區使用中性畫布保留原始介面色彩。
- **Shadow Strategy:** 靜止時以細邊框與低光層分隔；焦點或 hover 才提高景深。
- **Internal Padding:** 桌機以 24–28px 為主，手機縮減但不壓縮互動目標。

### Navigation

- 頂部導覽保持四個主要入口與一個明確 CTA。
- 首頁章節導覽顯示短標籤、目前狀態與鍵盤 focus，不再只依賴無文字圓點。
- 產品與技術名詞若已有對應頁面，必須是可辨識的連結，不使用看似可點擊但無行為的 pills。

### Evidence Stage

產品介面截圖以玻璃框架、景深與局部光線建立展示感；caption 明確標示素材身分，情境示意不可包裝成客戶案例。多張證據採主畫面＋次畫面層疊，不使用等權重縮圖牆。

## Do's and Don'ts

### Do:

- **Do** 讓已確認的產品介面、流程與產品素材成為每幕主要證據。
- **Do** 使用玻璃、景深與發光強化空間關係和互動狀態。
- **Do** 讓章節名稱、產品入口與 CTA 在鍵盤和觸控環境中清楚可探索。
- **Do** 使用 `font-display: swap` 載入正式 Medium 字型，並保留 Source Han Sans TC 與系統中文字型 fallback。

### Don't:

- **Don't** 用通用 AI 球體、節點或光線取代可驗證產品內容。
- **Don't** 讓所有元件同時發光、浮起或播放動畫。
- **Don't** 以視覺效果遮蔽文字、caption、focus ring 或產品截圖。
- **Don't** 將待補資料、情境示意或未確認成果寫成公開案例。
