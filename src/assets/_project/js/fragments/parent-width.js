/* ========================================================================
* Set element to parent width
* [TODO: Write about what this is for, to make it easier for future
* developers to know what to put into it, and what not to.]
* ======================================================================== */

'use strict';

// FIXME: Reports linting error as it's defined as a module, but never used

export default function parentWidth () {
  var $target = $('*[data-parent-width=1]');
  $target.outerWidth($target.parent().width());
};
