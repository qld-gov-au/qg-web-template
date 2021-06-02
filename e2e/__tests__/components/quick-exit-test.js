const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components/quick-exit.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Quick exit is working as expected', async () => {
    await page.goto(`${ct.APP_URL}/docs/components/quick-exit.html`, { waitUntil: 'networkidle0' });
    // 1. -> quick exit exist on the page
    await page.waitForSelector('.qg-quick-exit');
    // 2. -> tooltip is working as expected
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-tooltip__wrapper\')).getPropertyValue("display")')).toBe('none');
    await page.click('.qg-tooltip__prompt');
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-tooltip__wrapper\')).getPropertyValue("display")')).not.toBe('none');
    // 3. -> 'tips to browse safely' navigating to the correct link
    await page.click('.qg-quick-exit__tip-link');
    await page.waitForTimeout(ct.WT);
    expect(await page.evaluate(() => location.href)).toBe('https://www.qld.gov.au/help/tips-to-browse-safely-online');
    await page.goBack();
    // 4. -> 'close this site' is working as expected and browser back is not taking to the same page
    await page.click('.qg-quick-exit__button');
    await page.waitForTimeout(ct.WT);
    expect(await page.evaluate(() => location.href)).toBe('https://www.google.com.au/');
    await page.goBack();
    expect(await page.evaluate(() => location.href)).not.toBe(`${ct.APP_URL}/docs/quick-exit.html`);
  }, ct.TO);

  afterAll(async () => {
    await browser.close();
  });
});
