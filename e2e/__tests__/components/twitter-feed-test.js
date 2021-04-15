const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components/twitter-feed.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Check Twitter Feed is working as expected', async () => {
    // twitter widget exist
    await page.waitForTimeout(ct.WT);
    const searchInput = await page.$('#twitter-widget-0');
    expect(searchInput).toBeTruthy();
  });
  afterAll(async () => {
    await browser.close();
  });
});
