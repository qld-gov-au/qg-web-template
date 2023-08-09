const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components/carousel.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Carousel is working as expected', async () => {
    const carItem1 = await page.evaluate("document.querySelectorAll('.carousel-item')[0].getAttribute('class')");
    expect(carItem1).toMatch(/active/);
    await page.click('.right.carousel-control');
    await page.waitForTimeout(ct.WT);
    expect(await page.evaluate("document.querySelectorAll('.carousel-item')[1].getAttribute('class')")).toMatch(/active/);
  }, ct.TO);

  afterAll(async () => {
    await browser.close();
  });
});
