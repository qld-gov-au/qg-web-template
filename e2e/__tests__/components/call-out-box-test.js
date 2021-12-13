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
  test('Warning appears if call out box contains `i` element as font awesome icon', async () => {
    let consoleMsg = '';
    page.on('console', consoleObj => { consoleMsg = consoleObj.text(); });
    await page.goto(`${ct.APP_URL}/docs/components/call-out-box.html`, { waitUntil: 'networkidle0' });
    // 1. -> call out box contains deprecate icon
    await page.waitForSelector('.qg-callout__box .qg-callout__icon i.fa');
    // 2. -> warning appears in console
    expect(consoleMsg).toEqual('Please change the font awesome element in Callout box from i to span, we\'ll be removing the css in this element before 22nd june 2022. Please refer to the https://github.com/qld-gov-au/qg-web-template/pull/391 for more details.');
  });

  afterAll(async () => {
    await browser.close();
  });
});
