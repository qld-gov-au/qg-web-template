const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');

let browser;
let page;


beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH
  });
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE templates testing', () => {
  test('Autocomplete is working as expected', async () => {
    await page.type('input[id=qg-search-query]', 'jobs', { delay: 20 });
    await page.waitForSelector('.listbox li');
    const list = (await page.$$('.listbox li')).length;
    expect(list).toBeGreaterThan(0);
  }, ct.TO);

  test('Feedback form is working as expected', async () => {
    const pf = '#page-feedback-useful';
    await page.waitForSelector(pf);
    expect(await page.evaluate('window.getComputedStyle(document.getElementById(\'qg-page-feedback\')).getPropertyValue("display")')).toBe('none');
    (await page.$(pf)).click();
    await page.waitFor(ct.WT);
    expect(await page.evaluate('window.getComputedStyle(document.getElementById(\'qg-page-feedback\')).getPropertyValue("display")')).not.toBe('none');
  });
  afterAll(async () => {
    await browser.close();
  });
});
