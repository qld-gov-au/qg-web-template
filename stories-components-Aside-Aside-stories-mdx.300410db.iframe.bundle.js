/*! For license information please see stories-components-Aside-Aside-stories-mdx.300410db.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkQueensland_Government_Web_Template=self.webpackChunkQueensland_Government_Web_Template||[]).push([[8199],{"./node_modules/@babel/runtime/helpers/esm/typeof.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}__webpack_require__.d(__webpack_exports__,{default:()=>_typeof})},"./node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{MDXContext:()=>MDXContext,MDXProvider:()=>MDXProvider,useMDXComponents:()=>useMDXComponents,withMDXComponents:()=>withMDXComponents});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Canvas:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas,Meta:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta,Story:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./src/stories/components/Aside/Aside.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__,defaultStory:()=>defaultStory,icon:()=>icon});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_templates_Default_html__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/stories/components/Aside/templates/Default.html"),_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_templates_Default_html__WEBPACK_IMPORTED_MODULE_2__),_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/stories/components/Aside/templates/Icon.html"),_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3__),_decorators__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/stories/decorators/QgContent.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",code:"code",h2:"h2"},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta,{title:"Components/Aside",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_6__.QgContent]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1,{id:"aside",children:"Aside"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p,{children:["Requires ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code,{children:"#QgContent"})," ancestor."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Default",parameters:{docs:{source:{code:_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default()}}},children:()=>_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default()})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2,{id:"icon",children:"Icon"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas,{withSource:"open",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story,{name:"Icon",parameters:{docs:{source:{code:_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default()}}},children:()=>_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default()})})]})}const defaultStory=()=>_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default();defaultStory.storyName="Default",defaultStory.parameters={storySource:{source:"() => Default"},docs:{source:{code:_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default()}}};const icon=()=>_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default();icon.storyName="Icon",icon.parameters={storySource:{source:"() => Icon"},docs:{source:{code:_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default()}}};const componentMeta={title:"Components/Aside",decorators:[_decorators__WEBPACK_IMPORTED_MODULE_6__.QgContent],tags:["stories-mdx"],includeStories:["defaultStory","icon"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_qg_web_template_qg_web_template_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta},"./src/stories/decorators/DecoratorBase.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{DecoratorBase:()=>DecoratorBase});var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/typeof.js"),DecoratorBase=function DecoratorBase(tag,Child){var elem=document.createElement(tag);return"function"==typeof Child?(elem.innerHTML=Child(),"object"===(0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__.default)(Child())?elem.innerHTML=Child().outerHTML:elem.innerHTML=Child()):Child&&elem.appendChild(Child),elem}},"./src/stories/decorators/QgContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{QgContent:()=>QgContent});var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/stories/decorators/DecoratorBase.js"),QgContent=function QgContent(Child){var elem=(0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)("div",Child);return elem.id="qg-content",elem.className="qg-wide",elem}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/stories/components/Aside/templates/Default.html":module=>{module.exports='<aside id="qg-secondary-content" style="max-width: 306px; padding-left: 0; left: 0">\n  <div class="qg-aside" role="complementary">\n    <h2>Contact</h2>\n    <p>General enquiries: <a href="#">13 QGOV (13 74 68)</a></p>\n  </div>\n</aside>\n'},"./src/stories/components/Aside/templates/Icon.html":module=>{module.exports='<aside id="qg-secondary-content" style="max-width: 306px; padding-left: 0; left: 0">\n  <div class="qg-aside" role="complementary">\n    <h2><span class="fa fa-lightbulb-o fa-2x" aria-hidden="true"></span>Online services</h2>\n    <p>We have a range of services that you can access online. You can:</p>\n    <ul>\n      <li><a href="#">take the practice road rules test</a></li>\n      <li><a href="#">book a practical driving test</a></li>\n      <li><a href="#">take the motorcycle knowledge test</a>.</li>\n    </ul>\n  </div>\n</aside>\n'}}]);