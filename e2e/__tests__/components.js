const puppeteer = require('puppeteer-core');
const ct = require('../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({
    executablePath: ct.CHROME_PATH,
  });
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Components testing', () => {
  test('Twitter and Facebook feed is working as expected', async () => {
    // twitter widget exist
    const searchInput = await page.$('#twitter-widget-0');
    expect(searchInput).toBeTruthy();
    //facebook widget exist
    const getFbAttr = await page.evaluate('document.querySelector(".fb_iframe_widget").getElementsByTagName("iframe")[0].getAttribute("src")');
    expect(getFbAttr).toMatch(/https:\/\/www.facebook.com/);
  });

  test('Carousel is working as expected', async () => {
    const carItem1 = await page.evaluate("document.querySelectorAll('.carousel-item')[0].getAttribute('class')");
    expect(carItem1).toMatch(/active/);
    await page.click('.right.carousel-control');
    await page.waitFor(ct.WT);
    expect(await page.evaluate("document.querySelectorAll('.carousel-item')[1].getAttribute('class')")).toMatch(/active/);
  }, ct.TO);

  test('Quick exit is working as expected', async () => {
    await page.goto(`${ct.APP_URL}/docs/quick-exit.html`, { waitUntil: 'networkidle0' });
    // 1. -> quick exit exist on the page
    const searchInput = await page.$('.qg-quick-exit');
    expect(searchInput).toBeTruthy();
    // 2. -> tooltip is working as expected
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-tooltip__wrapper\')).getPropertyValue("display")')).toBe('none');
    await page.click('.qg-tooltip__prompt');
    expect(await page.evaluate('window.getComputedStyle(document.querySelector(\'.qg-tooltip__wrapper\')).getPropertyValue("display")')).not.toBe('none');
    // 3. -> 'tips to browse safely' navigating to the correct link
    await page.click('.qg-quick-exit__tip-link');
    await page.waitFor(ct.WT);
    expect(await page.evaluate(() => location.href)).toBe('https://www.qld.gov.au/help/tips-to-browse-safely-online');
    await page.goBack();
    // 4. -> 'close this site' is working as expected and browser back is not taking to the same page
    await page.click('.qg-quick-exit__button');
    await page.waitFor(ct.WT);
    expect(await page.evaluate(() => location.href)).toBe('https://www.google.com.au/');
    await page.goBack();
    expect(await page.evaluate(() => location.href)).not.toBe(`${ct.APP_URL}/docs/quick-exit.html`);
  }, ct.TO);

  afterAll(async () => {
    await browser.close();
  });
});
