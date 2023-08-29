/*! For license information please see stories-components-Buttons-Buttons-stories-mdx.40c5c0b4.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkQueensland_Government_Web_Template=self.webpackChunkQueensland_Government_Web_Template||[]).push([[821],{"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{default:()=>_typeof})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{MDXContext:()=>MDXContext,MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents,withMDXComponents:()=>withMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Canvas:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas,Meta:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta,Story:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{INITIAL_VIEWPORTS:()=>INITIAL_VIEWPORTS});var INITIAL_VIEWPORTS={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}}},"./node_modules/@storybook/addon-viewport/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{INITIAL_VIEWPORTS:()=>_chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS});var _chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs")},"./src/stories/components/Buttons/Buttons.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,links:()=>links,loading:()=>loading,outline:()=>outline,primary:()=>primary,secondary:()=>secondary,states:()=>states,tertiary:()=>tertiary});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_decorators__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./src/stories/decorators/QgPrimaryContent.js"),_decorators__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./src/stories/decorators/QgContent.js"),_decorators__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./src/stories/decorators/Grid.js"),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/helpers/index.js"),_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Buttons/templates/Primary.html"),_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3__),_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/components/Buttons/templates/Secondary.html"),_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4__),_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/Buttons/templates/Tertiary.html"),_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5__),_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/components/Buttons/templates/Outline.html"),_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6__),_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/stories/components/Buttons/templates/Loading.html"),_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7___default=__webpack_require__.n(_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7__),_templates_States_html__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/components/Buttons/templates/States.html"),_templates_States_html__WEBPACK_IMPORTED_MODULE_8___default=__webpack_require__.n(_templates_States_html__WEBPACK_IMPORTED_MODULE_8__),_templates_Links_html__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/components/Buttons/templates/Links.html"),_templates_Links_html__WEBPACK_IMPORTED_MODULE_9___default=__webpack_require__.n(_templates_Links_html__WEBPACK_IMPORTED_MODULE_9__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.useMDXComponents)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta,{title:"Components/Buttons",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_12__.QgPrimaryContent,_decorators__WEBPACK_IMPORTED_MODULE_13__.QgContent]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h1,{id:"buttons",children:"Buttons"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"primary",children:"Primary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Primary",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3___default()),children:()=>_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"secondary",children:"Secondary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Secondary",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4___default()),children:()=>_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"tertiary",children:"Tertiary"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Tertiary",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5___default()),children:()=>_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"outline",children:"Outline"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Outline",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6___default()),children:()=>_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"loading",children:"Loading"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Loading",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7___default()),children:()=>_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"states",children:"States"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"States",decorators:[(0,_decorators__WEBPACK_IMPORTED_MODULE_14__.Grid)(5)],parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_States_html__WEBPACK_IMPORTED_MODULE_8___default()),children:()=>_templates_States_html__WEBPACK_IMPORTED_MODULE_8___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components.h2,{id:"links",children:"Links"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Links",decorators:[(0,_decorators__WEBPACK_IMPORTED_MODULE_14__.Grid)(5)],parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Links_html__WEBPACK_IMPORTED_MODULE_9___default()),children:()=>_templates_Links_html__WEBPACK_IMPORTED_MODULE_9___default()})})]})}const primary=()=>_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3___default();primary.storyName="Primary",primary.parameters={storySource:{source:"() => Primary"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Primary_html__WEBPACK_IMPORTED_MODULE_3___default())};const secondary=()=>_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4___default();secondary.storyName="Secondary",secondary.parameters={storySource:{source:"() => Secondary"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Secondary_html__WEBPACK_IMPORTED_MODULE_4___default())};const tertiary=()=>_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5___default();tertiary.storyName="Tertiary",tertiary.parameters={storySource:{source:"() => Tertiary"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Tertiary_html__WEBPACK_IMPORTED_MODULE_5___default())};const outline=()=>_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6___default();outline.storyName="Outline",outline.parameters={storySource:{source:"() => Outline"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Outline_html__WEBPACK_IMPORTED_MODULE_6___default())};const loading=()=>_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7___default();loading.storyName="Loading",loading.parameters={storySource:{source:"() => Loading"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Loading_html__WEBPACK_IMPORTED_MODULE_7___default())};const states=()=>_templates_States_html__WEBPACK_IMPORTED_MODULE_8___default();states.storyName="States",states.parameters={storySource:{source:"() => States"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_States_html__WEBPACK_IMPORTED_MODULE_8___default())},states.decorators=[(0,_decorators__WEBPACK_IMPORTED_MODULE_14__.Grid)(5)];const links=()=>_templates_Links_html__WEBPACK_IMPORTED_MODULE_9___default();links.storyName="Links",links.parameters={storySource:{source:"() => Links"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Links_html__WEBPACK_IMPORTED_MODULE_9___default())},links.decorators=[(0,_decorators__WEBPACK_IMPORTED_MODULE_14__.Grid)(5)];const componentMeta={title:"Components/Buttons",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_12__.QgPrimaryContent,_decorators__WEBPACK_IMPORTED_MODULE_13__.QgContent],tags:["stories-mdx"],includeStories:["primary","secondary","tertiary","outline","loading","states","links"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_11__.useMDXComponents)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/stories/decorators/DecoratorBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DecoratorBase:()=>DecoratorBase});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),DecoratorBase=function DecoratorBase(tag,Child){var elem=document.createElement(tag);return"function"==typeof Child?(elem.innerHTML=Child(),"object"===(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(Child())?elem.innerHTML=Child().outerHTML:elem.innerHTML=Child()):Child&&elem.appendChild(Child),elem}},"./src/stories/decorators/Grid.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Grid:()=>Grid});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),Grid=function Grid(){var colNum=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5;return function(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.style="display: grid; gap: 1rem; grid-template-columns: repeat(".concat(colNum,", 1fr); "),elem}}},"./src/stories/decorators/QgContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QgContent:()=>QgContent});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),QgContent=function QgContent(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.id="qg-content",elem.className="qg-wide",elem}},"./src/stories/decorators/QgPrimaryContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QgPrimaryContent:()=>QgPrimaryContent});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),QgPrimaryContent=function QgPrimaryContent(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.id="qg-primary-content",elem}},"./src/stories/helpers/getDecoratedParameters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getDecoratedParameters:()=>getDecoratedParameters});var getDecoratedParameters=function getDecoratedParameters(template){return{docs:{source:{code:template}}}}},"./src/stories/helpers/getMobileProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getCanvasMobileProps:()=>getCanvasMobileProps,getStoryMobileHeight:()=>getStoryMobileHeight,getStoryMobileParameters:()=>getStoryMobileParameters});var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),getCanvasMobileProps=function getCanvasMobileProps(){return{style:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles}},getStoryMobileParameters=function getStoryMobileParameters(){return{viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS,defaultViewport:"iphone12"},docs:{inlineStories:!1},chromatic:{viewports:[parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.width),parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height)]}}},getStoryMobileHeight=function getStoryMobileHeight(){return _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height}},"./src/stories/helpers/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getCanvasMobileProps:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getCanvasMobileProps,getDecoratedParameters:()=>_getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__.getDecoratedParameters,getStoryMobileHeight:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileHeight,getStoryMobileParameters:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileParameters});var _getMobileProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/helpers/getMobileProps.js"),_getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/helpers/getDecoratedParameters.js")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/components/Buttons/templates/Links.html":module=>{module.exports='<p class="actions">\n  <a class="qg-btn button" href="http://example.com">\'qg-btn\' link</a>\n  <a class="btn button" href="http://example.com">\'btn\' link</a>\n  <a class="button" href="http://example.com">\'button\' link</a>\n</p>\n\n<p class="actions">\n  <strong>\n    <a class="qg-btn button" href="http://example.com">Strong \'qg-btn\' link</a>\n    <a class="btn button" href="http://example.com">Strong \'btn\' link</a>\n    <a class="button" href="http://example.com">Strong \'button\' link</a>\n  </strong>\n</p>\n'},"./src/stories/components/Buttons/templates/Loading.html":module=>{module.exports='<button type="button" class="qg-btn btn-primary" disabled="">\n  <span class="spinner-border" role="status"><span class="sr-only">Submitting</span></span>\n  Submitting\n</button>\n<button type="button" class="qg-btn btn-secondary" disabled="">\n  <span class="spinner-border" role="status"><span class="sr-only">Saving</span></span> Saving\n</button>\n<button type="button" class="qg-btn btn-default" disabled="">\n  <span class="spinner-border" role="status"><span class="sr-only">Downloading</span></span>\n  Downloading\n</button>\n<button type="button" class="qg-btn btn-outline-dark" disabled="">\n  <span class="spinner-border" role="status"><span class="sr-only">Processing</span></span>\n  Processing\n</button>\n'},"./src/stories/components/Buttons/templates/Outline.html":module=>{module.exports='<button type="button" class="qg-btn btn-outline-dark">Dark outline</button>\n<div style="padding: 5px; margin-top: 5px; background-color: #4a4a4a">\n  <button type="button" class="qg-btn btn-outline-light">Light outline</button>\n</div>\n'},"./src/stories/components/Buttons/templates/Primary.html":module=>{module.exports='<button type="button" class="qg-btn btn-primary" id="button1">Primary button green</button>\n<button type="button" class="qg-btn btn-secondary" id="button2">Primary button blue</button>\n<button type="button" class="qg-btn btn-default" id="button3">Primary button grey</button>\n'},"./src/stories/components/Buttons/templates/Secondary.html":module=>{module.exports='<button type="button" class="qg-btn btn-outline-dark">Secondary button</button>\n'},"./src/stories/components/Buttons/templates/States.html":module=>{module.exports='<style>\n.dark-background {\n  padding: 5px;\n  margin-top: 5px;\n  background-color: #4a4a4a;\n}\n</style>\n\n<span>default</span>\n<span>hover</span>\n<span>focus</span>\n<span>active</span>\n<span>disabled</span>\n\n<button type="button" class="qg-btn btn-primary">btn-primary</button>\n<button type="button" class="qg-btn btn-primary hover">btn-primary</button>\n<button type="button" class="qg-btn btn-primary focus">btn-primary</button>\n<button type="button" class="qg-btn btn-primary active">btn-primary</button>\n<button type="button" class="qg-btn btn-primary" disabled>btn-primary</button>\n\n<button type="button" class="qg-btn btn-global-primary">btn-global-primary</button>\n<button type="button" class="qg-btn btn-global-primary hover">btn-global-primary</button>\n<button type="button" class="qg-btn btn-global-primary focus">btn-global-primary</button>\n<button type="button" class="qg-btn btn-global-primary active">btn-global-primary</button>\n<button type="button" class="qg-btn btn-global-primary" disabled>btn-global-primary</button>\n\n<button type="button" class="qg-btn btn-secondary">btn-secondary</button>\n<button type="button" class="qg-btn btn-secondary hover">btn-secondary</button>\n<button type="button" class="qg-btn btn-secondary focus">btn-secondary</button>\n<button type="button" class="qg-btn btn-secondary active">btn-secondary</button>\n<button type="button" class="qg-btn btn-secondary" disabled>btn-secondary</button>\n\n<form class="qg-forms-v2">\n<button type="button" class="qg-btn btn-secondary">btn-secondary forms-v2</button>\n</form>\n<form class="qg-forms-v2">\n<button type="button" class="qg-btn btn-secondary hover">btn-secondary forms-v2</button>\n</form>\n<form class="qg-forms-v2">\n<button type="button" class="qg-btn btn-secondary focus">btn-secondary forms-v2</button>\n</form>\n<form class="qg-forms-v2">\n<button type="button" class="qg-btn btn-secondary active">btn-secondary forms-v2</button>\n</form>\n<form class="qg-forms-v2">\n<button type="button" class="qg-btn btn-secondary" disabled>btn-secondary forms-v2</button>\n</form>\n\n<div class="dark-background">\n<button type="button" class="qg-btn btn-global-secondary">btn-global-secondary</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-global-secondary hover">btn-global-secondary</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-global-secondary focus">btn-global-secondary</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-global-secondary active">btn-global-secondary</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-global-secondary" disabled>btn-global-secondary</button>\n</div>\n\n<button type="button" class="qg-btn btn-default">btn-default</button>\n<button type="button" class="qg-btn btn-default hover">btn-default</button>\n<button type="button" class="qg-btn btn-default focus">btn-default</button>\n<button type="button" class="qg-btn btn-default active">btn-default</button>\n<button type="button" class="qg-btn btn-default" disabled>btn-default</button>\n\n<button type="button" class="qg-btn btn-outline-dark">btn-outline-dark</button>\n<button type="button" class="qg-btn btn-outline-dark hover">btn-outline-dark</button>\n<button type="button" class="qg-btn btn-outline-dark focus">btn-outline-dark</button>\n<button type="button" class="qg-btn btn-outline-dark active">btn-outline-dark</button>\n<button type="button" class="qg-btn btn-outline-dark" disabled>btn-outline-dark</button>\n\n<a class="button">button</a>\n<a class="button hover">button</a>\n<a class="button focus">button</a>\n<a class="button active">button</a>\n<a class="button" disabled>button</a>\n\n<div class="dark-background">\n<button type="button" class="qg-btn btn-outline-light">btn-outline-light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-outline-light hover">btn-outline-light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-outline-light focus">btn-outline-light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-outline-light active">btn-outline-light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-outline-light" disabled>btn-outline-light</button>\n</div>\n\n<button type="button" class="qg-btn btn-link">btn-link</button>\n<button type="button" class="qg-btn btn-link hover">btn-link</button>\n<button type="button" class="qg-btn btn-link focus">btn-link</button>\n<button type="button" class="qg-btn btn-link active">btn-link</button>\n<button type="button" class="qg-btn btn-link" disabled>btn-link</button>\n\n<div class="dark-background">\n<button type="button" class="qg-btn btn-link light">btn-link light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-link light hover">btn-link light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-link light focus">btn-link light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-link light active">btn-link light</button>\n</div>\n<div class="dark-background">\n<button type="button" class="qg-btn btn-link light" disabled>btn-link light</button>\n</div>\n\n<button type="button" class="qg-btn"><a>Link inside</a></button>\n<button type="button" class="qg-btn hover"><a class="hover">Link inside</a></button>\n<button type="button" class="qg-btn focus"><a class="focus">Link inside</a></button>\n<button type="button" class="qg-btn active"><a class="active">Link inside</a></button>\n<button type="button" class="qg-btn" disabled><a disabled>Link inside</a></button>\n\n'},"./src/stories/components/Buttons/templates/Tertiary.html":module=>{module.exports='<button type="button" class="qg-btn btn-link">Tertiary button</button>\n'}}]);