const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: "new", args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Header testing', () => {
  test('Funnelback search is working as expected', async () => {
    expect(await page.evaluate('$(\'.qg-search-concierge-initial\').css(\'visibility\')')).toBe('hidden');
    await page.click('input#qg-search-query');
    await page.waitForTimeout(ct.WT);
    expect(await page.evaluate('$(\'.qg-search-concierge-initial\').css(\'visibility\')')).toBe('visible');
    await page.waitForTimeout(ct.WT);
    await page.type('input#qg-search-query', 'jobs', { delay: 40 });
    await page.waitForTimeout(ct.WT);
    expect(
      await page.evaluate('$(\'.qg-search-concierge-content li button\').length')).toBe(3);
  });

  afterAll(async () => {
    await browser.close();
  });
});
