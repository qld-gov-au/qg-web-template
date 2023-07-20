"use strict";
(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[6988],{

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

/***/ "./src/stories/Git.mdx":
/*!*****************************!*\
  !*** ./src/stories/Git.mdx ***!
  \*****************************/
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
/* harmony import */ var _readme_git_md_raw__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../readme/git.md?raw */ "./readme/git.md?raw");



/*@jsxRuntime automatic @jsxImportSource react*/





function _createMdxContent(props) {
  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Meta, {
      title: "Git"
    }), "\n", (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_3__.Markdown, {
      children: _readme_git_md_raw__WEBPACK_IMPORTED_MODULE_4__
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

/***/ "./readme/git.md?raw":
/*!***************************!*\
  !*** ./readme/git.md?raw ***!
  \***************************/
/***/ ((module) => {

module.exports = "# Working in GIT\n\n## Creating a branch\n\n**WARNING: Do not work directly in 'working', 'beta', or 'master' branches**\n\nTo keep the repository clean, branches must be prefixed into categories with a forwardslash /. Categories come from JIRA and are (note capitalisation): \n\n- Bugfix: For bugs and errors that will be released on the standard schedule\n- Feature: For new features\n- Hotfix: For critical bugs and errors which will be merged into the current release\n- Enhance: For refactoring, or general improvements to existing features that do not add new features\n\nAdd the JIRA job number after the category type, and your initials so we can track who's responsible for each branch. If there is no JIRA task, just add your initials.\n\n**Example 1: Bugfix/QOL-0000-Fixing-nav-nesting-issue**\n**Example 2: Bugfix/NE-Fixing-nav-nesting-issue**\n\nIt's best to checkout files from working, or beta. *Note: working may not always be stable, in those instances use beta.*\n\n**If you use git command line, use the following commands to create your branch**\n\n```bash\ngit fetch origin\ngit checkout working\ngit checkout -b Bugfix/QOL-0000-Fixing-nav-nesting-issue\n```\n\n\n## Making a commit to git\n\nOnce you have made changes, prefix your commit message with the JIRA task number - if you have a JIRA task.\n\n```bash\ngit commit -m \"QOL-0000 - Your commit message\"\n```\n\nThis makes it easier to track which task each commit relates to.\n\n---\n\nNext, [making your changes to the project](making-changes.md)\n";

/***/ })

}]);
//# sourceMappingURL=stories-Git-mdx.b54d47ce.iframe.bundle.js.map