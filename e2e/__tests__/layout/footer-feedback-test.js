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
    // check getRecaptcha input value is populated as expected and is false by default
    await page.waitForTimeout(ct.WT);
    const getRecaptcha =  await page.$eval('input[name=g-recaptcha-response]', el => $(el).val());
    expect(getRecaptcha).toMatch(/false/);
    await page.click('#page-feedback-about-this-website');
    await page.click('#fs-very-satisfied');
    await page.type('#comments', 'Useful website', { delay: 20 });
    // this test case causing massive fail in circleci, which have issue when submitting a real form with remote api, disabled this test for now.
    // as we are moving out from circleci, Github Actions pipeline doesn't has this issues
    /*
    await page.click('#feedback-page .btn-global-primary');
    await page.waitForTimeout(ct.WT);
    await page.waitForSelector('.thankyou p');
    const element = await page.$('.thankyou');
    const text = await page.evaluate(element => element.textContent, element);
    expect(text).toMatch(/Thank you for your feedback. Your feedback is important to us and will be used to improve the website./);
    // check getRecaptcha input value changed
    expect(await page.$eval('input[name=g-recaptcha-response]', el => $(el).val())).not.toMatch(/false/);
    await page.click('#qg-primary-content li a');
    await page.waitForTimeout(ct.WT);
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
    */
  }, ct.TO * 2);

  afterAll(async () => {
    await browser.close();
  });
});
