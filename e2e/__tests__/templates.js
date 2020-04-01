const puppeteer = require('puppeteer');
const ct = require('../config/constants');
let browser;
let page;

beforeAll(async () => {
  const browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE templates testing', () => {
  test('Autocomplete is working as expected', async () => {
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('hidden');
    await page.click('input#qg-search-query');
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('visible');
    await page.type('#qg-search-query', 'jobs', { delay: 20 });
    // await page.waitForSelector('.qg-search-concierge .suggestions');
    // const list = (await page.$$('.listbox li')).length;
    // expect(list).toBeGreaterThan(0);
  });

  afterAll(async () => {
    await browser.close();
  });
});
