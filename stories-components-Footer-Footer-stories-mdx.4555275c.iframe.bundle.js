(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[3111],{

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

/***/ "./src/stories/components/Footer/Footer.stories.mdx":
/*!**********************************************************!*\
  !*** ./src/stories/components/Footer/Footer.stories.mdx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultStory: () => (/* binding */ defaultStory),
/* harmony export */   mobile: () => (/* binding */ mobile)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/stories/helpers/index.js");
/* harmony import */ var _templates_Footer_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Footer.html */ "./src/stories/components/Footer/templates/Footer.html");
/* harmony import */ var _templates_Footer_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Footer_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



/*Footer always contributed difference in Chromatic snapshot, hence disabled snapshot temporary, need further investigation (caused by the feedback button)*/
/*Footer always contributed difference in Chromatic snapshot, hence disabled snapshot temporary, need further investigation (caused by the feedback button)*/








function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Components/Footer"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "footer",
      children: "Footer"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "default",
      children: "Default"
    }), "\n", "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "close",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Default",
        parameters: {
          chromatic: {
            delay: 3000,
            disableSnapshot: true
          }
        },
        children: () => (_templates_Footer_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "mobile",
      children: "Mobile"
    }), "\n", "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "none",
      ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getCanvasMobileProps)(),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Mobile",
        parameters: {
          ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getStoryMobileParameters)(),
          chromatic: {
            disableSnapshot: true
          }
        },
        height: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getStoryMobileHeight)(),
        children: () => (_templates_Footer_html__WEBPACK_IMPORTED_MODULE_3___default())
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
const defaultStory = () => (_templates_Footer_html__WEBPACK_IMPORTED_MODULE_3___default());
defaultStory.storyName = 'Default';
defaultStory.parameters = {
  storySource: {
    source: '() => Default'
  },
  ...{
    chromatic: {
      delay: 3000,
      disableSnapshot: true
    }
  }
};
const mobile = () => (_templates_Footer_html__WEBPACK_IMPORTED_MODULE_3___default());
mobile.storyName = 'Mobile';
mobile.parameters = {
  storySource: {
    source: '() => Mobile'
  },
  ...{
    ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getStoryMobileParameters)(),
    chromatic: {
      disableSnapshot: true
    }
  }
};
const componentMeta = {
  title: 'Components/Footer',
  tags: ['stories-mdx'],
  includeStories: ["defaultStory", "mobile"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

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

/***/ "./src/stories/components/Footer/templates/Footer.html":
/*!*************************************************************!*\
  !*** ./src/stories/components/Footer/templates/Footer.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<footer class=\"qg-site-footer\">\n  <div class=\"container qg-site-width\">\n    <h2 class=\"collapse\">Support links</h2>\n    <div class=\"row\">\n  \n  <div class=\"col-12 col-sm-6 col-md-4\">\n    <div class=\"qg-footer-col-content sm-border-bottom\">\n\n  <h3>Contact us</h3>\n\n  <ul>\n    <li>For general enquiries, feedback, complaints and compliments: <p class=\"phone\"><span>13 QGOV (<a href=\"tel:137468\" class=\"d-inline\" data-analytics-link-group=\"qg-contact-phone\">13 74 68</a>)</span></p></li>\n    <li class=\"facebook\"><a href=\"https://www.facebook.com/QueenslandGovernment/\" aria-label=\"Facebook /QueenslandGovernment\" data-analytics-link-group=\"qg-contact-facebook\">/QueenslandGovernment</a></li>\n    <li class=\"twitter\"><a href=\"https://twitter.com/qldgov\" aria-label=\"Twitter @QldGov\" data-analytics-link-group=\"qg-contact-twitter\">@QldGov</a></li>\n  </ul>\n\n  <a class=\"btn btn-global-secondary\" href=\"https://www.qld.gov.au/contact-us\">Other contact options</a>\n\n</div>\n\n  </div>\n  \n  <div class=\"col-12 col-sm-6 col-md-4\">\n    <div class=\"qg-footer-col-content qg-service-centre sm-border-bottom\">\n    <h3>Your nearest service centre</h3>\n\n    <div class=\"qg-service-centre__wrapper\" data-types=\"QGAP; HSC\" data-centres=\"https://discover.search.qld.gov.au/s/search.json?collection=qgov~sp-services&sort=prox\">\n    <div class=\"qg-location-default\">\n        <p>Help us provide you with the most useful information by setting your location.</p>\n        <button class=\"btn btn-global-primary-white qg-service-centre-set-location collapsed\" data-analytics-link-group=\"“qg-nearest-service-set-location“\" data-toggle=\"collapse\" data-target=\"#qg-service-centre-location-setter\" role=\"button\" aria-expanded=\"false\" aria-controls=\"qg-service-centre-location-setter\">\n            <span class=\"qg-service-centre-set-location__text\">Set your location</span>\n        </button>\n        <div id=\"qg-service-centre-location-setter\" class=\"qg-location-setter-wrap collapse\" style=\"\">\n            <div class=\"qg-location-setter show\">\n                <button class=\"btn btn-global-primary detect-location\" type=\"button\">Use device location</button>\n<span class=\"qg-location-setter-divider\">or</span>\n<form class=\"qg-location-setter-form\" action=\"#\">\n    <label>Start typing your town or suburb</label>\n    <p class=\"qg-location-setter-error error hide\">Please enter a location into the search box and try searching again.</p>\n    <input type=\"text\" aria-label=\"Start typing your town or suburb, e.g. Cooladdi\" data-choice=\"\" placeholder=\"e.g. Cooladdi\"/>\n    <div class=\"qg-location-setter-autocomplete hide\">\n        <ul>\n            <li><button><b>Coola</b>bine, Sunshine Coast Regional</button></li>\n            <li><button><b>Coola</b>bunia, South Burnett Regional</button></li>\n            <li><button><b>Coola</b>ddi, Murweh Shire</button></li>\n            <li><button><b>Coola</b>na, Somerset Regional</button></li>\n            <li><button><b>Coola</b>ngatta, Gold Coast City</button></li>\n        </ul>\n    </div>\n    <button class=\"btn btn-global-primary set-location\" type=\"button\">Set location</button>\n</form>\n\n              <button class=\"qg-location-setter-close\">Close</button>\n            </div>\n        </div>\n    </div>\n    <div class=\"qg-location-set hide\">\n        <div class=\"qg-service-centre__results\" data-jp=\"https://www.qld.gov.au/law/legal-mediation-and-justice-of-the-peace/about-justice-of-the-peace/search-for-your-nearest-jp-or-cdec/view?title=\" data-qgap=\"https://www.qld.gov.au/about/contact-government/contacts/government-service-offices/view?title=\" data-tmsc=\"https://www.qld.gov.au/transport/contacts/centres/view?title=\" data-hsc=\"https://www.qld.gov.au/housing/public-community-housing/housing-service-centre/view?\">\n            <a href=\"#\" class=\"qg-service-centre__link\" data-analytics-link-group=\"“qg-nearest-service-centre-details“\">Quilpie Police Station</a>\n            <ul class=\"qg-service-centre-list\">\n                <li class=\"qg-service-centre-list-item\"><a href=\"#\" data-analytics-link-group=\"“qg-nearest-service-centre-services“\">Services available</a></li>\n                <li class=\"qg-service-centre-list-item\">138 km away</li>\n                <li class=\"qg-service-centre-list-item\"><span class=\"qg-service-centre__address\">7 Bulnbuln Street</span><span class=\"qg-service-centre__address\">Quilpie 4480</span></li>\n            </ul>\n        </div>\n    </div>\n    <hr>\n</div>\n\n\n    <a href=\"https://www.qld.gov.au/about/contact-government/contacts/government-service-offices\" class=\"btn btn-global-secondary\" data-analytics-link-group=“qg-nearest-service-centre-all“>All service centre locations</a>\n    \n</div>\n\n  </div>\n\n  <div class=\"col-12 col-sm-6 col-md-4\">\n    \n<div class=\"qg-footer-col-content qg-feedback sm-border-bottom\">\n    \n  <h3>Website feedback</h3>\n  \n  <p>Help us improve the content on our website or tell us what is working really well.</p>\n  \n  <div class=\"qg-footer-feedback-wrap no-js\">\n    <a class=\"btn btn-global-secondary qg-feedback-toggle\" data-toggle=\"collapse\" href=\"#qg-footer-feedback\" role=\"button\" aria-expanded=\"false\" aria-controls=\"qg-footer-feedback\" data-analytics-link-group=\"qg-feedback\">\n      <span class=\"qg-feedback-toggle__text\">Leave your feedback</span>\n    </a>\n    <div id=\"qg-footer-feedback\" class=\"qg-footer-feedback__v2 collapse\">\n      <div class=\"qg-footer-feedback-content\">\n        <form id=\"qg-page-feedback-form\" method=\"post\" action=\"https://www.smartservice.qld.gov.au/services/submissions/email/feedback/feedback-v2\" class=\"form qg-forms-v2\" data-recaptcha=\"true\" data-action=\"feedback\" novalidate>\n          <ol class=\"questions pt-2\">\n            <li>\n              <fieldset>\n                <legend class=\"pb-2\">\n                  <span class=\"label\">Is your feedback about:</span>\n                  <abbr class=\"required\" title=\"(required)\">*</abbr>\n                </legend>\n                <ol class=\"choices qg-forms-v2__radio\">\n                  <li>\n                    <input name=\"page-feedback-about\" id=\"page-feedback-about-this-website\" type=\"radio\" value=\"this website\" data-qg-pr=\"default\" data-parent=\"#qg-page-feedback-form\" data-target=\"#feedback-page\" data-toggle=\"false\" data-hide-others=\"true\">\n                    <label for=\"page-feedback-about-this-website\">this website</label>\n                  </li>\n                  <li>\n                    <input name=\"page-feedback-about\" id=\"page-feedback-about-a-government-service\" type=\"radio\" value=\"a government service\" data-qg-pr=\"default\" data-parent=\"#qg-page-feedback-form\" data-target=\"#feedback-serv-dep-staff\" data-toggle=\"false\" data-hide-others=\"true\">\n                    <label for=\"page-feedback-about-a-government-service\">a government service, department or staff member?</label>\n                  </li>\n                </ol>\n              </fieldset>\n            </li>\n          </ol>\n\n          <div class=\"panel\">\n\n            <div id=\"feedback-serv-dep-staff\" class=\"status global-info panel-collapse collapse\">\n              <h4><span class=\"fa fa-info-circle\"></span>Feedback on government services, departments and staff</h4>\n              <p>Please use our <a href=\"https://www.qld.gov.au/contact-us/complaints/\" data-analytics-link-group=\"qg-feedback-non-website\">complaints and compliments form</a>.</p>\n            </div>\n\n            <div id=\"feedback-page\" class=\"panel-collapse collapse\">\n              <ol class=\"questions pt-2\">\n                <li>\n                  <fieldset>\n                    <legend class=\"pb-2\">\n                      <span class=\"label\">How satisfied are you with your experience today?</span>\n                      <abbr class=\"required\" title=\"(required)\">*</abbr>\n                    </legend>\n                    <ol class=\"choices qg-forms-v2__radio\">\n                      <li>\n                        <input type=\"radio\" name=\"feedback-satisfaction\" value=\"Very dissatisfied\" required=\"\" id=\"fs-very-dissatisfied\">\n                        <label for=\"fs-very-dissatisfied\">Very dissatisfied (1)</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" name=\"feedback-satisfaction\" value=\"Dissatisfied\" required=\"\" id=\"fs-dissatisfied\">\n                        <label for=\"fs-dissatisfied\">Dissatisfied (2)</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" name=\"feedback-satisfaction\" value=\"Neither satisfied or dissatisfied\" required=\"\" id=\"fs-neither-satisfied-or-dissatisfied\">\n                        <label for=\"fs-neither-satisfied-or-dissatisfied\">Neither satisfied or dissatisfied (3)</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" name=\"feedback-satisfaction\" value=\"Satisfied\" required=\"\" id=\"fs-satisfied\">\n                        <label for=\"fs-satisfied\">Satisfied (4)</label>\n                      </li>\n                      <li>\n                        <input type=\"radio\" name=\"feedback-satisfaction\" value=\"Very satisfied\" required=\"\" id=\"fs-very-satisfied\">\n                        <label for=\"fs-very-satisfied\">Very satisfied (5)</label>\n                      </li>\n                    </ol>\n                  </fieldset>\n                </li>\n              </ol>\n\n              <ol class=\"questions pt-2\">\n                <li>\n                  <label for=\"comments\" class=\"pb-2\">\n                    <span class=\"label\">Comments</span>\n                    <abbr title=\"(required)\" class=\"required\">*</abbr>\n                  </label>\n                  <textarea class=\"form-control\" name=\"comments\" id=\"comments\" rows=\"6\" cols=\"40\" required=\"required\"></textarea>\n                </li>\n\n                <li class=\"footer col-md-12 mt-3\">\n                  <span id=\"feedback-hidden-inputs\"></span>\n\n                  <ul class=\"actions\">\n                    <li>\n                      <button type=\"submit\" value=\"Submit feedback\" class=\"btn btn-global-primary\" data-analytics-link-group=\"qg-feedback-website\">Submit feedback</button>\n                    </li>\n                  </ul>\n                  <p class=\"captchaPrivacyTerms pb-3\">\n                    This site is protected by reCAPTCHA and the Google\n                    <a href=\"https://policies.google.com/privacy\">Privacy Policy</a> and\n                    <a href=\"https://policies.google.com/terms\">Terms of Service</a> apply.\n                  </p>\n\n                </li>\n              </ol>\n\n            </div>\n\n          </div>\n        </form>\n\n        <div class=\"thankyou d-none\"></div>\n        <div class=\"qg-footer-feedback-footer\">\n          <a class=\"qg-footer-feedback__close\" data-toggle=\"collapse\" href=\"#qg-footer-feedback\" role=\"button\" aria-expanded=\"false\" aria-controls=\"qg-footer-feedback\">Close</a>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n\n  </div>\n\n</div>\n    <div class=\"row\">\n    <div class=\"col-12 col-md-8\">\n        <div class=\"qg-cultural-notice qg-footer-col-content sm-border-bottom\">\n            \n            <h3>Cultural acknowledgement</h3>\n            \n            <p>We pay our respects to the Aboriginal and Torres Strait Islander ancestors of this land, their spirits and their legacy. The foundations laid by these ancestors—our First Nations peoples—give strength, inspiration and courage to current and future generations towards creating a better Queensland.\n            </p>\n            \n        </div>        \n    </div>\n</div>\n    <div class=\"qg-legal d-flex flex-wrap align-items-end justify-content-between\">\n\n\t<!-- Left column, wraps below col-md -->\n\t<div class=\"col-12 col-md-6 pl-0\">\n\t\t<ul class=\"list-inline\">\n\t\t\t<li><a href=\"https://www.qld.gov.au/help/\" class=\"d-print-none\">Help</a></li>\n\t\t\t<li><a href=\"https://www.qld.gov.au/legal/copyright/\">Copyright</a></li>\n\t\t\t<li><a href=\"https://www.qld.gov.au/legal/disclaimer/\">Disclaimer</a></li>\n\t\t\t<li><a href=\"https://www.qld.gov.au/legal/privacy/\">Privacy</a></li>\n\t\t\t<li><a href=\"https://www.qld.gov.au/right-to-information/\">Right to information</a></li>\n\t\t\t<li><a href=\"https://www.qld.gov.au/help/accessibility/\" class=\"d-print-none\">Accessibility</a></li>\n\t\t\t<li><a href=\"http://www.smartjobs.qld.gov.au/\" class=\"d-print-none\">Jobs in Queensland Government</a></li>\n\t\t\t<li id=\"link-languages\"><a href=\"https://www.qld.gov.au/languages/\" class=\"d-print-none\">Other languages</a></li>\n\t\t</ul>\n\t</div>\n\n\t<!-- Right column, wraps below col-md -->\n\t<div class=\"qg-copyright col-12 col-md-4 offset-md-2 pl-0 ml-0\">\n\t\t&copy; The State of Queensland <span id=\"qg-copyright-daterange\"></span>\n\t</div>\n\t\n</div>\n  </div>\n</footer>";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-components-Footer-Footer-stories-mdx.4555275c.iframe.bundle.js.map