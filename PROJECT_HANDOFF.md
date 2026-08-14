# SynaiQ Web 專案交接摘要

> 更新日期：2026-08-13  
> 專案路徑：`D:\codex\synaiqweb`  
> 用途：下次新對話開始前，先讀取總覽看板與本檔案，再依「待辦事項」繼續工作。

---

## 0. 下次對話快速載入

請先讀取：

1. `PROJECT_HANDOFF.md`
2. `PROJECT_DASHBOARD.md`
3. `website_content_editable.md`
4. `website_subpages_content_editable.md`
5. `網站架構.md`
6. `文字內容.xlsx`

建議開場指令：

> 請先讀取 `D:\codex\synaiqweb\PROJECT_DASHBOARD.md` 與 `D:\codex\synaiqweb\PROJECT_HANDOFF.md`，依目前狀態繼續 SynaiQ Web 專案。先不要直接修改網站，若涉及文案先讓我確認 Markdown；若要套用，先檢查目前程式與文件的差異。

---

## 1. 專案一句話總結

SynaiQ 是一個以 **AGI 與企業知識中樞**為主要定位的企業官網；首頁採單頁滾動敘事，其他公司、產品、媒體與聯絡內容拆成獨立頁面。Wally 是產品線之一，所有 Wally 型號集中在同一個「Wally 系列」頁面，不建立型號獨立分頁。

---

## 2. 已確認的關鍵決策

### 品牌與產品定位

- 主要訊息必須先講 **AGI、企業知識庫與智慧系統整合**。
- 不要把 Wally 或硬體／接待設備當成 SynaiQ 的唯一主軸。
- 保留 SynaiQ、Wally Series、企業知識庫、生成式 AI、AGI、MCP、Agent 等正式用語。
- 產品文案以「企業知識轉化為可運用的智慧資產」為核心方向。

### 首頁策略

- 首頁維持單頁、簡潔、可快速理解的敘事，不放完整公司與產品資料。
- 已確認的首頁內容順序為 7 個區塊：

  1. 品牌介紹（公司介紹）
  2. 我們的服務
  3. 品牌產品
  4. 我們的技術應用有哪些
  5. 產品畫面
  6. 行動呼籲
  7. 聯絡我們

- 先前的「07｜關於 SynaiQ」已從首頁規劃移除。
- 首頁不建立 Wally 系列專門展示方式；Wally 僅保留在品牌產品與產品畫面分類中。

### Wally 系列

- Wally 1、Wally Plus 1、Wally 2、Wally Plus 2、Wally Mini 全部放在同一個頁面。
- 不建立 Wally 型號獨立頁面或下層分支。
- 頁面路徑：`/wally`，入口已建立，內容仍待最終確認。
- 首頁不提供 Wally 系列專門入口；完整型號與規格保留在未來的 Wally 系列頁面。

### 全站架構

原始網站架構仍保留四個主要入口：

```text
首頁
├─ 關於公司
├─ 產品
│  ├─ 產品總覽
│  ├─ Wally 系列（單一頁面，含全部型號）
│  ├─ 企業知識庫
│  ├─ 生成式 AI 服務
│  └─ AGI
├─ 媒體中心
└─ 聯絡我們
```

目前已建立的獨立頁面路徑如下，內容仍持續確認：

```text
/about
/products
/wally
/knowledge-base
/generative-ai
/agi
/media
/contact
```

目前全站導覽已統一為「關於公司｜產品｜媒體中心｜聯絡我們」，首頁 Logo 回到 `/`；首頁內容區塊仍透過 CTA 與場景進度操作。手機寬度提供可開合的漢堡選單，四個頁面連結均可從選單進入。

---

## 3. 技術架構與目前程式狀態

### 技術棧

- React `19.2.6`
- vinext `1.0.0-beta.2`
- Vite `8.0.13`
- Cloudflare Vite plugin
- Node.js 需求：`>=22.13.0`
- 專案支援 Cloudflare Worker-compatible ESM 輸出
- `.openai/hosting.json` 目前為：`{"d1":null,"r2":null}`

### 常用指令

```text
npm run dev
npm run build
npm test
npm run lint
npm.cmd run status
npm.cmd run status:update
```

目前 `dev` script 已設定：

```text
vinext dev --hostname 0.0.0.0
```

本機預覽網址：`http://127.0.0.1:3000/`

### 已有程式檔

- `app/page.tsx`：目前的首頁單一路由與六幕滾動視差互動。
- `app/globals.css`：深紫／薰衣草／金色視覺系統、場景動畫與響應式版面。
- `app/layout.tsx`：SynaiQ 網站 metadata 與 favicon。
- `package.json`：vinext 開發、建置、測試、lint 與狀態回報指令。

### 重要現況差異

首頁文案已依目前核准的 Markdown 套用到 `app/page.tsx`：

- 六幕首頁目前依序對應品牌介紹、我們的服務、品牌產品、技術應用、產品畫面與行動呼籲。
- 舊的 `#about` 與「四大解決方案」首頁區塊已移除，聯絡我們保留為首頁最後一區。
- 導覽已改為關於公司、產品、媒體中心與聯絡我們，並連到獨立路由。
- 「Wally 系列首頁顯示方式」段落已從首頁文案與程式移除；Wally 仍作為品牌產品與產品畫面分類之一保留。
- `/about`、`/products`、`/wally`、`/knowledge-base`、`/generative-ai`、`/agi`、`/media`、`/contact` 入口頁已建立；部分正式資料仍待補。

### 建置狀態

- 2026-08-13 已完成 `npm.cmd run build`、`npm.cmd test` 與 `npm.cmd run lint`。
- Build 與 3 個測試通過；lint 無錯誤，但有 4 個 `<img>` 效能警告。
- 尚未部署到正式環境；目前只做本機預覽。

---

## 4. 已完成部分

### 網站雛形

- 已完成 Vinext／React 網站雛形。
- 已完成首頁六幕滾動視差故事：品牌介紹、我們的服務、品牌產品、技術應用、產品畫面與行動呼籲。
- 已完成首頁聯絡區與頁尾；舊的關於與四大解決方案區塊已移除。
- 已完成桌機、平板、手機 responsive CSS 與 `prefers-reduced-motion` 支援。
- 已完成手機版全站導覽選單：可開合、具 `aria-expanded` 狀態與可操作的四個頁面連結。

### 素材

- Logo 與 Wally 產品素材已複製到 `public/brand/` 使用。
- 已找到 6 張團隊人員照片，並完成文案稿中的人員對應。

### 文案文件

- 已建立首頁內容編輯稿。
- 已建立其他頁面內容編輯稿。
- 已依 `文字內容.xlsx` 補入公司、Wally 與 AGI 的既有內容。
- 知識庫與生成式 AI 因原始資料標示「待補」，目前使用草稿並明確標示待確認。

---

## 5. 重要文件修改紀錄

### `website_content_editable.md`

目前用途：首頁文案編輯稿，不直接等同於網站程式。

內容包括：

- 首頁導覽列草稿
- 7 個首頁內容區塊
- 各區塊標題、英文標籤、說明文字、項目與按鈕
- 頁尾文字

目前最新首頁順序：

```text
01 品牌介紹
02 我們的服務
03 品牌產品
04 技術應用
05 產品畫面
06 行動呼籲
07 聯絡我們
```

### `website_subpages_content_editable.md`

目前用途：首頁以外的獨立頁面文案稿。

目前包含 8 個頁面：

1. 關於公司
2. 產品總覽
3. Wally 系列
4. 企業知識庫
5. 生成式 AI 服務
6. AGI
7. 媒體中心
8. 聯絡我們

團隊照片欄位已加入：

| 人員 | 圖片檔名 |
| --- | --- |
| Wilson Chiu | `品牌素材/照片/人員照片/wilson-web-1.jpg` |
| Sunny Kang | `品牌素材/照片/人員照片/sunny-web-1.1.jpg` |
| Leef Lee | `品牌素材/照片/人員照片/leff-web-1.jpg` |
| Yi Shyang Lou | `品牌素材/照片/人員照片/lou-web-1.jpg` |
| Dale Lin | `品牌素材/照片/人員照片/dale-web-1.jpg` |
| Daniel Shih | `品牌素材/照片/人員照片/daniel-web-1.jpg` |

團隊版面決策：

- 每人一張獨立人物卡片。
- 保留固定比例直式照片區，建議 `4:5`。
- 桌機每列 3 張，手機單欄排列。
- 照片下方依序放姓名、職稱、簡歷。

### 其他參考文件

- `網站架構.md`：原始網站樹狀架構與 Excel 內容轉寫。
- `網站素材提供清單.md`：品牌、公司、團隊、產品、媒體、聯絡與上線前素材清單。
- `content-audit.md`：現有內容與待補資料盤點。
- `contact-info.md`：目前聯絡資訊與呈現方式。
- `scroll_parallax_assets_guide.md`：首頁滾動視差分鏡、素材分層、尺寸與命名規範。
- `文字內容.xlsx`：公司簡介、團隊資料、Wally 與 AGI 初稿；知識庫與生成式 AI 為待補。

### 本次工作區狀態

目前狀態請以 [PROJECT_DASHBOARD.md](PROJECT_DASHBOARD.md) 的 Agent 區塊為準，或在專案根目錄執行：

```powershell
npm.cmd run status
npm.cmd run status:update
```

`8cf2891` 是目前 `main` 與 `origin/main` 的既有初始進度 commit。本次尚未建立新的 commit。

`.sheet_runtime/` 是為了讀取 `文字內容.xlsx` 建立的暫存解析環境；若不再需要，可在確認後清理或加入適當忽略規則。

---

## 6. 素材現況

### 已放入 `public/brand/` 的素材

- `synaiq-logo-light.svg`
- `synaiq-logo-dark.svg`
- `wally-1.png`
- `wally-2-cutout.png`
- `wally-2-plus.png`
- `wally-mini.png`

### 原始 Wally 素材

位置：`品牌素材/照片/wally 產品圖/`

- `Wally 1.png`
- `Wally2.png`
- `Wally2 PLUS.png`
- `Wallymini.png`
- `Wally all.png`
- `260424 - 形象圖 - Wally 2 去背.png`
- `260424 - 形象圖 - Wally 2.png`
- Wally 1／2／Mini／Plus 的 Logo SVG 位於 `品牌素材/logo/`

注意：目前已確認有 Wally 1 Plus 的 Logo，但尚未確認對應的獨立產品照片檔。

### 原始團隊照片

位置：`品牌素材/照片/人員照片/`

- `wilson-web-1.jpg`
- `sunny-web-1.1.jpg`
- `leff-web-1.jpg`
- `lou-web-1.jpg`
- `dale-web-1.jpg`
- `daniel-web-1.jpg`

目前團隊照片尚未複製到 `public/brand/`，也尚未在網站路由中使用。

---

## 7. 待辦事項

### 優先 1：文案確認

- [x] 使用者完成 `website_content_editable.md` 的首頁文字修改。
- [ ] 使用者完成 `website_subpages_content_editable.md` 的子頁文字修改。
- [x] 首頁導覽列已改為全站頁面導覽。
- [x] 已移除首頁「四大解決方案」與 Wally 系列專門顯示方式。

### 優先 2：將文案套用至網站（已完成）

- [x] 將首頁最新 7 區塊內容套用到 `app/page.tsx`。
- [x] 移除舊的 `#about` 與四大解決方案首頁區塊。
- [x] 更新 `labels`、場景英文標籤、主標題、說明、按鈕與導覽連結。
- [x] 重新整理桌機與手機版場景順序。

### 優先 3：建立獨立頁面（入口已完成，內容持續確認）

- [x] 建立 `/about` 關於公司頁面。
- [x] 建立 `/products` 產品總覽頁面。
- [x] 建立 `/wally` Wally 系列單一頁面。
- [x] 建立 `/knowledge-base` 企業知識庫頁面。
- [x] 建立 `/generative-ai` 生成式 AI 服務頁面。
- [x] 建立 `/agi` AGI 頁面。
- [x] 建立 `/media` 媒體中心頁面。
- [x] 建立 `/contact` 聯絡我們頁面。

### 優先 4：素材接入

- [ ] 將 6 張團隊照片複製到網站可引用的公開素材路徑。
- [ ] 在關於公司頁面建立團隊人物卡片與 `alt` 文字。
- [ ] 確認 Wally 1 Plus 對應產品圖。
- [ ] 確認各 Wally 型號正式命名、規格、尺寸、場景與差異。
- [ ] 確認知識庫與生成式 AI 的正式產品圖片與介面截圖。

### 優先 5：補齊正式內容

- [ ] 關係企業名稱、簡介、Logo 與連結。
- [ ] 團隊成員 50–100 字正式簡介與照片公開同意。
- [ ] 知識庫頁面正式定位、特色、案例與部署方式。
- [ ] 生成式 AI 頁面正式服務範圍與案例。
- [ ] Wally 型號比較資料與正式規格。
- [ ] 新聞標題、日期、摘要、來源網址與封面。
- [ ] 活動資訊、報名網址與活動圖片。
- [ ] YouTube、Facebook、Instagram 正式網址。
- [ ] Google Maps、服務時間與隱私權政策。

### 優先 6：驗證與上線

- [x] `npm.cmd run build`
- [x] `npm.cmd test`
- [x] `npm.cmd run lint`（無錯誤，4 個 `<img>` 效能警告）
- [x] 使用本機瀏覽器驗證首頁與獨立頁面導覽。
- [x] 驗證主要導覽路由、Email、電話與圖片載入。
- [x] 以 `390×844` 驗證手機選單開合、四個導覽連結顯示、導頁至 `/about` 與無橫向溢出。
- [ ] 若要部署，先取得使用者明確確認，再讀取 `sites-hosting` 技能並執行部署。

---

## 8. 重要風險與注意事項

- 子頁 Markdown 草稿與目前頁面仍可能存在差異；標示「待補／待確認」的內容不可視為正式公開資料。
- 不能自行補寫未確認的 Wally 規格、產品效能、團隊簡歷、新聞、社群網址或關係企業資料。
- Wally 產品的型號名稱必須維持使用者確認的單頁產品線架構。
- 團隊照片需確認公開使用同意；網站上線前也要確認照片授權與替代文字。
- 不要把密碼、API Key、登入資料或其他憑證寫進 Markdown、程式或 Git。
- 不要部署或發布，除非使用者在當次對話明確授權。
- 不要重新命名或移動現有素材；如需整理，先提供預覽清單並等待確認。

---

## 9. 建議下次使用的技能

- `sites:sites-building`：新增或修改網站頁面、路由與互動。
- `browser:control-in-app-browser`：使用者要求本機瀏覽器預覽或 UI 驗證時。
- `web-qa-fix`：需要實際測試並修復頁面問題時。
- `sites:sites-hosting`：使用者明確要求部署或發布時。
- `baoyu-format-markdown`：使用者要求整理或美化 Markdown 文案時。
- `spreadsheets:Spreadsheets`：需要重新讀取或核對 `文字內容.xlsx` 時。

---

## 10. 完成判定

本專案可視為完成，需要同時滿足：

1. 首頁已套用核准的 7 區塊內容。
2. 全站導覽與獨立頁面路由可正常使用。
3. Wally 系列只有一個頁面，全部型號在同頁呈現。
4. 關於公司頁面的經營團隊與技術團隊均有正確照片、姓名、職稱與替代文字。
5. 待補內容已由使用者提供或明確標示為不公開／暫不呈現。
6. 桌機、手機、鍵盤操作、圖片載入與主要連結均驗證通過。
7. 使用者明確同意後才進行部署。
