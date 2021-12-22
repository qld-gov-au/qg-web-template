const expect = require('expect');
const puppeteer = require('puppeteer');
const httpServer = require('http-server');
const percySnapshot = require('@percy/puppeteer');

const platform = require('os').platform();
// We need to change the args passed to puppeteer based on the platform they're using
const puppeteerArgs = /^win/.test(platform) ? [] : ['--single-process'];
const PORT = process.env.PORT_NUMBER || 8086;
const TEST_URL = `http://localhost:${PORT}/docs/components/accordion.html`;

describe('SWE', function () {
  this.timeout(6000);
  let page;
  // let server;
  let browser;

  before(async () => {
    browser = await puppeteer.launch({
      headless: true,
      timeout: 10000,
      args: puppeteerArgs,
    });
  });

  after(() => {
    // server.close();
  });

  beforeEach(async function () {
    page = await browser.newPage();
    await page.goto(TEST_URL);
    await page.evaluate(() => localStorage.clear());
  });

  afterEach(function () {
    page.close();
  });

  it('Loads the app', async function () {
    let mainContainer = await page.$('#qg-primary-content');
    expect(mainContainer).toBeDefined();

    await percySnapshot(page, this.test.fullTitle());
  });
});
