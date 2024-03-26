const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  if (typeof page.waitForTimeout !== 'function') {
    page.waitForTimeout = function(timeout) { return new Promise(r => setTimeout(r, timeout)) };
  }
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components/facebook-feed.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Facebook feed is working as expected', async () => {
    const getFbAttr = await page.evaluate('document.querySelector(".fb_iframe_widget").getElementsByTagName("iframe")[0].getAttribute("src")');
    expect(getFbAttr).toMatch(/facebook.com/);
  });
  afterAll(async () => {
    await browser.close();
  });
});
