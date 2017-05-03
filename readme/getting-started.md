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
