(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[8832],{

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ }),

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mdx-js/react/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MDXContext: () => (/* binding */ MDXContext),
/* harmony export */   MDXProvider: () => (/* binding */ MDXProvider),
/* harmony export */   useMDXComponents: () => (/* binding */ useMDXComponents),
/* harmony export */   withMDXComponents: () => (/* binding */ withMDXComponents)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types.js').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components | MergeComponents | null | undefined} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode | null | undefined} [children]
 *   Children.
 *
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components | null | undefined}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  /** @type {Components} */
  let allComponents

  if (disableParentContext) {
    allComponents =
      typeof components === 'function'
        ? components({})
        : components || emptyObject
  } else {
    allComponents = useMDXComponents(components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}


/***/ }),

/***/ "./node_modules/@storybook/addon-docs/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@storybook/addon-docs/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   Meta: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta),
/* harmony export */   Story: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story)
/* harmony export */ });
/* harmony import */ var _chunk_PCJTTTQV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-PCJTTTQV.mjs */ "./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/blocks */ "./node_modules/@storybook/blocks/dist/index.mjs");




/***/ }),

/***/ "./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_VIEWPORTS: () => (/* binding */ INITIAL_VIEWPORTS)
/* harmony export */ });
/* unused harmony exports DEFAULT_VIEWPORT, MINIMAL_VIEWPORTS */
var INITIAL_VIEWPORTS={iphone5:{name:"iPhone 5",styles:{height:"568px",width:"320px"},type:"mobile"},iphone6:{name:"iPhone 6",styles:{height:"667px",width:"375px"},type:"mobile"},iphone6p:{name:"iPhone 6 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphone8p:{name:"iPhone 8 Plus",styles:{height:"736px",width:"414px"},type:"mobile"},iphonex:{name:"iPhone X",styles:{height:"812px",width:"375px"},type:"mobile"},iphonexr:{name:"iPhone XR",styles:{height:"896px",width:"414px"},type:"mobile"},iphonexsmax:{name:"iPhone XS Max",styles:{height:"896px",width:"414px"},type:"mobile"},iphonese2:{name:"iPhone SE (2nd generation)",styles:{height:"667px",width:"375px"},type:"mobile"},iphone12mini:{name:"iPhone 12 mini",styles:{height:"812px",width:"375px"},type:"mobile"},iphone12:{name:"iPhone 12",styles:{height:"844px",width:"390px"},type:"mobile"},iphone12promax:{name:"iPhone 12 Pro Max",styles:{height:"926px",width:"428px"},type:"mobile"},ipad:{name:"iPad",styles:{height:"1024px",width:"768px"},type:"tablet"},ipad10p:{name:"iPad Pro 10.5-in",styles:{height:"1112px",width:"834px"},type:"tablet"},ipad12p:{name:"iPad Pro 12.9-in",styles:{height:"1366px",width:"1024px"},type:"tablet"},galaxys5:{name:"Galaxy S5",styles:{height:"640px",width:"360px"},type:"mobile"},galaxys9:{name:"Galaxy S9",styles:{height:"740px",width:"360px"},type:"mobile"},nexus5x:{name:"Nexus 5X",styles:{height:"660px",width:"412px"},type:"mobile"},nexus6p:{name:"Nexus 6P",styles:{height:"732px",width:"412px"},type:"mobile"},pixel:{name:"Pixel",styles:{height:"960px",width:"540px"},type:"mobile"},pixelxl:{name:"Pixel XL",styles:{height:"1280px",width:"720px"},type:"mobile"}},DEFAULT_VIEWPORT="responsive",MINIMAL_VIEWPORTS={mobile1:{name:"Small mobile",styles:{height:"568px",width:"320px"},type:"mobile"},mobile2:{name:"Large mobile",styles:{height:"896px",width:"414px"},type:"mobile"},tablet:{name:"Tablet",styles:{height:"1112px",width:"834px"},type:"tablet"}};




/***/ }),

/***/ "./node_modules/@storybook/addon-viewport/dist/index.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@storybook/addon-viewport/dist/index.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   INITIAL_VIEWPORTS: () => (/* reexport safe */ _chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS)
/* harmony export */ });
/* harmony import */ var _chunk_BLYPNILM_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-BLYPNILM.mjs */ "./node_modules/@storybook/addon-viewport/dist/chunk-BLYPNILM.mjs");




/***/ }),

/***/ "./src/stories/components/SearchCategories/SearchCategories.stories.mdx":
/*!******************************************************************************!*\
  !*** ./src/stories/components/SearchCategories/SearchCategories.stories.mdx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basic: () => (/* binding */ basic),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgPrimaryContent.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgContent.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/stories/helpers/index.js");
/* harmony import */ var _templates_Basic_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Basic.html */ "./src/stories/components/SearchCategories/templates/Basic.html");
/* harmony import */ var _templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Components/Search Categories",
      decorators: [_decorators__WEBPACK_IMPORTED_MODULE_6__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_7__.QgContent]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "index",
      children: "Index"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Requires ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "#QgPrimaryContent"
      }), " ancestor."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "This story mimic card usage on https://www.qld.gov.au/recreation/arts/heritage/archives/search-the-records homepage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "Some style is sitting in Squiz Matrix https://www.qld.gov.au/recreation/arts/heritage/archives/search-the-records/QSAR_search.min.css which is franchise customized"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.p, {
      children: "Not included in Forgov SWE documentation."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "basic",
      children: "Basic"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Basic",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default())),
        children: () => (_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const basic = () => (_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default());
basic.storyName = 'Basic';
basic.parameters = {
  storySource: {
    source: '() => Basic'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default()))
};
const componentMeta = {
  title: 'Components/Search Categories',
  decorators: [_decorators__WEBPACK_IMPORTED_MODULE_6__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_7__.QgContent],
  tags: ['stories-mdx'],
  includeStories: ["basic"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

/***/ }),

/***/ "./src/stories/decorators/DecoratorBase.js":
/*!*************************************************!*\
  !*** ./src/stories/decorators/DecoratorBase.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DecoratorBase: () => (/* binding */ DecoratorBase)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");

var DecoratorBase = function DecoratorBase(tag, Child) {
  var elem = document.createElement(tag);
  if (typeof Child === 'function') {
    elem.innerHTML = Child();
    if ((0,_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(Child()) === 'object') {
      elem.innerHTML = Child().outerHTML;
    } else {
      elem.innerHTML = Child();
    }
  } else if (Child) {
    elem.appendChild(Child);
  }
  return elem;
};

/***/ }),

/***/ "./src/stories/decorators/QgContent.js":
/*!*********************************************!*\
  !*** ./src/stories/decorators/QgContent.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgContent: () => (/* binding */ QgContent)
/* harmony export */ });
/* harmony import */ var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecoratorBase */ "./src/stories/decorators/DecoratorBase.js");

var QgContent = function QgContent(Child) {
  var elem = (0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)('div', Child);
  elem.id = 'qg-content';
  elem.className = 'qg-wide';
  return elem;
};

/***/ }),

/***/ "./src/stories/decorators/QgPrimaryContent.js":
/*!****************************************************!*\
  !*** ./src/stories/decorators/QgPrimaryContent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QgPrimaryContent: () => (/* binding */ QgPrimaryContent)
/* harmony export */ });
/* harmony import */ var _DecoratorBase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DecoratorBase */ "./src/stories/decorators/DecoratorBase.js");

var QgPrimaryContent = function QgPrimaryContent(Child) {
  var elem = (0,_DecoratorBase__WEBPACK_IMPORTED_MODULE_0__.DecoratorBase)('div', Child);
  elem.id = 'qg-primary-content';
  return elem;
};

/***/ }),

/***/ "./src/stories/helpers/getDecoratedParameters.js":
/*!*******************************************************!*\
  !*** ./src/stories/helpers/getDecoratedParameters.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDecoratedParameters: () => (/* binding */ getDecoratedParameters)
/* harmony export */ });
var getDecoratedParameters = function getDecoratedParameters(template) {
  return {
    docs: {
      source: {
        code: template
      }
    }
  };
};

/***/ }),

/***/ "./src/stories/helpers/getMobileProps.js":
/*!***********************************************!*\
  !*** ./src/stories/helpers/getMobileProps.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanvasMobileProps: () => (/* binding */ getCanvasMobileProps),
/* harmony export */   getStoryMobileHeight: () => (/* binding */ getStoryMobileHeight),
/* harmony export */   getStoryMobileParameters: () => (/* binding */ getStoryMobileParameters)
/* harmony export */ });
/* harmony import */ var _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/addon-viewport */ "./node_modules/@storybook/addon-viewport/dist/index.mjs");

var getCanvasMobileProps = function getCanvasMobileProps() {
  return {
    style: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles
  };
};
var getStoryMobileParameters = function getStoryMobileParameters() {
  return {
    viewport: {
      viewports: _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS,
      defaultViewport: 'iphone12'
    },
    docs: {
      // Opt-out of inline rendering
      inlineStories: false
    },
    chromatic: {
      viewports: [parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.width), parseInt(_storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height)]
    }
  };
};
var getStoryMobileHeight = function getStoryMobileHeight() {
  return _storybook_addon_viewport__WEBPACK_IMPORTED_MODULE_0__.INITIAL_VIEWPORTS.iphone12.styles.height;
};

/***/ }),

/***/ "./src/stories/helpers/index.js":
/*!**************************************!*\
  !*** ./src/stories/helpers/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCanvasMobileProps: () => (/* reexport safe */ _getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getCanvasMobileProps),
/* harmony export */   getDecoratedParameters: () => (/* reexport safe */ _getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__.getDecoratedParameters),
/* harmony export */   getStoryMobileHeight: () => (/* reexport safe */ _getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileHeight),
/* harmony export */   getStoryMobileParameters: () => (/* reexport safe */ _getMobileProps__WEBPACK_IMPORTED_MODULE_0__.getStoryMobileParameters)
/* harmony export */ });
/* harmony import */ var _getMobileProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getMobileProps */ "./src/stories/helpers/getMobileProps.js");
/* harmony import */ var _getDecoratedParameters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDecoratedParameters */ "./src/stories/helpers/getDecoratedParameters.js");



/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=__webpack_require__(/*! react */ "./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l;exports.jsx=q;exports.jsxs=q;


/***/ }),

/***/ "./node_modules/react/jsx-runtime.js":
/*!*******************************************!*\
  !*** ./node_modules/react/jsx-runtime.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "./src/stories/components/SearchCategories/templates/Basic.html":
/*!**********************************************************************!*\
  !*** ./src/stories/components/SearchCategories/templates/Basic.html ***!
  \**********************************************************************/
/***/ ((module) => {

// Module
var code = "<!-- \n  Style is hosting in Squiz Matrix\n-->\n<link\n  href=\"https://www.qld.gov.au/recreation/arts/heritage/archives/search-the-records/QSAR_search.min.css\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n  media=\"all\"\n/>\n<div class=\"QSAR-records-search flexbox\" data-products=\"https://www.qld.gov.au/recreation/arts/heritage/archives/search-the-records/category-index-includes/list-products.json\">\n\n  <div class=\"records-search__steps\">\n      <ul class=\"records-search__steps-list\">\n          <li class=\"records-search__steps-item step-1 active\"><a href=\"#\" data-step=\"1\" class=\"records-search__steps-button\">Select a topic</a></li>\n          <li class=\"records-search__steps-item step-2\"><a href=\"#\" data-step=\"2\" class=\"records-search__steps-button\">Search the records</a></li>\n          <li class=\"records-search__steps-item step-3\"><a href=\"#\" data-step=\"3\" class=\"records-search__steps-button\">Results</a></li>\n      </ul>\n  </div>\n\n  <div class=\"search-interface\">\n      \n      <div class=\"records-search__step records-search__step-1 active\">\n\n          <div class=\"search-categories\">\n              <ul class=\"search-categories__list\">\n                  <li class=\"search-categories__list-item\">\n  <a href=\"#\" class=\"search-categories__index-toggle\">Aboriginal and Torres Strait Islander peoples</a>\n<ul class=\"search-categories__index-list\">\n      <li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/aboriginal-war-census-1915-to-1916/resource/306fcd00-26ea-44fa-914f-1476732f6b98\" class=\"search-categories__index\" data-resource-id=\"306fcd00-26ea-44fa-914f-1476732f6b98\" data-resource-ids=\"306fcd00-26ea-44fa-914f-1476732f6b98\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/aboriginal-war-census-1915-to-1916/resource/306fcd00-26ea-44fa-914f-1476732f6b98\" data-keys=\"LAST Name; Given Names; District; Locality\" data-description=\"Includes men aged from 18 to 45 years for war purposes, but also included all women and children and residents of other ethnic backgrounds such as South Sea Islanders and Rotumans\" data-title=\"Aboriginal War Census Returns 1915-1916\">\n      Aboriginal War Census Returns 1915-1916\n  </a>\n  <p>Includes men aged from 18 to 45 years for war purposes, but also included all women and children and residents of other ethnic backgrounds such as South Sea Islanders and Rotumans</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/aboriginal-war-census-1915-to-1916/resource/306fcd00-26ea-44fa-914f-1476732f6b98\" target=\"_blank\" title=\"Opens in new window\">Aboriginal War Census Returns 1915-1916 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n\n</ul></li><li class=\"search-categories__list-item\">\n  <a href=\"#\" class=\"search-categories__index-toggle\">Australian South Sea Islanders and Asiatics</a>\n<ul class=\"search-categories__index-list\">\n      <li class=\"search-categories__index-list-item\">\n  <a href=\"https://www.data.qld.gov.au/dataset/australian-south-sea-islanders-1867-to-1908\" class=\"search-categories__index\" data-resource-id=\"98047f82-0b4e-4e9e-9d3d-c7b55457229a\" data-resource-ids=\"98047f82-0b4e-4e9e-9d3d-c7b55457229a\" data-product-id=\"\" data-endpoint=\"https://www.data.qld.gov.au/dataset/australian-south-sea-islanders-1867-to-1908\" data-keys=\"Given name/s; Last name\" data-description=\"Compiled from records on recruitment, transportation and arrival in Queensland; registers of agreement; employment; education; legal issues; health, medical and welfare; deportation and repatriation; those who remained in Queensland after 1906; and other miscellaneous records.\" data-title=\"Australian South Sea Islanders 1867-1948\">\n      Australian South Sea Islanders 1867-1948\n  </a>\n  <p>Compiled from records on recruitment, transportation and arrival in Queensland; registers of agreement; employment; education; legal issues; health, medical and welfare; deportation and repatriation; those who remained in Queensland after 1906; and other miscellaneous records.</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://www.data.qld.gov.au/dataset/australian-south-sea-islanders-1867-to-1908/resource/98047f82-0b4e-4e9e-9d3d-c7b55457229a\" target=\"_blank\" title=\"Opens in new window\">Australian South Sea Islanders 1867-1948 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://www.data.qld.gov.au/dataset/coloured-and-asiatic-aliens-in-queensland-1913/resource/34eed2da-aa3f-4cca-9e14-a4a770f3ade6\" class=\"search-categories__index\" data-resource-id=\"34eed2da-aa3f-4cca-9e14-a4a770f3ade6\" data-resource-ids=\"34eed2da-aa3f-4cca-9e14-a4a770f3ade6\" data-product-id=\"9c113c09-93b0-43e9-a208-b55c6a5ab890\" data-endpoint=\"https://www.data.qld.gov.au/dataset/coloured-and-asiatic-aliens-in-queensland-1913/resource/34eed2da-aa3f-4cca-9e14-a4a770f3ade6\" data-keys=\"Given names; LAST Name; Date of arrival; District\" data-description=\"People who lived in various Queensland Police Districts including Townsville,Normanton,Roma,Rockhampton and Toowoomba in 1913\" data-title=\"Coloured labour and asiatic aliens in Queensland 1913\">\n      Coloured labour and asiatic aliens in Queensland 1913\n  </a>\n  <p>People who lived in various Queensland Police Districts including Townsville,Normanton,Roma,Rockhampton and Toowoomba in 1913</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://www.data.qld.gov.au/dataset/coloured-and-asiatic-aliens-in-queensland-1913/resource/34eed2da-aa3f-4cca-9e14-a4a770f3ade6\" target=\"_blank\" title=\"Opens in new window\">Coloured labour and asiatic aliens in Queensland 1913 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://www.data.qld.gov.au/dataset/sugar-exemptions-1922-1923\" class=\"search-categories__index\" data-resource-id=\"24ce53d0-fc77-4488-ba59-4cfb22a5a3dc\" data-resource-ids=\"24ce53d0-fc77-4488-ba59-4cfb22a5a3dc\" data-product-id=\"6d47db5d-3d05-48e5-afb0-9fe4bf71d995\" data-endpoint=\"https://www.data.qld.gov.au/dataset/sugar-exemptions-1922-1923\" data-keys=\"Given names; Last name; Start Year; Locality\" data-description=\"Exemptions granted/refused to aliens who had not passed a dictation test to cultivate sugar cane\" data-title=\"Sugar Exemptions 1922-1923\">\n      Sugar Exemptions 1922-1923\n  </a>\n  <p>Exemptions granted/refused to aliens who had not passed a dictation test to cultivate sugar cane</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://www.data.qld.gov.au/dataset/sugar-exemptions-1922-1923/resource/24ce53d0-fc77-4488-ba59-4cfb22a5a3dc\" target=\"_blank\" title=\"Opens in new window\">Sugar Exemptions 1922-1923 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n\n</ul></li><li class=\"search-categories__list-item\">\n  <a href=\"#\" class=\"search-categories__index-toggle active\">Business</a>\n<ul class=\"search-categories__index-list\">\n      <li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/companies-1863-to-1959/resource/1cf4cc1d-0699-46c4-ba0a-884f72806ad2\" class=\"search-categories__index\" data-resource-id=\"1cf4cc1d-0699-46c4-ba0a-884f72806ad2\" data-resource-ids=\"1cf4cc1d-0699-46c4-ba0a-884f72806ad2\" data-product-id=\"d1c41b4b-400a-4c1b-b52d-c5a57b2598f6\" data-endpoint=\"https://data.qld.gov.au/en/dataset/companies-1863-to-1959/resource/1cf4cc1d-0699-46c4-ba0a-884f72806ad2\" data-keys=\"COMPANY Name; Locality; Date\" data-description=\"Registers and associated files covering all three Company Registry Districts of Queensland: Northern, Central and Southern\" data-title=\"Companies 1863-1959\">\n      Companies 1863-1959\n  </a>\n  <p>Registers and associated files covering all three Company Registry Districts of Queensland: Northern, Central and Southern</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/companies-1863-to-1959/resource/1cf4cc1d-0699-46c4-ba0a-884f72806ad2\" target=\"_blank\" title=\"Opens in new window\">Companies 1863-1959 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/stage-licences-1891-to-1904/resource/0db9f486-d7e2-49bc-b511-0588d7d5724d\" class=\"search-categories__index\" data-resource-id=\"0db9f486-d7e2-49bc-b511-0588d7d5724d\" data-resource-ids=\"0db9f486-d7e2-49bc-b511-0588d7d5724d\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/stage-licences-1891-to-1904/resource/0db9f486-d7e2-49bc-b511-0588d7d5724d\" data-keys=\"Locality; Building name; Year\" data-description=\"Register of stage licences issued under the˙New South Wales Theatres Act 1850, including details of building, date of licence expiry and amount paid.\" data-title=\"Stage licences 1891-1904\">\n      Stage licences 1891-1904\n  </a>\n  <p>Register of stage licences issued under the˙New South Wales Theatres Act 1850, including details of building, date of licence expiry and amount paid.</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/stage-licences-1891-to-1904/resource/0db9f486-d7e2-49bc-b511-0588d7d5724d\" target=\"_blank\" title=\"Opens in new window\">Stage licences 1891-1904 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n\n</ul></li><li class=\"search-categories__list-item\">\n  <a href=\"#\" class=\"search-categories__index-toggle\">Convicts, prisoners and early settlers</a>\n<ul class=\"search-categories__index-list\">\n      <li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\" class=\"search-categories__index\" data-resource-id=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-resource-ids=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-keys=\"Given Names; LAST Name; Date of Conviction; Ship\" data-description=\"Crown prisoners at Moreton Bay penal settlement\" data-title=\"Chronological register of convicts 1824-1839\">\n      Chronological register of convicts 1824-1839\n  </a>\n  <p>Crown prisoners at Moreton Bay penal settlement</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\" target=\"_blank\" title=\"Opens in new window\">Chronological register of convicts 1824-1839 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\" class=\"search-categories__index\" data-resource-id=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-resource-ids=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-keys=\"LAST Name; Given Names; Ship; Date of Conviction\" data-description=\"Crown prisoners at Moreton Bay penal settlement\" data-title=\"List of prisoners 1839\">\n      List of prisoners 1839\n  </a>\n  <p>Crown prisoners at Moreton Bay penal settlement</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/f79328f8-faa0-4465-8e9d-b9a65f3ab386\">List of prisoners 1839</a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/7a945dca-11b2-40f8-b8d6-917e3b4c8a26\" class=\"search-categories__index\" data-resource-id=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-resource-ids=\"f79328f8-faa0-4465-8e9d-b9a65f3ab386\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/7a945dca-11b2-40f8-b8d6-917e3b4c8a26\" data-keys=\"Given Names; LAST Name; Native place; Age\" data-description=\"Crown prisoners at Moreton Bay penal settlement, including height, complexion, eye and hair colour, age, religion and native place\" data-title=\"Alphabetical list of prisoners\">\n      Alphabetical list of prisoners\n  </a>\n  <p>Crown prisoners at Moreton Bay penal settlement, including height, complexion, eye and hair colour, age, religion and native place</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/convict-register-chronological-1824-to-1839/resource/7a945dca-11b2-40f8-b8d6-917e3b4c8a26\" target=\"_blank\" title=\"Opens in new window\">Alphabetical list of prisoners <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/monthly-and-half-yearly-returns-for-moreton-bay-1829-to-1837/resource/941c4af1-efd4-40a0-920f-16c9f1d42b21\" class=\"search-categories__index\" data-resource-id=\"941c4af1-efd4-40a0-920f-16c9f1d42b21\" data-resource-ids=\"941c4af1-efd4-40a0-920f-16c9f1d42b21\" data-product-id=\"\" data-endpoint=\"https://data.qld.gov.au/en/dataset/monthly-and-half-yearly-returns-for-moreton-bay-1829-to-1837/resource/941c4af1-efd4-40a0-920f-16c9f1d42b21\" data-keys=\"Given name/s; Last name; Date\" data-description=\"Records from Moreton Bay penal settlement of baptisms and burials, manifests of cargo and passengers shipped, and returns of prisoners and their employment.\" data-title=\"Monthly and half yearly returns for Moreton Bay 1829-1837\">\n      Monthly and half yearly returns for Moreton Bay 1829-1837\n  </a>\n  <p>Records from Moreton Bay penal settlement of baptisms and burials, manifests of cargo and passengers shipped, and returns of prisoners and their employment.</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/monthly-and-half-yearly-returns-for-moreton-bay-1829-to-1837/resource/941c4af1-efd4-40a0-920f-16c9f1d42b21\" target=\"_blank\" title=\"Opens in new window\">Monthly and half yearly returns for Moreton Bay 1829-1837 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/st-helena-prisoner-index-1863-to-1936/resource/00927ffb-3ff7-4732-b209-744750541d38\" class=\"search-categories__index\" data-resource-id=\"00927ffb-3ff7-4732-b209-744750541d38\" data-resource-ids=\"00927ffb-3ff7-4732-b209-744750541d38\" data-product-id=\"7a65b7d3-a3cb-4c94-bb86-706263eefbc0\" data-endpoint=\"https://data.qld.gov.au/en/dataset/st-helena-prisoner-index-1863-to-1936/resource/00927ffb-3ff7-4732-b209-744750541d38\" data-keys=\"Given name/s; Last name; Prison no\" data-description=\"Names of all prisoners who were held at St Helena Penal Establishment\" data-title=\"St Helena prisoners 1863-1936\">\n      St Helena prisoners 1863-1936\n  </a>\n  <p>Names of all prisoners who were held at St Helena Penal Establishment</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/st-helena-prisoner-index-1863-to-1936/resource/00927ffb-3ff7-4732-b209-744750541d38\" target=\"_blank\" title=\"Opens in new window\">St Helena prisoners 1863-1936 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/c1828191-1d4a-4518-b638-79fa5295cfe7\" class=\"search-categories__index\" data-resource-id=\"c1828191-1d4a-4518-b638-79fa5295cfe7\" data-resource-ids=\"c1828191-1d4a-4518-b638-79fa5295cfe7\" data-product-id=\"ea1ca086-03eb-4d16-acb0-47da108f50c3\" data-endpoint=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/c1828191-1d4a-4518-b638-79fa5295cfe7\" data-keys=\"Given names; Last name; Date discharged\" data-description=\"Inmates from the HM Goal (later Prison) Toowoomba and include the names of prisoners admitted, tried and discharged\" data-title=\"Prisoners discharged, Toowoomba 1869-1879\">\n      Prisoners discharged, Toowoomba 1869-1879\n  </a>\n  <p>Inmates from the HM Goal (later Prison) Toowoomba and include the names of prisoners admitted, tried and discharged</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/c1828191-1d4a-4518-b638-79fa5295cfe7\" target=\"_blank\" title=\"Opens in new window\">Prisoners discharged, Toowoomba 1869-1879 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/96c31de0-78da-4754-8793-750e370a3fdc\" class=\"search-categories__index\" data-resource-id=\"96c31de0-78da-4754-8793-750e370a3fdc\" data-resource-ids=\"96c31de0-78da-4754-8793-750e370a3fdc\" data-product-id=\"d4b51b68-fe38-4100-a829-d8ee5d986b71\" data-endpoint=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/96c31de0-78da-4754-8793-750e370a3fdc\" data-keys=\"Given names; Last name; Court sitting location; Date of sitting\" data-description=\"Prisoners tried at Toowoomba, Warwick, Roma, Dalby, Stanthorpe, Brisbane (one entry), Ipswich, and Bundaberg.\" data-title=\"Prisoners tried, Toowoomba 1864 to 1903\">\n      Prisoners tried, Toowoomba 1864 to 1903\n  </a>\n  <p>Prisoners tried at Toowoomba, Warwick, Roma, Dalby, Stanthorpe, Brisbane (one entry), Ipswich, and Bundaberg.</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/96c31de0-78da-4754-8793-750e370a3fdc\" target=\"_blank\" title=\"Opens in new window\">Prisoners tried, Toowoomba 1864 to 1903 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/9618a129-4778-4c59-9c5b-c4ff47a180e2\" class=\"search-categories__index\" data-resource-id=\"9618a129-4778-4c59-9c5b-c4ff47a180e2\" data-resource-ids=\"9618a129-4778-4c59-9c5b-c4ff47a180e2\" data-product-id=\"4bd694ca-2521-44e9-b91e-91f33dda1fbe\" data-endpoint=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/9618a129-4778-4c59-9c5b-c4ff47a180e2\" data-keys=\"Given names; Last name; Date of sentence; Alias\" data-description=\"Prisoners' admissions, criminal history and physical descriptions\" data-title=\"Prisoners admitted, Toowoomba 1895 to 1906\">\n      Prisoners admitted, Toowoomba 1895 to 1906\n  </a>\n  <p>Prisoners' admissions, criminal history and physical descriptions</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/9618a129-4778-4c59-9c5b-c4ff47a180e2\" target=\"_blank\" title=\"Opens in new window\">Prisoners admitted, Toowoomba 1895 to 1906 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/226194c4-116d-47a8-a474-131f25f7f93c\" class=\"search-categories__index\" data-resource-id=\"226194c4-116d-47a8-a474-131f25f7f93c\" data-resource-ids=\"226194c4-116d-47a8-a474-131f25f7f93c\" data-product-id=\"11939bdc-c4e8-45b8-ae68-7a202305202a\" data-endpoint=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/226194c4-116d-47a8-a474-131f25f7f93c\" data-keys=\"Given names; aLast name; Date of sentence; Date of receipt in gaol\" data-description=\"Prisoners' admissions, criminal history and physical descriptions\" data-title=\"Female prisoners admitted, Toowoomba 1887 to 1891\">\n      Female prisoners admitted, Toowoomba 1887 to 1891\n  </a>\n  <p>Prisoners' admissions, criminal history and physical descriptions</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://data.qld.gov.au/en/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/226194c4-116d-47a8-a474-131f25f7f93c\" target=\"_blank\" title=\"Opens in new window\">Female prisoners admitted, Toowoomba 1887 to 1891 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://www.data.qld.gov.au/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/a97205f7-d4a1-4984-80ac-5acc52d0ec89\" class=\"search-categories__index\" data-resource-id=\"a97205f7-d4a1-4984-80ac-5acc52d0ec89\" data-resource-ids=\"a97205f7-d4a1-4984-80ac-5acc52d0ec89\" data-product-id=\"ae8045a1-d14a-4eee-9711-5cc9e8172d81\" data-endpoint=\"https://www.data.qld.gov.au/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/a97205f7-d4a1-4984-80ac-5acc52d0ec89\" data-keys=\"Last name; Given names; Date\" data-description=\"Names of prisoners tried at Toowoomba and other regional courts in southeast Queensland and names of prisoners admitted to and discharged from HM Gaol (later Prison) Toowoomba\" data-title=\"Prisoners, Toowoomba Gaol, 1864-1906\">\n      Prisoners, Toowoomba Gaol, 1864-1906\n  </a>\n  <p>Names of prisoners tried at Toowoomba and other regional courts in southeast Queensland and names of prisoners admitted to and discharged from HM Gaol (later Prison) Toowoomba</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://www.data.qld.gov.au/dataset/indextoprisonerstriedtoowoomba1864-1903-csv/resource/a97205f7-d4a1-4984-80ac-5acc52d0ec89\" target=\"_blank\" title=\"Opens in new window\">Prisoners, Toowoomba Gaol, 1864-1906 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n<li class=\"search-categories__index-list-item\">\n  <a href=\"https://www.data.qld.gov.au/dataset/photographic-records-of-prisoners-1875-1913/resource/41012857-f937-4a6b-9618-0d3fecff64b3\" class=\"search-categories__index\" data-resource-id=\"41012857-f937-4a6b-9618-0d3fecff64b3\" data-resource-ids=\"41012857-f937-4a6b-9618-0d3fecff64b3\" data-product-id=\"a890c772-3bea-421b-a83b-007722d34e24\" data-endpoint=\"https://www.data.qld.gov.au/dataset/photographic-records-of-prisoners-1875-1913/resource/41012857-f937-4a6b-9618-0d3fecff64b3\" data-keys=\"Last name; Given names; Date\" data-description=\"Portraits and descriptions of male Queensland criminals and records of prisoners executed in Queensland\" data-title=\"Photographic Records of Prisoners 1875-1913\">\n      Photographic Records of Prisoners 1875-1913\n  </a>\n  <p>Portraits and descriptions of male Queensland criminals and records of prisoners executed in Queensland</p>\n  <div class=\"search-categories__index-resource-links\">\n      <h2>Full index</h2>\n      <p>Download the full index below</p>\n      <ul><li><a href=\"https://www.data.qld.gov.au/dataset/photographic-records-of-prisoners-1875-1913/resource/41012857-f937-4a6b-9618-0d3fecff64b3\" target=\"_blank\" title=\"Opens in new window\">Photographic Records of Prisoners 1875-1913 <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a></li></ul>\n  </div>\n</li>\n\n</ul></li>\n              </ul>\n          </div><!-- /.search-categories -->\n\n      </div>\n      \n      <div class=\"records-search__step records-search__step-2\">\n          <div class=\"loading\">Loading...</div>\n      </div>\n      <div class=\"records-search__step records-search__step-3\">\n              <div class=\"loading\">Loading...</div>\n      </div>\n      \n  </div>\n\n</div>";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-components-SearchCategories-SearchCategories-stories-mdx.14741556.iframe.bundle.js.map