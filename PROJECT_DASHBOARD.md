# SynaiQ Web 專案總覽看板

> 這是專案內部工作看板，不是公開網站頁面。狀態區塊可由 Agent 唯讀盤點後更新。

## 使用方式

在專案根目錄執行：

```powershell
npm.cmd run status
```

只在確認要把最新唯讀盤點寫入本檔案時執行：

```powershell
npm.cmd run status:update
```

`status` 會回報 Git 工作區、最近 commit、主要路由、文案待補標記與歷史驗證紀錄。它不會修改網站、不會 commit、push 或部署。

## 固定代理人配置

子代理只在目前 session／thread 存活；角色規則與進度則保存在專案文件中。新 session 開始時，先使用 `$synaiq-project-team` 讀取本看板，再依工作需要重新建立角色。

| 角色 | 主要責任 | 必讀輸入 | 固定交付物 |
| --- | --- | --- | --- |
| PM | 確認範圍、資料狀態、優先順序與驗收條件 | 本看板、交接摘要、確認清單、兩份文案 MD | 任務摘要、資料邊界、阻塞事項、交給 UI/UX 的驗收條件 |
| UI/UX | 把已確認內容轉成版面、互動、responsive 與 accessibility 規格 | PM 交付、現有 route、全站 CSS、UIUX brief | 畫面規格、內容層級、狀態設計、交給 Frontend 的實作清單 |
| Frontend | 依核准規格實作並完成技術與瀏覽器驗證 | PM／UIUX 交付、相關程式、素材 mapping | 程式變更、測試結果、未驗證事項、回交 PM 的完成報告 |

### 固定交接流程

```text
使用者需求
  → PM：確認資料與完成定義
  → UI/UX：形成可實作規格
  → Frontend：實作與驗證
  → PM：核對驗收條件並更新看板
```

每次交接都要寫明：`狀態｜已完成｜證據｜阻塞｜下一位負責人｜需要使用者確認`。報告工作不得自動變成修改、commit、push 或部署。

## 可重複使用的專案 Skill

- 路徑：`.agents/skills/synaiq-project-team/SKILL.md`
- 呼叫方式：`$synaiq-project-team`
- 用途：新 session 快速恢復 PM、UI/UX、Frontend 的工作順序、資料邊界、交接格式與驗證要求。
- Skill 不保存執行中的代理人；實際進度仍以本看板與專案檔案為準。

## Agent 回報提示詞

可以直接對 Agent 說：

> 回報 SynaiQ Web 目前狀態。先執行 `npm.cmd run status`，只做唯讀檢查；請分開列出即時檢查、歷史紀錄、阻塞事項與我需要確認的事項，不要修改檔案、commit、push 或部署。

## 狀態定義

| 狀態 | 意義 |
| --- | --- |
| 未開始 | 尚未建立或尚未安排工作 |
| 進行中 | 已有實作，但尚未完成 |
| 等待使用者 | 需要文案、素材、規格、授權或決策 |
| 已完成未驗證 | 程式或文件已完成，但需要重新檢查 |
| 已驗證 | 有明確的近期檢查證據 |

<!-- STATUS:START -->
### Agent 即時回報

> 產生時間：2026-08-18 11:33（Asia/Taipei）

| 檢查項目 | 狀態 | 證據 |
| --- | --- | --- |
| Git 工作區 | 有 4 筆未提交變更 | branch: `codex/dev` |
| 最近 commit | 已讀取 | `1069b7d 2026-08-18 feat: checkpoint SynaiQ website updates` |
| 主要路由 | 已建立 | 9 個主要路由檔案皆存在（即時檢查） |
| 子頁文案 | 等待使用者 | 偵測到 71 個待補／待確認標記（文案仍需人工確認） |
| Build／Test／Lint | 歷史紀錄 | 交接紀錄顯示 2026-08-17 曾通過；Reporter 不會自行執行驗證指令 |

**Agent 建議下一步**

- 確認 website_subpages_content_editable.md 的待補／待確認內容
- 檢視未提交變更，確認後再決定是否 commit
- 在準備交付前重新執行 npm.cmd run build、npm.cmd test 與 npm.cmd run lint

> 這份回報只做唯讀盤點；它不會修改檔案、commit、push 或部署。
<!-- STATUS:END -->

## 工作分區

| 工作分區 | 目前判定 | 下一個可交付物 |
| --- | --- | --- |
| 首頁與全站導覽 | 已驗證 | 2026-08-17 已重新驗證桌機與 390×844 手機導覽路由 |
| 8 個獨立頁面 | 已建立、內容持續確認 | 核准 `website_subpages_content_editable.md` |
| Wally 系列 | 等待使用者 | 型號規格、差異與產品圖片 |
| 關於公司／團隊 | 照片已接入／待授權 | 補正式簡介與照片公開同意 |
| 企業知識庫／生成式 AI | 文字已套用 | 補產品截圖、案例與部署／資安說明 |
| 媒體中心／社群 | 等待正式資料 | 新聞、活動、影音與社群網址 |
| 品質驗證 | 已驗證 | 2026-08-17 build、4 個測試、lint 與導覽瀏覽器檢查完成 |
| 部署 | 尚未開始 | 取得明確授權後再安排預覽或正式部署 |

## 目前需要使用者確認

完整逐項確認表請見：[PROJECT_CONFIRMATION_CHECKLIST.md](PROJECT_CONFIRMATION_CHECKLIST.md)。請依編號回覆「確認／不公開／待補」，PM 會依回覆更新狀態。

- `website_subpages_content_editable.md` 的子頁文案是否正式核准。
- Wally 各型號的正式命名、規格、尺寸、差異與圖片。
- 團隊 card 版面與現有姓名／職稱資料仍待前端套用核對；不需要另寫正式簡介。
- 知識庫情境示意圖是否接入、新聞／活動完整資料、YouTube／Facebook 網址與隱私權政策仍待補。
- 是否要進入部署階段；未明確授權前不部署。

## 使用者回覆後的決策摘要（2026-08-17）

完整逐列狀態與原始回覆保留於 [PROJECT_CONFIRMATION_CHECKLIST.md](PROJECT_CONFIRMATION_CHECKLIST.md)。目前已確認的方向如下：

- Wally 命名使用 Wally 1 Plus／Wally 2 Plus；規格原則上可公開，但不顯示重量與電力。Wally 1 Plus 圖片路徑已檢查存在。
- 企業知識庫與生成式 AI 既有文字維持公開；知識庫截圖、生成式 AI 成果圖的指定路徑已檢查存在，部署與資安沿用目前說法。
- 團隊照片全部可公開；每人姓名、職稱、背景與照片放在同一張 card；不需要另寫 50–100 字正式簡介，學歷／經歷可公開。
- 公司中文名稱為「鑫揚智能科技股份有限公司」，英文／品牌名稱統一使用 `SynaiQ`；關係企業區塊移除。
- AGI 沿用目前文字與流程，暫不放案例；首頁第一區塊右側動態 Q 改接 `AGI等示意圖\\多多去背.png`，Wally 1 與 Wally Mini 圖片可加入首頁。
- 媒體中心保留新聞與活動區塊；影音暫不公開；Instagram 已提供，YouTube／Facebook 尚待補。服務時間與 Google Maps 暫不顯示。
- 目前只做本機確認／建立預覽，不部署、不發布。

### 目前剩餘阻塞

- Wally 五型號仍缺尺寸、螢幕、網路等規格欄位；Wally 1 Plus／Wally 2 Plus 的完整規格與比較資料尚未齊全。
- `知識庫情境01.png` 目前是「評估看看」的情境示意圖，不可標示為已核准客戶案例。
- 團隊 card 的實作方向已確認，但正式姓名／職稱排列仍需前端依現有資料套用並由 PM 再核對。
- 品牌規範的實際色碼、隱私權政策／網站分析工具仍待確認。
- 新聞與活動區塊需要補完整欄位；Instagram 以外的社群網址尚未提供。

## 更新規則

- Agent 回報必須區分「即時檢查」和「歷史紀錄」。
- 歷史紀錄不能代替本次驗證；交付前要重新執行必要指令。
- 看板只記錄專案狀態，不放 API Key、密碼、Cookie 或其他憑證。
- 不因為工作區有變更就自動 commit、push、移動素材或部署。
