const puppeteer = require('puppeteer');
const ct = require('../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_SM, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('Header on small screen devices', () => {
  test('Should display the menu on clicking the menu icon', async () => {
    // main menu
    expect(await page.evaluate("document.querySelector('#qg-site-nav').getAttribute('class')")).not.toMatch(/collapse show/);
    (await page.$('#qg-show-menu')).click();
    await page.waitFor(ct.WT);
    expect(await page.evaluate("document.querySelector('#qg-site-nav').getAttribute('class')")).toMatch(/collapse show/);

    // nested menu
    expect(await page.evaluate("document.querySelector('.mega-menu').getAttribute('class')")).not.toMatch(/dropdown-menu mega-menu show/);
    (await page.$('#qgPrimaryNavForQueenslanders')).click();
    await page.waitFor(ct.WT);
    expect(await page.evaluate("document.querySelector('.mega-menu').getAttribute('class')")).toMatch(/dropdown-menu mega-menu show/);
  }, ct.TO);

  test('Should display the search on clicking search icon', async () => {
    expect(await page.evaluate("document.querySelector('#qg-global-search-form').getAttribute('class')")).not.toMatch(/qg-search-form qg-global-web-autocomplete collapse/);
    (await page.$('#qg-show-search')).click();
    await page.waitFor(ct.WT);
    expect(await page.evaluate("document.querySelector('#qg-global-search-form').getAttribute('class')")).toMatch(/qg-search-form qg-global-web-autocomplete collapse/);
  }, ct.TO);

  afterAll(async () => {
    await browser.close();
  });
});
