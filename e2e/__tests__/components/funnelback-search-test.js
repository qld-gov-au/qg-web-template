const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Header testing', () => {
  test('Funnelback search is working as expected', async () => {
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('hidden');
    await page.click('#qg-search-query');
    await page.waitForTimeout(ct.WT);
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('visible');
    await page.type('#qg-search-query', 'jobs', { delay: 20 });
    await page.waitFor(ct.WT);
    const element = await page.$('.qg-search-concierge-content li button');
    const text = await page.evaluate(element => element.textContent, element);
    expect(text).toMatch(/jobs/);
  });

  afterAll(async () => {
    await browser.close();
  });
});
