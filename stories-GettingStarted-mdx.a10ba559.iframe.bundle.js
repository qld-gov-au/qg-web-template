/*! For license information please see stories-GettingStarted-mdx.a10ba559.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkQueensland_Government_Web_Template=self.webpackChunkQueensland_Government_Web_Template||[]).push([[8959],{"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{MDXContext:()=>MDXContext,MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents,withMDXComponents:()=>withMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Markdown:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Markdown});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Canvas:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas,Meta:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta,Story:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/GettingStarted.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),_readme_getting_started_md_raw__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./readme/getting-started.md?raw");function _createMdxContent(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta,{title:"Getting Started"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Markdown,{children:_readme_getting_started_md_raw__WEBPACK_IMPORTED_MODULE_4__})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent()}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./readme/getting-started.md?raw":module=>{module.exports='# Getting started\n\nA Git client and Node.js are required to edit this template.\n\n## 1. Download\n\n```bash\ngit clone https://github.com/qld-gov-au/qg-web-template.git\n```\n\n## 2. Setup\n\n**Make sure you have Node version >= 14.0 and NPM >= 6.0\n\nNode.js can be downloaded from https://nodejs.org as an archive that simply needs to be unzipped and added to your PATH. For example, on Linux, if it is extracted to /opt/node-v16.17.1-linux-x64 then you could run:\n```bash\nexport PATH="/opt/node-v16.17.1-linux-x64/bin:$PATH"\n```\n\nInstall all the node packages (If behind a corporate web proxy please have a look at this website [How to setup Node.js and Npm behind a corporate web proxy](https://jjasonclark.com/how-to-setup-node-behind-web-proxy))\n```bash\nnpm install\n```\n\nRecommend using VSCode as the IDE for development.\n\n## 3. NPM Scripts descriptions\n| Name        | Description     |\n| ------------- | ------------- |\n| npm **start**  | Starts a local server (Storybook) and watch for changes\n| npm run **release**  | Create a release folder with all the minified files and templates |\n| npm run **publish-npm** | Publish the release folder on NPM package manager. (npm repo link https://github.com/qld-gov-au/web-template-release) |\n| npm run **publish-cdn** | Publish the release folder on Static CDN      |\n| npm run **create-swe-release**  | Create a Github release on this (qg-web-template) repository      |\n| npm run **publish-test-npm** | Creates a branch vX.Y.Z-test on web-template-release repo (https://github.com/qld-gov-au/web-template-release) which can be deployed on Matrix for testing    |\n| npm run **publish-uat-branch** | Creates a branch vX.Y.Z-test--branchname on web-template-release repo (https://github.com/qld-gov-au/web-template-release) which can be deployed on Matrix for testing. <br><br>This script accepts a custom "--brachname" argument, for example *npm run publish-uat-branch --branchname="uidev01"* to create branch vX.Y.Z-test--uidev01 |\n| npm run **publish-test-cdn** | Creates a branch release-vX.Y.Z-test on static CDN repository which can be deployed on TEST environment of applications using Bamboo for testing\n| npm **test** | Run E2E tests (using Jest and Puppeteer)\n\n## 4. Testing Setup\n\n**To start a local server (legacy)**\n```bash\nnpm run start-legacy\nnpm run test\n```\n\n**To start in the Storybook dev environment**\nWe have added a Storybook develop environment for providing better UI component isolation and making visual testing possible.\n```bash\nnpm run start\nnpm run test\n```\nFor more details of developing component in Storybook, please refer to [Develop in Storybook](readme/develop-in-storybook.md).\n\nNext, guidelines and how to for [working in the Web Template git repo](git.md)\n'}}]);