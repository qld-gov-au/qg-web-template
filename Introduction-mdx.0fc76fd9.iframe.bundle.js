"use strict";
(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[6281],{

/***/ "./node_modules/@mdx-js/react/lib/index.js":
/*!*************************************************!*\
  !*** ./node_modules/@mdx-js/react/lib/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./node_modules/@storybook/addon-docs/dist/blocks.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@storybook/addon-docs/dist/blocks.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Markdown: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Markdown)
/* harmony export */ });
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @storybook/client-logger */ "@storybook/client-logger");
/* harmony import */ var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/blocks */ "./node_modules/@storybook/blocks/dist/index.mjs");



(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.");


/***/ }),

/***/ "./node_modules/@storybook/addon-docs/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@storybook/addon-docs/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Canvas: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Canvas),
/* harmony export */   Meta: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Meta),
/* harmony export */   Story: () => (/* reexport safe */ _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Story)
/* harmony export */ });
/* harmony import */ var _chunk_PCJTTTQV_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunk-PCJTTTQV.mjs */ "./node_modules/@storybook/addon-docs/dist/chunk-PCJTTTQV.mjs");
/* harmony import */ var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/blocks */ "./node_modules/@storybook/blocks/dist/index.mjs");




/***/ }),

/***/ "./src/stories/Introduction.mdx":
/*!**************************************!*\
  !*** ./src/stories/Introduction.mdx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @storybook/addon-docs/blocks */ "./node_modules/@storybook/addon-docs/dist/blocks.mjs");
/* harmony import */ var _readme_develop_in_storybook_md_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../readme/develop-in-storybook.md?raw */ "./readme/develop-in-storybook.md?raw");



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "Welcome"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1, {
      id: "welcome-to-swe-storybook",
      children: "Welcome to SWE Storybook"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p, {
      children: "Welcome to SWE Storybook, this documentation is mainly for development and testing purpose.\nFor user orientated documentation, please refer to https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe."
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Markdown, {
      children: _readme_develop_in_storybook_md_raw__WEBPACK_IMPORTED_MODULE_4__
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.useMDXComponents)(), props.components);
  return MDXLayout ? (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout, Object.assign({}, props, {
    children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent, props)
  })) : _createMdxContent(props);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MDXContent);


/***/ }),

/***/ "./node_modules/react/cjs/react-jsx-runtime.production.min.js":
/*!********************************************************************!*\
  !*** ./node_modules/react/cjs/react-jsx-runtime.production.min.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

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



if (true) {
  module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */ "./node_modules/react/cjs/react-jsx-runtime.production.min.js");
} else {}


/***/ }),

/***/ "./readme/develop-in-storybook.md?raw":
/*!********************************************!*\
  !*** ./readme/develop-in-storybook.md?raw ***!
  \********************************************/
/***/ ((module) => {

module.exports = "# Develop in Storybook\n[Storybook](https://storybook.js.org/) is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.\n\n## Goals of using Storybook\n- Make visual testing possible, integrate with visual testing service like [Chromatic](https://www.chromatic.com/).\n- Provide a clean and isolated UI component develop environment.\n- Replace the legacy Github page documentation, as it has been migrated to [Forgov](https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe) and target audiences will be the end-users.\n- Should not have any side effects on production code/bundle.\n\n## Commands\n### Build and serve the Storybook locally\n```\nnpm run storybook\n```\n### Build standalone Storybook\n```\nnpm run build-storybook\n```\n\nNote: We require storybook running on localhost:6006 to copy the SSI templates into the static build\n\n### Release the Storybook to Github Page\n\nThe Storybook will publish to GH pages on every `push` in `master` branch with Github Actions workflow.\n\nOther than that, you could publish Storybook to GH Pages manually from any branches with the `gh-pages` script.\n```\nnpm run gh-pages\n```\n\n### Publish Storybook to Chromatic\n\nThe `publish-storybook` Github Actions workflow will automatically publish Storybook to Chromatic and generating visual testing snapshots on every `push` in any branch. Visual testing needs to be approved manually on every pull requests.\n\n## Folder structure\nTo minimise the change on the existing folder structure, all the component stories contain in the folder `src/stories`.\n\nEach component will have its own story folder which contains:\n- The main Component stories module (eg. `src/stories/components/Buttons/Button.stories.mdx`).\n- Template files for each story which contains the code that will be used in the code snippet and component renderer.\n- The folder structure of the style/script of the UI components remain the same.\n\n## What need to consider when creating stories for a component\n- Create stories for each use case.\n- Create different states of a component in a story so it they are testable.\n- Create story for different viewport size so they are testable.\n- Use [decorators](https://storybook.js.org/docs/react/writing-stories/decorators) to keep the code snippet clean and out of noise.\n- We are not required to add author usage descriptions as [Forgov documentation ](https://www.forgov.qld.gov.au/information-and-communication-technology/communication-and-publishing/website-and-digital-publishing/website-standards-guidelines-and-templates/swe) will cover it, you can however add developer detailed descriptions where required.\n\n## Attention\n- Switch from one story to another story will not initiate the component instance javascript, so you will need to refresh the page to make the component functional.\n- Manual page refresh is needed if style(scss) or javascript is modified.\n";

/***/ })

}]);
//# sourceMappingURL=Introduction-mdx.0fc76fd9.iframe.bundle.js.map