(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[5739],{

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

/***/ "./src/stories/franchises/Dfv/Dfv.stories.mdx":
/*!****************************************************!*\
  !*** ./src/stories/franchises/Dfv/Dfv.stories.mdx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   asideButton: () => (/* binding */ asideButton),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   dfvBack: () => (/* binding */ dfvBack),
/* harmony export */   dfvCards: () => (/* binding */ dfvCards),
/* harmony export */   linksList: () => (/* binding */ linksList)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./templates/AsideButton.html */ "./src/stories/franchises/Dfv/templates/AsideButton.html");
/* harmony import */ var _templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/DfvCards.html */ "./src/stories/franchises/Dfv/templates/DfvCards.html");
/* harmony import */ var _templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/DfvBack.html */ "./src/stories/franchises/Dfv/templates/DfvBack.html");
/* harmony import */ var _templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/LinksList.html */ "./src/stories/franchises/Dfv/templates/LinksList.html");
/* harmony import */ var _templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgPrimaryContent.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgContent.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./src/stories/helpers/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");














function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_8__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Franchises/DFV",
      decorators: [_decorators__WEBPACK_IMPORTED_MODULE_9__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_10__.QgContent]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h1, {
      id: "dfv",
      children: "Dfv"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p, {
      children: "This story mimic component usages on https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p, {
      children: "Some style is sitting in Squiz Matrix https://www.qld.gov.au/__data/assets/git_bridge/0019/100936/franchises/dfv/dist/main.css?h=21e9243 which is franchise custom style"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.p, {
      children: "Not included in Forgov SWE documentation."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "dfvcards",
      children: "DfvCards"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "DfvCards",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3___default())),
        children: () => (_templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "asidebutton",
      children: "AsideButton"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "AsideButton",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2___default())),
        children: () => (_templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "dfvback",
      children: "DfvBack"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "DfvBack",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4___default())),
        children: () => (_templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components.h2, {
      id: "linkslist",
      children: "LinksList"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "LinksList",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5___default())),
        children: () => (_templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5___default())
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
const dfvCards = () => (_templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3___default());
dfvCards.storyName = 'DfvCards';
dfvCards.parameters = {
  storySource: {
    source: '() => DfvCards'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_DfvCards_html__WEBPACK_IMPORTED_MODULE_3___default()))
};
const asideButton = () => (_templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2___default());
asideButton.storyName = 'AsideButton';
asideButton.parameters = {
  storySource: {
    source: '() => AsideButton'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_AsideButton_html__WEBPACK_IMPORTED_MODULE_2___default()))
};
const dfvBack = () => (_templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4___default());
dfvBack.storyName = 'DfvBack';
dfvBack.parameters = {
  storySource: {
    source: '() => DfvBack'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_DfvBack_html__WEBPACK_IMPORTED_MODULE_4___default()))
};
const linksList = () => (_templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5___default());
linksList.storyName = 'LinksList';
linksList.parameters = {
  storySource: {
    source: '() => LinksList'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getDecoratedParameters)((_templates_LinksList_html__WEBPACK_IMPORTED_MODULE_5___default()))
};
const componentMeta = {
  title: 'Franchises/DFV',
  decorators: [_decorators__WEBPACK_IMPORTED_MODULE_9__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_10__.QgContent],
  tags: ['stories-mdx'],
  includeStories: ["dfvCards", "asideButton", "dfvBack", "linksList"]
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

/***/ "./src/stories/franchises/Dfv/templates/AsideButton.html":
/*!***************************************************************!*\
  !*** ./src/stories/franchises/Dfv/templates/AsideButton.html ***!
  \***************************************************************/
/***/ ((module) => {

// Module
var code = "<!--\n  Style is hosting in Squiz Matrix\n-->\n<link\nhref=\"https://www.qld.gov.au/__data/assets/git_bridge/0019/100936/franchises/dfv/dist/main.css?h=21e9243\"\nrel=\"stylesheet\"\ntype=\"text/css\"\nmedia=\"all\"\n/>\n<style>\n\n</style>\n<aside id=\"qg-secondary-content\">\n  <div class=\"qg-aside qg-contact-advanced\" role=\"complementary\">\n    <h2>\n      <span class=\"qg-aside-icon fa-icon__wrapper\">\n        <span class=\"fa fa-phone\" aria-hidden=\"true\"></span>\n      </span>\n      <span>Who to call to get help</span>\n    </h2>\n    <p>In an emergency call the police on Triple Zero (000).</p>\n    <h3>DVConnect Womensline</h3>\n    <p><strong>1800 811 811</strong></p>\n    <h3>DVConnect Mensline</h3>\n    <p><strong>1800 600 636</strong></p>\n    <h3>1800RESPECT</h3>\n    <p><strong>1800 737 732</strong></p>\n    <a\n      href=\"https://oss-uat.clients.squiz.net/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/helplines\"\n      class=\"qg-aside-button\"\n      data-analytics-link-group=\"dfv-rightaside-desktop\"\n      >Domestic violence helplines</a\n    >\n  </div>\n\n  <div class=\"qg-aside qg-find-services\" role=\"complementary\">\n    <h2>\n      <span class=\"qg-aside-icon fa-icon__wrapper\">\n        <img\n          src=\"./assets/images/placeholders/qld-map-icon.png\"\n          alt=\"Icon for Find local support\"\n        />\n      </span>\n      <span>Find local support</span>\n    </h2>\n    <p>Find support services in your area.</p>\n    <a\n      href=\"https://oss-uat.clients.squiz.net/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/find-local-support\"\n      class=\"qg-aside-button\"\n      data-analytics-link-group=\"dfv-rightaside-desktop\"\n      >Find local support</a\n    >\n  </div>\n</aside>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/franchises/Dfv/templates/DfvBack.html":
/*!***********************************************************!*\
  !*** ./src/stories/franchises/Dfv/templates/DfvBack.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<!--\n  Style is hosting in Squiz Matrix\n-->\n<link\n  href=\"https://www.qld.gov.au/__data/assets/git_bridge/0019/100936/franchises/dfv/dist/main.css?h=21e9243\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n  media=\"all\"\n/>\n<div class=\"dfv-back__wrapper show-desktop\">\n  <div class=\"dfv-back\">\n    <a\n      href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence\"\n      class=\"dfv-back__link\"\n      data-analytics-link-group=\"dfv-backtohome\"\n    >\n      <img\n        class=\"dfv-back__icon\"\n        src=\"./assets/images/placeholders/home-icon.png\"\n        alt=\"Back to home icon\"\n      />\n      <span class=\"dfv-back__label\">Back to domestic and family violence</span>\n    </a>\n  </div>\n</div>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/franchises/Dfv/templates/DfvCards.html":
/*!************************************************************!*\
  !*** ./src/stories/franchises/Dfv/templates/DfvCards.html ***!
  \************************************************************/
/***/ ((module) => {

// Module
var code = "<!-- \n  Style is hosting in Squiz Matrix\n-->\n<link\n  href=\"https://www.qld.gov.au/__data/assets/git_bridge/0019/100936/franchises/dfv/dist/main.css?h=21e9243\"\n  rel=\"stylesheet\"\n  type=\"text/css\"\n  media=\"all\"\n/>\n<section class=\"row dfv-cards dfv-cards--type-top-prompt\">\n    \n  <div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/what-is-domestic-and-family-violence\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">What is domestic and family violence?</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">Learn about the signs and patterns of domestic and family violence, and other related forms of abuse, and understand the impact it has on individuals and families.</p>\n      </div>\n  </a>\n</div>\n<div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/where-can-I-find-help\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">Where can I find help?</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">If you are experiencing domestic and family violence, find out how to access a wide range of services and information, including how to report violence and abuse.</p>\n      </div>\n  </a>\n</div>\n<div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/my-situation-is\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">My situation is…</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">Find a range of useful information including housing, financial, mental health and translation support services.</p>\n      </div>\n  </a>\n</div>\n<div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/i-want-to-help-someone\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">I want to help someone</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">Learn how to respectfully and safely help someone that is, or may be, in a domestic and family violence situation.</p>\n      </div>\n  </a>\n</div>\n<div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/legal-help\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">Legal help</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">Understand your rights and the measures you can take to protect yourself in a domestic and family violence situation, including applying for and enforcing a domestic violence order.</p>\n      </div>\n  </a>\n</div>\n<div class=\"card-container col-6 col-md-4\">\n  <a class=\"card\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/how-can-i-stay-safe\" data-analytics-link-group=\"dfv-homegrid\">\n      <div class=\"card-body\">\n          <div class=\"card-top\">\n              <span class=\"card-title\">How can I stay safe?</span>\n              <span class=\"card-prompt\"></span>\n          </div>\n          <p class=\"card-text\">Staying safe is your primary concern. Learn about the steps that you can take to stay safe, in or out of your home, as well as online.</p>\n      </div>\n  </a>\n</div>\n\n  \n</section>";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/franchises/Dfv/templates/LinksList.html":
/*!*************************************************************!*\
  !*** ./src/stories/franchises/Dfv/templates/LinksList.html ***!
  \*************************************************************/
/***/ ((module) => {

// Module
var code = "<link href=\"https://oss-uat.clients.squiz.net/__data/assets/git_bridge/0019/100936/franchises/dfv/dist/main.css?h=987654321\" rel=\"stylesheet\" />\n\n<section class=\"qg-links-list\">\n    <h2 id=\"findmore\" class=\"qg-links-list__heading\">Find out more</h2>\n    <ul class=\"qg-links-list__list\">\n        <li class=\"qg-links-list__item\">\n            <a class=\"qg-links-list__link\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse/domestic-family-violence/my-situation-is/how-do-i-help-my-community-understand-domestic-violence/domestic-and-family-violence-resources\" title=\"Link to Domestic and family violence resources\" data-analytics-link-group=\"dfv-findoutmore\">\n                <span class=\"qg-links-list__list-bullet\" aria-label=\"List bullet\"></span>\n                Domestic and family violence resources\n            </a>\n        </li>\n        <li class=\"qg-links-list__item\">\n            <a class=\"qg-links-list__link\" href=\"https://www.qld.gov.au/community/getting-support-health-social-issue/support-victims-abuse\" title=\"Link to Support for victims of abuse\" data-analytics-link-group=\"dfv-findoutmore\">\n                <span class=\"qg-links-list__list-bullet\" aria-label=\"List bullet\"></span>\n                Support for victims of abuse\n            </a>\n        </li>\n        <li class=\"qg-links-list__item\">\n            <a class=\"qg-links-list__link\" href=\"https://www.qld.gov.au/youth/support-services/young-people-domestic-family-violence\" title=\"Link to Young people experiencing domestic and family violence\" data-analytics-link-group=\"dfv-findoutmore\">\n                <span class=\"qg-links-list__list-bullet\" aria-label=\"List bullet\"></span>\n                Young people experiencing domestic and family violence\n            </a>\n        </li>\n    </ul>\n</section>";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-franchises-Dfv-Dfv-stories-mdx.a477b90b.iframe.bundle.js.map