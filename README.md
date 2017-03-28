# Queensland Government Web Template

**If you are using assets from this Repo, please send an email to oss.products@dsiti.qld.gov.au so we can add you to our change management communications list**

_This project is currently a work in progress._

## Repo structure
This repo should contain three main branches:
- working: 
- beta: 
- master: 

### Creating new branches
To keep the repository clean, branches should be prefixed into categories with a forwardslash /. Categories come from JIRA and are (note capitalisation): 
- Bugfix: For bugs and errors for the next release
- Feature: For new features
- Hotfix: For critical bugs and errors which will be merged into the current release

## Getting started
### 1. Download
```bash
git clone https://github.com/qld-gov-au/glue-template.git
```

### 2. Setup
**Make sure you have Node version >= 6.0 and NPM >= 3**

Install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))
```bash
npm install
```
### 2. Usage
**Command to create a build folder from the src folder files**
```bash
gulp build
```
**Command performs build as above then replaces ssi directives with JINJA2**
```bash
gulp build-jinja
```
**Watch and run tests**
```bash
gulp watch
```
**Command to create a release folder from the build folder files. Please make sure to run the gulp build command before running the gulp release command**
```bash
gulp release
```
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

### 4. Browserstack Setup
1.) Create a .env file in the root of your project

2.) Place Browserstack configs in this file =
```bash
BROWSERSTACK_USERNAME = username
BROWSERSTACK_ACCESS_KEY = key
PROXYHOST = proxyhost (leave blank if no proxy)
PROXYPORT = proxyport (leave blank if no proxy)
PROXYPROTOCOL = proxyprotocol (leave blank if no proxy)
```

## Structure
