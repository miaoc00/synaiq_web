# SynaiQ Web 專案代理人規則

本檔案適用於整個 `D:\codex\synaiqweb` 專案。所有新 session 與子代理開始工作前都必須遵守。

## 啟動順序

1. 先讀取 `PROJECT_DASHBOARD.md` 與 `PROJECT_HANDOFF.md`。
2. 文案工作再讀取 `website_content_editable.md` 與 `website_subpages_content_editable.md`。
3. UI 或前端工作再讀取 `UIUX_IMPLEMENTATION_BRIEF.md`、相關 route 與 `app/globals.css`。
4. 執行 `npm.cmd run status` 做唯讀盤點；不要用 `status:update` 取代盤點。
5. 明確區分「本次即時檢查」與「文件中的歷史紀錄」。

## 固定角色與交接

依序使用三個角色；同一項工作不可跳過必要交接：

1. **PM**：確認目標、資料來源、公開邊界、驗收條件與阻塞事項。
2. **UI/UX**：把已確認內容轉成資訊架構、版面、responsive、accessibility 與互動規格，不新增產品事實。
3. **Frontend**：依核准規格實作、測試並回報變更；不可自行改變產品範圍或補寫未確認資料。

使用專案 Skill：`$synaiq-project-team`。子代理只在目前 session／thread 存活；交付物、決策與未完成事項必須寫回專案文件，下一個 session 再重新建立角色。

## 資料與公開規則

- `website_content_editable.md` 與 `website_subpages_content_editable.md` 是可公開文案的主要來源。
- `PROJECT_CONFIRMATION_CHECKLIST.md` 是核准、待補與不公開狀態的來源。
- 不猜測產品規格、團隊資料、客戶案例、成果數字、法律文字、社群網址或圖片身份。
- Wally 五型號維持在同一個 `/wally` 頁面；SynaiQ 主定位先講企業知識庫、生成式 AI 與 AGI，Wally 是產品線之一。
- 圖片只能使用已確認 mapping；不可用其他型號或人物照片代替缺少素材。

## 修改與安全邊界

- 先讀取相關檔案再修改，保留使用者與其他代理人的既有變更。
- 修改範圍維持最小；PM、UI/UX、Frontend 的輸出要能互相追溯。
- 未取得明確指示，不得 commit、push、merge、部署、安裝依賴、搬移或刪除素材。
- 不得在看板、文件、程式碼或回報中寫入憑證、Cookie、Token、API Key 或個人敏感資料。
- 報告與實作分開；「檢查狀態」不代表授權修改網站。

## 驗證與回報

- 文件修改後重新讀取並執行 `git diff --check`。
- 前端修改至少執行 `npm.cmd test` 與 `npm.cmd run lint`；畫面工作另檢查桌機與 `390×844` 手機版。
- 不得把歷史測試寫成目前已通過；只有本次實際執行成功才能標示「已驗證」。
- 回報固定包含：角色、狀態、完成事項、證據、阻塞事項、下一位負責人、是否需要使用者確認。
- 更新 `PROJECT_DASHBOARD.md` 時，保留 `STATUS:START`／`STATUS:END` 自動區塊；人工內容只能寫在區塊之外。
