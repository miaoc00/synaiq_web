import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the approved SynaiQ homepage content", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /讓企業知識/);
  assert.match(html, /OUR SERVICES/);
  assert.match(html, /OUR PRODUCTS/);
  assert.match(html, /TECHNOLOGY APPLICATIONS/);
  assert.match(html, /PRODUCT EXPERIENCE/);
  assert.match(html, /準備好讓知識/);
  assert.match(html, /service@synaiq\.com/);
  assert.doesNotMatch(html, /四大解決方案|BUILT FOR THE REAL WORLD/);
});

test("homepage source keeps the approved section structure", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../website_content_editable.md", import.meta.url), "utf8");

  for (const heading of ["品牌介紹", "我們的服務", "品牌產品", "技術應用", "產品畫面", "行動呼籲", "聯絡我們"]) {
    assert.match(content, new RegExp(heading));
  }
  assert.match(page, /serviceItems/);
  assert.match(page, /productItems/);
  assert.doesNotMatch(page, /solutions-section|solution-grid|四大解決方案/);
  assert.doesNotMatch(page, /Wally 系列首頁顯示方式/);
});

test("site-wide navigation points to working independent pages", async () => {
  const page = await readFile(new URL("../app/_components/SiteHeader.tsx", import.meta.url), "utf8");
  assert.match(page, /className=\{`menu-toggle/);
  assert.match(page, /aria-controls="mobile-navigation"/);
  assert.match(page, /setIsMenuOpen/);
  for (const path of ["/about", "/products", "/media", "/contact"]) {
    assert.match(page, new RegExp(`href=\\"${path}\\"`));
    const response = await render(path);
    assert.equal(response.status, 200, `${path} should render successfully`);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  }
});
