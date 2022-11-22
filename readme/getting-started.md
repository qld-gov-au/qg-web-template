# Getting started

A Git client and Node.js are required to edit this template.

## 1. Download

```bash
git clone https://github.com/qld-gov-au/qg-web-template.git
```

## 2. Setup

**Make sure you have Node version >= 14.0 and NPM >= 6.0

Node.js can be downloaded from https://nodejs.org as an archive that simply needs to be unzipped and added to your PATH. For example, on Linux, if it is extracted to /opt/node-v16.17.1-linux-x64 then you could run:
```bash
export PATH="/opt/node-v16.17.1-linux-x64/bin:$PATH"
```

Install all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))
```bash
npm install
```

Recommend using VSCode as the IDE for development.

## 3. NPM Scripts descriptions
| Name        | Description     |
| ------------- | ------------- |
| npm **start**  | Starts a local server (Storybook) and watch for changes
| npm run **release**  | Create a release folder with all the minified files and templates |
| npm run **publish-npm** | Publish the release folder on NPM package manager. (npm repo link https://github.com/qld-gov-au/web-template-release) |
| npm run **publish-cdn** | Publish the release folder on Static CDN      |
| npm run **create-swe-release**  | Create a Github release on this (qg-web-template) repository      |
| npm run **publish-test-npm** | Creates a branch release-vX.Y.Z-test on web-template-release repo (https://github.com/qld-gov-au/web-template-release) which can be deployed on Matrix for testing    |
| npm run **publish-test-cdn** | Creates a branch release-vX.Y.Z-test on static CDN repository which can be deployed on TEST environment of applications using Bamboo for testing
| npm **test** | Run E2E tests (using Jest and Puppeteer)

## 4. Testing Setup

**To start a local server (legacy)**
```bash
npm run start-legacy
npm run test
```

**To start in the Storybook dev environment**
We have added a Storybook develop environment for providing better UI component isolation and making visual testing possible.
```bash
npm run start
npm run test
```
For more details of developing component in Storybook, please refer to [Develop in Storybook](readme/develop-in-storybook.md).

Next, guidelines and how to for [working in the Web Template git repo](git.md)
