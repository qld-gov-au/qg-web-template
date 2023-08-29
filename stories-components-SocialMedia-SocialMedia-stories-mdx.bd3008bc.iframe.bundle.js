/*! For license information please see stories-components-SocialMedia-SocialMedia-stories-mdx.bd3008bc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkQueensland_Government_Web_Template=self.webpackChunkQueensland_Government_Web_Template||[]).push([[5675],{"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{default:()=>_typeof})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{MDXContext:()=>MDXContext,MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents,withMDXComponents:()=>withMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Canvas:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas,Meta:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta,Story:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{INITIAL_VIEWPORTS:()=>INITIAL_VIEWPORTS});var INITIAL_VIEWPORTS={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}}},"./node_modules/@storybook/addon-viewport/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{INITIAL_VIEWPORTS:()=>_chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS});var _chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs")},"./src/stories/components/SocialMedia/SocialMedia.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,facebookFeed:()=>facebookFeed,twitterFeed:()=>twitterFeed});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_decorators__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/stories/decorators/QgPrimaryContent.js"),_decorators__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/stories/decorators/QgContent.js"),_helpers__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/helpers/index.js"),_templates_Default_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/SocialMedia/templates/Default.html"),_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3__),_templates_FacebookFeed_html__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/stories/components/SocialMedia/templates/FacebookFeed.html"),_templates_FacebookFeed_html__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(_templates_FacebookFeed_html__WEBPACK_IMPORTED_MODULE_4__),_templates_TwitterFeed_html__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/stories/components/SocialMedia/templates/TwitterFeed.html"),_templates_TwitterFeed_html__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(_templates_TwitterFeed_html__WEBPACK_IMPORTED_MODULE_5__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2"},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.useMDXComponents)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta,{title:"Components/Social Media",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_8__.QgPrimaryContent,_decorators__WEBPACK_IMPORTED_MODULE_9__.QgContent]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h1,{id:"social-media",children:"Social Media"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Default",parameters:(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()),children:()=>_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"facebookfeed",children:"FacebookFeed"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"FacebookFeed",parameters:{...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()),chromatic:{disableSnapshot:!0}},children:()=>_templates_FacebookFeed_html__WEBPACK_IMPORTED_MODULE_4___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_components.h2,{id:"twitterfeed",children:"TwitterFeed"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"TwitterFeed",parameters:{...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()),chromatic:{disableSnapshot:!0}},children:()=>_templates_TwitterFeed_html__WEBPACK_IMPORTED_MODULE_5___default()})})]})}const defaultStory=()=>_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default();defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"() => Default"},...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default())};const facebookFeed=()=>_templates_FacebookFeed_html__WEBPACK_IMPORTED_MODULE_4___default();facebookFeed.storyName="FacebookFeed",facebookFeed.parameters={storySource:{source:"() => FacebookFeed"},...{...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()),chromatic:{disableSnapshot:!0}}};const twitterFeed=()=>_templates_TwitterFeed_html__WEBPACK_IMPORTED_MODULE_5___default();twitterFeed.storyName="TwitterFeed",twitterFeed.parameters={storySource:{source:"() => TwitterFeed"},...{...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)(_templates_Default_html__WEBPACK_IMPORTED_MODULE_3___default()),chromatic:{disableSnapshot:!0}}};const componentMeta={title:"Components/Social Media",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_8__.QgPrimaryContent,_decorators__WEBPACK_IMPORTED_MODULE_9__.QgContent],tags:["stories-mdx"],includeStories:["defaultStory","facebookFeed","twitterFeed"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_7__.useMDXComponents)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/stories/decorators/DecoratorBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DecoratorBase:()=>DecoratorBase});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),DecoratorBase=function DecoratorBase(tag,Child){var elem=document.createElement(tag);return"function"==typeof Child?(elem.innerHTML=Child(),"object"===(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(Child())?elem.innerHTML=Child().outerHTML:elem.innerHTML=Child()):Child&&elem.appendChild(Child),elem}},"./src/stories/decorators/QgContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QgContent:()=>QgContent});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),QgContent=function QgContent(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.id="qg-content",elem.className="qg-wide",elem}},"./src/stories/decorators/QgPrimaryContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QgPrimaryContent:()=>QgPrimaryContent});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),QgPrimaryContent=function QgPrimaryContent(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.id="qg-primary-content",elem}},"./src/stories/helpers/getDecoratedParameters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getDecoratedParameters:()=>getDecoratedParameters});var getDecoratedParameters=function getDecoratedParameters(template){return{docs:{source:{code:template}}}}},"./src/stories/helpers/getMobileProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getCanvasMobileProps:()=>getCanvasMobileProps,getStoryMobileHeight:()=>getStoryMobileHeight,getStoryMobileParameters:()=>getStoryMobileParameters});var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-viewport/dist/index.mjs"),getCanvasMobileProps=function getCanvasMobileProps(){return{style:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles}},getStoryMobileParameters=function getStoryMobileParameters(){return{viewport:{viewports:_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS,defaultViewport:"iphone12"},docs:{inlineStories:!1},chromatic:{viewports:[parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.width),parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height)]}}},getStoryMobileHeight=function getStoryMobileHeight(){return _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height}},"./src/stories/helpers/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{getCanvasMobileProps:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getCanvasMobileProps,getDecoratedParameters:()=>_getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__.getDecoratedParameters,getStoryMobileHeight:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileHeight,getStoryMobileParameters:()=>_getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileParameters});var _getMobileProps__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/helpers/getMobileProps.js"),_getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/stories/helpers/getDecoratedParameters.js")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/components/SocialMedia/templates/Default.html":module=>{module.exports='<div id="qg-options" class="row justify-content-sm" style="margin-left: -16px">\n  <div class="qg-share navbar">\n    <span class="navbar-brand qg-share__title">Share this page:</span>\n    <ul class="navbar navbar-right qg-share-list">\n      <li class="qg-share-list-item">\n        <a\n          class="qg-share-link qg-share-facebook"\n          href="http://www.facebook.com/share.php?u=https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe/components/social-media"\n          title="Facebook"\n          data-analytics-link-group="qg-sharing-facebook"\n          aria-label="Share on Facebook"\n          ><span class="fa fa-facebook-square fa-2x qg-share-icon" aria-hidden="true"></span\n          ><span class="title qg-visually-hidden">Facebook</span></a\n        >\n      </li>\n      <li class="qg-share-list-item">\n        <a\n          class="qg-share-link qg-share-twitter"\n          href="http://twitter.com/share?url=https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe/components/social-media"\n          title="Twitter"\n          data-analytics-link-group="qg-sharing-twitter"\n          aria-label="Share on Twitter"\n          ><span class="fa fa-twitter-square fa-2x qg-share-icon" aria-hidden="true"></span\n          ><span class="title qg-visually-hidden">Twitter</span></a\n        >\n      </li>\n      <li class="qg-share-list-item">\n        <a\n          class="qg-share-link qg-share-linkedin"\n          href="http://www.linkedin.com/shareArticle?mini=true&amp;url=https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe/components/social-media&amp;source=www.forgov.qld.gov.au"\n          title="LinkedIn"\n          data-analytics-link-group="qg-sharing-linkedin"\n          aria-label="Share on LinkedIn"\n          ><span class="fa fa-linkedin-square fa-2x qg-share-icon" aria-hidden="true"></span\n          ><span class="title qg-visually-hidden">LinkedIn</span></a\n        >\n      </li>\n    </ul>\n  </div>\n</div>\n'},"./src/stories/components/SocialMedia/templates/FacebookFeed.html":module=>{module.exports='<div class="qg-facebook-updates col-md-6" data-href="https://www.facebook.com/TMRQld/">\n  <p class="more text-right">\n    <a href="https://www.facebook.com/TMRQld/" title="View All">View all</a>\n  </p>\n</div>\n'},"./src/stories/components/SocialMedia/templates/TwitterFeed.html":module=>{module.exports='<div class="qg-twitter-updates col-md-6">\n  <p class="more text-right">\n    <a\n      href="https://twitter.com/TMFranchise/lists/transport-and-motoring"\n      title="More from the Transport and motoring franchise on Twitter"\n      >View all</a\n    >\n  </p>\n  <a\n    class="twitter-timeline"\n    href="https://twitter.com/TMFranchise/lists/transport-and-motoring"\n    title="More from the Transport and motoring franchise on Twitter"\n    data-height="600"\n    >View all</a\n  >\n</div>\n'}}]);