import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
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
  assert.match(html, /到系統導入/);
  assert.match(html, /支援不同應用場景/);
  assert.match(html, /再串接系統完成工作/);
  assert.match(html, /到現場互動設備/);
  assert.match(html, /想先解決哪一段/);
  assert.match(html, /service@synaiq\.com/);
  assert.doesNotMatch(html, /四大解決方案|BUILT FOR THE REAL WORLD|畫面待補|已提供/);
});

test("homepage source keeps the approved section structure", async () => {
  const page = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");
  const content = await readFile(new URL("../website_content_editable.md", import.meta.url), "utf8");

  for (const heading of ["品牌介紹", "我們的服務", "品牌產品", "技術應用", "產品畫面", "行動呼籲", "聯絡我們"]) {
    assert.match(content, new RegExp(heading));
  }
  assert.match(page, /serviceItems/);
  assert.match(page, /productItems/);
  assert.match(page, /useGSAP/);
  assert.match(page, /ScrollTrigger/);
  assert.match(page, /prefers-reduced-motion/);
  assert.doesNotMatch(page, /requestAnimationFrame/);
  assert.match(page, /sceneIsHidden/);
  assert.match(page, /from "next\/image"/);
  assert.match(page, /synaiq-logo-s\.webp/);
  assert.match(page, /knowledge-base\.png/);
  assert.match(page, /media-factory\.png/);
  assert.match(page, /wally-1\.png/);
  assert.match(page, /wally-mini\.png/);
  for (const path of ["/knowledge-base", "/generative-ai", "/agi", "/wally"]) {
    assert.match(page, new RegExp(`href: \\"${path}\\"`));
  }
  assert.match(page, /className="scene-nav"/);
  assert.match(page, /<span>\{label\}<\/span>/);
  assert.doesNotMatch(page, /orbit-core|>Q</);
  assert.doesNotMatch(page, /solutions-section|solution-grid|四大解決方案/);
  assert.doesNotMatch(page, /Wally 系列首頁顯示方式/);
});

test("brand Medium font is embedded from the confirmed project asset", async () => {
  const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const font = await stat(new URL("../public/fonts/NotoSansCJKtc-Medium.otf", import.meta.url));

  assert.equal(font.size, 16_508_576);
  assert.match(styles, /@font-face\{font-family:"SynaiQ Noto Sans CJK TC"/);
  assert.match(styles, /url\("\/fonts\/NotoSansCJKtc-Medium\.otf"\) format\("opentype"\)/);
  assert.match(styles, /font-weight:500/);
  assert.match(styles, /font-display:swap/);
  assert.match(styles, /--font-brand:"SynaiQ Noto Sans CJK TC"/);
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

test("products page presents four complete, brand-aligned product paths", async () => {
  const page = await readFile(new URL("../app/products/page.tsx", import.meta.url), "utf8");
  const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const response = await render("/products");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(page, /pageClassName="products-page"/);
  assert.match(page, /aria-label="選擇產品"/);
  assert.match(page, /product-card-action/);
  assert.doesNotMatch(page, /<article className="product-page-card"/);
  for (const path of ["/knowledge-base", "/generative-ai", "/agi", "/wally"]) {
    assert.match(page, new RegExp(`"${path}"`));
  }
  assert.ok(page.indexOf('"企業知識庫"') < page.indexOf('"Wally 系列"'));
  assert.match(styles, /\.products-page \.product-page-grid\{[^}]*grid-template-columns:repeat\(2/);
  assert.match(styles, /\.products-page \.subpage-hero h1[^}]*font-family:var\(--font-brand\)/);
  for (const label of ["企業知識庫", "生成式 AI 服務", "AGI", "Wally 系列"]) assert.match(html, new RegExp(label));
});

test("product, knowledge, generative AI, team and media pages connect confirmed assets", async () => {
  const wallyPage = await readFile(new URL("../app/wally/page.tsx", import.meta.url), "utf8");
  const aboutPage = await readFile(new URL("../app/about/page.tsx", import.meta.url), "utf8");
  const knowledgePage = await readFile(new URL("../app/knowledge-base/page.tsx", import.meta.url), "utf8");
  const generativePage = await readFile(new URL("../app/generative-ai/page.tsx", import.meta.url), "utf8");
  const mediaPage = await readFile(new URL("../app/media/page.tsx", import.meta.url), "utf8");
  const imagePaths = [
    "public/brand/wally-1.png",
    "public/brand/wally/wally-1-plus.png",
    "public/brand/wally/wally-2.png",
    "public/brand/wally-2-plus.png",
    "public/brand/wally-mini.png",
    "public/brand/wally/wally-series.png",
    "public/brand/wally/wally-2-hero.png",
    "public/brand/wally-2-cutout.png",
    "public/brand/team/wilson-web-1.jpg",
    "public/brand/team/sunny-web-1.1.jpg",
    "public/brand/team/leff-web-1.jpg",
    "public/brand/team/lou-web-1.jpg",
    "public/brand/team/dale-web-1.jpg",
    "public/brand/team/daniel-web-1.jpg",
    "public/brand/synaiq-logo-s.webp",
    "public/brand/duoduo-cutout.png",
    "public/brand/knowledge-base.png",
    "public/brand/knowledge-workflow.jpg",
    "public/brand/media-factory.png",
  ];

  for (const imagePath of imagePaths) {
    await stat(new URL(`../${imagePath}`, import.meta.url));
  }
  for (const imagePath of imagePaths.slice(0, 8)) assert.ok(wallyPage.includes(`/${imagePath.slice("public/".length)}`));
  for (const imagePath of imagePaths.slice(8, 14)) assert.ok(aboutPage.includes(`/${imagePath.slice("public/".length)}`));
  assert.match(knowledgePage, /knowledge-base\.png|knowledge-workflow\.jpg/);
  assert.match(generativePage, /media-factory\.png/);
  assert.match(mediaPage, /台灣國際淨零永續展/);
  assert.match(mediaPage, /https:\/\/www\.instagram\.com\/synaiq\.ai\//);
  assert.doesNotMatch(mediaPage, /youtube|facebook|影音刊物/i);

  const [wallyResponse, aboutResponse, knowledgeResponse, generativeResponse, mediaResponse] = await Promise.all([render("/wally"), render("/about"), render("/knowledge-base"), render("/generative-ai"), render("/media")]);
  assert.equal(wallyResponse.status, 200);
  assert.equal(aboutResponse.status, 200);
  assert.equal(knowledgeResponse.status, 200);
  assert.equal(generativeResponse.status, 200);
  assert.equal(mediaResponse.status, 200);
  assert.match(await wallyResponse.text(), /Wally 1 Plus|wally-1-plus/);
  assert.match(await aboutResponse.text(), /LEADERSHIP TEAM|TECHNICAL TEAM|wilson-web-1/);
  assert.match(await knowledgeResponse.text(), /企業知識庫介面|knowledge-base/);
  assert.match(await generativeResponse.text(), /服飾業應用成果|media-factory/);
  assert.match(await mediaResponse.text(), /新聞集錦|活動訊息|Instagram/);
});

test("approved P1/P2 route hierarchy and language changes are rendered", async () => {
  const styles = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const knowledgePage = await readFile(new URL("../app/knowledge-base/page.tsx", import.meta.url), "utf8");
  const generativePage = await readFile(new URL("../app/generative-ai/page.tsx", import.meta.url), "utf8");
  const wallyPage = await readFile(new URL("../app/wally/page.tsx", import.meta.url), "utf8");
  const mediaPage = await readFile(new URL("../app/media/page.tsx", import.meta.url), "utf8");
  const contactPage = await readFile(new URL("../app/contact/page.tsx", import.meta.url), "utf8");
  const homepage = await readFile(new URL("../app/page.tsx", import.meta.url), "utf8");

  assert.doesNotMatch(styles, /Georgia|Times New Roman/);
  assert.match(knowledgePage, /subpage-hero-with-visual|討論知識庫需求|START WITH YOUR DOCUMENTS/);
  assert.match(generativePage, /subpage-hero-with-visual|討論生成流程|START WITH ONE CONTENT FLOW/);
  assert.match(wallyPage, /wally-selection-grid|model-comparison|Wally 2 Plus/);
  assert.match(mediaPage, /目前沒有可公開的新聞|empty-state-action/);
  assert.match(contactPage, /CONSULTATION FLOW|資料來源|預期成果/);
  assert.match(homepage, /mobile-scene-nav|先找資料再回答|模型上下文協定/);
  assert.doesNotMatch(contactPage, /LET&amp;apos;S/);

  for (const [path, title] of [["/knowledge-base", "企業知識庫｜SynaiQ"], ["/wally", "Wally 系列｜SynaiQ"], ["/media", "媒體中心｜SynaiQ"], ["/contact", "聯絡我們｜SynaiQ"]]) {
    const response = await render(path);
    assert.equal(response.status, 200);
    assert.match(await response.text(), new RegExp(`<title>${title}</title>`));
  }
});
