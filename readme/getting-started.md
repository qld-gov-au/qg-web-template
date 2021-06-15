# Getting started

A Git client and Node.js are required to edit this template.

## 1. Download

```bash
git clone https://github.com/qld-gov-au/qg-web-template.git
```

## 2. Setup

**Make sure you have Node version >= 6.0 and NPM >= 3**

Install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))
```bash
npm install or yarn install
```
## 3. NPM Scripts descriptions
| Name        | Description     |
| ------------- | ------------- |
| npm **start**  | Start a local server and watch for changes
| npm run **release**  | Create a release folder with all the minified files and templates |
| npm run **publish-npm** | Publish the release folder on NPM package manager. |
| npm run **publish-cdn** | Publish the release folder on Static CDN      |
| npm run **create-swe-release**  | Create a Github release on qg-web-template repository      |
| npm run **publish-test-npm** | Creates a branch release-vX.Y.Z-test on web-template-release repo which can be deployed on Matrix for testing    |
| npm run **publish-test-cdn** | Creates a branch release-vX.Y.Z-test on static CDN repository which can be deployed on TEST environment of applications using Bamboo for testing
| npm **test** | Run tests (Jest and Puppeteer)

## 4. Testing Setup

**To start a local server**
```bash
npm run start or yarn start
```

**To run E2E tests locally**.
webdriver-manager update --gecko=false --proxy PROXY(if any)
```bash
gulp test:e2e
```

**To run E2E tests using Browserstack**.

Please make sure to setup browserstack _config file_ (step 3) and run _gulp serve_ before running browserstack E2E tests
```bash
gulp test:browserstack --browsers _browser names_
```
_browser name_ can be a browser or multiple browsers,
for example chrome or ie,chrome,safari
We can add more browser configurations in conf.js

To view testing reports (coverage, eslint and unit test)
```bash
gulp serve --type=reports-server
```


## 3. Browserstack Setup
1.) Create a .env file in the root of your project

2.) Place Browserstack configs in this file =
```bash
BROWSERSTACK_USERNAME = username
BROWSERSTACK_ACCESS_KEY = key
PROXYHOST = proxyhost (leave blank if no proxy)
PROXYPORT = proxyport (leave blank if no proxy)
PROXYPROTOCOL = proxyprotocol (leave blank if no proxy)
```

---

Next, guidelines and how to for [working in the Web Template git repo](git.md)
