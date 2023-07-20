(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[4163],{

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

/***/ "./src/stories/foundations/Typography/Typography.stories.mdx":
/*!*******************************************************************!*\
  !*** ./src/stories/foundations/Typography/Typography.stories.mdx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   code: () => (/* binding */ code),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   headings: () => (/* binding */ headings),
/* harmony export */   links: () => (/* binding */ links),
/* harmony export */   lists: () => (/* binding */ lists),
/* harmony export */   paragraphs: () => (/* binding */ paragraphs)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _templates_Headings_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/Headings.html */ "./src/stories/foundations/Typography/templates/Headings.html");
/* harmony import */ var _templates_Headings_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_Headings_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Paragraphs_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Paragraphs.html */ "./src/stories/foundations/Typography/templates/Paragraphs.html");
/* harmony import */ var _templates_Paragraphs_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Paragraphs_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_Links_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/Links.html */ "./src/stories/foundations/Typography/templates/Links.html");
/* harmony import */ var _templates_Links_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_Links_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_Lists_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/Lists.html */ "./src/stories/foundations/Typography/templates/Lists.html");
/* harmony import */ var _templates_Lists_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_Lists_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_Code_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/Code.html */ "./src/stories/foundations/Typography/templates/Code.html");
/* harmony import */ var _templates_Code_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_Code_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgContent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Foundations/Typography"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h1, {
      id: "typography",
      children: "Typography"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "headings",
      children: "Headings"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Headings",
        children: () => (_templates_Headings_html__WEBPACK_IMPORTED_MODULE_2___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "paragraphs",
      children: "Paragraphs"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Paragraphs",
        children: () => (_templates_Paragraphs_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "links",
      children: "Links"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Links",
        decorators: [_decorators__WEBPACK_IMPORTED_MODULE_9__.QgContent],
        parameters: {
          docs: {
            source: {
              code: (_templates_Links_html__WEBPACK_IMPORTED_MODULE_4___default())
            }
          }
        },
        children: () => (_templates_Links_html__WEBPACK_IMPORTED_MODULE_4___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "lists",
      children: "Lists"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Lists",
        children: () => (_templates_Lists_html__WEBPACK_IMPORTED_MODULE_5___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "code",
      children: "Code"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Code",
        children: () => (_templates_Code_html__WEBPACK_IMPORTED_MODULE_6___default())
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
/* ========= */
const headings = () => (_templates_Headings_html__WEBPACK_IMPORTED_MODULE_2___default());
headings.storyName = 'Headings';
headings.parameters = {
  storySource: {
    source: '() => Headings'
  }
};
const paragraphs = () => (_templates_Paragraphs_html__WEBPACK_IMPORTED_MODULE_3___default());
paragraphs.storyName = 'Paragraphs';
paragraphs.parameters = {
  storySource: {
    source: '() => Paragraphs'
  }
};
const links = () => (_templates_Links_html__WEBPACK_IMPORTED_MODULE_4___default());
links.storyName = 'Links';
links.parameters = {
  storySource: {
    source: '() => Links'
  },
  ...{
    docs: {
      source: {
        code: (_templates_Links_html__WEBPACK_IMPORTED_MODULE_4___default())
      }
    }
  }
};
links.decorators = [_decorators__WEBPACK_IMPORTED_MODULE_9__.QgContent];
const lists = () => (_templates_Lists_html__WEBPACK_IMPORTED_MODULE_5___default());
lists.storyName = 'Lists';
lists.parameters = {
  storySource: {
    source: '() => Lists'
  }
};
const code = () => (_templates_Code_html__WEBPACK_IMPORTED_MODULE_6___default());
code.storyName = 'Code';
code.parameters = {
  storySource: {
    source: '() => Code'
  }
};
const componentMeta = {
  title: 'Foundations/Typography',
  tags: ['stories-mdx'],
  includeStories: ["headings", "paragraphs", "links", "lists", "code"]
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

/***/ "./src/stories/foundations/Typography/templates/Code.html":
/*!****************************************************************!*\
  !*** ./src/stories/foundations/Typography/templates/Code.html ***!
  \****************************************************************/
/***/ ((module) => {

// Module
var code = "<pre>\n&lt;!-- Unordered list --&gt;\n\n  &lt;ul&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n  &lt;/ul&gt;\n  \n  &lt;!-- Ordered list --&gt;\n  \n  &lt;ol&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n      &lt;li&gt;List item&lt;/li&gt;\n  &lt;/ol&gt;\n  \n  &lt;!-- Description list --&gt;\n  \n  &lt;dl&gt;\n      &lt;dt&gt;Definition title&lt;/dt&gt;\n      &lt;dd&gt;Definition definition&lt;/dd&gt;\n  &lt;/dl&gt;\n  </pre\n>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Typography/templates/Headings.html":
/*!********************************************************************!*\
  !*** ./src/stories/foundations/Typography/templates/Headings.html ***!
  \********************************************************************/
/***/ ((module) => {

// Module
var code = "<h1>Heading 1 - 25px</h1>\n<h2>Heading 2 - 20px</h2>\n<h3>Heading 3 - 18px</h3>\n<h4>Heading 4 - 16px</h4>\n<h5>Heading 5 - 14px</h5>\n<h6>Heading 6 - 12px</h6>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Typography/templates/Links.html":
/*!*****************************************************************!*\
  !*** ./src/stories/foundations/Typography/templates/Links.html ***!
  \*****************************************************************/
/***/ ((module) => {

// Module
var code = "<p>This is an <a href=\"#\">example link</a>.</p>\n<p>\n  <a href=\"#\" target=\"_blank\" title=\"Opens in new window\"\n    >This example link opens in a new window\n    <span class=\"qg-blank-notice sr-only\">(Opens in new window)</span> </a\n  >.\n</p>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Typography/templates/Lists.html":
/*!*****************************************************************!*\
  !*** ./src/stories/foundations/Typography/templates/Lists.html ***!
  \*****************************************************************/
/***/ ((module) => {

// Module
var code = "<p><strong>Unordered list</strong></p>\n<ul>\n  <li>List item</li>\n  <li>List item</li>\n  <li>List item</li>\n</ul>\n<p><strong>Ordered list</strong></p>\n<ol>\n  <li>List item</li>\n  <li>List item</li>\n  <li>List item</li>\n</ol>\n<p><strong>Description list</strong></p>\n<dl>\n  <dt>Definition title</dt>\n  <dd>Definition definition</dd>\n</dl>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/foundations/Typography/templates/Paragraphs.html":
/*!**********************************************************************!*\
  !*** ./src/stories/foundations/Typography/templates/Paragraphs.html ***!
  \**********************************************************************/
/***/ ((module) => {

// Module
var code = "<p>This is an example paragraph.</p>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-foundations-Typography-Typography-stories-mdx.cb3dafa9.iframe.bundle.js.map