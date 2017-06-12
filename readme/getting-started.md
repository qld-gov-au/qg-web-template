# Getting started

A Git client and Node.js are required to edit this template.

## 1. Download

```bash
git clone https://github.com/qld-gov-au/glue-template.git
```

## 2. Setup

**Make sure you have Node version >= 6.0 and NPM >= 3**

Install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))
```bash
npm install
```

## 3. Testing Setup

**To start a local server**
```bash
gulp serve
```
**To run Unit tests and Linting tests**
```bash
gulp test
```
**Watch and run tests**
```bash
gulp watch:test
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
