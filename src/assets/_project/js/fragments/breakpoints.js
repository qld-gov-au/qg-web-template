/* ========================================================================
* General QLD GLUE utilities
* [TODO: Write about what this is for, to make it easier for future
* developers to know what to put into it, and what not to.]
* ======================================================================== */

// FIXME: Reports linting error as it's defined as a module, but never used
// TODO: Rename to breakpoints, as this isn't utils anymore
const utils = function () {
  // BREAKPOINTS //
  var breakpoints = {
    bsXs: 480,
    bsSm: 768,
    bsMd: 992,
    bsLg: 1200,
  };

  return {
    breakpoints: breakpoints,
  };
};

export default utils;
