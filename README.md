# Queensland Government Web Template

**If you are using assets from this Repo, please send an email to oss.products@dsiti.qld.gov.au so we can add you to our change management communications list**

_This project is currently a work in progress._

## Repo structure
This repo should contain three main branches. DO NOT WORK DIRECTLY INTO THESE BRANCHES. Instead create your own branch using the below 'creating new branches' instructions, and use a pull request to get that into the working branch.

- working: For integrating features for the next version
- beta: For testing
- master: The current live assets

### Creating new branches
To keep the repository clean, branches must be prefixed into categories with a forwardslash /. Categories come from JIRA and are (note capitalisation): 

- Bugfix: For bugs and errors for the next release
- Feature: For new features
- Hotfix: For critical bugs and errors which will be merged into the current release

Add the JIRA job number after the category type, or the initials of the developer making the change if there is no JIRA job.
Example: Bugfix/QOL-841-Fix-bugs-for-tmr

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

## File structure

* gulp/ - Gulp functions and settings file
* product definitions/ - Definitions and requirements for this project
* src/ - This is where the source files for the template are kept
	* assets/
		* _project/ - Files in here are compiled specially by gulp. Keep an eye on the build file when making changes. This directory will be renamed to the version number for the template (V3)
		* images/ - Images for the template
		* includes - The main SSI includes. This folder is split into includes/ and includes-cdn/ (which are automatically re-written to point to CDN assets) on release.
	* documentation/ - The end user documentation on using this template
	* other-files/ - Special files for build and release
		* build/ - .htaccess file and other files required to get build to work. These are excluded on release.
		* release/ - readme.md and other files for the destination release repository. These are not included on build.
	* template/ - The template files that pull in the includes, css and js. These are automatically adjusted to point to local or CDN files on release.
* tests/ - All test functions
