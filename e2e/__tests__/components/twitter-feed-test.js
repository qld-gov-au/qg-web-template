const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;
jest.setTimeout(40000);
beforeAll(async () => {
  browser = await puppeteer.launch({headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components/twitter-feed.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Twitter and Facebook feed is working as expected', async () => {
    // twitter widget exist
    const searchInput = await page.$('#twitter-widget-0');
    expect(searchInput).toBeTruthy();
  });
  afterAll(async () => {
    await browser.close();
  });
});
