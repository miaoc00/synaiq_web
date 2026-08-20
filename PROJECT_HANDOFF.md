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

- Wally 1、Wally 1 Plus、Wally 2、Wally 2 Plus、Wally Mini 全部放在同一個頁面；目前使用者確認採用 Wally 1 Plus／Wally 2 Plus 命名。
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

- 2026-08-17 已完成 `npm.cmd run build`、`npm.cmd test` 與 `npm.cmd run lint`。
- Build 與 4 個測試通過；lint 無錯誤，但有 1 個 `<img>` 效能警告。
- 2026-08-18 已改善桌機首頁 GSAP 滾動：故事軌道由 `720vh` 縮短為 `340vh`、scrub 由 `0.65` 調整為 `0.35`，加入依場景落點的 directional snap，並移除已不存在 `.cta-ring` 的失效 tween；手機版仍維持自然直向閱讀。
- 2026-08-18 依最新使用者指示，首頁第一區右側人物圖已改為 `synaiq logo s.svg` 的網站最佳化副本 `public/brand/synaiq-logo-s.webp`；第五區的數位人多多與 Wally 互動視覺維持不變。
- 2026-08-18 本輪 `npm.cmd test`（含 build 與 4 個測試）、`npm.cmd run lint`、`git diff --check` 均通過；瀏覽器確認 1440×900 與 1024×768 可用單次 360px 滾動逐幕切換，390×844 無水平溢出。
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

- Logo 與 Wally 產品素材已複製到 `public/brand/`，並接入 Wally 系列頁的產品照片展示。
- 6 張團隊人員照片已複製到 `public/brand/team/`，並接入關於公司頁的經營／技術團隊卡片。

### 文案文件

- 已建立首頁內容編輯稿。
- 已建立其他頁面內容編輯稿。
- 已依 `文字內容.xlsx` 補入公司、Wally 與 AGI 的既有內容。
- 文字內容.xlsx 已提供企業知識庫與生成式 AI 的可公開文字，且已套用至對應頁面；目前待補產品截圖、案例與部署／資安說明。

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
- `文字內容.xlsx`：公司簡介、團隊資料、Wally、企業知識庫、生成式 AI 與 AGI 內容；知識庫與生成式 AI 文字已套用，仍待補產品素材。

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
- `wally/wally-2.png`
- `wally/wally-series.png`
- `wally/wally-2-hero.png`
- `team/wilson-web-1.jpg`
- `team/sunny-web-1.1.jpg`
- `team/leff-web-1.jpg`
- `team/lou-web-1.jpg`
- `team/dale-web-1.jpg`
- `team/daniel-web-1.jpg`

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

Wally 1 Plus 對應產品照片路徑已由 PM 檢查存在：`品牌素材/照片/wally 產品圖/Wally 1 plus.png`；尚未複製到網站公開素材路徑。

### 原始團隊照片

位置：`品牌素材/照片/人員照片/`

- `wilson-web-1.jpg`
- `sunny-web-1.1.jpg`
- `leff-web-1.jpg`
- `lou-web-1.jpg`
- `dale-web-1.jpg`
- `daniel-web-1.jpg`

團隊照片已複製到 `public/brand/team/`，並在 `/about` 頁面依經營團隊與技術團隊分組使用；使用者已確認 6 張照片全部可公開。

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

- [x] 將 6 張團隊照片複製到網站可引用的公開素材路徑。
- [x] 在關於公司頁面建立團隊人物卡片與 `alt` 文字。
- [x] 確認 Wally 1 Plus 對應產品圖（原始路徑已檢查存在；尚待接入網站公開素材）。
- [ ] 確認各 Wally 型號正式命名、規格、尺寸、場景與差異。
- [x] 確認知識庫與生成式 AI 的指定產品圖片／介面截圖路徑；`知識庫情境01.png` 仍待評估是否作為情境示意圖。

### 優先 5：補齊正式內容

- [x] 移除關係企業區塊，不公開關係企業名稱、簡介、Logo 與連結。
- [x] 確認不需要團隊成員 50–100 字正式簡介；學歷／經歷可公開，6 張照片全部可公開。
- [x] 知識庫頁面正式定位與核心特色文字。
- [x] 生成式 AI 頁面正式服務範圍與核心特色文字。
- [x] 知識庫與生成式 AI 指定截圖／成果圖、部署與資安目前說法已確認；知識庫情境示意圖與完整規格仍待評估／補充。
- [ ] Wally 型號比較資料與正式規格。
- [ ] 新聞區塊要製作，但新聞標題、日期、摘要、來源網址與封面仍待補。
- [ ] 活動區塊要製作；目前只有台灣國際淨零永續展、10/14–16、攤位 M1105a，年份、地點、報名網址與圖片仍待補。
- [ ] Instagram `https://www.instagram.com/synaiq.ai/` 已確認；YouTube、Facebook 正式網址仍待補；影音刊物暫不公開。
- [ ] Google Maps 與服務時間暫不顯示；隱私權政策與網站分析工具仍待確認。

### 優先 6：驗證與上線

- [x] `npm.cmd run build`
- [x] `npm.cmd test`
- [x] `npm.cmd run lint`（無錯誤，1 個 `<img>` 效能警告）
- [x] 使用本機瀏覽器驗證首頁與獨立頁面導覽。
- [x] 驗證主要導覽路由、Email、電話與圖片載入。
- [x] 以 `390×844` 驗證手機選單開合、四個導覽連結顯示、導頁至 `/about` 與無橫向溢出。
- [ ] 若要部署，先取得使用者明確確認，再讀取 `sites-hosting` 技能並執行部署。

---

## 8. 重要風險與注意事項

- 子頁 Markdown 草稿與目前頁面仍可能存在差異；標示「待補／待確認」的內容不可視為正式公開資料。
- 不能自行補寫未確認的 Wally 規格、產品效能、團隊簡歷、新聞、社群網址或關係企業資料。
- Wally 產品的型號名稱必須維持使用者確認的單頁產品線架構。
- 團隊照片已確認可公開；網站上線前仍要保留照片來源、授權紀錄與替代文字。
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

## 9.1 使用者確認後的 UI/UX 與前端實作 brief（2026-08-17）

這是依 [PROJECT_CONFIRMATION_CHECKLIST.md](PROJECT_CONFIRMATION_CHECKLIST.md) 整理的實作方向；本輪只更新文件，尚未修改 `app` 程式。

### UI/UX

- Wally 五個型號維持同一個 `/wally` 頁面，命名使用 Wally 1、Wally 1 Plus、Wally 2、Wally 2 Plus、Wally Mini。
- 型號卡片要放已確認的定位／特色與對應照片；尺寸、螢幕、網路等尚未提供的欄位不可自行填寫。規格可公開，但不顯示重量與電力。
- 經營團隊與技術團隊每人一張 card，放姓名、職稱、背景與照片；不另外做 50–100 字正式簡介。6 張照片可公開，學歷／經歷可公開。
- 企業知識庫使用 `知識庫.png`、`企業管理系知識庫.jpg`；可用檔名標示實績截圖來源。`知識庫情境01.png` 只能先作「情境示意」候選，不可寫成已核准客戶案例。
- 生成式 AI 使用 `媒體工廠.png` 作為成果截圖；案例維持「服飾業應用」概括說法，不新增客戶名稱或成果數字。
- AGI 維持文字流程，暫不放案例；首頁第一區塊右側動態 Q 改為 `多多去背.png`，並可加入 Wally 1 與 Wally Mini 圖片。
- 媒體中心保留新聞與活動區塊；影音刊物不公開。活動只使用已提供的「台灣國際淨零永續展，10/14–16，攤位 M1105a」，缺少欄位維持待補狀態。

### 前端

- 先接入已檢查存在的素材路徑，Wally 1 Plus 使用 `品牌素材/照片/wally 產品圖/Wally 1 plus.png`；不要把其他型號照片套到 Wally 1 Plus。
- 首頁第一區塊以 `品牌素材/照片/AGI等示意圖/多多去背.png` 替換右側動態 Q；首頁可新增 `Wally 1.png` 與 `Wallymini.png`。
- 企業知識庫與生成式 AI 既有公開文字維持不變；部署與資安沿用目前文字，不擴寫未確認的權限、資料保存或安全承諾。
- 關係企業區塊移除；公司名稱使用「鑫揚智能科技股份有限公司」，英文／品牌統一使用 `SynaiQ`。
- 聯絡頁保留已確認的電話、Email、地址；服務時間與 Google Maps 不顯示。Instagram 使用 `https://www.instagram.com/synaiq.ai/`，YouTube／Facebook 不自行猜測。
- 目前只做本機確認／建立預覽，不部署、不發布；所有素材仍需保留來源與授權紀錄。

### 剩餘阻塞

- Wally 五型號完整規格與比較欄位仍不齊全。
- 知識庫情境示意圖是否正式接入仍待評估。
- 品牌規範實際色碼、隱私權政策與網站分析工具仍待確認。
- 新聞與活動完整資料、YouTube／Facebook 正式網址仍待補。

## 10. 完成判定

本專案可視為完成，需要同時滿足：

1. 首頁已套用核准的 7 區塊內容。
2. 全站導覽與獨立頁面路由可正常使用。
3. Wally 系列只有一個頁面，全部型號在同頁呈現。
4. 關於公司頁面的經營團隊與技術團隊均有正確照片、姓名、職稱與替代文字。
5. 待補內容已由使用者提供或明確標示為不公開／暫不呈現。
6. 桌機、手機、鍵盤操作、圖片載入與主要連結均驗證通過。
7. 使用者明確同意後才進行部署。

---

## 11. 2026-08-19 首頁企業知識中樞改善

### 本次範圍與決策

- 使用者核准首頁三項 P1：建立可探索的產品入口、以既有真實素材呈現產品證據、讓桌機章節導覽標籤可見。
- Creative North Star 為「企業知識中樞」；視覺方向為高科技展示元件、3D 玻璃層次與節制光暈。
- 品牌字體指定為 Medium；使用者已提供 `NotoSansCJKtc-Medium.otf`，網站以 `SynaiQ Noto Sans CJK TC` 名稱註冊為 500 weight，並保留 Source Han Sans TC 與系統中文字型 fallback。

### 已完成實作

- `app/page.tsx`：品牌產品改為四個正式路由入口；產品畫面接入企業知識庫與生成式 AI 的已確認素材；「了解 SynaiQ」修正連至 `/about`；改善場景跳轉的媒體查詢時機。
- `app/globals.css`：新增品牌字型契約、產品入口與證據畫面層次、可見 focus、桌機章節標籤、安全距離、手機排列與 reduced-motion 規則。
- `tests/rendered-html.test.mjs`：加入產品路由、證據素材與章節標籤的回歸斷言。
- `public/fonts/NotoSansCJKtc-Medium.otf`：由使用者指定的內網來源複製，16,508,576 bytes；來源與專案副本 SHA-256 均為 `07AAF9190313301B18BDA707C4DB7AC75EAAE6EF222EB5C38F97ED78700FD4F2`。
- 設計依據記錄於 `PRODUCT.md`、`DESIGN.md`、`.impeccable/design.json` 與 `.impeccable/critique/2026-08-19T02-48-27Z__app-page-tsx.md`。

### 本次即時證據

- `npm.cmd test`：build 完成，5/5 測試通過；新增品牌 Medium 字型回歸測試。
- `npm.cmd run lint`：exit code 0，無輸出警告。
- 本機瀏覽器 1440×900：章節導覽可切至「品牌產品」，產品入口可導向 `/knowledge-base`。
- 本機瀏覽器 390×844：無水平溢出，產品入口與證據畫面採直向排列。
- 本機瀏覽器字型檢查：1440×900 與 390×844 均確認 `SynaiQ Noto Sans CJK TC` 500 載入，且頁面沒有水平溢出。
- `npm.cmd run status`：唯讀盤點仍偵測到 71 個全專案待補／待確認標記；不屬於本次首頁 P1 的自動補寫範圍。

### 尚未執行與下一步

- 未 commit、push 或部署。
- 目前 OTF 為 16.5 MB；已用 `font-display: swap` 避免阻塞文字顯示。若要降低首次下載量，可另行製作並驗證 WOFF2，但不得在未確認授權與字形覆蓋前任意裁切字元。
- 其他頁面的待補資料與 Wally 完整規格仍依 `PROJECT_CONFIRMATION_CHECKLIST.md` 處理，不從首頁推測補齊。

---

## 12. 2026-08-19 `/products` 產品總覽頁精修

### 已完成實作

- `app/products/page.tsx`：產品順序改為企業知識庫、生成式 AI、AGI、Wally；四張產品卡改為完整原生連結並保留既有文字與目的路由。
- `app/_components/SubpageShell.tsx`：加入選用頁面 class 與 eyebrow 顯示控制，讓產品頁可移除無資訊作用的 kicker，不影響其他子頁預設輸出。
- `app/globals.css`：產品頁桌機採 2×2、手機採單欄；統一品牌 Medium 字體、14px 卡片圓角、hover、focus-visible、44px 行動區與 reduced-motion。
- `tests/rendered-html.test.mjs`：加入產品順序、路由、整卡連結、grid 與品牌字體回歸測試。

### 本次即時證據

- `npm.cmd test`：build 完成，6/6 測試通過。
- `npm.cmd run lint`：exit code 0，無錯誤或警告。
- 1440×900：四張產品卡 2×2、主標完整平衡、品牌字體已載入、無水平溢出。
- 390×844：四張產品卡單欄、無水平溢出；四個原生連結皆在互動 DOM 中，企業知識庫入口實際導向 `/knowledge-base`。
- 自動化環境未能直接移動 Tab 焦點；原生 anchor 與 `focus-visible` 已確認，實體鍵盤 Tab／Enter 尚待人工補驗。

### 範圍邊界

- 未新增 `/pricing`、價格、方案等級、比較表或產品事實。
- 未 commit、push 或部署。
