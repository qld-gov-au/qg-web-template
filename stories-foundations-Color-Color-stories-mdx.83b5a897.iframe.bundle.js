(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[8281],{

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

/***/ "./src/stories/foundations/Color/Color.stories.mdx":
/*!*********************************************************!*\
  !*** ./src/stories/foundations/Color/Color.stories.mdx ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alert: () => (/* binding */ alert),
/* harmony export */   brand: () => (/* binding */ brand),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   text: () => (/* binding */ text)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _templates_Alert_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/Alert.html */ "./src/stories/foundations/Color/templates/Alert.html");
/* harmony import */ var _templates_Alert_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_Alert_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Brand_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Brand.html */ "./src/stories/foundations/Color/templates/Brand.html");
/* harmony import */ var _templates_Brand_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Brand_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_Text_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/Text.html */ "./src/stories/foundations/Color/templates/Text.html");
/* harmony import */ var _templates_Text_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_Text_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");












function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Foundations/Color"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h1, {
      id: "color",
      children: "Color"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2, {
      id: "text",
      children: "Text"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Text",
        children: () => (_templates_Text_html__WEBPACK_IMPORTED_MODULE_4___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2, {
      id: "brand",
      children: "Brand"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Brand",
        children: () => (_templates_Brand_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components.h2, {
      id: "alert",
      children: "Alert"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Alert",
        children: () => (_templates_Alert_html__WEBPACK_IMPORTED_MODULE_2___default())
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_6__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const text = () => (_templates_Text_html__WEBPACK_IMPORTED_MODULE_4___default());
text.storyName = 'Text';
text.parameters = {
  storySource: {
    source: '() => Text'
  }
};
const brand = () => (_templates_Brand_html__WEBPACK_IMPORTED_MODULE_3___default());
brand.storyName = 'Brand';
brand.parameters = {
  storySource: {
    source: '() => Brand'
  }
};
const alert = () => (_templates_Alert_html__WEBPACK_IMPORTED_MODULE_2___default());
alert.storyName = 'Alert';
alert.parameters = {
  storySource: {
    source: '() => Alert'
  }
};
const componentMeta = {
  title: 'Foundations/Color',
  tags: ['stories-mdx'],
  includeStories: ["text", "brand", "alert"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...(componentMeta.parameters.docs || {}),
  page: MDXContent
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentMeta);

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

/***/ "./src/stories/foundations/Color/templates/Alert.html":
/*!************************************************************!*\
  !*** ./src/stories/foundations/Color/templates/Alert.html ***!
  \************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards qg-cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-brand-info)\"></div>\n\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Info</h3>\n        <p>#1E77AA<br />$brand-info<br />var(--qg-color-brand-info)</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div\n        style=\"width: 100%; height: 189px; background-color: var(--qg-color-brand-success)\"\n      ></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Success</h3>\n        <p>#9EBF6D<br />$brand-success<br />var(--qg-color-brand-success)</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div\n        style=\"width: 100%; height: 189px; background-color: var(--qg-color-brand-warning)\"\n      ></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Warning</h3>\n        <p>#F9AF71<br />$brand-warning<br />var(--qg-color-brand-warning)</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div\n        style=\"width: 100%; height: 189px; background-color: var(--qg-color-brand-danger)\"\n      ></div>\n      <div class=\"details qg-cards__row-2\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Critical</h3>\n        <p>#B90824<br />$brand-danger<br />var(--qg-color-brand-danger)</p>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Color/templates/Brand.html":
/*!************************************************************!*\
  !*** ./src/stories/foundations/Color/templates/Brand.html ***!
  \************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards qg-cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-primary)\"></div>\n\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Blue</h3>\n        <p>#005E85<br />$qg-global-primary<br />var(--qg-color-primary)</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div\n        style=\"width: 100%; height: 189px; background-color: var(--qg-color-primary-dark)\"\n      ></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Dark blue</h3>\n        <p>#063652<br />$qg-global-primary-dark<br />var(--qg-color-primary-dark)</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-green)\"></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Green</h3>\n        <div>\n          <div>#78ba00</div>\n          <div>$qg-green</div>\n          <div>var(--qg-color-green)</div>\n        </div>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-light-green)\"></div>\n      <div class=\"details qg-cards__row-2\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Light green</h3>\n        <p>#9AC02C<br />$qg-light-green<br />var(--qg-color-light-green)</p>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Color/templates/Text.html":
/*!***********************************************************!*\
  !*** ./src/stories/foundations/Color/templates/Text.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards qg-cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-dark-grey-darker)\"></div>\n\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Text</h3>\n        <p>#212529<br />$qg-dark-grey-darker<br />--qg-color-dark-grey-darker</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-dark-grey)\"></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Text muted</h3>\n        <p>#585e62<br />$qg-dark-grey<br />--qg-color-dark-grey</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div style=\"width: 100%; height: 189px; background-color: var(--qg-color-primary-light)\"></div>\n      <div class=\"details qg-cards__row-1\" style=\"height: 160px\">\n        <h2></h2>\n        <h3>Text light</h3>\n        <p>#EFF2F4<br />$qg-global-primary-light<br />--qg-color-primary-light</p>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-foundations-Color-Color-stories-mdx.83b5a897.iframe.bundle.js.map