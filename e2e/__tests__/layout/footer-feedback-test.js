const puppeteer = require('puppeteer');
const ct = require('../../config/constants');

let browser;
let page;
beforeAll(async () => {
  browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
  page = await browser.newPage();
  await page.setViewport({ width: ct.BT_XL, height: ct.WH });
  await page.goto(`${ct.APP_URL}/docs/components.html`, { waitUntil: 'networkidle0' });
});

describe('SWE Footer testing', () => {
  test('Footer feedback', async () => {
    await page.click('.qg-feedback-toggle');
    await page.click('#page-feedback-about-this-website');
    await page.click('#fs-very-satisfied');
    await page.type('#comments', 'Useful website', { delay: 20 });
    await page.click('#feedback-page .btn-global-primary');
    await page.waitFor(ct.WT);
    const element = await page.$('.thankyou');
    const text = await page.evaluate(element => element.textContent, element);
    expect(text).toMatch(/Thank you for your feedback. Your feedback is important to us and will be used to improve the website./);
    await page.click('#qg-primary-content li a');
    await page.waitFor(ct.WT);
    // check franchise input value is populated as expected
    const franchiseVal =  await page.$eval('input[name=franchise]', el => $(el).val());
    expect(franchiseVal).toMatch(/Franchise Title/);
    // check page title input value is populated as expected
    const currentPageTitle = await page.title();
    const getpageTitle =  await page.$eval('input[name=page-title]', el => $(el).val());
    expect(getpageTitle).toMatch(currentPageTitle);
    // check page referrer input value is populated as expected
    const currentReferrer = await page.evaluate(id => document.referrer);
    const getReferrer =  await page.$eval('input[name=page-referer]', el => $(el).val());
    expect(getReferrer).toMatch(currentReferrer);
  }, ct.TO);

  afterAll(async () => {
    await browser.close();
  });
});
