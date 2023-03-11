describe("us-00 Create, login, logout users", () => {
  let page;
  let browser;
  beforeAll(async () => {
    browser = await puppeteer.launch({
      headles: false,
      slowMo: 30,
    });
    page = await browser.newPage();
    await page.goto("");
  });
});
