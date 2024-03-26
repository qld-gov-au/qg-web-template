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
});

describe('SWE Components testing', () => {
  test('Accordion is working as expected', async () => {
    await page.goto(`${ct.APP_URL}/docs/components/accordion.html`, { waitUntil: 'networkidle0' });
    // 1. -> accordion exist on the page
    await page.waitForSelector('.qg-accordion-v2');

    // 2. -> check all the collapsing-sections are closed on page load
    expect(await page.evaluate('$(\'.collapsing-section\').css(\'display\')')).toBe('none');

    // 3. -> click on a accordion heading and check collapsing section visibility changes
    await page.click('.acc-heading');
    expect(await page.evaluate('$(\'.collapsing-section\').css(\'display\')')).not.toBe('none');

    // 4. -> click on collapse all button and check collapsing section visibility changes
    await page.click('.controls.collapse');
    await page.waitForTimeout(1000);
    expect(await page.evaluate('$(\'.collapsing-section\').css(\'display\')')).toBe('none');

    // 5. -> click on expand all button and check collapsing section visibility changes
    await page.click('.controls.expand');
    await page.waitForTimeout(1000);
    expect(await page.evaluate('$(\'.collapsing-section\').css(\'display\')')).not.toBe('none');

    // 6. -> check hashtrigger function by inserting a heading on the URL (#with-icon) and check that particular accordion panel open
    await page.click('.controls.collapse');
    await page.goto(`${ct.APP_URL}/docs/components/accordion.html#with-icon`, { waitUntil: 'networkidle0' });
    await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });
    await page.waitForTimeout(1000);
    expect(await page.evaluate('$(".title:contains(\'With icon\')").parents(\'article\').find(\'.collapsing-section\').css(\'display\');')).not.toBe('none');

    // 7. -> check hashtrigger function by inserting a ID in the URL (#id-panel-1) and check that particular accordion panel open
    await page.click('.controls.collapse');
    await page.goto(`${ct.APP_URL}/docs/components/accordion.html#id-panel-1`, { waitUntil: 'networkidle0' });
    await page.reload({ waitUntil: ['networkidle0', 'domcontentloaded'] });
    await page.waitForTimeout(1000);
    expect(await page.evaluate('$(\'#id-panel-1\').css(\'display\');')).not.toBe('none');
  });

  afterAll(async () => {
    await browser.close();
  });
});
