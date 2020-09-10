const puppeteer = require('puppeteer');
const ct = require('../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
  await page.addScriptTag({url: 'https://code.jquery.com/jquery-3.2.1.min.js'});
});

describe('SWE Header testing', () => {
  test('Funnelback search is working as expected', async () => {
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('hidden');
    await page.click('input#qg-search-query');
    await page.waitFor(ct.WT);
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-search-concierge-initial\')).getPropertyValue("visibility")')).toBe('visible');
    await page.type('#qg-search-query', 'jobs', { delay: 20 });
    await page.waitFor(ct.WT);
    const element = await page.$('.qg-search-concierge-content li button');
    const text = await page.evaluate(element => element.textContent, element);
    const result = await page.evaluate(() => {
      try {
        var table = $("title").html();
        return table;
      } catch (e) {
        return e.message;
      }
    });
    console.log(result);
    expect(text).toMatch(/jobs/);
  });

  afterAll(async () => {
    await browser.close();
  });
});
