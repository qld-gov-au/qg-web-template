(self["webpackChunkQueensland_Government_Web_Template"] = self["webpackChunkQueensland_Government_Web_Template"] || []).push([[9436],{

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

/***/ "./src/stories/components/Cards/Cards.stories.mdx":
/*!********************************************************!*\
  !*** ./src/stories/components/Cards/Cards.stories.mdx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   basic: () => (/* binding */ basic),
/* harmony export */   cardColumns: () => (/* binding */ cardColumns),
/* harmony export */   clickable: () => (/* binding */ clickable),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   withActionButton: () => (/* binding */ withActionButton),
/* harmony export */   withImage: () => (/* binding */ withImage),
/* harmony export */   withThumbnail: () => (/* binding */ withThumbnail)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @storybook/addon-essentials/docs/mdx-react-shim */ "./node_modules/@mdx-js/react/lib/index.js");
/* harmony import */ var _storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @storybook/addon-docs */ "./node_modules/@storybook/addon-docs/dist/index.mjs");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgPrimaryContent.js");
/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../decorators */ "./src/stories/decorators/QgContent.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers */ "./src/stories/helpers/index.js");
/* harmony import */ var _templates_Basic_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./templates/Basic.html */ "./src/stories/components/Cards/templates/Basic.html");
/* harmony import */ var _templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./templates/WithActionButton.html */ "./src/stories/components/Cards/templates/WithActionButton.html");
/* harmony import */ var _templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./templates/WithImage.html */ "./src/stories/components/Cards/templates/WithImage.html");
/* harmony import */ var _templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./templates/WithThumbnail.html */ "./src/stories/components/Cards/templates/WithThumbnail.html");
/* harmony import */ var _templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./templates/Clickable.html */ "./src/stories/components/Cards/templates/Clickable.html");
/* harmony import */ var _templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./templates/CardColumns.html */ "./src/stories/components/Cards/templates/CardColumns.html");
/* harmony import */ var _templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
















function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    code: "code",
    h2: "h2"
  }, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_10__.useMDXComponents)(), props.components);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Meta, {
      title: "Components/Cards",
      decorators: [_decorators__WEBPACK_IMPORTED_MODULE_11__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_12__.QgContent]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h1, {
      id: "cards",
      children: "Cards"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_components.p, {
      children: ["Requires ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.code, {
        children: "#QgContent"
      }), " ancestor."]
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "basic",
      children: "Basic"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Basic",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default())),
        children: () => (_templates_Basic_html__WEBPACK_IMPORTED_MODULE_3___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "withactionbutton",
      children: "WithActionButton"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "WithActionButton",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4___default())),
        children: () => (_templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "withimage",
      children: "WithImage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "WithImage",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5___default())),
        children: () => (_templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "withthumbnail",
      children: "WithThumbnail"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "WithThumbnail",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6___default())),
        children: () => (_templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "clickable",
      children: "Clickable"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "Clickable",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7___default())),
        children: () => (_templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7___default())
      })
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.h2, {
      id: "cardcolumns",
      children: "CardColumns"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.p, {
      children: "This story mimic card usage on https://www.qld.gov.au/ homepage"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.p, {
      children: "Some style is sitting in Squiz Matrix https://www.qld.gov.au/__data/assets/css_file/0026/119177/custom.css which is better to move to SWE"
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components.p, {
      children: "Not included in Forgov SWE documentation."
    }), "\n", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Canvas, {
      withSource: "open",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Story, {
        name: "CardColumns",
        parameters: (0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8___default())),
        children: () => (_templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8___default())
      })
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, (0,_storybook_addon_essentials_docs_mdx_react_shim__WEBPACK_IMPORTED_MODULE_10__.useMDXComponents)(), props.components);
  return MDXLayout ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MDXLayout, {
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_createMdxContent, {
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
const withActionButton = () => (_templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4___default());
withActionButton.storyName = 'WithActionButton';
withActionButton.parameters = {
  storySource: {
    source: '() => WithActionButton'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithActionButton_html__WEBPACK_IMPORTED_MODULE_4___default()))
};
const withImage = () => (_templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5___default());
withImage.storyName = 'WithImage';
withImage.parameters = {
  storySource: {
    source: '() => WithImage'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithImage_html__WEBPACK_IMPORTED_MODULE_5___default()))
};
const withThumbnail = () => (_templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6___default());
withThumbnail.storyName = 'WithThumbnail';
withThumbnail.parameters = {
  storySource: {
    source: '() => WithThumbnail'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_WithThumbnail_html__WEBPACK_IMPORTED_MODULE_6___default()))
};
const clickable = () => (_templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7___default());
clickable.storyName = 'Clickable';
clickable.parameters = {
  storySource: {
    source: '() => Clickable'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_Clickable_html__WEBPACK_IMPORTED_MODULE_7___default()))
};
const cardColumns = () => (_templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8___default());
cardColumns.storyName = 'CardColumns';
cardColumns.parameters = {
  storySource: {
    source: '() => CardColumns'
  },
  ...(0,_helpers__WEBPACK_IMPORTED_MODULE_2__.getDecoratedParameters)((_templates_CardColumns_html__WEBPACK_IMPORTED_MODULE_8___default()))
};
const componentMeta = {
  title: 'Components/Cards',
  decorators: [_decorators__WEBPACK_IMPORTED_MODULE_11__.QgPrimaryContent, _decorators__WEBPACK_IMPORTED_MODULE_12__.QgContent],
  tags: ['stories-mdx'],
  includeStories: ["basic", "withActionButton", "withImage", "withThumbnail", "clickable", "cardColumns"]
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

/***/ "./src/stories/components/Cards/templates/Basic.html":
/*!***********************************************************!*\
  !*** ./src/stories/components/Cards/templates/Basic.html ***!
  \***********************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards qg-cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details qg-cards__row-1\" style=\"height: 130.762px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details qg-cards__row-1\" style=\"height: 130.762px\">\n        <h2>Card title</h2>\n        <p>Additional text details when the card title alone may not be enough.</p>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Cards/templates/CardColumns.html":
/*!*****************************************************************!*\
  !*** ./src/stories/components/Cards/templates/CardColumns.html ***!
  \*****************************************************************/
/***/ ((module) => {

// Module
var code = "<style>\n  /*\n    style extracted from https://www.qld.gov.au/__data/assets/css_file/0026/119177/custom.css\n  */\n  .qg-card-columns {\n    display: flex;\n    flex-flow: row wrap;\n    width: 100%;\n    justify-content: center;\n    padding-left: 0;\n  }\n\n  .card-columns {\n    column-count: 4;\n  }\n\n  .qg-card-columns img {\n    width: 100%;\n    height: auto;\n  }\n  .qg-card-columns .qg-card {\n    list-style: none;\n    flex-basis: 18%;\n    margin: 12px;\n    position: relative;\n  }\n  .qg-card-columns .qg-card a {\n    display: block;\n  }\n  .qg-card-columns .qg-card-title {\n    background: rgba(51, 51, 51, 0.9);\n    color: #fff;\n    text-align: center;\n    padding: 1.1rem;\n    font-size: 0.9rem;\n    margin-bottom: 0;\n  }\n  .qg-card-columns .qg-card-body {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n  }\n</style>\n<ul class=\"qg-card-columns\">\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/transport\">\n      <img src=\"./assets/images/placeholders/transport.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">Transport and motoring</h5>\n      </div>\n    </a>\n  </li>\n\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/education\">\n      <img src=\"https://www.qld.gov.au/__data/assets/image/0022/113845/education.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">Education and training</h5>\n      </div>\n    </a>\n  </li>\n\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/families\">\n      <img src=\"https://www.qld.gov.au/__data/assets/image/0015/114153/parents.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">Parents and families</h5>\n      </div>\n    </a>\n  </li>\n\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/jobs\">\n      <img src=\"https://www.qld.gov.au/__data/assets/image/0020/113843/employment.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">Employment and jobs</h5>\n      </div>\n    </a>\n  </li>\n\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/community\">\n      <img src=\"https://www.qld.gov.au/__data/assets/image/0017/114155/community.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">Community support</h5>\n      </div>\n    </a>\n  </li>\n\n  <li class=\"qg-card\">\n    <a href=\"https://www.qld.gov.au/disability\">\n      <img src=\"https://www.qld.gov.au/__data/assets/image/0016/114154/disability.jpg\" alt=\"\" />\n      <div class=\"qg-card-body\">\n        <h5 class=\"qg-card-title\">People with disability</h5>\n      </div>\n    </a>\n  </li>\n</ul>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Cards/templates/Clickable.html":
/*!***************************************************************!*\
  !*** ./src/stories/components/Cards/templates/Clickable.html ***!
  \***************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme qg-card__clickable col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\">\n        <h2 class=\"qg-card__title\"><a href=\"#\" class=\"stretched-link\">Card title</a></h2>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__clickable col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\">\n        <h2 class=\"qg-card__title\"><a href=\"#\" class=\"stretched-link\">Card title</a></h2>\n      </div>\n    </div>\n  </article>\n</section>\n<section class=\"row cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme qg-card__clickable col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\">\n        <h2 class=\"qg-card__title\"><a href=\"#\" class=\"stretched-link\">Card title</a></h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__clickable col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\">\n        <h2 class=\"qg-card__title\"><a href=\"#\" class=\"stretched-link\">Card title</a></h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Cards/templates/WithActionButton.html":
/*!**********************************************************************!*\
  !*** ./src/stories/components/Cards/templates/WithActionButton.html ***!
  \**********************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\" style=\"height: 130.762px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n      <div class=\"qg-card__footer\">\n        <a href=\"#\" class=\"qg-btn btn-secondary\">Call to action</a>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\" style=\"height: 130.762px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n      <div class=\"qg-card__footer\">\n        <a href=\"#\" class=\"qg-btn btn-outline-dark\">Call to action</a>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <div class=\"details\" style=\"height: 130.762px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n      </div>\n      <div class=\"qg-card__footer\">\n        <a href=\"#\" class=\"qg-btn btn-link\">Call to action</a>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Cards/templates/WithImage.html":
/*!***************************************************************!*\
  !*** ./src/stories/components/Cards/templates/WithImage.html ***!
  \***************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <img src=\"./assets/v4/latest/images/placeholders/750x422.png\" alt=\"\" />\n      <div class=\"details\" style=\"height: 213.936px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n        <ul>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n        </ul>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <img src=\"./assets/v4/latest/images/placeholders/750x422.png\" alt=\"\" />\n      <div class=\"details\" style=\"height: 213.936px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n        <ul>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n        </ul>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ }),

/***/ "./src/stories/components/Cards/templates/WithThumbnail.html":
/*!*******************************************************************!*\
  !*** ./src/stories/components/Cards/templates/WithThumbnail.html ***!
  \*******************************************************************/
/***/ ((module) => {

// Module
var code = "<section class=\"row qg-cards cards__equal-height\">\n  <article class=\"qg-card qg-card__light-theme col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <img src=\"./assets/v4/latest/images/placeholders/750x422.png\" class=\"qg-card__thumbnail\" alt=\"\" />\n      <div class=\"details\" style=\"height: 191.543px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n        <ul>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n        </ul>\n      </div>\n    </div>\n  </article>\n  <article class=\"qg-card qg-card col-12 col-sm-6 col-lg-4\">\n    <div class=\"content\">\n      <img src=\"./assets/v4/latest/images/placeholders/750x422.png\" class=\"qg-card__thumbnail\" alt=\"\" />\n      <div class=\"details\" style=\"height: 191.543px\">\n        <h2>Card title</h2>\n        <p>Additional text when the card title alone may not be enough.</p>\n        <ul>\n          <li><a href=\"#\">List item link</a></li>\n          <li><a href=\"#\">List item link</a></li>\n        </ul>\n      </div>\n    </div>\n  </article>\n</section>\n";
// Exports
module.exports = code;

/***/ })

}]);
//# sourceMappingURL=stories-components-Cards-Cards-stories-mdx.dd479e16.iframe.bundle.js.map