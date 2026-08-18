# SynaiQ Web UI/UX 實作規格

> 版本：2026-08-17
>
> 目的：把 PM 已確認的資料轉成前端可直接實作的介面規格。
>
> 本文件只定義 UI/UX、內容分級、圖片 mapping、responsive、accessibility 與驗收條件；本輪不修改 `app` 程式、不搬移素材、不 commit、push 或部署。

## 0. 規格來源與資料邊界

本 brief 以以下文件最新內容為準：

- [PROJECT_CONFIRMATION_CHECKLIST.md](PROJECT_CONFIRMATION_CHECKLIST.md)
- [PROJECT_HANDOFF.md](PROJECT_HANDOFF.md)
- [PROJECT_DASHBOARD.md](PROJECT_DASHBOARD.md)
- [app/globals.css](app/globals.css)
- [app/page.tsx](app/page.tsx)
- [app/wally/page.tsx](app/wally/page.tsx)
- [app/about/page.tsx](app/about/page.tsx)

資料只分成三種狀態：

| 狀態 | UI 行為 |
| --- | --- |
| 已確認 | 可公開呈現，可做正式 card、圖片、連結與 caption。 |
| 部分確認／暫存 | 可呈現已確認部分，但要加「資料待補」或「暫存」狀態，不可補寫缺少欄位。 |
| 不公開／待確認 | 不做公開展示區；若需要保留頁面結構，使用空狀態，不使用猜測內容。 |

禁止自行補寫：Wally 未提供的尺寸／螢幕／網路／重量／電力、新聞標題與日期、活動年份／地點／報名網址、YouTube／Facebook 網址、AGI 案例名稱與成果數字，以及任何額外資安承諾。

## 1. Wally 五型號同頁規格與圖片 mapping

### 1.1 資訊架構決定

維持單一路徑 `/wally`，五個型號全部在同一頁，不建立型號子頁：

```text
/wally
├─ Wally 系列主視覺與產品定位
├─ 系列核心能力
├─ 五型號導覽／型號卡
│  ├─ Wally 1
│  ├─ Wally 1 Plus
│  ├─ Wally 2
│  ├─ Wally 2 Plus
│  └─ Wally Mini
├─ 型號補充資訊／比較欄位
└─ 聯絡／預約展示 CTA
```

五個型號的正式排序固定為：

1. Wally 1
2. Wally 1 Plus
3. Wally 2
4. Wally 2 Plus
5. Wally Mini

桌機可使用型號錨點列快速跳轉；錨點必須是可鍵盤操作的 `<a>`，不是僅靠視覺點點。頁面仍要保留五張卡的完整內容，避免只有互動切換才看得到資料。

### 1.2 圖片 mapping

| 型號 | 正式顯示名稱 | 產品圖 mapping | 圖片用途 | alt 建議 |
| --- | --- | --- | --- | --- |
| Wally 1 | `Wally 1` | `public/brand/wally-1.png` | 型號主圖 | `Wally 1 產品照片` |
| Wally 1 Plus | `Wally 1 Plus` | 原始素材：`品牌素材\\照片\\wally 產品圖\\Wally 1 plus.png` | 新增型號主圖；不可套用 Wally 1 | `Wally 1 Plus 產品照片` |
| Wally 2 | `Wally 2` | `public/brand/wally/wally-2.png` | 型號主圖 | `Wally 2 產品照片` |
| Wally 2 Plus | `Wally 2 Plus` | `public/brand/wally-2-plus.png` | 型號主圖 | `Wally 2 Plus 產品照片` |
| Wally Mini | `Wally Mini` | `public/brand/wally-mini.png` | 型號主圖 | `Wally Mini 產品照片` |

Wally 1 Plus 的原始素材已由 PM 確認存在，但尚未複製到 `public/brand/`。前端實作前要先建立公開引用版本；原始檔不可移動或覆寫。建議公開路徑為：

```text
public/brand/wally/wally-1-plus.png
```

補充素材的用途要與五張型號主圖分開：

| 素材 | UI 用途 | 不可誤標 |
| --- | --- | --- |
| `public/brand/wally/wally-series.png` | 系列總覽／頁面 banner | 不當成某一個型號 |
| `public/brand/wally/wally-2-hero.png` | Wally 2 形象圖／情境圖 | 不取代 Wally 2 主圖 |
| `public/brand/wally-2-cutout.png` | Wally 2 去背主視覺 | 不標成 Wally 1 Plus |

### 1.3 型號卡內容層級

每張型號卡固定順序：

```text
產品圖
型號名稱
一句定位
主要特色（最多 3 項）
適用場域（有確認才顯示）
規格欄位（只有已提供欄位）
```

目前可放入卡片的已確認方向：

- Wally 1：定點式智慧互動服務設備；適合櫃檯、入口、大廳與資訊服務站；長期定點部署、高穩定度、高頻率諮詢場域。
- Wally 1 Plus：承襲 Wally 1 AI 功能，增加自主移動模組；需建圖；自主移動巡航、擴大服務覆蓋、適合中大型與具動線場域。
- Wally 2：以 55 吋透明 OLED 為核心；高科技形象展示、定點式智慧接待與導覽、適合品牌形象與展示空間。
- Wally 2 Plus：透明 OLED 加自主移動底盤；巡航移動、語音巡講、適合展會、展館與大型公共空間。
- Wally Mini：非行走式行動陪伴型 AI 數位人；原地互動、水平方向 360° AI 人臉追蹤、隨身攜帶與快速部署。

規格可公開但目前未提供的欄位先不渲染；重量與電力即使未來取得，也不納入公開比較表。

### 1.4 Wally 驗收條件

- [ ] `/wally` 只有一頁，五個型號順序與名稱完全符合本 brief。
- [ ] 每個型號主圖與型號一一對應；Wally 1 Plus 使用新圖片，不借用其他型號圖片。
- [ ] 每個圖片 alt 包含正確型號，不使用「Wally 系列產品照片」這種模糊描述。
- [ ] 桌機五欄不造成型號名稱或定位文字擁擠；平板 2–3 欄；手機單欄。
- [ ] 未提供的規格欄位不出現假資料；重量、電力不出現在公開比較表。
- [ ] 型號錨點可用鍵盤操作，當前型號有清楚 focus 狀態。
- [ ] 大圖採 lazy loading；只有頁面第一張主視覺可使用 priority。

預計影響檔案：

- `app/wally/page.tsx`
- `app/globals.css`
- `public/brand/wally/wally-1-plus.png`（由前端／素材流程建立公開副本）
- `PROJECT_HANDOFF.md`（實作完成後同步 mapping）

## 2. 首頁第一區：以「多多去背」取代動態 Q

### 2.1 視覺決定

首頁第一區右側不再顯示動態 `Q` 核心，改使用：

```text
品牌素材\\照片\\AGI等示意圖\\多多去背.png
```

此圖是數位人形象去背圖，不是產品介面截圖，也不宣稱特定客戶案例。視覺上保留深紫背景、淡紫光暈與金色品牌細節，但取消會與人物輪廓競爭的旋轉 Q 核心。

### 2.2 Desktop／mobile layout

桌機：

- 左側保留品牌標題、說明與 CTA。
- 右側設置 `hero-digital-human`，寬度建議 `clamp(280px, 36vw, 560px)`。
- 使用 `object-fit: contain`，人物腳部與頭部不可被裁切。
- 圖片後方可保留一個靜態 radial halo；不可讓 halo 降低人物輪廓辨識度。
- 不再顯示 `orbit-core` 的 `Q` 字樣；外圍細線若保留，只作低對比裝飾。

手機：

- 文案先出現，人物圖在 CTA 後或文案下方出現。
- 圖片寬度建議 `min(78vw, 380px)`，不可用原本右移出界的定位方式。
- 保留靜態人物圖，避免人物被導航或標題覆蓋。

圖片建議 alt：`SynaiQ 數位人形象示意圖`。如果前端最後把它完全當作裝飾背景，才改為 `alt=""` 並加 `aria-hidden="true"`；不可同時把它當成內容又隱藏給讀屏器。

### 2.3 首頁第一區驗收條件

- [ ] 第一區右側不再出現動態 Q 或 Q 字樣。
- [ ] `多多去背.png` 是唯一主要人物視覺，頭部、身體與腳部在桌機／手機都完整可見。
- [ ] 圖片與標題有足夠留白，人物不壓住文字、CTA 或手機選單。
- [ ] `prefers-reduced-motion: reduce` 下仍顯示完整靜態人物圖。
- [ ] 圖片 alt／裝飾性狀態只有一種，不出現重複讀取。
- [ ] 1440×900、1024×768、390×844 都沒有水平溢出。

預計影響檔案：

- `app/page.tsx`
- `app/globals.css`
- `public/brand/`（新增可引用的 `多多去背` 公開副本）
- `PROJECT_HANDOFF.md`（更新首頁主視覺狀態）

## 3. 首頁「產品畫面」區塊的 AGI 去背圖使用方式

### 3.1 使用目的

首頁第五區目前的 Wally 2 單一視覺，改成「數位人與產品體驗入口」：

- 主視覺：`多多去背.png`
- 輔助視覺：`Wally 1.png`、`Wallymini.png`
- 文字仍保留「Wally 系列產品視覺／企業知識庫畫面／AI Agent 操作畫面／客製化應用介面」分類，但不能暗示尚未提供的截圖已經存在。

建議構圖：

```text
           多多去背（主視覺）
       Wally 1       Wally Mini（小型輔助圖）

  caption：數位人形象與 Wally 產品互動示意
```

`多多去背.png` 可以在首頁第一區與第五區重複使用，但第五區必須採不同裁切／尺寸／構圖，避免頁面看起來像重複貼圖。圖片快取可由瀏覽器共用，不需複製多份原圖。

### 3.2 內容標籤規則

第五區的 `多多去背.png` caption 使用：

```text
數位人形象與 Wally 互動示意
```

不可使用：

- 企業知識庫產品截圖
- AI Agent 操作畫面
- 已核准客戶案例
- 實績成果截圖

企業知識庫的正式截圖要放在 `/knowledge-base`：

- `知識庫.png`
- `企業管理系知識庫.jpg`

生成式 AI 的正式成果截圖要放在 `/generative-ai`：

- `媒體工廠.png`

`知識庫情境01.png` 若接入，只能標示為「情境示意」，不可標示為客戶案例或實績。

### 3.3 首頁產品畫面驗收條件

- [ ] 第五區主視覺改為 `多多去背.png`，不再只顯示 Wally 2 去背圖。
- [ ] Wally 1 與 Wally Mini 只作輔助圖，不取代主視覺，不與型號卡 mapping 混淆。
- [ ] caption 明確說明是「數位人形象／互動示意」，不誤稱為 UI 截圖。
- [ ] 企業知識庫與生成式 AI 的正式截圖出現在各自產品頁，不被首頁 placeholder 冒充。
- [ ] `知識庫情境01.png` 若未採用，頁面不顯示；採用時一定有「情境示意」標籤。
- [ ] 圖片在手機排列為主視覺 → 輔助產品圖，不造成水平捲動。

預計影響檔案：

- `app/page.tsx`
- `app/globals.css`
- `public/brand/`（新增 `多多去背`、Wally 1、Wally Mini 可引用副本）
- `app/knowledge-base/page.tsx`
- `app/generative-ai/page.tsx`
- `PROJECT_HANDOFF.md`

## 4. 經營團隊與技術團隊 card

### 4.1 共用 card 結構

每個人使用一張完整 card，照片、姓名、職稱、背景不可拆成不同區塊：

```text
┌─────────────────────────┐
│       4:5 人物照片       │
├─────────────────────────┤
│ 姓名（h3）               │
│ 職稱                     │
│ 背景／學歷／經歷         │
└─────────────────────────┘
```

資料排版：

- 姓名：主要標題，使用 `h3`，保留英文拼字。
- 職稱：金色或品牌 accent，小型 metadata。
- 背景：一般內文，顯示已確認的學歷／經歷；不另加 50–100 字介紹。
- 照片：固定 4:5，`object-fit: cover`、`object-position: center top`；正式驗收要確認不切臉。

### 4.2 已確認資料與圖片

經營團隊：

| 姓名 | 職稱 | 背景 | 圖片 |
| --- | --- | --- | --- |
| Wilson Chiu | 鉅瀚綠能總經理 | 國立交通大學工業工程與管理研究所 | `public/brand/team/wilson-web-1.jpg` |
| Sunny Kang | 鑫揚智能科技執行長 | 鉅詢永續策略總經理、鑫揚智能科技營運長 | `public/brand/team/sunny-web-1.1.jpg` |
| Leef Lee | 財務長 | 國立成功大學會計系、財會協理 | `public/brand/team/leff-web-1.jpg` |

技術團隊：

| 姓名 | 職稱 | 背景 | 圖片 |
| --- | --- | --- | --- |
| Yi Shyang Lou | 總經理特助 | 國立中央大學資訊管理研究所博士 | `public/brand/team/lou-web-1.jpg` |
| Dale Lin | 全端暨韌體總工程師 | 國立中興大學電機工程研究所 | `public/brand/team/dale-web-1.jpg` |
| Daniel Shih | 專利策略師 | 國立陽明交通大學科技管理研究所 | `public/brand/team/daniel-web-1.jpg` |

alt 規則：`{姓名} 個人照片`。照片全部已確認可公開；仍需保留素材來源與授權紀錄，不在畫面上暴露檔案系統路徑。

### 4.3 Responsive 與 card 驗收條件

- [ ] 經營團隊與技術團隊各自有明確 group heading。
- [ ] 桌機 3 欄、平板 2 欄、手機 1 欄；所有 card 的照片比例一致。
- [ ] card 內姓名、職稱、背景順序一致，長背景文字不造成欄高跳動。
- [ ] 320–390px 寬度下姓名、職稱、背景完整可讀，不水平溢出。
- [ ] 每張照片 alt 與實際人物相符。
- [ ] card 不新增未確認職稱、人物簡介或社群連結。
- [ ] keyboard focus 只出現在真正可互動元素；非連結 card 不做假按鈕效果。

預計影響檔案：

- `app/about/page.tsx`
- `app/globals.css`
- `PROJECT_HANDOFF.md`

## 5. 媒體中心：新聞與活動區塊

### 5.1 新聞集錦

PM 已確認要製作新聞區塊，但新聞的標題、日期、摘要、來源網址、封面圖與使用權仍未提供。因此 UI 先做正式區塊與空狀態，不製作虛構新聞 card。

正式有資料時的 card 結構：

```text
封面圖
發布日期
新聞標題
摘要
來源／閱讀原文
```

目前空狀態：

```text
新聞集錦
新聞內容整理中，確認後將陸續更新。
```

不要顯示假的日期、來源、封面或「最新新聞」標籤。空狀態可放「聯絡我們」 CTA，但不可使用 disabled 的假新聞連結。

### 5.2 活動訊息

目前可先顯示一張「部分資料確認」的暫存活動 card：

| 欄位 | 顯示內容 |
| --- | --- |
| 狀態 badge | `暫存活動／資料待補` |
| 活動名稱 | `台灣國際淨零永續展` |
| 日期 | `10/14–16（年份待補）` |
| 攤位 | `攤位編號 M1105a` |
| 地點 | `地點待補` |
| 報名連結 | `報名網址待補`，不做可點擊連結 |
| 圖片 | `活動圖片待補`，使用中性 placeholder |

「最新活動」可作區塊標題，但不要寫「即將舉行」或推定年份，直到年份與日期語意確認。暫存 card 要有與正式 card 不同的狀態 badge，讓使用者知道它不是完整活動資料。

### 5.3 影音與社群

- 影音刊物依 PM 決策不公開：不渲染影音區塊，不保留「影音資料待補」卡片。
- 社群只顯示 Instagram：`https://www.instagram.com/synaiq.ai/`。
- YouTube、Facebook 不建立空連結、不猜測網址。
- Instagram 可放在媒體頁社群 card、頁尾或聯絡頁，但全站只顯示一次主要入口，避免重複 CTA。
- 若新分頁開啟，使用 `rel="noopener noreferrer"` 並在 accessible name 中說明。

### 5.4 媒體頁驗收條件

- [ ] `/media` 有「新聞集錦」與「活動訊息」兩個清楚區塊。
- [ ] 新聞沒有資料時顯示空狀態，不顯示虛構新聞 card。
- [ ] 活動 card 顯示已確認的展名、10/14–16 與攤位 M1105a。
- [ ] 活動年份、地點、報名網址、圖片缺失時清楚標記「待補／暫存」。
- [ ] 報名網址待補時不是可點擊的假連結。
- [ ] 影音刊物整個區塊不公開。
- [ ] Instagram 連結正確指向 `https://www.instagram.com/synaiq.ai/`；沒有 YouTube／Facebook 猜測連結。
- [ ] 空狀態符合手機單欄、桌機最大寬度與 keyboard focus 規格。

預計影響檔案：

- `app/media/page.tsx`
- `app/_components/SubpageShell.tsx`（若 footer／社群入口共用）
- `app/globals.css`
- `PROJECT_HANDOFF.md`
- `PROJECT_CONFIRMATION_CHECKLIST.md`（實作完成後同步狀態）

## 6. 已確認／待補資料的空狀態規格

### 6.1 狀態元件

建立共用 `ContentStatus`／`EmptyState` 規則，至少支援：

| 狀態 | 視覺 | 可否互動 |
| --- | --- | --- |
| 已確認內容 | 正常 card、圖片與正式文字 | 依內容決定 |
| 部分確認 | 金色 outline 或小型 `暫存／資料待補` badge | 只有已有正式 URL 才可互動 |
| 待補 | 中性深色 surface、簡短說明 | 不放假按鈕、假連結 |
| 不公開 | 不渲染區塊 | 不適用 |

### 6.2 各頁狀態

- Wally：型號名稱、定位、特色與已確認圖片可公開；未提供規格欄位不要渲染；不使用大段「待補」取代產品內容。
- 企業知識庫：`知識庫.png`、`企業管理系知識庫.jpg` 可正式展示；`知識庫情境01.png` 若採用只能是「情境示意」。
- 生成式 AI：`媒體工廠.png` 作為成果截圖；案例文案維持「服飾業應用」概括說法。
- AGI：維持文字流程與部署 tags；不放案例空間、不放未確認成果。
- 媒體：新聞使用空狀態；活動使用暫存 card；影音整區不公開。
- 聯絡：電話、Email、地址可公開；服務時間與 Google Maps 不顯示；隱私權／分析工具尚待確認，不在本輪新增 consent UI。

### 6.3 空狀態驗收條件

- [ ] 使用者可從 badge／說明一眼辨識「已確認」與「資料待補」。
- [ ] 不以灰掉的假按鈕冒充未提供的連結。
- [ ] 不將「情境示意」稱為客戶實績或案例。
- [ ] 不公開項目不會在 DOM 中留下容易誤解的假入口。
- [ ] 空狀態文字有足夠對比、可被讀屏器讀取，且不依靠顏色單獨傳達狀態。

預計影響檔案：

- `app/_components/SubpageShell.tsx`
- `app/_components/ContentStatus.tsx`（建議新增）
- `app/_components/EmptyState.tsx`（建議新增）
- `app/globals.css`
- `app/wally/page.tsx`
- `app/knowledge-base/page.tsx`
- `app/generative-ai/page.tsx`
- `app/media/page.tsx`
- `app/contact/page.tsx`

## 7. Responsive、keyboard、focus、alt 與 reduced-motion

### 7.1 Breakpoint 與版面

至少驗證以下 viewport：

```text
320×800、390×844、768×1024、1024×768、1440×900
```

建議行為：

- ≥1200px：Wally 型號最多 5 欄；團隊與媒體 card 3 欄。
- 768–1199px：Wally 3 欄或 2 欄；團隊與媒體 2 欄。
- ≤767px：Wally、團隊與媒體單欄；首頁人物與產品視覺改為上下排列。
- 不使用固定 780px 高度讓手機內容被迫拉長；優先使用 `min-height: calc(100svh - header-height)` 或自然內容高度。
- 所有互動元素最小 44×44px；文字放大至 200% 不得水平溢出。

### 7.2 Keyboard 與 focus

- 全站加入可見的「跳至主要內容」skip link。
- 手機 menu button：Enter／Space 開關，Escape 關閉，關閉後焦點回到按鈕。
- 導覽連結有 `aria-current="page"`。
- 型號錨點與社群連結使用真實 `<a>`；按鈕只負責狀態或動作。
- focus indicator 使用至少 2px、與背景有足夠對比的 outline；不能只依靠 hover。
- 首頁非目前滾動場景不可讓鍵盤焦點落入不可見內容；可用 `inert` 或等效 tab order 管理。
- 場景進度導覽使用 `<nav aria-label="首頁內容進度">`，當前場景提供 `aria-current` 或 `aria-pressed`。

### 7.3 Alt 與語意

- 產品圖 alt 必須包含正確型號。
- 團隊圖 alt 使用「姓名 個人照片」。
- `知識庫.png` alt 要說明是企業知識庫介面截圖；`企業管理系知識庫.jpg` 可說明為流程／知識庫工作流介面截圖。
- `媒體工廠.png` alt 使用「生成式 AI 服飾商品情境影像成果畫面」；不可新增客戶名稱或成果數字。
- `多多去背.png` 若是內容圖，alt 使用「SynaiQ 數位人形象示意圖」；若做純背景裝飾，才用空 alt。
- radial gradient、裝飾 orbit、halo 使用 `aria-hidden="true"`。
- 不將檔案路徑寫進可見 caption 或 alt；檔名只可在 PM 指定的實績截圖註記中使用。

### 7.4 Reduced motion

- `prefers-reduced-motion: reduce` 下，人物圖與產品圖維持靜態可見。
- 不用動畫作為唯一資訊提示；場景狀態仍要以內容順序、標題或 focus 表達。
- 停用 orbit、halo pulse、scene scrub、圖片位移與大幅 scale；保留必要的 focus／hover 立即狀態。
- 動態 Q 移除後不可用另一個自動旋轉的人物動畫取代。

### 7.5 Responsive／accessibility 驗收條件

- [ ] 以上五種 viewport 無水平捲軸、文字裁切或不可達內容。
- [ ] 只使用鍵盤可完成首頁、產品頁、團隊頁、媒體頁與外部 Instagram 連結導覽。
- [ ] menu Escape／焦點回復與 skip link 實測通過。
- [ ] 所有圖片都有準確 alt，裝飾圖不被讀屏器重複讀取。
- [ ] reduced-motion 模式仍可取得完整文字與產品資訊。
- [ ] 一般文字對比至少 4.5:1，大字至少 3:1；狀態不可只靠顏色辨識。

預計影響檔案：

- `app/_components/SiteHeader.tsx`
- `app/_components/SubpageShell.tsx`
- `app/page.tsx`
- `app/globals.css`
- 所有產品、團隊與媒體 page 元件

## 8. 圖片效能規格

目前已確認素材中，`多多去背.png`、`媒體工廠.png`、Wally 1 Plus 與多張 Wally 圖片均為 1–13MB 級距。前端實作需：

- 保留原始素材來源，但建立 web 使用副本；優先 WebP／AVIF，若透明邊界或品質不允許則保留 PNG。
- `next/image` 必須提供 `sizes`；`fill` 容器要有固定 aspect ratio。
- 首頁第一區主視覺可 priority；其他首頁場景、團隊、產品 gallery、媒體截圖 lazy load。
- Wally 系列總覽圖不在首屏預載；只在進入 Wally 圖片區時載入。
- 截圖使用預覽尺寸，點擊才可開啟較大版本；若沒有 lightbox，至少不要將原始超大圖直接作為卡片首載資源。
- 裝飾性副本不重複下載；首頁第一區與第五區重用同一 URL，使用不同 CSS crop／size。
- 圖片載入失敗要有中性 fallback，不可讓文字與 card 高度跳動。

效能驗收條件：

- [ ] 首屏沒有載入 13MB 系列總覽或非首屏圖片。
- [ ] 1440px、768px、390px 使用適合的圖片尺寸，不下載超過顯示需求的原圖。
- [ ] 圖片載入不造成明顯 layout shift。
- [ ] 首頁主視覺仍保持清晰，且人物／產品輪廓完整。
- [ ] Build、test、lint 通過；不新增 `<img>` 效能警告。

預計影響檔案：

- `app/page.tsx`
- `app/wally/page.tsx`
- `app/about/page.tsx`
- `app/knowledge-base/page.tsx`
- `app/generative-ai/page.tsx`
- `app/media/page.tsx`
- `app/_components/SubpageShell.tsx`
- `app/globals.css`
- `public/brand/` web image derivatives

## 9. 前端交付順序

1. 建立 Wally 1 Plus 公開引用副本與五型號 data mapping。
2. 先完成首頁第一區 `多多去背.png` 替換，並同步第五區產品視覺規格。
3. 接入知識庫與生成式 AI 指定截圖；確認 caption 不超出已核准內容。
4. 依六位成員資料重整團隊 card，確認照片裁切。
5. 建立媒體新聞空狀態、活動暫存 card 與 Instagram 連結。
6. 補上 shared empty state、skip link、menu focus management、場景 keyboard state。
7. 做圖片 responsive loading 與 lazy loading。
8. 以桌機、平板、手機、reduced-motion、keyboard 做驗收，再執行 build／test／lint。

本 brief 完成後，前端仍不可自行補上尚未確認的規格、案例、年份、地點、網址或資安承諾；需要新資料時回到 `PROJECT_CONFIRMATION_CHECKLIST.md` 由 PM 更新。
