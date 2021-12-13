const puppeteer = require('puppeteer');
const ct = require('../../config/constants');
let browser;
let page;

beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
});

describe('SWE Components testing', () => {
  test('Warning appears if alert contains `i` element as font awesome icon', async () => {
    let consoleMsg = '';
    page.on('console', consoleObj => { consoleMsg = consoleObj.text(); });
    await page.goto(`${ct.APP_URL}/docs/components/alerts.html`, { waitUntil: 'networkidle0' });
    // 1. -> alert contains deprecate icon
    await page.waitForSelector('.alert h2 i.fa');
    // 2. -> warning appears in console
    await page.waitForTimeout(5000);
    expect(consoleMsg).toEqual('Please change the font awesome element in Alert from i to span, we\'ll be removing the css in this element before 22nd june 2022. Please refer to the https://github.com/qld-gov-au/qg-web-template/pull/391 for more details.');
  });

  afterAll(async () => {
    await browser.close();
  });
});
