(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[8199],{

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

/***/ "./src/stories/components/Aside/Aside.stories.mdx":
/*!********************************************************!*\
  !*** ./src/stories/components/Aside/Aside.stories.mdx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   defaultStory: () => (/* binding */ defaultStory),
/* harmony export */   icon: () => (/* binding */ icon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _templates_Default_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/Default.html */ "./src/stories/components/Aside/templates/Default.html");
/* harmony import */ var _templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_Default_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Icon_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Icon.html */ "./src/stories/components/Aside/templates/Icon.html");
/* harmony import */ var _templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgContent.js");
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
      title: "Components/Aside",
      decorators: [_decorators__WEBPACK_IMPORTED_MODULE_6__.QgContent]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h1, {
      id: "aside",
      children: "Aside"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components.p, {
      children: ["Requires ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.code, {
        children: "#QgContent"
      }), " ancestor."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "default",
      children: "Default"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Default",
        parameters: {
          docs: {
            source: {
              code: (_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default())
            }
          }
        },
        children: () => (_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components.h2, {
      id: "icon",
      children: "Icon"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Icon",
        parameters: {
          docs: {
            source: {
              code: (_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default())
            }
          }
        },
        children: () => (_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default())
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
const defaultStory = () => (_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default());
defaultStory.storyName = 'Default';
defaultStory.parameters = {
  storySource: {
    source: '() => Default'
  },
  ...{
    docs: {
      source: {
        code: (_templates_Default_html__WEBPACK_IMPORTED_MODULE_2___default())
      }
    }
  }
};
const icon = () => (_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default());
icon.storyName = 'Icon';
icon.parameters = {
  storySource: {
    source: '() => Icon'
  },
  ...{
    docs: {
      source: {
        code: (_templates_Icon_html__WEBPACK_IMPORTED_MODULE_3___default())
      }
    }
  }
};
const componentMeta = {
  title: 'Components/Aside',
  decorators: [_decorators__WEBPACK_IMPORTED_MODULE_6__.QgContent],
  tags: ['stories-mdx'],
  includeStories: ["defaultStory", "icon"]
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

/***/ "./src/stories/components/Aside/templates/Default.html":
/*!*************************************************************!*\
  !*** ./src/stories/components/Aside/templates/Default.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<aside id=\"qg-secondary-content\" style=\"max-width: 306px; padding-left: 0; left: 0\">\n  <div class=\"qg-aside\" role=\"complementary\">\n    <h2>Contact</h2>\n    <p>General enquiries: <a href=\"#\">13 QGOV (13 74 68)</a></p>\n  </div>\n</aside>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Aside/templates/Icon.html":
/*!**********************************************************!*\
  !*** ./src/stories/components/Aside/templates/Icon.html ***!
  \**********************************************************/
/***/ ((module) => {

// Module
var code = "<aside id=\"qg-secondary-content\" style=\"max-width: 306px; padding-left: 0; left: 0\">\n  <div class=\"qg-aside\" role=\"complementary\">\n    <h2><span class=\"fa fa-lightbulb-o fa-2x\" aria-hidden=\"true\"></span>Online services</h2>\n    <p>We have a range of services that you can access online. You can:</p>\n    <ul>\n      <li><a href=\"#\">take the practice road rules test</a></li>\n      <li><a href=\"#\">book a practical driving test</a></li>\n      <li><a href=\"#\">take the motorcycle knowledge test</a>.</li>\n    </ul>\n  </div>\n</aside>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-components-Aside-Aside-stories-mdx.c5610b12.iframe.bundle.js.map