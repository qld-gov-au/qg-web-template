/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	
	
	
	var _qgEnv = __webpack_require__(1);var _qgEnv2 = _interopRequireDefault(_qgEnv);
	
	__webpack_require__(2);
	
	
	
	
	
	
	
	
	__webpack_require__(3);
	__webpack_require__(4);
	__webpack_require__(5);
	
	
	
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(8);
	var _accessibility = __webpack_require__(9);var _accessibility2 = _interopRequireDefault(_accessibility);
	
	
	var _sectionNav = __webpack_require__(10);var _sectionNav2 = _interopRequireDefault(_sectionNav);
	var _shareLinks = __webpack_require__(11);var _shareLinks2 = _interopRequireDefault(_shareLinks);
	var _feedbackForm = __webpack_require__(12);var _feedbackForm2 = _interopRequireDefault(_feedbackForm);
	
	__webpack_require__(13);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} // Layout
	/*import '../lib/ext/generate-id.js';*/ // For site-search-autocomplete
	/*import './legacy/site-search-autocomplete.js';*/(function () {'use strict';
	  var franchiseTitle = _qgEnv2.default && _qgEnv2.default.swe && _qgEnv2.default.swe.franchiseTitle;
	  _sectionNav2.default.highlightNavItem();
	  _feedbackForm2.default.init(franchiseTitle);
	  _shareLinks2.default.init();
	  _accessibility2.default.init();
	})(); // import '../../../../../node_modules/bootstrap-accessibility-plugin/plugins/js/bootstrap-accessibility.js'; // Removed due to accessibility issues (ironically)
	// Utils
	/*This 2 modules (breakpoints, parentwidth) are to be initialize where we are using these or If we make one common function for small utilities then we can initialize here in the main file.*/ /*import breakpoints        from './utils/breakpoints'; */ // Components
	/*
	* Imports Javascript components for the GLUE
	*/ // env initialization

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict'; // All the environment related SWE3 code
	
	window.qg = window.qg || {};
	window.qg.swe = window.qg.swe || {};
	window.qg.cdn = 'https://static.qgov.net.au';
	
	window.qg.swe.paths = {
	  images: '/assets/v3/latest/images' };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	/*!
	 * Bootstrap v3.3.7 (http://getbootstrap.com)
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under the MIT license
	 */
	
	if (typeof jQuery === 'undefined') {
	  throw new Error('Bootstrap\'s JavaScript requires jQuery')
	}
	
	+function ($) {
	  'use strict';
	  var version = $.fn.jquery.split(' ')[0].split('.')
	  if ((version[0] < 2 && version[1] < 9) || (version[0] == 1 && version[1] == 9 && version[2] < 1) || (version[0] > 3)) {
	    throw new Error('Bootstrap\'s JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4')
	  }
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: transition.js v3.3.7
	 * http://getbootstrap.com/javascript/#transitions
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
	  // ============================================================
	
	  function transitionEnd() {
	    var el = document.createElement('bootstrap')
	
	    var transEndEventNames = {
	      WebkitTransition : 'webkitTransitionEnd',
	      MozTransition    : 'transitionend',
	      OTransition      : 'oTransitionEnd otransitionend',
	      transition       : 'transitionend'
	    }
	
	    for (var name in transEndEventNames) {
	      if (el.style[name] !== undefined) {
	        return { end: transEndEventNames[name] }
	      }
	    }
	
	    return false // explicit for ie8 (  ._.)
	  }
	
	  // http://blog.alexmaccaw.com/css-transitions
	  $.fn.emulateTransitionEnd = function (duration) {
	    var called = false
	    var $el = this
	    $(this).one('bsTransitionEnd', function () { called = true })
	    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
	    setTimeout(callback, duration)
	    return this
	  }
	
	  $(function () {
	    $.support.transition = transitionEnd()
	
	    if (!$.support.transition) return
	
	    $.event.special.bsTransitionEnd = {
	      bindType: $.support.transition.end,
	      delegateType: $.support.transition.end,
	      handle: function (e) {
	        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
	      }
	    }
	  })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: alert.js v3.3.7
	 * http://getbootstrap.com/javascript/#alerts
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // ALERT CLASS DEFINITION
	  // ======================
	
	  var dismiss = '[data-dismiss="alert"]'
	  var Alert   = function (el) {
	    $(el).on('click', dismiss, this.close)
	  }
	
	  Alert.VERSION = '3.3.7'
	
	  Alert.TRANSITION_DURATION = 150
	
	  Alert.prototype.close = function (e) {
	    var $this    = $(this)
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = $(selector === '#' ? [] : selector)
	
	    if (e) e.preventDefault()
	
	    if (!$parent.length) {
	      $parent = $this.closest('.alert')
	    }
	
	    $parent.trigger(e = $.Event('close.bs.alert'))
	
	    if (e.isDefaultPrevented()) return
	
	    $parent.removeClass('in')
	
	    function removeElement() {
	      // detach from parent, fire event then clean up data
	      $parent.detach().trigger('closed.bs.alert').remove()
	    }
	
	    $.support.transition && $parent.hasClass('fade') ?
	      $parent
	        .one('bsTransitionEnd', removeElement)
	        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
	      removeElement()
	  }
	
	
	  // ALERT PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.alert')
	
	      if (!data) $this.data('bs.alert', (data = new Alert(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.alert
	
	  $.fn.alert             = Plugin
	  $.fn.alert.Constructor = Alert
	
	
	  // ALERT NO CONFLICT
	  // =================
	
	  $.fn.alert.noConflict = function () {
	    $.fn.alert = old
	    return this
	  }
	
	
	  // ALERT DATA-API
	  // ==============
	
	  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: button.js v3.3.7
	 * http://getbootstrap.com/javascript/#buttons
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // BUTTON PUBLIC CLASS DEFINITION
	  // ==============================
	
	  var Button = function (element, options) {
	    this.$element  = $(element)
	    this.options   = $.extend({}, Button.DEFAULTS, options)
	    this.isLoading = false
	  }
	
	  Button.VERSION  = '3.3.7'
	
	  Button.DEFAULTS = {
	    loadingText: 'loading...'
	  }
	
	  Button.prototype.setState = function (state) {
	    var d    = 'disabled'
	    var $el  = this.$element
	    var val  = $el.is('input') ? 'val' : 'html'
	    var data = $el.data()
	
	    state += 'Text'
	
	    if (data.resetText == null) $el.data('resetText', $el[val]())
	
	    // push to event loop to allow forms to submit
	    setTimeout($.proxy(function () {
	      $el[val](data[state] == null ? this.options[state] : data[state])
	
	      if (state == 'loadingText') {
	        this.isLoading = true
	        $el.addClass(d).attr(d, d).prop(d, true)
	      } else if (this.isLoading) {
	        this.isLoading = false
	        $el.removeClass(d).removeAttr(d).prop(d, false)
	      }
	    }, this), 0)
	  }
	
	  Button.prototype.toggle = function () {
	    var changed = true
	    var $parent = this.$element.closest('[data-toggle="buttons"]')
	
	    if ($parent.length) {
	      var $input = this.$element.find('input')
	      if ($input.prop('type') == 'radio') {
	        if ($input.prop('checked')) changed = false
	        $parent.find('.active').removeClass('active')
	        this.$element.addClass('active')
	      } else if ($input.prop('type') == 'checkbox') {
	        if (($input.prop('checked')) !== this.$element.hasClass('active')) changed = false
	        this.$element.toggleClass('active')
	      }
	      $input.prop('checked', this.$element.hasClass('active'))
	      if (changed) $input.trigger('change')
	    } else {
	      this.$element.attr('aria-pressed', !this.$element.hasClass('active'))
	      this.$element.toggleClass('active')
	    }
	  }
	
	
	  // BUTTON PLUGIN DEFINITION
	  // ========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.button')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.button', (data = new Button(this, options)))
	
	      if (option == 'toggle') data.toggle()
	      else if (option) data.setState(option)
	    })
	  }
	
	  var old = $.fn.button
	
	  $.fn.button             = Plugin
	  $.fn.button.Constructor = Button
	
	
	  // BUTTON NO CONFLICT
	  // ==================
	
	  $.fn.button.noConflict = function () {
	    $.fn.button = old
	    return this
	  }
	
	
	  // BUTTON DATA-API
	  // ===============
	
	  $(document)
	    .on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      var $btn = $(e.target).closest('.btn')
	      Plugin.call($btn, 'toggle')
	      if (!($(e.target).is('input[type="radio"], input[type="checkbox"]'))) {
	        // Prevent double click on radios, and the double selections (so cancellation) on checkboxes
	        e.preventDefault()
	        // The target component still receive the focus
	        if ($btn.is('input,button')) $btn.trigger('focus')
	        else $btn.find('input:visible,button:visible').first().trigger('focus')
	      }
	    })
	    .on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
	      $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type))
	    })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: carousel.js v3.3.7
	 * http://getbootstrap.com/javascript/#carousel
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // CAROUSEL CLASS DEFINITION
	  // =========================
	
	  var Carousel = function (element, options) {
	    this.$element    = $(element)
	    this.$indicators = this.$element.find('.carousel-indicators')
	    this.options     = options
	    this.paused      = null
	    this.sliding     = null
	    this.interval    = null
	    this.$active     = null
	    this.$items      = null
	
	    this.options.keyboard && this.$element.on('keydown.bs.carousel', $.proxy(this.keydown, this))
	
	    this.options.pause == 'hover' && !('ontouchstart' in document.documentElement) && this.$element
	      .on('mouseenter.bs.carousel', $.proxy(this.pause, this))
	      .on('mouseleave.bs.carousel', $.proxy(this.cycle, this))
	  }
	
	  Carousel.VERSION  = '3.3.7'
	
	  Carousel.TRANSITION_DURATION = 600
	
	  Carousel.DEFAULTS = {
	    interval: 5000,
	    pause: 'hover',
	    wrap: true,
	    keyboard: true
	  }
	
	  Carousel.prototype.keydown = function (e) {
	    if (/input|textarea/i.test(e.target.tagName)) return
	    switch (e.which) {
	      case 37: this.prev(); break
	      case 39: this.next(); break
	      default: return
	    }
	
	    e.preventDefault()
	  }
	
	  Carousel.prototype.cycle = function (e) {
	    e || (this.paused = false)
	
	    this.interval && clearInterval(this.interval)
	
	    this.options.interval
	      && !this.paused
	      && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
	
	    return this
	  }
	
	  Carousel.prototype.getItemIndex = function (item) {
	    this.$items = item.parent().children('.item')
	    return this.$items.index(item || this.$active)
	  }
	
	  Carousel.prototype.getItemForDirection = function (direction, active) {
	    var activeIndex = this.getItemIndex(active)
	    var willWrap = (direction == 'prev' && activeIndex === 0)
	                || (direction == 'next' && activeIndex == (this.$items.length - 1))
	    if (willWrap && !this.options.wrap) return active
	    var delta = direction == 'prev' ? -1 : 1
	    var itemIndex = (activeIndex + delta) % this.$items.length
	    return this.$items.eq(itemIndex)
	  }
	
	  Carousel.prototype.to = function (pos) {
	    var that        = this
	    var activeIndex = this.getItemIndex(this.$active = this.$element.find('.item.active'))
	
	    if (pos > (this.$items.length - 1) || pos < 0) return
	
	    if (this.sliding)       return this.$element.one('slid.bs.carousel', function () { that.to(pos) }) // yes, "slid"
	    if (activeIndex == pos) return this.pause().cycle()
	
	    return this.slide(pos > activeIndex ? 'next' : 'prev', this.$items.eq(pos))
	  }
	
	  Carousel.prototype.pause = function (e) {
	    e || (this.paused = true)
	
	    if (this.$element.find('.next, .prev').length && $.support.transition) {
	      this.$element.trigger($.support.transition.end)
	      this.cycle(true)
	    }
	
	    this.interval = clearInterval(this.interval)
	
	    return this
	  }
	
	  Carousel.prototype.next = function () {
	    if (this.sliding) return
	    return this.slide('next')
	  }
	
	  Carousel.prototype.prev = function () {
	    if (this.sliding) return
	    return this.slide('prev')
	  }
	
	  Carousel.prototype.slide = function (type, next) {
	    var $active   = this.$element.find('.item.active')
	    var $next     = next || this.getItemForDirection(type, $active)
	    var isCycling = this.interval
	    var direction = type == 'next' ? 'left' : 'right'
	    var that      = this
	
	    if ($next.hasClass('active')) return (this.sliding = false)
	
	    var relatedTarget = $next[0]
	    var slideEvent = $.Event('slide.bs.carousel', {
	      relatedTarget: relatedTarget,
	      direction: direction
	    })
	    this.$element.trigger(slideEvent)
	    if (slideEvent.isDefaultPrevented()) return
	
	    this.sliding = true
	
	    isCycling && this.pause()
	
	    if (this.$indicators.length) {
	      this.$indicators.find('.active').removeClass('active')
	      var $nextIndicator = $(this.$indicators.children()[this.getItemIndex($next)])
	      $nextIndicator && $nextIndicator.addClass('active')
	    }
	
	    var slidEvent = $.Event('slid.bs.carousel', { relatedTarget: relatedTarget, direction: direction }) // yes, "slid"
	    if ($.support.transition && this.$element.hasClass('slide')) {
	      $next.addClass(type)
	      $next[0].offsetWidth // force reflow
	      $active.addClass(direction)
	      $next.addClass(direction)
	      $active
	        .one('bsTransitionEnd', function () {
	          $next.removeClass([type, direction].join(' ')).addClass('active')
	          $active.removeClass(['active', direction].join(' '))
	          that.sliding = false
	          setTimeout(function () {
	            that.$element.trigger(slidEvent)
	          }, 0)
	        })
	        .emulateTransitionEnd(Carousel.TRANSITION_DURATION)
	    } else {
	      $active.removeClass('active')
	      $next.addClass('active')
	      this.sliding = false
	      this.$element.trigger(slidEvent)
	    }
	
	    isCycling && this.cycle()
	
	    return this
	  }
	
	
	  // CAROUSEL PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.carousel')
	      var options = $.extend({}, Carousel.DEFAULTS, $this.data(), typeof option == 'object' && option)
	      var action  = typeof option == 'string' ? option : options.slide
	
	      if (!data) $this.data('bs.carousel', (data = new Carousel(this, options)))
	      if (typeof option == 'number') data.to(option)
	      else if (action) data[action]()
	      else if (options.interval) data.pause().cycle()
	    })
	  }
	
	  var old = $.fn.carousel
	
	  $.fn.carousel             = Plugin
	  $.fn.carousel.Constructor = Carousel
	
	
	  // CAROUSEL NO CONFLICT
	  // ====================
	
	  $.fn.carousel.noConflict = function () {
	    $.fn.carousel = old
	    return this
	  }
	
	
	  // CAROUSEL DATA-API
	  // =================
	
	  var clickHandler = function (e) {
	    var href
	    var $this   = $(this)
	    var $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) // strip for ie7
	    if (!$target.hasClass('carousel')) return
	    var options = $.extend({}, $target.data(), $this.data())
	    var slideIndex = $this.attr('data-slide-to')
	    if (slideIndex) options.interval = false
	
	    Plugin.call($target, options)
	
	    if (slideIndex) {
	      $target.data('bs.carousel').to(slideIndex)
	    }
	
	    e.preventDefault()
	  }
	
	  $(document)
	    .on('click.bs.carousel.data-api', '[data-slide]', clickHandler)
	    .on('click.bs.carousel.data-api', '[data-slide-to]', clickHandler)
	
	  $(window).on('load', function () {
	    $('[data-ride="carousel"]').each(function () {
	      var $carousel = $(this)
	      Plugin.call($carousel, $carousel.data())
	    })
	  })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: collapse.js v3.3.7
	 * http://getbootstrap.com/javascript/#collapse
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	/* jshint latedef: false */
	
	+function ($) {
	  'use strict';
	
	  // COLLAPSE PUBLIC CLASS DEFINITION
	  // ================================
	
	  var Collapse = function (element, options) {
	    this.$element      = $(element)
	    this.options       = $.extend({}, Collapse.DEFAULTS, options)
	    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
	                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
	    this.transitioning = null
	
	    if (this.options.parent) {
	      this.$parent = this.getParent()
	    } else {
	      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
	    }
	
	    if (this.options.toggle) this.toggle()
	  }
	
	  Collapse.VERSION  = '3.3.7'
	
	  Collapse.TRANSITION_DURATION = 350
	
	  Collapse.DEFAULTS = {
	    toggle: true
	  }
	
	  Collapse.prototype.dimension = function () {
	    var hasWidth = this.$element.hasClass('width')
	    return hasWidth ? 'width' : 'height'
	  }
	
	  Collapse.prototype.show = function () {
	    if (this.transitioning || this.$element.hasClass('in')) return
	
	    var activesData
	    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')
	
	    if (actives && actives.length) {
	      activesData = actives.data('bs.collapse')
	      if (activesData && activesData.transitioning) return
	    }
	
	    var startEvent = $.Event('show.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    if (actives && actives.length) {
	      Plugin.call(actives, 'hide')
	      activesData || actives.data('bs.collapse', null)
	    }
	
	    var dimension = this.dimension()
	
	    this.$element
	      .removeClass('collapse')
	      .addClass('collapsing')[dimension](0)
	      .attr('aria-expanded', true)
	
	    this.$trigger
	      .removeClass('collapsed')
	      .attr('aria-expanded', true)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse in')[dimension]('')
	      this.transitioning = 0
	      this.$element
	        .trigger('shown.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    var scrollSize = $.camelCase(['scroll', dimension].join('-'))
	
	    this.$element
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
	  }
	
	  Collapse.prototype.hide = function () {
	    if (this.transitioning || !this.$element.hasClass('in')) return
	
	    var startEvent = $.Event('hide.bs.collapse')
	    this.$element.trigger(startEvent)
	    if (startEvent.isDefaultPrevented()) return
	
	    var dimension = this.dimension()
	
	    this.$element[dimension](this.$element[dimension]())[0].offsetHeight
	
	    this.$element
	      .addClass('collapsing')
	      .removeClass('collapse in')
	      .attr('aria-expanded', false)
	
	    this.$trigger
	      .addClass('collapsed')
	      .attr('aria-expanded', false)
	
	    this.transitioning = 1
	
	    var complete = function () {
	      this.transitioning = 0
	      this.$element
	        .removeClass('collapsing')
	        .addClass('collapse')
	        .trigger('hidden.bs.collapse')
	    }
	
	    if (!$.support.transition) return complete.call(this)
	
	    this.$element
	      [dimension](0)
	      .one('bsTransitionEnd', $.proxy(complete, this))
	      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
	  }
	
	  Collapse.prototype.toggle = function () {
	    this[this.$element.hasClass('in') ? 'hide' : 'show']()
	  }
	
	  Collapse.prototype.getParent = function () {
	    return $(this.options.parent)
	      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
	      .each($.proxy(function (i, element) {
	        var $element = $(element)
	        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
	      }, this))
	      .end()
	  }
	
	  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
	    var isOpen = $element.hasClass('in')
	
	    $element.attr('aria-expanded', isOpen)
	    $trigger
	      .toggleClass('collapsed', !isOpen)
	      .attr('aria-expanded', isOpen)
	  }
	
	  function getTargetFromTrigger($trigger) {
	    var href
	    var target = $trigger.attr('data-target')
	      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7
	
	    return $(target)
	  }
	
	
	  // COLLAPSE PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.collapse')
	      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
	      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.collapse
	
	  $.fn.collapse             = Plugin
	  $.fn.collapse.Constructor = Collapse
	
	
	  // COLLAPSE NO CONFLICT
	  // ====================
	
	  $.fn.collapse.noConflict = function () {
	    $.fn.collapse = old
	    return this
	  }
	
	
	  // COLLAPSE DATA-API
	  // =================
	
	  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
	    var $this   = $(this)
	
	    if (!$this.attr('data-target')) e.preventDefault()
	
	    var $target = getTargetFromTrigger($this)
	    var data    = $target.data('bs.collapse')
	    var option  = data ? 'toggle' : $this.data()
	
	    Plugin.call($target, option)
	  })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: dropdown.js v3.3.7
	 * http://getbootstrap.com/javascript/#dropdowns
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // DROPDOWN CLASS DEFINITION
	  // =========================
	
	  var backdrop = '.dropdown-backdrop'
	  var toggle   = '[data-toggle="dropdown"]'
	  var Dropdown = function (element) {
	    $(element).on('click.bs.dropdown', this.toggle)
	  }
	
	  Dropdown.VERSION = '3.3.7'
	
	  function getParent($this) {
	    var selector = $this.attr('data-target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && /#[A-Za-z]/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    var $parent = selector && $(selector)
	
	    return $parent && $parent.length ? $parent : $this.parent()
	  }
	
	  function clearMenus(e) {
	    if (e && e.which === 3) return
	    $(backdrop).remove()
	    $(toggle).each(function () {
	      var $this         = $(this)
	      var $parent       = getParent($this)
	      var relatedTarget = { relatedTarget: this }
	
	      if (!$parent.hasClass('open')) return
	
	      if (e && e.type == 'click' && /input|textarea/i.test(e.target.tagName) && $.contains($parent[0], e.target)) return
	
	      $parent.trigger(e = $.Event('hide.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this.attr('aria-expanded', 'false')
	      $parent.removeClass('open').trigger($.Event('hidden.bs.dropdown', relatedTarget))
	    })
	  }
	
	  Dropdown.prototype.toggle = function (e) {
	    var $this = $(this)
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    clearMenus()
	
	    if (!isActive) {
	      if ('ontouchstart' in document.documentElement && !$parent.closest('.navbar-nav').length) {
	        // if mobile we use a backdrop because click events don't delegate
	        $(document.createElement('div'))
	          .addClass('dropdown-backdrop')
	          .insertAfter($(this))
	          .on('click', clearMenus)
	      }
	
	      var relatedTarget = { relatedTarget: this }
	      $parent.trigger(e = $.Event('show.bs.dropdown', relatedTarget))
	
	      if (e.isDefaultPrevented()) return
	
	      $this
	        .trigger('focus')
	        .attr('aria-expanded', 'true')
	
	      $parent
	        .toggleClass('open')
	        .trigger($.Event('shown.bs.dropdown', relatedTarget))
	    }
	
	    return false
	  }
	
	  Dropdown.prototype.keydown = function (e) {
	    if (!/(38|40|27|32)/.test(e.which) || /input|textarea/i.test(e.target.tagName)) return
	
	    var $this = $(this)
	
	    e.preventDefault()
	    e.stopPropagation()
	
	    if ($this.is('.disabled, :disabled')) return
	
	    var $parent  = getParent($this)
	    var isActive = $parent.hasClass('open')
	
	    if (!isActive && e.which != 27 || isActive && e.which == 27) {
	      if (e.which == 27) $parent.find(toggle).trigger('focus')
	      return $this.trigger('click')
	    }
	
	    var desc = ' li:not(.disabled):visible a'
	    var $items = $parent.find('.dropdown-menu' + desc)
	
	    if (!$items.length) return
	
	    var index = $items.index(e.target)
	
	    if (e.which == 38 && index > 0)                 index--         // up
	    if (e.which == 40 && index < $items.length - 1) index++         // down
	    if (!~index)                                    index = 0
	
	    $items.eq(index).trigger('focus')
	  }
	
	
	  // DROPDOWN PLUGIN DEFINITION
	  // ==========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.dropdown')
	
	      if (!data) $this.data('bs.dropdown', (data = new Dropdown(this)))
	      if (typeof option == 'string') data[option].call($this)
	    })
	  }
	
	  var old = $.fn.dropdown
	
	  $.fn.dropdown             = Plugin
	  $.fn.dropdown.Constructor = Dropdown
	
	
	  // DROPDOWN NO CONFLICT
	  // ====================
	
	  $.fn.dropdown.noConflict = function () {
	    $.fn.dropdown = old
	    return this
	  }
	
	
	  // APPLY TO STANDARD DROPDOWN ELEMENTS
	  // ===================================
	
	  $(document)
	    .on('click.bs.dropdown.data-api', clearMenus)
	    .on('click.bs.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
	    .on('click.bs.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	    .on('keydown.bs.dropdown.data-api', toggle, Dropdown.prototype.keydown)
	    .on('keydown.bs.dropdown.data-api', '.dropdown-menu', Dropdown.prototype.keydown)
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: modal.js v3.3.7
	 * http://getbootstrap.com/javascript/#modals
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // MODAL CLASS DEFINITION
	  // ======================
	
	  var Modal = function (element, options) {
	    this.options             = options
	    this.$body               = $(document.body)
	    this.$element            = $(element)
	    this.$dialog             = this.$element.find('.modal-dialog')
	    this.$backdrop           = null
	    this.isShown             = null
	    this.originalBodyPad     = null
	    this.scrollbarWidth      = 0
	    this.ignoreBackdropClick = false
	
	    if (this.options.remote) {
	      this.$element
	        .find('.modal-content')
	        .load(this.options.remote, $.proxy(function () {
	          this.$element.trigger('loaded.bs.modal')
	        }, this))
	    }
	  }
	
	  Modal.VERSION  = '3.3.7'
	
	  Modal.TRANSITION_DURATION = 300
	  Modal.BACKDROP_TRANSITION_DURATION = 150
	
	  Modal.DEFAULTS = {
	    backdrop: true,
	    keyboard: true,
	    show: true
	  }
	
	  Modal.prototype.toggle = function (_relatedTarget) {
	    return this.isShown ? this.hide() : this.show(_relatedTarget)
	  }
	
	  Modal.prototype.show = function (_relatedTarget) {
	    var that = this
	    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })
	
	    this.$element.trigger(e)
	
	    if (this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = true
	
	    this.checkScrollbar()
	    this.setScrollbar()
	    this.$body.addClass('modal-open')
	
	    this.escape()
	    this.resize()
	
	    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))
	
	    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
	      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
	        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
	      })
	    })
	
	    this.backdrop(function () {
	      var transition = $.support.transition && that.$element.hasClass('fade')
	
	      if (!that.$element.parent().length) {
	        that.$element.appendTo(that.$body) // don't move modals dom position
	      }
	
	      that.$element
	        .show()
	        .scrollTop(0)
	
	      that.adjustDialog()
	
	      if (transition) {
	        that.$element[0].offsetWidth // force reflow
	      }
	
	      that.$element.addClass('in')
	
	      that.enforceFocus()
	
	      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })
	
	      transition ?
	        that.$dialog // wait for modal to slide in
	          .one('bsTransitionEnd', function () {
	            that.$element.trigger('focus').trigger(e)
	          })
	          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	        that.$element.trigger('focus').trigger(e)
	    })
	  }
	
	  Modal.prototype.hide = function (e) {
	    if (e) e.preventDefault()
	
	    e = $.Event('hide.bs.modal')
	
	    this.$element.trigger(e)
	
	    if (!this.isShown || e.isDefaultPrevented()) return
	
	    this.isShown = false
	
	    this.escape()
	    this.resize()
	
	    $(document).off('focusin.bs.modal')
	
	    this.$element
	      .removeClass('in')
	      .off('click.dismiss.bs.modal')
	      .off('mouseup.dismiss.bs.modal')
	
	    this.$dialog.off('mousedown.dismiss.bs.modal')
	
	    $.support.transition && this.$element.hasClass('fade') ?
	      this.$element
	        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
	        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
	      this.hideModal()
	  }
	
	  Modal.prototype.enforceFocus = function () {
	    $(document)
	      .off('focusin.bs.modal') // guard against infinite focus loop
	      .on('focusin.bs.modal', $.proxy(function (e) {
	        if (document !== e.target &&
	            this.$element[0] !== e.target &&
	            !this.$element.has(e.target).length) {
	          this.$element.trigger('focus')
	        }
	      }, this))
	  }
	
	  Modal.prototype.escape = function () {
	    if (this.isShown && this.options.keyboard) {
	      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
	        e.which == 27 && this.hide()
	      }, this))
	    } else if (!this.isShown) {
	      this.$element.off('keydown.dismiss.bs.modal')
	    }
	  }
	
	  Modal.prototype.resize = function () {
	    if (this.isShown) {
	      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
	    } else {
	      $(window).off('resize.bs.modal')
	    }
	  }
	
	  Modal.prototype.hideModal = function () {
	    var that = this
	    this.$element.hide()
	    this.backdrop(function () {
	      that.$body.removeClass('modal-open')
	      that.resetAdjustments()
	      that.resetScrollbar()
	      that.$element.trigger('hidden.bs.modal')
	    })
	  }
	
	  Modal.prototype.removeBackdrop = function () {
	    this.$backdrop && this.$backdrop.remove()
	    this.$backdrop = null
	  }
	
	  Modal.prototype.backdrop = function (callback) {
	    var that = this
	    var animate = this.$element.hasClass('fade') ? 'fade' : ''
	
	    if (this.isShown && this.options.backdrop) {
	      var doAnimate = $.support.transition && animate
	
	      this.$backdrop = $(document.createElement('div'))
	        .addClass('modal-backdrop ' + animate)
	        .appendTo(this.$body)
	
	      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
	        if (this.ignoreBackdropClick) {
	          this.ignoreBackdropClick = false
	          return
	        }
	        if (e.target !== e.currentTarget) return
	        this.options.backdrop == 'static'
	          ? this.$element[0].focus()
	          : this.hide()
	      }, this))
	
	      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow
	
	      this.$backdrop.addClass('in')
	
	      if (!callback) return
	
	      doAnimate ?
	        this.$backdrop
	          .one('bsTransitionEnd', callback)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callback()
	
	    } else if (!this.isShown && this.$backdrop) {
	      this.$backdrop.removeClass('in')
	
	      var callbackRemove = function () {
	        that.removeBackdrop()
	        callback && callback()
	      }
	      $.support.transition && this.$element.hasClass('fade') ?
	        this.$backdrop
	          .one('bsTransitionEnd', callbackRemove)
	          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
	        callbackRemove()
	
	    } else if (callback) {
	      callback()
	    }
	  }
	
	  // these following methods are used to handle overflowing modals
	
	  Modal.prototype.handleUpdate = function () {
	    this.adjustDialog()
	  }
	
	  Modal.prototype.adjustDialog = function () {
	    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight
	
	    this.$element.css({
	      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
	      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
	    })
	  }
	
	  Modal.prototype.resetAdjustments = function () {
	    this.$element.css({
	      paddingLeft: '',
	      paddingRight: ''
	    })
	  }
	
	  Modal.prototype.checkScrollbar = function () {
	    var fullWindowWidth = window.innerWidth
	    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
	      var documentElementRect = document.documentElement.getBoundingClientRect()
	      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
	    }
	    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
	    this.scrollbarWidth = this.measureScrollbar()
	  }
	
	  Modal.prototype.setScrollbar = function () {
	    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
	    this.originalBodyPad = document.body.style.paddingRight || ''
	    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
	  }
	
	  Modal.prototype.resetScrollbar = function () {
	    this.$body.css('padding-right', this.originalBodyPad)
	  }
	
	  Modal.prototype.measureScrollbar = function () { // thx walsh
	    var scrollDiv = document.createElement('div')
	    scrollDiv.className = 'modal-scrollbar-measure'
	    this.$body.append(scrollDiv)
	    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
	    this.$body[0].removeChild(scrollDiv)
	    return scrollbarWidth
	  }
	
	
	  // MODAL PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option, _relatedTarget) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.modal')
	      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)
	
	      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
	      if (typeof option == 'string') data[option](_relatedTarget)
	      else if (options.show) data.show(_relatedTarget)
	    })
	  }
	
	  var old = $.fn.modal
	
	  $.fn.modal             = Plugin
	  $.fn.modal.Constructor = Modal
	
	
	  // MODAL NO CONFLICT
	  // =================
	
	  $.fn.modal.noConflict = function () {
	    $.fn.modal = old
	    return this
	  }
	
	
	  // MODAL DATA-API
	  // ==============
	
	  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
	    var $this   = $(this)
	    var href    = $this.attr('href')
	    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
	    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())
	
	    if ($this.is('a')) e.preventDefault()
	
	    $target.one('show.bs.modal', function (showEvent) {
	      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
	      $target.one('hidden.bs.modal', function () {
	        $this.is(':visible') && $this.trigger('focus')
	      })
	    })
	    Plugin.call($target, option, this)
	  })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: tooltip.js v3.3.7
	 * http://getbootstrap.com/javascript/#tooltip
	 * Inspired by the original jQuery.tipsy by Jason Frame
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TOOLTIP PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Tooltip = function (element, options) {
	    this.type       = null
	    this.options    = null
	    this.enabled    = null
	    this.timeout    = null
	    this.hoverState = null
	    this.$element   = null
	    this.inState    = null
	
	    this.init('tooltip', element, options)
	  }
	
	  Tooltip.VERSION  = '3.3.7'
	
	  Tooltip.TRANSITION_DURATION = 150
	
	  Tooltip.DEFAULTS = {
	    animation: true,
	    placement: 'top',
	    selector: false,
	    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
	    trigger: 'hover focus',
	    title: '',
	    delay: 0,
	    html: false,
	    container: false,
	    viewport: {
	      selector: 'body',
	      padding: 0
	    }
	  }
	
	  Tooltip.prototype.init = function (type, element, options) {
	    this.enabled   = true
	    this.type      = type
	    this.$element  = $(element)
	    this.options   = this.getOptions(options)
	    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
	    this.inState   = { click: false, hover: false, focus: false }
	
	    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
	      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
	    }
	
	    var triggers = this.options.trigger.split(' ')
	
	    for (var i = triggers.length; i--;) {
	      var trigger = triggers[i]
	
	      if (trigger == 'click') {
	        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
	      } else if (trigger != 'manual') {
	        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
	        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'
	
	        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
	        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
	      }
	    }
	
	    this.options.selector ?
	      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
	      this.fixTitle()
	  }
	
	  Tooltip.prototype.getDefaults = function () {
	    return Tooltip.DEFAULTS
	  }
	
	  Tooltip.prototype.getOptions = function (options) {
	    options = $.extend({}, this.getDefaults(), this.$element.data(), options)
	
	    if (options.delay && typeof options.delay == 'number') {
	      options.delay = {
	        show: options.delay,
	        hide: options.delay
	      }
	    }
	
	    return options
	  }
	
	  Tooltip.prototype.getDelegateOptions = function () {
	    var options  = {}
	    var defaults = this.getDefaults()
	
	    this._options && $.each(this._options, function (key, value) {
	      if (defaults[key] != value) options[key] = value
	    })
	
	    return options
	  }
	
	  Tooltip.prototype.enter = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
	    }
	
	    if (self.tip().hasClass('in') || self.hoverState == 'in') {
	      self.hoverState = 'in'
	      return
	    }
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'in'
	
	    if (!self.options.delay || !self.options.delay.show) return self.show()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'in') self.show()
	    }, self.options.delay.show)
	  }
	
	  Tooltip.prototype.isInStateTrue = function () {
	    for (var key in this.inState) {
	      if (this.inState[key]) return true
	    }
	
	    return false
	  }
	
	  Tooltip.prototype.leave = function (obj) {
	    var self = obj instanceof this.constructor ?
	      obj : $(obj.currentTarget).data('bs.' + this.type)
	
	    if (!self) {
	      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
	      $(obj.currentTarget).data('bs.' + this.type, self)
	    }
	
	    if (obj instanceof $.Event) {
	      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
	    }
	
	    if (self.isInStateTrue()) return
	
	    clearTimeout(self.timeout)
	
	    self.hoverState = 'out'
	
	    if (!self.options.delay || !self.options.delay.hide) return self.hide()
	
	    self.timeout = setTimeout(function () {
	      if (self.hoverState == 'out') self.hide()
	    }, self.options.delay.hide)
	  }
	
	  Tooltip.prototype.show = function () {
	    var e = $.Event('show.bs.' + this.type)
	
	    if (this.hasContent() && this.enabled) {
	      this.$element.trigger(e)
	
	      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
	      if (e.isDefaultPrevented() || !inDom) return
	      var that = this
	
	      var $tip = this.tip()
	
	      var tipId = this.getUID(this.type)
	
	      this.setContent()
	      $tip.attr('id', tipId)
	      this.$element.attr('aria-describedby', tipId)
	
	      if (this.options.animation) $tip.addClass('fade')
	
	      var placement = typeof this.options.placement == 'function' ?
	        this.options.placement.call(this, $tip[0], this.$element[0]) :
	        this.options.placement
	
	      var autoToken = /\s?auto?\s?/i
	      var autoPlace = autoToken.test(placement)
	      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'
	
	      $tip
	        .detach()
	        .css({ top: 0, left: 0, display: 'block' })
	        .addClass(placement)
	        .data('bs.' + this.type, this)
	
	      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
	      this.$element.trigger('inserted.bs.' + this.type)
	
	      var pos          = this.getPosition()
	      var actualWidth  = $tip[0].offsetWidth
	      var actualHeight = $tip[0].offsetHeight
	
	      if (autoPlace) {
	        var orgPlacement = placement
	        var viewportDim = this.getPosition(this.$viewport)
	
	        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
	                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
	                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
	                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
	                    placement
	
	        $tip
	          .removeClass(orgPlacement)
	          .addClass(placement)
	      }
	
	      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)
	
	      this.applyPlacement(calculatedOffset, placement)
	
	      var complete = function () {
	        var prevHoverState = that.hoverState
	        that.$element.trigger('shown.bs.' + that.type)
	        that.hoverState = null
	
	        if (prevHoverState == 'out') that.leave(that)
	      }
	
	      $.support.transition && this.$tip.hasClass('fade') ?
	        $tip
	          .one('bsTransitionEnd', complete)
	          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	        complete()
	    }
	  }
	
	  Tooltip.prototype.applyPlacement = function (offset, placement) {
	    var $tip   = this.tip()
	    var width  = $tip[0].offsetWidth
	    var height = $tip[0].offsetHeight
	
	    // manually read margins because getBoundingClientRect includes difference
	    var marginTop = parseInt($tip.css('margin-top'), 10)
	    var marginLeft = parseInt($tip.css('margin-left'), 10)
	
	    // we must check for NaN for ie 8/9
	    if (isNaN(marginTop))  marginTop  = 0
	    if (isNaN(marginLeft)) marginLeft = 0
	
	    offset.top  += marginTop
	    offset.left += marginLeft
	
	    // $.fn.offset doesn't round pixel values
	    // so we use setOffset directly with our own function B-0
	    $.offset.setOffset($tip[0], $.extend({
	      using: function (props) {
	        $tip.css({
	          top: Math.round(props.top),
	          left: Math.round(props.left)
	        })
	      }
	    }, offset), 0)
	
	    $tip.addClass('in')
	
	    // check to see if placing tip in new offset caused the tip to resize itself
	    var actualWidth  = $tip[0].offsetWidth
	    var actualHeight = $tip[0].offsetHeight
	
	    if (placement == 'top' && actualHeight != height) {
	      offset.top = offset.top + height - actualHeight
	    }
	
	    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)
	
	    if (delta.left) offset.left += delta.left
	    else offset.top += delta.top
	
	    var isVertical          = /top|bottom/.test(placement)
	    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
	    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'
	
	    $tip.offset(offset)
	    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
	  }
	
	  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
	    this.arrow()
	      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
	      .css(isVertical ? 'top' : 'left', '')
	  }
	
	  Tooltip.prototype.setContent = function () {
	    var $tip  = this.tip()
	    var title = this.getTitle()
	
	    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
	    $tip.removeClass('fade in top bottom left right')
	  }
	
	  Tooltip.prototype.hide = function (callback) {
	    var that = this
	    var $tip = $(this.$tip)
	    var e    = $.Event('hide.bs.' + this.type)
	
	    function complete() {
	      if (that.hoverState != 'in') $tip.detach()
	      if (that.$element) { // TODO: Check whether guarding this code with this `if` is really necessary.
	        that.$element
	          .removeAttr('aria-describedby')
	          .trigger('hidden.bs.' + that.type)
	      }
	      callback && callback()
	    }
	
	    this.$element.trigger(e)
	
	    if (e.isDefaultPrevented()) return
	
	    $tip.removeClass('in')
	
	    $.support.transition && $tip.hasClass('fade') ?
	      $tip
	        .one('bsTransitionEnd', complete)
	        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
	      complete()
	
	    this.hoverState = null
	
	    return this
	  }
	
	  Tooltip.prototype.fixTitle = function () {
	    var $e = this.$element
	    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
	      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
	    }
	  }
	
	  Tooltip.prototype.hasContent = function () {
	    return this.getTitle()
	  }
	
	  Tooltip.prototype.getPosition = function ($element) {
	    $element   = $element || this.$element
	
	    var el     = $element[0]
	    var isBody = el.tagName == 'BODY'
	
	    var elRect    = el.getBoundingClientRect()
	    if (elRect.width == null) {
	      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
	      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
	    }
	    var isSvg = window.SVGElement && el instanceof window.SVGElement
	    // Avoid using $.offset() on SVGs since it gives incorrect results in jQuery 3.
	    // See https://github.com/twbs/bootstrap/issues/20280
	    var elOffset  = isBody ? { top: 0, left: 0 } : (isSvg ? null : $element.offset())
	    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
	    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null
	
	    return $.extend({}, elRect, scroll, outerDims, elOffset)
	  }
	
	  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
	    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
	           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
	        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }
	
	  }
	
	  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
	    var delta = { top: 0, left: 0 }
	    if (!this.$viewport) return delta
	
	    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
	    var viewportDimensions = this.getPosition(this.$viewport)
	
	    if (/right|left/.test(placement)) {
	      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
	      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
	      if (topEdgeOffset < viewportDimensions.top) { // top overflow
	        delta.top = viewportDimensions.top - topEdgeOffset
	      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
	        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
	      }
	    } else {
	      var leftEdgeOffset  = pos.left - viewportPadding
	      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
	      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
	        delta.left = viewportDimensions.left - leftEdgeOffset
	      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
	        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
	      }
	    }
	
	    return delta
	  }
	
	  Tooltip.prototype.getTitle = function () {
	    var title
	    var $e = this.$element
	    var o  = this.options
	
	    title = $e.attr('data-original-title')
	      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)
	
	    return title
	  }
	
	  Tooltip.prototype.getUID = function (prefix) {
	    do prefix += ~~(Math.random() * 1000000)
	    while (document.getElementById(prefix))
	    return prefix
	  }
	
	  Tooltip.prototype.tip = function () {
	    if (!this.$tip) {
	      this.$tip = $(this.options.template)
	      if (this.$tip.length != 1) {
	        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
	      }
	    }
	    return this.$tip
	  }
	
	  Tooltip.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
	  }
	
	  Tooltip.prototype.enable = function () {
	    this.enabled = true
	  }
	
	  Tooltip.prototype.disable = function () {
	    this.enabled = false
	  }
	
	  Tooltip.prototype.toggleEnabled = function () {
	    this.enabled = !this.enabled
	  }
	
	  Tooltip.prototype.toggle = function (e) {
	    var self = this
	    if (e) {
	      self = $(e.currentTarget).data('bs.' + this.type)
	      if (!self) {
	        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
	        $(e.currentTarget).data('bs.' + this.type, self)
	      }
	    }
	
	    if (e) {
	      self.inState.click = !self.inState.click
	      if (self.isInStateTrue()) self.enter(self)
	      else self.leave(self)
	    } else {
	      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
	    }
	  }
	
	  Tooltip.prototype.destroy = function () {
	    var that = this
	    clearTimeout(this.timeout)
	    this.hide(function () {
	      that.$element.off('.' + that.type).removeData('bs.' + that.type)
	      if (that.$tip) {
	        that.$tip.detach()
	      }
	      that.$tip = null
	      that.$arrow = null
	      that.$viewport = null
	      that.$element = null
	    })
	  }
	
	
	  // TOOLTIP PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.tooltip')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tooltip
	
	  $.fn.tooltip             = Plugin
	  $.fn.tooltip.Constructor = Tooltip
	
	
	  // TOOLTIP NO CONFLICT
	  // ===================
	
	  $.fn.tooltip.noConflict = function () {
	    $.fn.tooltip = old
	    return this
	  }
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: popover.js v3.3.7
	 * http://getbootstrap.com/javascript/#popovers
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // POPOVER PUBLIC CLASS DEFINITION
	  // ===============================
	
	  var Popover = function (element, options) {
	    this.init('popover', element, options)
	  }
	
	  if (!$.fn.tooltip) throw new Error('Popover requires tooltip.js')
	
	  Popover.VERSION  = '3.3.7'
	
	  Popover.DEFAULTS = $.extend({}, $.fn.tooltip.Constructor.DEFAULTS, {
	    placement: 'right',
	    trigger: 'click',
	    content: '',
	    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	  })
	
	
	  // NOTE: POPOVER EXTENDS tooltip.js
	  // ================================
	
	  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype)
	
	  Popover.prototype.constructor = Popover
	
	  Popover.prototype.getDefaults = function () {
	    return Popover.DEFAULTS
	  }
	
	  Popover.prototype.setContent = function () {
	    var $tip    = this.tip()
	    var title   = this.getTitle()
	    var content = this.getContent()
	
	    $tip.find('.popover-title')[this.options.html ? 'html' : 'text'](title)
	    $tip.find('.popover-content').children().detach().end()[ // we use append for html objects to maintain js events
	      this.options.html ? (typeof content == 'string' ? 'html' : 'append') : 'text'
	    ](content)
	
	    $tip.removeClass('fade top bottom left right in')
	
	    // IE8 doesn't accept hiding via the `:empty` pseudo selector, we have to do
	    // this manually by checking the contents.
	    if (!$tip.find('.popover-title').html()) $tip.find('.popover-title').hide()
	  }
	
	  Popover.prototype.hasContent = function () {
	    return this.getTitle() || this.getContent()
	  }
	
	  Popover.prototype.getContent = function () {
	    var $e = this.$element
	    var o  = this.options
	
	    return $e.attr('data-content')
	      || (typeof o.content == 'function' ?
	            o.content.call($e[0]) :
	            o.content)
	  }
	
	  Popover.prototype.arrow = function () {
	    return (this.$arrow = this.$arrow || this.tip().find('.arrow'))
	  }
	
	
	  // POPOVER PLUGIN DEFINITION
	  // =========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.popover')
	      var options = typeof option == 'object' && option
	
	      if (!data && /destroy|hide/.test(option)) return
	      if (!data) $this.data('bs.popover', (data = new Popover(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.popover
	
	  $.fn.popover             = Plugin
	  $.fn.popover.Constructor = Popover
	
	
	  // POPOVER NO CONFLICT
	  // ===================
	
	  $.fn.popover.noConflict = function () {
	    $.fn.popover = old
	    return this
	  }
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: scrollspy.js v3.3.7
	 * http://getbootstrap.com/javascript/#scrollspy
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // SCROLLSPY CLASS DEFINITION
	  // ==========================
	
	  function ScrollSpy(element, options) {
	    this.$body          = $(document.body)
	    this.$scrollElement = $(element).is(document.body) ? $(window) : $(element)
	    this.options        = $.extend({}, ScrollSpy.DEFAULTS, options)
	    this.selector       = (this.options.target || '') + ' .nav li > a'
	    this.offsets        = []
	    this.targets        = []
	    this.activeTarget   = null
	    this.scrollHeight   = 0
	
	    this.$scrollElement.on('scroll.bs.scrollspy', $.proxy(this.process, this))
	    this.refresh()
	    this.process()
	  }
	
	  ScrollSpy.VERSION  = '3.3.7'
	
	  ScrollSpy.DEFAULTS = {
	    offset: 10
	  }
	
	  ScrollSpy.prototype.getScrollHeight = function () {
	    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	  }
	
	  ScrollSpy.prototype.refresh = function () {
	    var that          = this
	    var offsetMethod  = 'offset'
	    var offsetBase    = 0
	
	    this.offsets      = []
	    this.targets      = []
	    this.scrollHeight = this.getScrollHeight()
	
	    if (!$.isWindow(this.$scrollElement[0])) {
	      offsetMethod = 'position'
	      offsetBase   = this.$scrollElement.scrollTop()
	    }
	
	    this.$body
	      .find(this.selector)
	      .map(function () {
	        var $el   = $(this)
	        var href  = $el.data('target') || $el.attr('href')
	        var $href = /^#./.test(href) && $(href)
	
	        return ($href
	          && $href.length
	          && $href.is(':visible')
	          && [[$href[offsetMethod]().top + offsetBase, href]]) || null
	      })
	      .sort(function (a, b) { return a[0] - b[0] })
	      .each(function () {
	        that.offsets.push(this[0])
	        that.targets.push(this[1])
	      })
	  }
	
	  ScrollSpy.prototype.process = function () {
	    var scrollTop    = this.$scrollElement.scrollTop() + this.options.offset
	    var scrollHeight = this.getScrollHeight()
	    var maxScroll    = this.options.offset + scrollHeight - this.$scrollElement.height()
	    var offsets      = this.offsets
	    var targets      = this.targets
	    var activeTarget = this.activeTarget
	    var i
	
	    if (this.scrollHeight != scrollHeight) {
	      this.refresh()
	    }
	
	    if (scrollTop >= maxScroll) {
	      return activeTarget != (i = targets[targets.length - 1]) && this.activate(i)
	    }
	
	    if (activeTarget && scrollTop < offsets[0]) {
	      this.activeTarget = null
	      return this.clear()
	    }
	
	    for (i = offsets.length; i--;) {
	      activeTarget != targets[i]
	        && scrollTop >= offsets[i]
	        && (offsets[i + 1] === undefined || scrollTop < offsets[i + 1])
	        && this.activate(targets[i])
	    }
	  }
	
	  ScrollSpy.prototype.activate = function (target) {
	    this.activeTarget = target
	
	    this.clear()
	
	    var selector = this.selector +
	      '[data-target="' + target + '"],' +
	      this.selector + '[href="' + target + '"]'
	
	    var active = $(selector)
	      .parents('li')
	      .addClass('active')
	
	    if (active.parent('.dropdown-menu').length) {
	      active = active
	        .closest('li.dropdown')
	        .addClass('active')
	    }
	
	    active.trigger('activate.bs.scrollspy')
	  }
	
	  ScrollSpy.prototype.clear = function () {
	    $(this.selector)
	      .parentsUntil(this.options.target, '.active')
	      .removeClass('active')
	  }
	
	
	  // SCROLLSPY PLUGIN DEFINITION
	  // ===========================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.scrollspy')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.scrollspy', (data = new ScrollSpy(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.scrollspy
	
	  $.fn.scrollspy             = Plugin
	  $.fn.scrollspy.Constructor = ScrollSpy
	
	
	  // SCROLLSPY NO CONFLICT
	  // =====================
	
	  $.fn.scrollspy.noConflict = function () {
	    $.fn.scrollspy = old
	    return this
	  }
	
	
	  // SCROLLSPY DATA-API
	  // ==================
	
	  $(window).on('load.bs.scrollspy.data-api', function () {
	    $('[data-spy="scroll"]').each(function () {
	      var $spy = $(this)
	      Plugin.call($spy, $spy.data())
	    })
	  })
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: tab.js v3.3.7
	 * http://getbootstrap.com/javascript/#tabs
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // TAB CLASS DEFINITION
	  // ====================
	
	  var Tab = function (element) {
	    // jscs:disable requireDollarBeforejQueryAssignment
	    this.element = $(element)
	    // jscs:enable requireDollarBeforejQueryAssignment
	  }
	
	  Tab.VERSION = '3.3.7'
	
	  Tab.TRANSITION_DURATION = 150
	
	  Tab.prototype.show = function () {
	    var $this    = this.element
	    var $ul      = $this.closest('ul:not(.dropdown-menu)')
	    var selector = $this.data('target')
	
	    if (!selector) {
	      selector = $this.attr('href')
	      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
	    }
	
	    if ($this.parent('li').hasClass('active')) return
	
	    var $previous = $ul.find('.active:last a')
	    var hideEvent = $.Event('hide.bs.tab', {
	      relatedTarget: $this[0]
	    })
	    var showEvent = $.Event('show.bs.tab', {
	      relatedTarget: $previous[0]
	    })
	
	    $previous.trigger(hideEvent)
	    $this.trigger(showEvent)
	
	    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return
	
	    var $target = $(selector)
	
	    this.activate($this.closest('li'), $ul)
	    this.activate($target, $target.parent(), function () {
	      $previous.trigger({
	        type: 'hidden.bs.tab',
	        relatedTarget: $this[0]
	      })
	      $this.trigger({
	        type: 'shown.bs.tab',
	        relatedTarget: $previous[0]
	      })
	    })
	  }
	
	  Tab.prototype.activate = function (element, container, callback) {
	    var $active    = container.find('> .active')
	    var transition = callback
	      && $.support.transition
	      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)
	
	    function next() {
	      $active
	        .removeClass('active')
	        .find('> .dropdown-menu > .active')
	          .removeClass('active')
	        .end()
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', false)
	
	      element
	        .addClass('active')
	        .find('[data-toggle="tab"]')
	          .attr('aria-expanded', true)
	
	      if (transition) {
	        element[0].offsetWidth // reflow for transition
	        element.addClass('in')
	      } else {
	        element.removeClass('fade')
	      }
	
	      if (element.parent('.dropdown-menu').length) {
	        element
	          .closest('li.dropdown')
	            .addClass('active')
	          .end()
	          .find('[data-toggle="tab"]')
	            .attr('aria-expanded', true)
	      }
	
	      callback && callback()
	    }
	
	    $active.length && transition ?
	      $active
	        .one('bsTransitionEnd', next)
	        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
	      next()
	
	    $active.removeClass('in')
	  }
	
	
	  // TAB PLUGIN DEFINITION
	  // =====================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this = $(this)
	      var data  = $this.data('bs.tab')
	
	      if (!data) $this.data('bs.tab', (data = new Tab(this)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.tab
	
	  $.fn.tab             = Plugin
	  $.fn.tab.Constructor = Tab
	
	
	  // TAB NO CONFLICT
	  // ===============
	
	  $.fn.tab.noConflict = function () {
	    $.fn.tab = old
	    return this
	  }
	
	
	  // TAB DATA-API
	  // ============
	
	  var clickHandler = function (e) {
	    e.preventDefault()
	    Plugin.call($(this), 'show')
	  }
	
	  $(document)
	    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
	    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)
	
	}(jQuery);
	
	/* ========================================================================
	 * Bootstrap: affix.js v3.3.7
	 * http://getbootstrap.com/javascript/#affix
	 * ========================================================================
	 * Copyright 2011-2016 Twitter, Inc.
	 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
	 * ======================================================================== */
	
	
	+function ($) {
	  'use strict';
	
	  // AFFIX CLASS DEFINITION
	  // ======================
	
	  var Affix = function (element, options) {
	    this.options = $.extend({}, Affix.DEFAULTS, options)
	
	    this.$target = $(this.options.target)
	      .on('scroll.bs.affix.data-api', $.proxy(this.checkPosition, this))
	      .on('click.bs.affix.data-api',  $.proxy(this.checkPositionWithEventLoop, this))
	
	    this.$element     = $(element)
	    this.affixed      = null
	    this.unpin        = null
	    this.pinnedOffset = null
	
	    this.checkPosition()
	  }
	
	  Affix.VERSION  = '3.3.7'
	
	  Affix.RESET    = 'affix affix-top affix-bottom'
	
	  Affix.DEFAULTS = {
	    offset: 0,
	    target: window
	  }
	
	  Affix.prototype.getState = function (scrollHeight, height, offsetTop, offsetBottom) {
	    var scrollTop    = this.$target.scrollTop()
	    var position     = this.$element.offset()
	    var targetHeight = this.$target.height()
	
	    if (offsetTop != null && this.affixed == 'top') return scrollTop < offsetTop ? 'top' : false
	
	    if (this.affixed == 'bottom') {
	      if (offsetTop != null) return (scrollTop + this.unpin <= position.top) ? false : 'bottom'
	      return (scrollTop + targetHeight <= scrollHeight - offsetBottom) ? false : 'bottom'
	    }
	
	    var initializing   = this.affixed == null
	    var colliderTop    = initializing ? scrollTop : position.top
	    var colliderHeight = initializing ? targetHeight : height
	
	    if (offsetTop != null && scrollTop <= offsetTop) return 'top'
	    if (offsetBottom != null && (colliderTop + colliderHeight >= scrollHeight - offsetBottom)) return 'bottom'
	
	    return false
	  }
	
	  Affix.prototype.getPinnedOffset = function () {
	    if (this.pinnedOffset) return this.pinnedOffset
	    this.$element.removeClass(Affix.RESET).addClass('affix')
	    var scrollTop = this.$target.scrollTop()
	    var position  = this.$element.offset()
	    return (this.pinnedOffset = position.top - scrollTop)
	  }
	
	  Affix.prototype.checkPositionWithEventLoop = function () {
	    setTimeout($.proxy(this.checkPosition, this), 1)
	  }
	
	  Affix.prototype.checkPosition = function () {
	    if (!this.$element.is(':visible')) return
	
	    var height       = this.$element.height()
	    var offset       = this.options.offset
	    var offsetTop    = offset.top
	    var offsetBottom = offset.bottom
	    var scrollHeight = Math.max($(document).height(), $(document.body).height())
	
	    if (typeof offset != 'object')         offsetBottom = offsetTop = offset
	    if (typeof offsetTop == 'function')    offsetTop    = offset.top(this.$element)
	    if (typeof offsetBottom == 'function') offsetBottom = offset.bottom(this.$element)
	
	    var affix = this.getState(scrollHeight, height, offsetTop, offsetBottom)
	
	    if (this.affixed != affix) {
	      if (this.unpin != null) this.$element.css('top', '')
	
	      var affixType = 'affix' + (affix ? '-' + affix : '')
	      var e         = $.Event(affixType + '.bs.affix')
	
	      this.$element.trigger(e)
	
	      if (e.isDefaultPrevented()) return
	
	      this.affixed = affix
	      this.unpin = affix == 'bottom' ? this.getPinnedOffset() : null
	
	      this.$element
	        .removeClass(Affix.RESET)
	        .addClass(affixType)
	        .trigger(affixType.replace('affix', 'affixed') + '.bs.affix')
	    }
	
	    if (affix == 'bottom') {
	      this.$element.offset({
	        top: scrollHeight - height - offsetBottom
	      })
	    }
	  }
	
	
	  // AFFIX PLUGIN DEFINITION
	  // =======================
	
	  function Plugin(option) {
	    return this.each(function () {
	      var $this   = $(this)
	      var data    = $this.data('bs.affix')
	      var options = typeof option == 'object' && option
	
	      if (!data) $this.data('bs.affix', (data = new Affix(this, options)))
	      if (typeof option == 'string') data[option]()
	    })
	  }
	
	  var old = $.fn.affix
	
	  $.fn.affix             = Plugin
	  $.fn.affix.Constructor = Affix
	
	
	  // AFFIX NO CONFLICT
	  // =================
	
	  $.fn.affix.noConflict = function () {
	    $.fn.affix = old
	    return this
	  }
	
	
	  // AFFIX DATA-API
	  // ==============
	
	  $(window).on('load', function () {
	    $('[data-spy="affix"]').each(function () {
	      var $spy = $(this)
	      var data = $spy.data()
	
	      data.offset = data.offset || {}
	
	      if (data.offsetBottom != null) data.offset.bottom = data.offsetBottom
	      if (data.offsetTop    != null) data.offset.top    = data.offsetTop
	
	      Plugin.call($spy, data)
	    })
	  })
	
	}(jQuery);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* ========================================================================
	* Set element to parent width
	* [TODO: Write about what this is for, to make it easier for future
	* developers to know what to put into it, and what not to.]
	* ======================================================================== */
	
	'use strict';
	
	// FIXME: Reports linting error as it's defined as a module, but never used
	//If this is not in use then we can can delete?
	var parentWidth = function ($) {
	  var $target = $('*[data-parent-width=true], *[data-parent-width=1]');
	  $target.outerWidth($target.parent().width());
	}(jQuery);
	
	module.exports = parentWidth;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	'use strict';var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {return typeof obj;} : function (obj) {return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;}; /*! Form validation - v1.1.1 - 2014-04-09
	                                                                                                                                                                                                                                                                                        * https://github.com/bboyle/form-validation
	                                                                                                                                                                                                                                                                                        * Copyright (c) 2014 Ben Boyle; Licensed MIT */
	(function ($) {
	    'use strict';
	
	
	    var SUBMIT_TOLERANCE = 10000,
	    DEFAULT_STATUS_HTML = '<div class="status warn"><div class="inner"><h2>Please check your answers</h2><ol></ol></div></div>',
	    // fields that validate
	    candidateForValidation = 'input, select, textarea',
	
	
	    // invalidFilter
	    invalidFilter = function invalidFilter() {
	        return !(this.disabled || this.validity.valid);
	    },
	
	
	    // follow plugin conventions for storing plugin data
	    // http://docs.jquery.com/Plugins/Authoring#Data
	    pluginDataKey = 'formValidation',
	    pluginData = function pluginData(key, value) {
	        var dataHash = this.data(pluginDataKey) || this.data(pluginDataKey, {}).data(pluginDataKey);
	
	        if (typeof key !== 'undefined') {
	            if (typeof value !== 'undefined') {
	                dataHash[key] = value;
	                return value;
	            } else if (typeof dataHash[key] !== 'undefined') {
	                return dataHash[key];
	            }
	            return null;
	        }
	
	        return dataHash;
	    },
	
	
	    // helper for .label, .hint and .alert
	    getLabelComponent = function getLabelComponent(component, options) {
	        return this.map(function (index, domElement) {
	            var $element = $(domElement),
	            labelElement = null,
	            foundElement = null;
	
	            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options.level === 'group') {
	                foundElement = $element.formValidation('group').find(component)[0];
	            } else if ($element.is(':radio, :checkbox')) {
	                foundElement = $element.closest('fieldset').find(component)[0];
	            } else {
	                labelElement = $element.closest('form').find('label[for="' + domElement.id + '"]');
	                foundElement = labelElement.children(component)[0];
	                if (!foundElement) {
	                    if (component === '.hint') {
	                        labelElement.append('<small class="hint"></small>');
	                        foundElement = labelElement.children(component)[0];
	                    }
	                }
	            }
	            return foundElement;
	        });
	    },
	
	
	    changeValidityCheck = function changeValidityCheck() {
	        var $this = $(this),
	        alertElement = $this.formValidation('alert'),
	        alertLevel,
	        invalidContainers;
	
	        // is this control valid?
	        if (this.validity.valid) {
	            // is it part of a group that contain other invalid controls?
	            if ($this.formValidation('question').find('.alert').filter(alertElement).length > 0) {
	                alertElement.remove();
	            } else {
	                // update message from first invalid field in group
	                invalidContainers = $this.formValidation('group').find(candidateForValidation).filter(invalidFilter);
	                if (invalidContainers.length > 0) {
	                    alertElement.text(invalidContainers.formValidation('getValidationMessage'));
	                } else {
	                    // all fields valid
	                    alertElement.remove();
	                }
	            }
	
	            // remove invalid class from ancestors that do not contain invalid fields
	            $this.parentsUntil('form', '.invalid').filter(function () {
	                return $(this).find(candidateForValidation).filter(invalidFilter).length === 0;
	            })
	            // remove .invalid class
	            .removeClass('invalid')
	            // remove old alerts (change handler should have already done this)
	            .find('.alert').
	            remove();
	        } else {
	            // does alert exist?
	            if (alertElement.length === 0) {
	                alertElement = $('<em class="alert"/>');
	            }
	            // show message
	            alertElement.text($this.formValidation('getValidationMessage'));
	            // append to form
	            if ($this.formValidation('group').hasClass('atomic')) {
	                alertLevel = { 'level': 'group' };
	            }
	
	            $this.formValidation('label', alertLevel).parent().find('.label, abbr[title="(required)"]').eq(-1).
	            after(alertElement);
	
	            // NOTE we don't flag the question as .invalid now
	            // .invalid only happens on submit, to soften inline validation errors
	        }
	    },
	
	
	    // checks for invalid elements
	    // returns number of invalid elements
	    submitValidityCheck = function submitValidityCheck() {
	        // form object
	        var form = $(this).closest('form'),
	
	        // invalid fields
	        invalid = form.find(candidateForValidation).filter(function invalidFields() {
	            // skip disabled
	            if (this.disabled) {
	                return false;
	            }
	
	            // only check radio button groups once (skip individual radio button)
	            if (this.type === 'radio') {
	                if (!invalidFields.cache) {
	                    invalidFields.cache = {};
	                } else if (invalidFields.cache[this.name] === true) {
	                    return false;
	                }
	                invalidFields.cache[this.name] = true;
	            }
	
	            return this.validity && !this.validity.valid;
	        }),
	
	        // alert container
	        alert = pluginData.call(form, 'summaryElement') || pluginData.call(form, 'summaryElement', $(DEFAULT_STATUS_HTML)),
	
	        // messages within alert
	        messages = alert.find('ol'),
	
	        // track groups
	        lastGroupSeen = true;
	
	        if (invalid.length > 0) {
	            // remove old messages
	            messages.find('li').remove();
	
	            // add new messages
	            invalid.each(function () {
	                // get field
	                var $this = $(this),
	                // get group (if exists)
	                group = $this.formValidation('group'),
	                // get label or group label
	                label = $this.formValidation('label', {
	                    level: group.length > 0 ? 'group' : null }),
	
	                labelId,
	                item;
	
	                // get the label id
	                if (label.length > 0) {
	                    labelId = label[0].id || label.generateId('label-' + this.id)[0].id;
	                } else {
	                    labelId = this.name;
	                }
	
	                // get alert item
	                item = pluginData.call($this, 'summaryElement') || pluginData.call($this, 'summaryElement', $('<li><a href="#' + labelId + '"></a></li>'));
	
	                if (group.length === 0 || group[0] !== lastGroupSeen) {
	                    // update last group seen
	                    lastGroupSeen = group[0];
	
	                    // create error message with link to label
	                    item.
	                    find('a').
	                    text(label.text().replace(/\?$/, '') + ': ' + $this.formValidation('getValidationMessage')).
	                    end().
	                    appendTo(messages);
	                } else {
	                    // remove from DOM
	                    item.remove();
	                }
	            });
	        }
	
	        return invalid.length;
	    },
	
	
	    submitValidationHandler = function submitValidationHandler(event) {
	        // validate form
	        var count = submitValidityCheck.call(this),
	        form = $(this);
	
	        // remove invalid class from questions that do not contain invalid fields
	        form.find('.invalid').filter(function () {
	            return $(this).find(candidateForValidation).filter(invalidFilter).length === 0;
	        })
	        // remove .invalid class
	        .removeClass('invalid')
	        // remove old alerts (change handler should have already done this)
	        .find('.alert').
	        remove();
	
	
	
	        // anything invalid?
	        if (count > 0) {
	            // cancel submit
	            event.stopImmediatePropagation();
	            event.preventDefault();
	
	            // show the error summary
	            (function (form) {
	                var summary = pluginData.call(form, 'summaryElement');
	                // hide any previous status blocks
	                form.prev('.status').not(summary).remove();
	                // show the new summary
	                form.before(summary.fadeIn());
	                // focus/scroll summary element
	                $(window).scrollTop(summary.offset().top);
	            })(form);
	
	            // find all the invalid fields
	            form.find(candidateForValidation).filter(invalidFilter).each(function () {
	                // update inline alerts
	                changeValidityCheck.call(this);
	            })
	            // set .invalid on ancestor LI elements
	            .parentsUntil('form', '.questions > li')
	            // but not sections
	            .not('.section, .compact').
	            addClass('invalid');
	
	
	            // trigger x-invalid
	            form.trigger('x-invalid');
	
	            // cancel submit
	            return false;
	        }
	    },
	
	
	    // bind this AFTER the validation handler
	    // only invoked if validation did not prevent submit
	    submitDoneHandler = function submitDoneHandler(event) {
	        // use event.timeStamp when available and $.now() otherwise
	        var timeStamp = event.timeStamp || $.now(),
	        form = $(this),
	        summaryElement = pluginData.call(form, 'summaryElement'),
	        lastSubmitTimeStamp;
	
	
	        // remove summary element from DOM on successful submit
	        if (summaryElement) {
	            summaryElement.remove();
	        }
	
	        // is this submit event too soon after the last one?
	        lastSubmitTimeStamp = pluginData.call(form, 'lastSubmitTimeStamp');
	        if (lastSubmitTimeStamp && timeStamp - lastSubmitTimeStamp < SUBMIT_TOLERANCE) {
	            // cancel the submit event
	            event.stopImmediatePropagation();
	            event.preventDefault();
	            return false;
	        } else {
	            // store the timestamp
	            pluginData.call(form, 'lastSubmitTimeStamp', timeStamp);
	        }
	    },
	
	
	    // plugin methods
	    methods = {
	        // $( x ).formValidation( 'alert' ) -- get
	        // get alert text
	        alert: function alert() {
	            return this.map(function (index, domElement) {
	                var $element = $(domElement),
	                group;
	
	                if ($element.is(':radio, :checkbox') === true) {
	                    return $element.closest('fieldset').find('legend > .alert')[0];
	                } else {
	                    // atomic groups
	                    group = $element.formValidation('group').filter('.atomic');
	                    if (group.length > 0) {
	                        return group.find('legend > .alert')[0];
	                    } else {
	                        return $('label[for="' + domElement.id + '"] > .alert')[0];
	                    }
	                }
	            });
	        },
	
	
	        // $( x ).formValidation( 'label' )
	        // $( x ).formValidation( 'label', { level : group })
	        // return .label associated with element or containing group
	        label: function label(options) {
	            return getLabelComponent.call(this, '.label', options);
	        },
	
	
	        // $( x ).formValidation( 'hint' )
	        // $( x ).formValidation( 'hint', { level : group })
	        // return .hint associated with element or containing group
	        hint: function hint(options) {
	            return getLabelComponent.call(this, '.hint', options);
	        },
	
	
	        // $( x ).formValidation( 'question' )
	        // return question element for item
	        question: function question(options) {
	            // looking for group?
	            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' && options.level === 'group') {
	                // return the group
	                return this.formValidation('group');
	            }
	
	            // not looking for group
	            return this.map(function (index, domElement) {
	                return $(domElement).parentsUntil('form', '.questions > li')[0];
	            });
	        },
	
	
	        // $( x ).formValidation( 'group' )
	        // return group element for item
	        group: function group() {
	            return this.map(function (index, domElement) {
	                return $(domElement).parentsUntil('form', '.group').filter(function () {
	                    // ignore groups that do not contain fieldsets
	                    return $(this).children('fieldset').length > 0;
	                })[0];
	            });
	        },
	
	
	        // $( x ).formValidation( 'validate' )
	        // binds validation handler functions
	        // sets @novalidate on form to disable built-in validation
	        // TODO allow this to be called multiple times without binding additional handlers!
	        validate: function validate() {
	            return this.each(function () {
	                $(this).closest('form')
	                // turn off native validation
	                .attr('novalidate', true)
	                // unbind and rebind handlers
	                .unbind('submit', submitDoneHandler).
	                unbind('submit', submitValidationHandler)
	                // validate this form
	                .bind('submit', submitValidationHandler)
	                // if validation did not cancel submit…
	                .bind('submit', submitDoneHandler)
	                // bind inline validation handlers to form elements
	                .find(candidateForValidation).
	                unbind('change', changeValidityCheck).
	                bind('change', changeValidityCheck);
	
	            });
	        },
	
	
	        // $( x ).formValidation( 'getValidationMessage' )
	        // return String validation message, e.g. "Must be completed"
	        getValidationMessage: function getValidationMessage() {
	
	            var validityState = this[0].validity;
	
	            if (typeof validityState === 'undefined' || validityState.valid === true) {
	                return '';
	            } else if (validityState.valueMissing) {
	                return 'Must be completed';
	            } else if (validityState.customError) {
	                return this[0].validationMessage;
	            } else if (validityState.typeMismatch) {
	                return 'Must be an email address';
	            } else if (validityState.patternMismatch) {
	                return 'Must use the format shown';
	            } else {
	                return 'Must be a valid answer';
	            }
	        } };
	
	
	
	    $.fn.formValidation = function (method) {
	        // Method calling logic
	        // http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
	        if (methods[method]) {
	            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	        } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
	            return methods.init.apply(this, arguments);
	        } else {
	            $.error('Method ' + method + ' does not exist on jQuery.formValidation');
	        }
	
	    };
	
	
	    // legacy API
	    $.fn.forcesForms = $.fn.formValidation;
	})(jQuery);
	/*! Generate ID - v1.0.3 - 2014-09-18
	             * https://github.com/bboyle/Generate-ID
	             * Copyright (c) 2014 Ben Boyle; Licensed MIT */
	(function ($) {
	    'use strict';
	
	
	    /**
	                   * Assigns a unique value to `@id` unless hasAttribute( 'id' ) is true
	                   *
	                   * @param preferredId string to use for id value
	                   *
	                   * @return jquery object (chaining supported)
	                   */
	    $.fn.generateId = function (preferredId) {
	
	        var i = 1;
	
	        if (!preferredId) {
	            preferredId = 'id';
	        } else {
	            preferredId = $.trim(preferredId.toLowerCase().replace(/[^a-z0-9_]+/g, ' ')).replace(/\s+/g, '-');
	        }
	
	        return this.each(function () {
	
	            var id;
	
	            if (!this.getAttribute('id')) {
	
	                id = preferredId;
	                while (document.getElementById(id)) {
	                    id = preferredId + String(i);
	                    i++;
	                }
	                this.setAttribute('id', id);
	            }
	        });
	
	    };
	
	
	})(jQuery);
	/*! HTML5 constraintValidationAPI - v1.0.7 - 2015-02-19
	             * https://github.com/bboyle/html5-constraint-validation-API
	             * Copyright (c) 2015 Ben Boyle; Licensed MIT */
	/*exported initConstraintValidationAPI*/
	if (jQuery !== 'undefined') {
	    (function ($) {
	        'use strict';
	
	
	        // http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#valid-e-mail-address
	        // 1*( atext / "." ) "@" ldh-str 1*( "." ldh-str )
	        var REXP_EMAIL = /^[A-Za-z0-9!#$%&'*+\-\/=\?\^_`\{\|\}~\.]+@[A-Za-z0-9\-]+(\.[A-Za-z0-9\-]+)*$/,
	
	        // fields that validate
	        candidateForValidation = 'input, select, textarea',
	
	        // for feature detection
	        input = $('<input>').get(0),
	
	        // polyfill test
	        polyfill = _typeof(input.validity) !== 'object',
	
	        // radio button bug (google earth internal browser)
	        radioButtonBug = !polyfill && $('<input type="radio" required checked>').get(0).validity.valueMissing === true,
	        validateBuggyRadioButtons,
	
	        // invalid fields filter
	        isInvalid = function isInvalid() {
	            return !(this.disabled || this.validity.valid);
	        },
	
	        // get all radio buttons
	        getRadioButtonsInGroup = function getRadioButtonsInGroup(radio) {
	            return $(radio.form.elements[radio.name]).filter('[name="' + radio.name + '"]');
	        },
	
	
	        // manage validity state object
	        validityState = function validityState(typeMismatch, valueMissing, customError, message, patternMismatch) {
	
	            if (typeof message === 'string') {
	                customError = !!message;
	            }
	            return {
	                customError: customError,
	                typeMismatch: !!typeMismatch,
	                patternMismatch: !!patternMismatch,
	                valueMissing: !!valueMissing,
	                valid: !valueMissing && !customError && !typeMismatch && !patternMismatch };
	
	        },
	
	
	        validateField = function validateField(message) {
	            var $this = $(this),
	            required = !!$this.attr('required'),
	            radio = this.type === 'radio' && getRadioButtonsInGroup(this),
	            valueMissing,
	            invalidEmail = this.getAttribute('type') === 'email' && !!this.value && !REXP_EMAIL.test(this.value),
	            patternMismatch,
	            pattern,
	            newValidityState;
	
	
	            // radio buttons are required if any single radio button is flagged as required
	            if (radio && !required) {
	                required = radio.filter('[required]').length > 0;
	            }
	            // if required, check for missing value
	            if (required) {
	
	                if (/^select$/i.test(this.nodeName)) {
	                    valueMissing = this.selectedIndex === 0 && this.options[0].value === '';
	
	                } else if (radio) {
	                    valueMissing = radio.filter(':checked').length === 0;
	
	                } else if (this.type === 'checkbox') {
	                    valueMissing = !this.checked;
	
	                } else {
	                    valueMissing = !this.value;
	                }
	
	            }
	
	            if (!!this.getAttribute('pattern')) {
	                if (this.value.length > 0) {
	                    // http://www.whatwg.org/specs/web-apps/current-work/multipage/common-input-element-attributes.html#compiled-pattern-regular-expression
	                    pattern = new RegExp('^(?:' + this.getAttribute('pattern') + ')$');
	
	                    patternMismatch = !pattern.test(this.value);
	
	                } else {
	                    patternMismatch = false;
	                }
	            }
	
	            // set .validityState
	            newValidityState = validityState(invalidEmail, valueMissing, this.validity.customError || false, message, patternMismatch);
	            if (radio) {
	                getRadioButtonsInGroup(this).each(function () {this.validity = newValidityState;});
	            } else {
	                this.validity = newValidityState;
	            }
	
	            // set .validationMessage
	            if (this.validity.valid) {
	                this.validationMessage = '';
	
	            } else if (this.validity.customError) {
	                if (typeof message === 'string') {
	                    this.validationMessage = message;
	                }
	
	            } else if (this.validity.valueMissing) {
	                this.validationMessage = 'Please answer this question';
	
	            } else if (this.validity.typeMismatch) {
	                this.validationMessage = 'Please type an email address';
	
	            } else if (this.validity.patternMismatch) {
	                this.validationMessage = 'Please use the format shown';
	
	            } else {
	                this.validationMessage = 'Please answer the question correctly';
	            }
	
	            return this.disabled || this.validity.valid;
	        },
	
	
	        changeHandler = function changeHandler(event) {
	            var target = event.target;
	
	            validateField.call(target);
	
	            if (target.type === 'radio') {
	                getRadioButtonsInGroup(target).each(function () {
	                    this.validity = target.validity;
	                    this.validationMessage = target.validationMessage;
	                });
	            }
	        },
	
	
	        submitHandler = function submitHandler(event) {
	
	            var form = $(this),
	            novalidate = !!form.attr('novalidate'),
	            invalid = false;
	
	
	            // polyfill validation?
	            if (polyfill) {
	                // check fields
	                form.find(candidateForValidation).each(function () {
	
	                    invalid = !validateField.call(this);
	
	
	                    // unless @novalidate
	                    if (!novalidate) {
	                        // if invalid
	                        if (invalid) {
	                            // use triggerHandler because invalid does not bubble
	                            $(this).triggerHandler('invalid');
	                        }
	                    }
	                });
	            }
	
	            // NOTE all the code below runs in all browsers to polyfill implementation bugs
	
	            // required radio button check
	            if (radioButtonBug) {
	                validateBuggyRadioButtons(this);
	            }
	
	            // Opera 11 on OSX fires submit event even when fields are invalid
	            // correct implementations will not invoke this submit handler until all fields are valid
	
	            // unless @novalidate
	            // if there are invalid fields
	            if (!novalidate && form.find(candidateForValidation).filter(isInvalid).length > 0) {
	                // abort submit
	                event.stopImmediatePropagation();
	                event.preventDefault();
	                return false;
	            }
	        },
	
	
	        initConstraintValidationAPI = function initConstraintValidationAPI() {
	            var candidates = $(candidateForValidation);
	
	            // INPUT validityState
	            if (polyfill) {
	                // set us up the API
	                candidates.filter(function () {
	                    return _typeof(this.validity) !== 'object';
	                }).each(function () {
	
	                    this.validity = validityState(false, false, false, '', false);
	                    this.validationMessage = '';
	
	                });
	
	                // check validity on change
	                candidates.
	                unbind('change.constraintValidationAPI').
	                bind('change.constraintValidationAPI', changeHandler);
	
	            }
	
	            // INPUT validitationMessage
	            if (typeof input.validationMessage !== 'string') {
	                // set us up the API
	                candidates.filter(function () {
	                    return typeof this.validationMessage !== 'string';
	                }).each(function () {
	                    this.validationMessage = '';
	                });
	            }
	
	            // INPUT checkValidity
	            if (typeof input.checkValidity !== 'function') {
	                // set us up the API
	                candidates.filter(function () {
	                    return typeof this.checkValidity !== 'function';
	                }).each(function () {
	                    var domElement = this;
	
	                    this.checkValidity = function () {
	                        var valid = validateField.call(domElement);
	
	                        // if invalid, and unless novalidate
	                        if (!valid && !this.form.getAttribute('novalidate')) {
	                            // use triggerHandler because invalid does not bubble
	                            $(domElement).triggerHandler('invalid');
	                        }
	
	                        return valid;
	                    };
	                });
	            }
	
	            // INPUT setCustomValidity
	            if (typeof input.setCustomValidity !== 'function') {
	                // set us up the API
	                candidates.filter(function () {
	                    return typeof this.setCustomValidity !== 'function';
	                }).each(function () {
	                    var that = this;
	
	                    this.setCustomValidity = function (message) {
	                        validateField.call(that, message);
	                    };
	                });
	            }
	
	            // check for required radio button bug (google earth internal browser)
	            if (radioButtonBug) {
	                validateBuggyRadioButtons = function validateBuggyRadioButtons(form) {
	                    var seen = {};
	                    var radio,
	                    valueMissing;
	
	                    // check every required radio button
	                    $('input', form).filter(':radio').filter('[required],[aria-required="true"]').each(function () {
	                        if (typeof seen[this.name] === 'undefined') {
	                            seen[this.name] = true;
	
	                            radio = getRadioButtonsInGroup(this);
	                            valueMissing = radio.filter(':checked').length === 0;
	
	                            if (valueMissing) {
	                                // make sure @required is set to use validation API
	                                radio.attr('required', 'required');
	                            } else {
	                                // using @aria-required=true so we can track this control
	                                // removing @required here to bypass validation bug
	                                radio.attr('aria-required', true).removeAttr('required');
	                            }
	                        }
	                    });
	                };
	
	                // initial validity
	                $('form').each(validateBuggyRadioButtons);
	
	                // watch changes
	                if (!polyfill) {
	                    candidates.filter(':radio').
	                    unbind('change.constraintValidationAPI').
	                    bind('change.constraintValidationAPI', function () {
	                        validateBuggyRadioButtons(this.form);
	                    });
	
	                }
	            }
	
	            // check validity on submit
	            // this should be bound before all other submit handlers bound to the same form
	            // otherwise they will execute before this handler can cancel submit (oninvalid)
	            $('form').
	            unbind('submit.constraintValidationAPI').
	            bind('submit.constraintValidationAPI', submitHandler);
	
	        };
	
	
	
	        // run immediately and ondocumentready
	        initConstraintValidationAPI();
	        $(initConstraintValidationAPI);
	
	
	        // expose init function
	        window.initConstraintValidationAPI = initConstraintValidationAPI;
	
	
	    })(jQuery);
	}
	/*
	   * jQuery Simply Countable plugin
	   * Provides a character counter for any text input or textarea
	   *
	   * @version  0.4.2
	   * @homepage http://github.com/aaronrussell/jquery-simply-countable/
	   * @author   Aaron Russell (http://www.aaronrussell.co.uk)
	   *
	   * Copyright (c) 2009-2010 Aaron Russell (aaron@gc4.co.uk)
	   * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
	   * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
	   */
	
	(function ($) {
	
	    $.fn.simplyCountable = function (options) {
	
	        options = $.extend({
	            counter: '#counter',
	            countType: 'characters',
	            maxCount: 140,
	            strictMax: false,
	            countDirection: 'down',
	            safeClass: 'safe',
	            overClass: 'over',
	            thousandSeparator: ',',
	            onOverCount: function onOverCount() {},
	            onSafeCount: function onSafeCount() {},
	            onMaxCount: function onMaxCount() {} },
	        options);
	
	        var navKeys = [33, 34, 35, 36, 37, 38, 39, 40];
	
	        return $(this).each(function () {
	
	            var countable = $(this),
	            counter = $(options.counter);
	            if (!counter.length) {return false;}
	
	            var countCheck = function countCheck() {
	
	                var count;
	                var revCount;
	
	                var reverseCount = function reverseCount(ct) {
	                    return ct - ct * 2 + options.maxCount;
	                };
	
	                var countInt = function countInt() {
	                    return options.countDirection === 'up' ? revCount : count;
	                };
	
	                var numberFormat = function numberFormat(ct) {
	                    var prefix = '';
	                    if (options.thousandSeparator) {
	                        ct = ct.toString();
	                        // Handle large negative numbers
	                        if (ct.match(/^-/)) {
	                            ct = ct.substr(1);
	                            prefix = '-';
	                        }
	                        for (var i = ct.length - 3; i > 0; i -= 3) {
	                            ct = ct.substr(0, i) + options.thousandSeparator + ct.substr(i);
	                        }
	                    }
	                    return prefix + ct;
	                };
	
	                var changeCountableValue = function changeCountableValue(val) {
	                    countable.val(val).trigger('change');
	                };
	
	                /* Calculates count for either words or characters */
	                if (options.countType === 'words') {
	                    count = options.maxCount - $.trim(countable.val()).split(/\s+/).length;
	                    if (countable.val() === '') {count += 1;}
	                } else {
	                    count = options.maxCount - countable.val().length;
	                }
	                revCount = reverseCount(count);
	
	                /* If strictMax set restrict further characters */
	                if (options.strictMax && count <= 0) {
	                    var content = countable.val();
	                    if (count < 0) {
	                        options.onMaxCount(countInt(), countable, counter);
	                    }
	                    if (options.countType === 'words') {
	                        var allowedText = content.match(new RegExp('\\s?(\\S+\\s+){' + options.maxCount + '}'));
	                        if (allowedText) {
	                            changeCountableValue(allowedText[0]);
	                        }
	                    } else {changeCountableValue(content.substring(0, options.maxCount));}
	                    count = 0, revCount = options.maxCount;
	                }
	
	                counter.text(numberFormat(countInt()));
	
	                /* Set CSS class rules and API callbacks */
	                if (!counter.hasClass(options.safeClass) && !counter.hasClass(options.overClass)) {
	                    if (count < 0) {
	                        counter.addClass(options.overClass);
	                    } else {
	                        counter.addClass(options.safeClass);
	                    }
	                } else if (count < 0 && counter.hasClass(options.safeClass)) {
	                    counter.removeClass(options.safeClass).addClass(options.overClass);
	                    options.onOverCount(countInt(), countable, counter);
	                } else if (count >= 0 && counter.hasClass(options.overClass)) {
	                    counter.removeClass(options.overClass).addClass(options.safeClass);
	                    options.onSafeCount(countInt(), countable, counter);
	                }
	
	            };
	
	            countCheck();
	
	            countable.on('keyup blur paste', function (e) {
	                switch (e.type) {
	                    case 'keyup':
	                        // Skip navigational key presses
	                        if ($.inArray(e.which, navKeys) < 0) {countCheck();}
	                        break;
	                    case 'paste':
	                        // Wait a few miliseconds if a paste event
	                        setTimeout(countCheck, e.type === 'paste' ? 5 : 0);
	                        break;
	                    default:
	                        countCheck();
	                        break;}
	
	            });
	
	        });
	
	    };
	
	})(jQuery); /*! relevance - v2.1.0 - 2015-03-04
	            * https://github.com/bboyle/relevance
	            * Copyright (c) 2015 Ben Boyle; Licensed MIT */
	if (jQuery !== 'undefined') {
	    (function ($) {
	        'use strict';
	
	        var relevantEvent = 'relevant',
	        irrelevantEvent = 'irrelevant',
	        elementsToDisable = 'button, input, select, textarea',
	        polyfillHidden = function () {
	            var hidden = $('<div hidden></div>');
	            var hiddenSupported = hidden.appendTo('body').is(':hidden');
	            hidden.remove();
	            return !hiddenSupported;
	        }(),
	
	        formElementsByName = function formElementsByName(form, name) {
	            // filter out the @id matching of HTMLFormElement.elements[]
	            return $(form.elements[name]).filter('[name="' + name + '"]');
	        },
	
	        filterRelevant = function filterRelevant() {
	            return $(this).closest('[hidden]').length === 0;
	        },
	
	        filterIrrelevant = function filterIrrelevant() {
	            return $(this).closest('[hidden]').length > 0;
	        },
	
	        valueMap = function valueMap(element) {
	            return element.value;
	        },
	
	        valueInArray = function valueInArray(possibleValues, actualValues) {
	            var i;
	            if ((typeof possibleValues === 'undefined' ? 'undefined' : _typeof(possibleValues)) !== 'object') {
	                possibleValues = [possibleValues];
	            }
	
	            for (i = 0; i < actualValues.length; i++) {
	                if ($.inArray(actualValues[i], possibleValues) !== -1) {
	                    return true;
	                }
	            }
	
	            return false;
	        },
	
	        // when changing a control that alters relevance of other elements…
	        recalculateRelevance = function recalculateRelevance() {
	            // assume dependency map exists
	            var map = $(this.form).data('relevance').dependencyMap[this.name],
	            values = $.map(formElementsByName(this.form, this.name).filter('select,:checked').filter(':visible'), valueMap);
	
	
	            $.each(map, function (index, config) {
	                config.items.relevance('relevant', valueInArray(config.values, values) !== config.negate);
	            });
	        },
	
	        // when an element changes relevance, check descendent controls that alter relevance in turn…
	        recalculateDependents = function recalculateDependents(isRelevant) {
	            var form,
	            dependencyMap,
	            targets;
	
	            // any change to relevant toggles?
	            form = this.closest('form');
	            if (form.length) {
	                dependencyMap = form.data('relevance');
	                if ((typeof dependencyMap === 'undefined' ? 'undefined' : _typeof(dependencyMap)) === 'object') {
	                    dependencyMap = dependencyMap.dependencyMap;
	                    if ((typeof dependencyMap === 'undefined' ? 'undefined' : _typeof(dependencyMap)) === 'object') {
	                        // get descendent-or-self select, radio and checkbox
	                        targets = this.add(this.find('select,input')).filter('select,:radio,:checkbox');
	                        // get unique @name for select, radio and checkbox
	                        targets = $.unique($.map(targets, function (elementOfArray) {
	                            return elementOfArray.name;
	                        }));
	                        $.each(targets, function (index, name) {
	                            var map = dependencyMap[name],
	                            values;
	
	                            if ((typeof map === 'undefined' ? 'undefined' : _typeof(map)) === 'object') {
	                                $.each(map, function (index, config) {
	                                    if (isRelevant === false) {
	                                        config.items.relevance('relevant', false);
	
	                                    } else {
	                                        values = $.map(formElementsByName(form[0], name).filter('select,:checked').filter(':visible'), valueMap);
	                                        config.items.relevance('relevant', valueInArray(config.values, values) !== config.negate);
	                                    }
	                                });
	                            }
	                        });
	                    }
	                }
	            }
	        },
	
	
	        methods = {
	
	            // $( x ).relevance( 'relevant', true )
	            // if the element is hidden, fire a 'relevant' event
	            // $( x ).relevance( 'relevant', false )
	            // if the element is visible, fire an "irrelevant" event
	            relevant: function relevant(makeRelevant) {
	                var targets;
	                if (makeRelevant) {
	                    targets = this.filter(filterIrrelevant).trigger(relevantEvent);
	                } else {
	                    targets = this.filter(filterRelevant).trigger(irrelevantEvent);
	                }
	                if (targets.length) {
	                    recalculateDependents.call(targets, makeRelevant);
	                }
	                return this;
	            },
	
	            // $( x ).relevance( 'show' )
	            // shows the element (does not check if element is already visible)
	            // triggers 'relevant-done' after showing is complete
	            show: function show() {
	                // enable elements before they are shown
	                this.add(this.find(elementsToDisable))
	                // but not any controls that will remain irrelevant
	                .not(this.find('[hidden]').find(elementsToDisable)).
	                each(function () {
	                    this.removeAttribute('disabled');
	                });
	
	                // stop animation, remove @hidden and @aria-hidden, start showing
	                if (polyfillHidden) {
	                    this.stop(true, true).slideDown();
	                }
	                return this.removeAttr('hidden').removeAttr('aria-hidden');
	            },
	
	            // $( x ).relevance( 'hide' )
	            // hides the element (does not check if element is already hidden)
	            hide: function hide() {
	                this.attr({
	                    hidden: 'hidden',
	                    'aria-hidden': 'true' });
	
	
	                if (polyfillHidden) {
	                    this.stop(true, true).hide(0, function () {
	                        var $this = $(this);
	                        // disable elements (including self if appropriate)
	                        $this.filter(elementsToDisable).add($this.find(elementsToDisable)).each(function () {
	                            this.setAttribute('disabled', 'disabled');
	                        });
	                    });
	                } else {
	                    this.filter(elementsToDisable).add(this.find(elementsToDisable)).each(function () {
	                        this.setAttribute('disabled', 'disabled');
	                    });
	                }
	
	                return this;
	            },
	
	            // $( x ).relevance( 'relevantWhen', { name: radio/checkbox/select, value: requiredValue, negate: false | true })
	            // sets up dependent relevance
	            // example: $( '#red' ).relevance( 'relevantWhen', { name: 'rgb', value: 'red' })
	            // example: $( '#red' ).relevance( 'relevantWhen', { id: 'rgb-red', value: 'red' })
	            // #red will be shown/hidden when '@name=rgb' value changes.
	            relevantWhen: function relevantWhen(config) {
	                var form,
	                data,
	                name,
	                values;
	
	                values = config.values || [config.value];
	
	                if (config.name) {
	                    name = config.name;
	                } else if (config.id) {
	                    name = document.getElementById(config.id).name;
	                } else if (config.container) {
	                    name = $(config.container).find('select,:radio,:checkbox').attr('name');
	                }
	                config.negate = config.negate === true;
	
	                // find the form that has this control
	                form = this.closest('form');
	                // get dependency map (create it if needed)
	                data = form.data('relevance');
	                if ((typeof data === 'undefined' ? 'undefined' : _typeof(data)) !== 'object') {
	                    data = {};
	                    form.data('relevance', data);
	                }
	                if (_typeof(data.dependencyMap) !== 'object') {
	                    data.dependencyMap = {};
	                }
	                if (_typeof(data.dependencyMap[name]) !== 'object') {
	                    data.dependencyMap[name] = [];
	                    // setup event handlers for name
	                    formElementsByName(form[0], name).
	                    filter(':radio,:checkbox').
	                    bind('click', recalculateRelevance).
	                    end().
	                    filter('select').
	                    bind('change', recalculateRelevance);
	
	                }
	                // add or update relevance rule
	                data.dependencyMap[name].push({
	                    items: this,
	                    values: values,
	                    negate: config.negate });
	
	
	                // initial relevance
	                this.relevance('relevant', valueInArray(values, $.map(formElementsByName(form[0], name).filter('select,:checked').filter(':visible'), valueMap)) !== config.negate);
	
	                return this;
	            },
	
	            // $( x ).relevance( 'instructions', options )
	            // sets up relevance handling based on text instructions
	            // options ::= { instructions: '.relevance', questions: '.questions > li' }
	            instructions: function instructions(options) {
	                options = $.extend({
	                    instructionSelector: '.relevance',
	                    questionSelector: '.questions > li' },
	                options);
	
	                this.find(options.instructionSelector).each(function () {
	                    var $this = $(this),
	                    value = $this.text(),
	                    question = $this.closest(options.questionSelector),
	                    toggle = question.prevAll(options.questionSelector),
	                    i,
	                    answers,
	                    nestedToggles,
	                    match = false,
	                    negate = false;
	
	                    // pattern: (If different to <PREVIOUS QUESTION>)
	                    if (/If different to/.test(value)) {
	                        // assume previous 'li' is the toggle
	                        match = true;
	                        toggle = toggle.eq(0);
	                        value = toggle.find(':checkbox').val();
	                        negate = true;
	                    } else {
	                        value = value.replace(/^.*chose\s+\S([^'"’]+)\S\s+above.*$/, '$1');
	                        // which of the previous questions is the toggle?
	                        i = 0;
	                        while (i < toggle.length) {
	                            // does this item have the answer we need?
	                            answers = $.map(toggle.eq(i).find('option,:radio,:checkbox'), valueMap);
	                            if (valueInArray(value, answers)) {
	                                nestedToggles = toggle.eq(i).find(options.questionSelector);
	                                if (nestedToggles.length) {
	                                    toggle = $(nestedToggles.get().reverse());
	                                    i = 0;
	                                } else {
	                                    match = true;
	                                    toggle = toggle.eq(i); // toggle.length becomes 1, loop will exit
	                                    i = 1; // exit loop
	                                }
	                            } else {
	                                i++;
	                            }
	                        }
	                    }
	                    if (match) {
	                        toggle = toggle.add(toggle.find('select,input')).filter('select,:radio,:checkbox');
	                        question.relevance('relevantWhen', { name: toggle.attr('name'), value: value, negate: negate });
	                    }
	                });
	                return this;
	            } };
	
	        // fallback (default) event handling
	        $(document).bind('relevant irrelevant', function (event) {
	            var target = $(event.target);
	            if (event.type === 'relevant') {
	                target.relevance('show');
	            } else {
	                target.relevance('hide');
	            }
	        });
	
	        $.fn.relevance = function (method) {
	            // Method calling logic
	            // http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
	            if (methods[method]) {
	                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	            } else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
	                // return methods.init.apply( this, arguments );
	                return this;
	            } else {
	                $.error('Method ' + method + ' does not exist on jQuery.relevance');
	            }
	        };
	    })(jQuery);
	}
	(function ($) {
	    'use strict';
	
	    // window.console.log( 'file-size-validation.js' );
	
	    var displayFileSize;
	
	
	    // bail out if no file API support
	    if (_typeof($('<input type="file">')[0].files) !== 'object') {
	        // duplicate fsize instruction before submit button
	        $('.max-fsize').each(function () {
	            var fsize = $(this),
	            form;
	            form = fsize.closest('.preamble').nextAll('form').eq(0);
	            form.find('.actions').before('<p>' + fsize.parent().html() + '</p>');
	        });
	        return;
	    }
	
	
	    // display file size
	    displayFileSize = function displayFileSize(input) {
	        input.nextAll('.fsize').remove();
	        if (input[0].files.length > 0) {
	            var filesize = input[0].files[0].size / 1024;
	
	            if (filesize >= 1024) {
	                filesize = filesize / 1024;
	                input.after('<span class="fsize">File size: ' + Math.round(filesize * 10) / 10 + 'MB' + '</span>');
	            } else {
	                input.after('<span class="fsize">File size: ' + Math.round(filesize * 10) / 10 + 'KB' + '</span>');
	            }
	        }
	    };
	
	
	    // forms with max file size
	    $('.max-fsize').each(function () {
	        var fsize = $(this),
	        form,
	        maxFileSize;
	
	        // read fsize, assume MB
	        maxFileSize = parseInt(fsize.text().replace(/\D+/g, ''), 10) * 1024 * 1024;
	        // window.console.log( 'found max fsize', maxFileSize );
	
	        // get form (closest form after the preamble)
	        form = fsize.closest('.preamble').nextAll('form').eq(0);
	
	        form.find(':file').on('change', function () {
	            var input = $(this);
	
	            displayFileSize(input);
	
	            // recalculate file sizes
	            var total = 0,
	            valid;
	            $(':file', this.form).each(function (index, element) {
	                var size = element.files.length ? element.files[0].size : 0;
	                total += size; // total = total + size;
	            });
	
	            // is everything valid or invalid?
	            valid = total <= maxFileSize;
	
	            // window.console.info( 'file size validation:', total, '<', maxFileSize, total < maxFileSize );
	
	            $(':file', this.form)
	            // update validity for :file inputs with values
	            .filter(function () {
	                return !!this.value;
	            }).
	            each(function (index, element) {
	                element.setCustomValidity(valid ? '' : 'Attachments are too large');
	            })
	            // blank :file inputs should not have a custom error
	            .filter(function () {
	                return !this.value;
	            }).
	            each(function (index, element) {
	                element.setCustomValidity('');
	            });
	
	        });
	
	    });
	
	})(jQuery);
	(function ($) {
	    'use strict';
	
	    var xorConstraintSubmitHandler = function xorConstraintSubmitHandler(event) {
	        // has one of the required fields been answered?
	        var xorFields = event.data[0],
	        validationMessage = event.data[1],
	        xorConstraintMet = xorFields.filter(function () {
	            return this.value.length > 1;
	        }).length > 0;
	
	
	        xorFields.each(function () {
	            this.setCustomValidity(
	            xorConstraintMet ? '' : validationMessage);
	
	        });
	    },
	
	    xorConstraintChangeHandler = function xorConstraintChangeHandler(event, validationUiRefreshOnly) {
	        if (validationUiRefreshOnly === true) {
	            // pass through to other change handlers
	            return;
	        }
	
	        var xorFields = event.data[0];
	
	        // constraint validity check
	        xorConstraintSubmitHandler(event);
	
	        // trigger validation UI  on other fields?
	        if (event.type === 'change') {
	            xorFields.not(event.target).triggerHandler('change', true);
	        }
	    };
	
	
	
	    // plugin
	    $.fn.initXorConstraint = function (validationMessage) {
	        // custom validation for XOR options
	        this.closest('form').on('submit', [this, validationMessage], xorConstraintSubmitHandler);
	        this.on('change', [this, validationMessage], xorConstraintChangeHandler);
	    };
	})(jQuery);
	/**
	             * This file initialises forms
	             */
	(function ($) {/* start closure */
	    'use strict';
	    var initValidation = function initValidation() {
	        window.initConstraintValidationAPI();
	        $('form').formValidation('validate');
	    };
	    // now: hookup form validation
	    initValidation();
	    // document ready: hookup form validation
	    $(initValidation);
	    // instruction based relevance
	    if ($('.relevance', 'form').length > 0) {
	        $('form', '#content').relevance('instructions');
	    }
	})(jQuery); /* end closure */
	(function ($) {
	    'use strict';
	
	
	    // extend jquery to 'toggle required'
	    $.fn.toggleRequired = function (required) {
	        return this.each(function () {
	            var controls = $(this.form.elements[this.name]),
	            question = $(this).closest('.questions > li');
	
	            if (required) {
	                if (question.find('abbr[title="(required)"]').length === 0) {
	                    question.find('.label').after(
	                    // create ABBR shiv for IE6
	                    $(document.createElement('abbr')).
	                    attr('title', '(required)').
	                    text('*').
	                    addClass('required'));
	
	                }
	                controls.attr('required', 'required');
	            } else {
	                controls.removeAttr('required');
	                question.find('abbr[title="(required)"]').remove();
	            }
	        });
	    };
	})(jQuery);
	/*globals qg*/
	// globals
	var qg = { oldIE: false };
	qg.date = function () {
	    'use strict';
	
	
	    var datePackage = {},
	
	    // Public holiday dates for 2010-2014 (viewed 2012-09-28)
	    // http://www.justice.qld.gov.au/fair-and-safe-work/industrial-relations/public-holidays/dates
	    qldHolidays = {
	        // 2010
	        '2010-01-01': 'New Year’s Day',
	        '2010-01-26': 'Australia Day',
	        '2010-04-02': 'Good Friday',
	        '2010-04-03': 'Easter Saturday',
	        '2010-04-05': 'Easter Monday',
	        '2010-04-26': 'Anzac Day',
	        '2010-05-03': 'Labour Day',
	        '2010-06-14': 'Queen’s Birthday',
	        '2010-12-25': 'Christmas Day',
	        '2010-12-27': 'Boxing Day',
	        '2010-12-28': 'Christmas Day holiday',
	
	        // 2011
	        '2011-01-01': 'New Year’s Day',
	        '2011-01-03': 'New Year’s Day holiday',
	        '2011-02-26': 'Australia Day',
	        '2011-04-22': 'Good Friday',
	        '2011-04-23': 'Easter Saturday',
	        '2011-04-25': 'Anzac Day',
	        '2011-04-26': 'Easter Monday',
	        '2011-05-02': 'Labour Day',
	        '2011-06-13': 'Queen’s Birthday',
	        '2011-12-25': 'Christmas Day',
	        '2011-12-26': 'Boxing Day',
	        '2011-12-27': 'Christmas Day holiday',
	
	        // 2012
	        '2012-01-01': 'New Year’s Day',
	        '2012-01-02': 'New Year’s Day holiday',
	        '2012-02-26': 'Australia Day',
	        '2012-04-06': 'Good Friday',
	        '2012-04-07': 'Easter Saturday',
	        '2012-04-09': 'Easter Monday',
	        '2012-04-25': 'Anzac Day',
	        '2012-05-07': 'Labour Day',
	        '2012-06-11': 'Queen’s Diamond Jubilee',
	        '2012-10-01': 'Queen’s Birthday',
	        '2012-12-25': 'Christmas Day',
	        '2012-12-26': 'Boxing Day',
	
	        // 2013
	        '2013-01-01': 'New Year’s Day',
	        '2013-01-28': 'Australia Day holiday',
	        '2013-03-29': 'Good Friday',
	        '2013-03-30': 'Easter Saturday',
	        '2013-04-01': 'Easter Monday',
	        '2013-04-25': 'Anzac Day',
	        '2013-06-10': 'Queen’s Birthday',
	        '2013-10-07': 'Labour Day',
	        '2013-12-25': 'Christmas Day',
	        '2013-12-26': 'Boxing Day',
	
	        // 2014
	        '2014-01-01': 'New Year’s Day',
	        '2014-01-27': 'Australia Day holiday',
	        '2014-04-18': 'Good Friday',
	        '2014-04-19': 'Easter Saturday',
	        '2014-04-21': 'Easter Monday',
	        '2014-04-25': 'Anzac Day',
	        '2014-06-09': 'Queen’s Birthday',
	        '2014-10-06': 'Labour Day',
	        '2014-12-25': 'Christmas Day',
	        '2014-12-26': 'Boxing Day',
	
	        // 2015
	        '2015-01-01': 'New Year’s Day',
	        '2015-01-26': 'Australia Day holiday',
	        '2015-04-03': 'Good Friday',
	        '2015-04-04': 'Easter Saturday',
	        '2015-04-06': 'Easter Monday',
	        '2015-04-25': 'Anzac Day',
	        '2015-06-08': 'Queen’s Birthday',
	        '2015-10-05': 'Labour Day',
	        '2015-12-25': 'Christmas Day',
	        '2015-12-26': 'Boxing Day',
	        '2015-12-28': 'Boxing Day holiday',
	
	        // 2016
	        '2016-01-01': 'New Year’s Day',
	        '2016-01-26': 'Australia Day holiday',
	        '2016-03-25': 'Good Friday',
	        '2016-03-26': 'Easter Saturday',
	        '2016-03-28': 'Easter Monday',
	        '2016-04-25': 'Anzac Day',
	        '2016-06-13': 'Queen’s Birthday',
	        '2016-10-03': 'Labour Day',
	        '2016-12-25': 'Christmas Day',
	        '2016-12-27': 'Christmas Day holiday',
	        '2016-12-26': 'Boxing Day',
	
	        // 2017
	        '2017-01-01': 'New Year’s Day',
	        '2017-01-02': 'New Year’s Day holiday',
	        '2017-01-26': 'Australia Day holiday',
	        '2017-04-14': 'Good Friday',
	        '2017-04-15': 'Easter Saturday',
	        '2017-04-17': 'Easter Monday',
	        '2017-04-25': 'Anzac Day',
	        '2017-06-12': 'Queen’s Birthday',
	        '2017-10-02': 'Labour Day',
	        '2017-12-25': 'Christmas Day',
	        '2017-12-26': 'Boxing Day',
	
	        // 2018
	        '2018-01-01': 'New Year’s Day',
	        '2018-01-26': 'Australia Day holiday',
	        '2018-03-30': 'Good Friday',
	        '2018-03-31': 'Easter Saturday',
	        '2018-04-02': 'Easter Monday',
	        '2018-04-25': 'Anzac Day',
	        '2018-05-07': 'Labour Day',
	        '2018-10-01': 'Queen’s Birthday',
	        '2018-12-25': 'Christmas Day',
	        '2018-12-26': 'Boxing Day' };
	
	
	
	
	    // is a public holiday
	    datePackage.isPublicHoliday = function (date) {
	        var d = date.getDate(),
	        m = date.getMonth() + 1,
	        y = String(date.getFullYear()),
	        dateString = y + (m < 10 ? '-0' : '-') + m + (d < 10 ? '-0' : '-') + d;
	
	
	        // return true, date is a public holiday
	        // TODO, if not a state-wide public holiday and given a latlong, check if it is a show holiday
	        // return false, date is not a public holiday
	        // TODO
	        // return undefined, it is not known if the date is a public holiday (beyond 2 years in the future?)
	
	        return !!qldHolidays[dateString];
	    };
	    return datePackage;
	}();
	(function ($) {
	    'use strict';
	
	
	    // find any textareas with a word count
	    $('.hint').filter(function () {
	        return (/Maximum:\s+\d+\s+words/.test($(this).text()));
	    }).each(function () {
	        var hint = $(this),
	        max = parseInt(hint.text().replace(/Maximum:\s+(\d+)\s+words/, '$1'), 10),
	        textField = hint.closest('label').nextAll('textarea'),
	        counter;
	
	        // add counter
	        counter = $('<span/>').generateId('word-count');
	        //eg. Maximum: 50 words (50 remaining)
	        hint.append(' (', counter, ' remaining)');
	
	        textField.simplyCountable({
	            counter: '#' + counter[0].id,
	            countType: 'words',
	            countDirection: 'down',
	            maxCount: max,
	            onOverCount: function onOverCount() {
	                textField[0].setCustomValidity('Too many words');
	            },
	            onSafeCount: function onSafeCount() {
	                textField[0].setCustomValidity('');
	            } });
	
	    });
	})(jQuery);
	
	//# sourceMappingURL=qg-forms.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict'; /*
	              
	               * Extended bootstrap-accessibility.js to allow elements without href attribute to accept collapse extension
	              
	               * Extended by QLD Gov, DSITI, OSSSIO, Digital Channels
	              
	               */
	
	/* ========================================================================
	                   * Extends Bootstrap v3.1.1
	                  
	                   * Copyright (c) <2014> eBay Software Foundation
	                  
	                   * All rights reserved.
	                  
	                   * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
	                  
	                   * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	                  
	                   * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
	                  
	                   * Neither the name of eBay or any of its subsidiaries or affiliates nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.
	                  
	                   * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	                   * ======================================================================== */
	
	(function ($) {
	    "use strict";
	
	    var uniqueId = function uniqueId(prefix) {
	        return (prefix || 'ui-id') + '-' + Math.floor(Math.random() * 1000 + 1);
	    };
	
	    // Alert Extension
	    // ===============================
	
	    $('.alert').attr('role', 'alert');
	    $('.close').removeAttr('aria-hidden').wrapInner('<span aria-hidden="true"></span>').append('<span class="sr-only">Close</span>');
	
	    // TOOLTIP Extension
	    // ===============================
	
	    var showTooltip = $.fn.tooltip.Constructor.prototype.show,
	    hideTooltip = $.fn.tooltip.Constructor.prototype.hide;
	
	    $.fn.tooltip.Constructor.prototype.show = function () {
	        showTooltip.apply(this, arguments);
	        var $tip = this.tip(),
	        tooltipID = $tip.attr('id') || uniqueId('ui-tooltip');
	        $tip.attr({ 'role': 'tooltip', 'id': tooltipID });
	        this.$element.attr('aria-describedby', tooltipID);
	    };
	
	    $.fn.tooltip.Constructor.prototype.hide = function () {
	        hideTooltip.apply(this, arguments);
	        removeMultiValAttributes(this.$element, 'aria-describedby', this.tip().attr('id'));
	        return this;
	    };
	
	    // Popover Extension
	    // ===============================
	    var showPopover = $.fn.popover.Constructor.prototype.setContent,
	    hideTPopover = $.fn.popover.Constructor.prototype.hide;
	
	    $.fn.popover.Constructor.prototype.setContent = function () {
	        showPopover.apply(this, arguments);
	        var $tip = this.tip(),
	        tooltipID = $tip.attr('id') || uniqueId('ui-tooltip');
	        $tip.attr({ 'role': 'alert', 'id': tooltipID });
	        this.$element.attr('aria-describedby', tooltipID);
	        this.$element.focus();
	    };
	    $.fn.popover.Constructor.prototype.hide = function () {
	        hideTooltip.apply(this, arguments);
	        removeMultiValAttributes(this.$element, 'aria-describedby', this.tip().attr('id'));
	    };
	
	    //Modal Extension
	    $('.modal-dialog').attr({ 'role': 'document' });
	    var modalhide = $.fn.modal.Constructor.prototype.hide;
	    $.fn.modal.Constructor.prototype.hide = function () {
	        var modalOpener = this.$element.parent().find('[data-target="#' + this.$element.attr('id') + '"]');
	        modalhide.apply(this, arguments);
	        modalOpener.focus();
	    };
	
	    // DROPDOWN Extension
	    // ===============================
	
	    var toggle = '[data-toggle=dropdown]',
	    $par,
	    firstItem,
	    focusDelay = 200,
	    menus = $(toggle).parent().find('ul').attr('role', 'menu'),
	    lis = menus.find('li').attr('role', 'presentation');
	
	    lis.find('a').attr({ 'role': 'menuitem', 'tabIndex': '-1' });
	    $(toggle).attr({ 'aria-haspopup': 'true', 'aria-expanded': 'false' });
	
	    $(toggle).parent().on('shown.bs.dropdown', function (e) {
	        $par = $(this);
	        var $toggle = $par.find(toggle);
	        $toggle.attr('aria-expanded', 'true');
	
	        setTimeout(function () {
	            firstItem = $('.dropdown-menu [role=menuitem]:visible', $par)[0];
	            try {firstItem.focus();} catch (ex) {}
	        }, focusDelay);
	    });
	
	    $(toggle).parent().on('hidden.bs.dropdown', function (e) {
	        $par = $(this);
	        var $toggle = $par.find(toggle);
	        $toggle.attr('aria-expanded', 'false');
	    });
	
	    //Adding Space Key Behaviour, opens on spacebar
	    $.fn.dropdown.Constructor.prototype.keydown = function (e) {
	        var $par,
	        firstItem;
	        if (!/(32)/.test(e.keyCode)) return;
	        $par = $(this).parent();
	        $(this).trigger("click");
	        e.preventDefault() && e.stopPropagation();
	    };
	
	    $(document).
	    on('focusout.dropdown.data-api', '.dropdown-menu', function (e) {
	        var $this = $(this),
	        that = this;
	        setTimeout(function () {
	            if (!$.contains(that, document.activeElement)) {
	                $this.parent().removeClass('open');
	                $this.parent().find('[data-toggle=dropdown]').attr('aria-expanded', 'false');
	            }
	        }, 150);
	    }).
	    on('keydown.bs.dropdown.data-api', toggle + ', [role=menu]', $.fn.dropdown.Constructor.prototype.keydown);
	
	
	    // Tab Extension
	    // ===============================
	
	    var $tablist = $('.nav-tabs'),
	    $lis = $tablist.children('li'),
	    $tabs = $tablist.find('[data-toggle="tab"], [data-toggle="pill"]');
	
	    $tablist.attr('role', 'tablist');
	    $lis.attr('role', 'presentation');
	    $tabs.attr('role', 'tab');
	
	    $tabs.each(function (index) {
	        var tabpanel = $($(this).attr('href')),
	        tab = $(this),
	        tabid = tab.attr('id') || uniqueId('ui-tab');
	
	        tab.attr('id', tabid);
	
	        if (tab.parent().hasClass('active')) {
	            tab.attr({ 'tabIndex': '0', 'aria-expanded': 'true', 'aria-selected': 'true', 'aria-controls': tab.attr('href').substr(1) });
	            tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '0', 'aria-hidden': 'false', 'aria-labelledby': tabid });
	        } else {
	            tab.attr({ 'tabIndex': '-1', 'aria-expanded': 'false', 'aria-selected': 'false', 'aria-controls': tab.attr('href').substr(1) });
	            tabpanel.attr({ 'role': 'tabpanel', 'tabIndex': '-1', 'aria-hidden': 'true', 'aria-labelledby': tabid });
	        }
	    });
	
	    $.fn.tab.Constructor.prototype.keydown = function (e) {
	        var $this = $(this),
	        $items,
	        $ul = $this.closest('ul[role=tablist] '),
	        index,
	        k = e.which || e.keyCode;
	
	        $this = $(this);
	        if (!/(37|38|39|40)/.test(k)) return;
	
	        $items = $ul.find('[role=tab]:visible');
	        index = $items.index($items.filter(':focus'));
	
	        if (k == 38 || k == 37) index--; // up & left
	        if (k == 39 || k == 40) index++; // down & right
	
	
	        if (index < 0) index = $items.length - 1;
	        if (index == $items.length) index = 0;
	
	        var nextTab = $items.eq(index);
	        if (nextTab.attr('role') === 'tab') {
	
	            nextTab.tab('show') //Comment this line for dynamically loaded tabPabels, to save Ajax requests on arrow key navigation
	            .focus();
	        }
	        // nextTab.focus()
	
	        e.preventDefault();
	        e.stopPropagation();
	    };
	
	    $(document).on('keydown.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', $.fn.tab.Constructor.prototype.keydown);
	
	    var tabactivate = $.fn.tab.Constructor.prototype.activate;
	    $.fn.tab.Constructor.prototype.activate = function (element, container, callback) {
	        var $active = container.find('> .active');
	        $active.find('[data-toggle=tab]').attr({ 'tabIndex': '-1', 'aria-selected': false, 'aria-expanded': false });
	        $active.filter('.tab-pane').attr({ 'aria-hidden': true, 'tabIndex': '-1' });
	
	        tabactivate.apply(this, arguments);
	
	        element.addClass('active');
	        element.find('[data-toggle=tab]').attr({ 'tabIndex': '0', 'aria-selected': true, 'aria-expanded': true });
	        element.filter('.tab-pane').attr({ 'aria-hidden': false, 'tabIndex': '0' });
	    };
	
	    // Collapse Extension
	    // ===============================
	
	    /*
	    // Disabled because it was creating accessibility issues
	    
	    var $colltabs =  $('[data-toggle="collapse"]')
	    $colltabs.attr({ 'role':'tab', 'aria-selected':'false', 'aria-expanded':'false' })
	    $colltabs.each(function( index ) {
	        var colltab = $(this)
	            , collpanel = (colltab.attr('data-target')) ? $(colltab.attr('data-target')) : $(colltab.attr('href'))
	            , parent  = colltab.attr('data-parent')
	            , collparent = parent && $(parent)
	            , collid = colltab.attr('id') || uniqueId('ui-collapse')
	         $(collparent).find('div:not(.collapse,.panel-body), h4').attr('role','presentation')
	         colltab.attr('id', collid)
	        if(collparent){
	            collparent.attr({ 'role' : 'tablist', 'aria-multiselectable' : 'true' })
	            if(collpanel.hasClass('in')){
	                if( colltab.attr('href') !== undefined ) { // Added by QLD DSITI OSSSIO
	                    colltab.attr({ 'aria-controls': colltab.attr('href').substr(1), 'aria-selected':'true', 'aria-expanded':'true', 'tabindex':'0' })
	                } // Added by QLD DSITI OSSSIO
	                collpanel.attr({ 'role':'tabpanel', 'tabindex':'0', 'aria-labelledby':collid, 'aria-hidden':'false' })
	            }else{
	                if( colltab.attr('href') !== undefined ) { // Added by QLD DSITI OSSSIO
	                    colltab.attr({'aria-controls' : colltab.attr('href').substr(1), 'tabindex':'-1' })
	                } // Added by QLD DSITI OSSSIO
	                collpanel.attr({ 'role':'tabpanel', 'tabindex':'-1', 'aria-labelledby':collid, 'aria-hidden':'true' })
	            }
	        }
	    })
	     var collToggle = $.fn.collapse.Constructor.prototype.toggle
	    $.fn.collapse.Constructor.prototype.toggle = function(){
	        var prevTab = this.$parent && this.$parent.find('[aria-expanded="true"]') , href
	         if(prevTab){
	            var prevPanel = prevTab.attr('data-target') || (href = prevTab.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
	                , $prevPanel = $(prevPanel)
	                , $curPanel = this.$element
	                , par = this.$parent
	                , curTab
	             if (this.$parent) curTab = this.$parent.find('[data-toggle=collapse][href="#' + this.$element.attr('id') + '"]')
	             collToggle.apply(this, arguments)
	             if ($.support.transition) {
	                this.$element.one($.support.transition.end, function(){
	                     prevTab.attr({ 'aria-selected':'false','aria-expanded':'false', 'tabIndex':'-1' })
	                    $prevPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1'})
	                     curTab.attr({ 'aria-selected':'true','aria-expanded':'true', 'tabIndex':'0' })
	                     if($curPanel.hasClass('in')){
	                        $curPanel.attr({ 'aria-hidden' : 'false','tabIndex' : '0' })
	                    }else{
	                        curTab.attr({ 'aria-selected':'false','aria-expanded':'false'})
	                        $curPanel.attr({ 'aria-hidden' : 'true','tabIndex' : '-1' })
	                    }
	                })
	            }
	        }else{
	            collToggle.apply(this, arguments)
	        }
	    }
	     $.fn.collapse.Constructor.prototype.keydown = function (e) {
	        var $this = $(this)
	            , $items
	            , $tablist = $this.closest('div[role=tablist] ')
	            , index
	            , k = e.which || e.keyCode
	         $this = $(this)
	        if (!/(32|37|38|39|40)/.test(k)) return
	        if(k==32) $this.click()
	         $items = $tablist.find('[role=tab]')
	        index = $items.index($items.filter(':focus'))
	         if (k == 38 || k == 37) index--                                        // up & left
	        if (k == 39 || k == 40) index++                        // down & right
	        if(index < 0) index = $items.length -1
	        if(index == $items.length) index = 0
	         $items.eq(index).focus()
	         e.preventDefault()
	        e.stopPropagation()
	     }
	     $(document).on('keydown.collapse.data-api','[data-toggle="collapse"]' ,  $.fn.collapse.Constructor.prototype.keydown)
	     */
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	    // Carousel Extension
	    // ===============================
	
	    $('.carousel').each(function (index) {
	        var $this = $(this),
	        prev = $this.find('[data-slide="prev"]'),
	        next = $this.find('[data-slide="next"]'),
	        $options = $this.find('.item'),
	        $listbox = $options.parent();
	
	        $this.attr({ 'data-interval': 'false', 'data-wrap': 'false' });
	        $listbox.attr('role', 'listbox');
	        $options.attr('role', 'option');
	
	        var spanPrev = document.createElement('span');
	        spanPrev.setAttribute('class', 'sr-only');
	        spanPrev.innerHTML = 'Previous';
	
	        var spanNext = document.createElement('span');
	        spanNext.setAttribute('class', 'sr-only');
	        spanNext.innerHTML = 'Next';
	
	        prev.attr('role', 'button');
	        next.attr('role', 'button');
	
	        prev.append(spanPrev);
	        next.append(spanNext);
	
	        $options.each(function () {
	            var item = $(this);
	            if (item.hasClass('active')) {
	                item.attr({ 'aria-selected': 'true', 'tabindex': '0' });
	            } else {
	                item.attr({ 'aria-selected': 'false', 'tabindex': '-1' });
	            }
	        });
	    });
	
	    var slideCarousel = $.fn.carousel.Constructor.prototype.slide;
	    $.fn.carousel.Constructor.prototype.slide = function (type, next) {
	        var $active = this.$element.find('.item.active'),
	        $next = next || $active[type]();
	
	        slideCarousel.apply(this, arguments);
	
	        $active.
	        one($.support.transition.end, function () {
	            $active.attr({ 'aria-selected': false, 'tabIndex': '-1' });
	            $next.attr({ 'aria-selected': true, 'tabIndex': '0' });
	            //.focus()
	        });
	    };
	
	    $.fn.carousel.Constructor.prototype.keydown = function (e) {
	        var $this = $(this),
	        $ul = $this.closest('div[role=listbox]'),
	        $items = $ul.find('[role=option]'),
	        $parent = $ul.parent(),
	        k = e.which || e.keyCode,
	        index,
	        i;
	
	        if (!/(37|38|39|40)/.test(k)) return;
	
	        index = $items.index($items.filter('.active'));
	        if (k == 37 || k == 38) {//  Up
	            $parent.carousel('prev');
	            index--;
	            if (index < 0) index = $items.length - 1;else
	            $this.prev().focus();
	
	        }
	        if (k == 39 || k == 40) {// Down
	            $parent.carousel('next');
	            index++;
	            if (index == $items.length) index = 0;else
	            {
	                $this.one($.support.transition.end, function () {
	                    $this.next().focus();
	                });
	            }
	
	        }
	
	        e.preventDefault();
	        e.stopPropagation();
	    };
	    $(document).on('keydown.carousel.data-api', 'div[role=option]', $.fn.carousel.Constructor.prototype.keydown);
	
	    // GENERAL UTILITY FUNCTIONS
	    // ===============================
	
	    var removeMultiValAttributes = function removeMultiValAttributes(el, attr, val) {
	        var describedby = (el.attr(attr) || "").split(/\s+/),
	        index = $.inArray(val, describedby);
	        if (index !== -1) {
	            describedby.splice(index, 1);
	        }
	        describedby = $.trim(describedby.join(" "));
	        if (describedby) {
	            el.attr(attr, describedby);
	        } else {
	            el.removeAttr(attr);
	        }
	    };
	
	
	})(jQuery);

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	'use strict'; /***********************************
	              /////////////////
	              // QG Lightbox //
	              /////////////////
	              
	              A wrapper for whatever lightbox technology is used. At the moment, Butterfly.
	              
	              Dependancies: (Cannot be included because of errors)
	              import './../../lib/ext/butterfly/jquery.resize-events.js';
	              import './../../lib/ext/butterfly/jquery.history.js';
	              import './../../lib/ext/butterfly/jquery.butterfly.js';
	              
	              TODO:
	              - Add function to load a lightbox with a string of formatted HTML from JS directly
	              
	              ***********************************/
	
	jQuery.qgLightbox = {};
	
	// Auto load
	(function ($) {
	  'use strict';
	
	  $.fn.qgLightbox = function () {var _this = this;var inOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    // Wrapper for whatever technology is used
	    var outOpts = {};
	    if (inOpts.callbackPreOpen !== undefined) {
	      outOpts.callbackPreOpen = inOpts.callbackPreOpen;
	    }
	    // Initialise lightbox links for each match
	    return this.each(function () {
	      $(_this).butterfly(outOpts);
	    });
	  };
	  var init = function initQGLightbox() {
	    // Default simple operation
	    $('*[data-qg-lightbox=true]').not('[id]').attr('id', Math.random(100000, 999999).toString(36).substr(2));
	    $('*[data-qg-lightbox=true]').butterfly();
	  };
	  init();
	})(jQuery);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	/**
	 ************************
	 ** Progressive Reveal **
	 ************************
	 *
	 * Version: 1.2
	 * Developed by: Nimrod Evans for DSITIA > OSSIO
	 *
	 * A progressive reveal function to show the next form element once a previous element has been selected.
	 * Designed for forms, though technically it will work on any element.
	 *
	 * Requires:
	 * - JQuery
	 *
	 * How to use:
	 * ===========
	 * Attach the following classes / attributes to your objects:
	 * data-qg-pr - Set on the trgr element for revealing the next section to activate progressive reveal
	 * data-target - On the trgr, the target for the reveal action (eg. ".option2")
	 *
	 * Optional:
	 * data-parent - On the trgr, sets the group this trgr belongs to for toggling other elements on/off
	 * data-qg-pr-parent - On the parent group object, defines the parent / group element instead of using 'data-parent' on each trgr
	 *
	 * Version Control:
	 * ================
	 * 1.2    - 10/1 -Re-factored, modularised, closure, changed class requirements to data targets (as they do not add styling),
	 *          added QG prefix, removed button custom functionality.
	 * 1.1    - 29/4 - Added 'NOT' functionality, hack fix 'stutter' on init
	 * 1.0.1  - 28/4 - Fixed minor bugs for robustness
	 * 1.0    - First full version
	**/
	
	'use strict';
	
	(function () {
	  var defaultSettings = {
	    toggle: 'false',
	    hideOthers: 'true' };
	
	  var settingsAttr = {
	    toggle: 'data-toggle',
	    hideOthers: 'data-hide-others' };
	
	  // For parent / group
	  var parentAttr = 'data-qg-pr-parent'; // Optional
	  // For trigger
	  var trgrAttr = 'data-qg-pr';
	  var trgrTargetAttr = 'data-target';
	  var trgrParentAttr = 'data-parent'; // Optional
	  var trgrActiveDataName = 'qgProgressiveRevealActive';
	
	  function saveAttr(target, $parent, setting) {
	    var aVal = settingsAttr[setting];
	
	    if (!$(target).attr(aVal)) {
	      if ($parent.attr(aVal)) {
	        $(target).attr(aVal, $parent.attr(aVal));
	      } else {
	        $(target).attr(aVal, defaultSettings[setting]);
	      }
	    }
	  }
	
	  function handleNonActiveElements(trgr, $parent) {
	    if ($(trgr).attr(settingsAttr.hideOthers) !== 'false') {
	      $parent.find('*[' + trgrAttr + ']').each(function () {
	        if ($(this).data(trgrActiveDataName) !== true && $($(this).attr(trgrTargetAttr)).is(':visible')) {
	          $($(this).attr(trgrTargetAttr)).slideUp();
	        }
	      });
	    }
	  }
	
	  // Set up targets
	  $('*[' + trgrAttr + ']').each(function () {
	    // Find parent
	    var $parent = $('body');
	    if (!$(this).attr(trgrParentAttr) && $($(this).attr(trgrTargetAttr)).closest('*[' + parentAttr + ']')) {
	      $(this).attr(trgrParentAttr, '*[' + parentAttr + ']');
	    }
	    $parent = $(this).closest($(this).attr(trgrParentAttr));
	    // Save settings
	    saveAttr(this, $parent, 'toggle');
	    saveAttr(this, $parent, 'hideOthers');
	  });
	
	  // Trigger action
	  $('*[' + trgrAttr + ']').on('click', function () {
	    // Set target (should reduce file size)
	    var $tgt = $($(this).attr(trgrTargetAttr));
	
	    $(this).data(trgrActiveDataName, true);
	
	    // Handle other active elements
	    if ($(this).attr(trgrParentAttr)) {
	      var $parent = $(this).closest($(this).attr(trgrParentAttr));
	      if ($parent.length) {
	        handleNonActiveElements(this, $parent);
	      }
	    }
	    // Handle this element action
	    if ($(this).attr(settingsAttr.toggle) === 'true') {
	      $tgt.slideToggle();
	    } else if (!$tgt.is(':visible')) {
	      $tgt.slideDown();
	    }
	
	    $(this).removeData(trgrActiveDataName);
	  });
	})();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	'use strict'; /**
	               * if there is not a #document-licence present
	               * this script will add one based on the DCTERMS.license metadata
	               */
	/*globals qg*/
	(function ($, qg) {
	  'use strict';
	  var licenceOptions = {
	    url: '//creativecommons.org/licenses/',
	    imgSrc: qg.cdn + qg.swe.paths.images + '/licences/',
	    types: {
	      'by': {
	        'name': 'Attribution',
	        'imgName': 'by-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY 3.0 AU)',
	            'urlPath': 'by/3.0/au/' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY 4.0)',
	            'urlPath': 'by/4.0/' } } },
	
	
	
	      'by-sa': {
	        'name': 'Attribution-ShareAlike',
	        'imgName': 'by-sa-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY-SA 3.0 AU)',
	            'urlPath': 'by-sa/3.0/au' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY-SA 4.0)',
	            'urlPath': 'by-sa/4.0/' } } },
	
	
	
	      'by-nd': {
	        'name': 'Attribution-NoDerivatives',
	        'imgName': 'by-nd-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY-ND 3.0 AU))',
	            'urlPath': 'by-nd/3.0/au/' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY-ND 4.0)',
	            'urlPath': 'by-nd/4.0/' } } },
	
	
	
	      'by-nc': {
	        'name': 'Attribution-NonCommercial',
	        'imgName': 'by-nc-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY-NC 3.0 AU)',
	            'urlPath': 'by-nc/3.0/au/' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY-NC 4.0)',
	            'urlPath': 'by-nc/4.0/' } } },
	
	
	
	      'by-nc-sa': {
	        'name': 'Attribution-NonCommercial-ShareAlike',
	        'imgName': 'by-nc-sa-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY-NC-SA 3.0 AU)',
	            'urlPath': 'by-nc-sa/3.0/au/' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY-NC-SA 4.0)',
	            'urlPath': 'by-nc-sa/4.0/' } } },
	
	
	
	      'by-nc-nd': {
	        'name': 'Attribution-NonCommercial-NoDerivatives',
	        'imgName': 'by-nc-nd-80x15.png',
	        'versions': {
	          '3.0': {
	            'title': '3.0 Australia (CC BY-NC-ND 3.0 AU)',
	            'urlPath': 'by-nc-nd/3.0/au/' },
	
	          '4.0': {
	            'title': '4.0 International (CC BY-NC-ND 4.0)',
	            'urlPath': 'by-nc-nd/4.0/' } } } } };
	
	
	
	
	
	
	  var getLicenseVal = function getLicenseVal(url) {
	    var urlArr = /\/licenses\/([a-zA-Z0-9-/.]+)/g.exec(url)[1].split('/').filter(function (e) {
	      return e;
	    });
	
	    var abbreviation = urlArr[0];
	    var version = urlArr[1];
	
	    return {
	      name: licenceOptions.types[abbreviation].name,
	      url: licenceOptions.url,
	      imgPath: licenceOptions.imgSrc + licenceOptions.types[abbreviation].imgName,
	      version: licenceOptions.types[abbreviation].versions[version] };
	
	  };
	
	  // add licence if not present
	  if (!document.getElementById('document-licence')) {
	    // get licence URL from metadata
	    $('meta').filter('[name="DCTERMS.license"]').filter(function () {
	      return new RegExp('https?://creativecommons.org/licenses/[a-zA-Z0-9\\-\\/\\.]+').test(this.content);
	    }).eq(0).each(function () {
	      var url = this.content;
	      var licence = getLicenseVal(url);
	      // if we have licence details…
	      if (licence) {
	        $('.qg-content-footer').append(
	        '<p id="document-licence">' +
	        '<a rel="license" href="' + licence.url + licence.version.urlPath + '" title="Text available under Creative Commons ' + licence.name + ' ' + licence.version.title + ' licence">' +
	        '<img src="' + licence.imgPath + '" alt="Creative Commons ' + licence.name + ' ' + licence.version.title + '" />' +
	        '</a>' +
	        '</p>');
	
	      }
	    });
	  }
	})(jQuery, qg);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/* ========================================================================
	* Accessibility helpers
	* ======================================================================== */
	
	'use strict';
	
	function opensInNewWindow() {
	  var $target = $('a[target=_blank]');
	
	  if (!$target.hasClass('qg-accessibility-off') && // Legacy
	  $target.attr('data-access-extlink') !== false && // Legacy
	  $target.attr('data-access-new-window') !== false &&
	  $target.attr('href') !== undefined) {
	    if ($.contains('.qg-blank-notice', $target) === false) {
	      $target.append(' <span class="qg-blank-notice sr-only">(Opens in new window)</span> ');
	    }
	    if ($target.attr('title') === undefined) {
	      $target.attr('title', 'Opens in new window');
	    }
	  }
	}
	
	function addFileType() {var _this = this;
	  var doctypes = 'PDF|DOC|DOCX|XLS|XLSX|RTF';
	  $('a', '#content, #asides').filter(function () {
	    var regex = new RegExp('\\.(' + doctypes + ')$', 'i').test(_this.href);
	    return regex ? $(_this).addClass('download').find('.meta').length === 0 : !1;
	  }).each(function () {
	    var regex = null;
	    var d = null;
	    var e = $(_this);
	    var f = e.text();
	    new RegExp('\\((?:' + doctypes + '),?\\s+[0-9\\.]+\\s*[KM]B\\)$', 'i').test(f) ? (d = $('<span class="meta">' + f.replace(new RegExp('^.*\\((' + doctypes + '),?\\s+([0-9\\.]+)\\s*([KM]B)\\)$'), '($1, $2$3)') + '</span>'),
	    regex = e.contents().eq(-1),
	    regex[0].data = regex[0].data.replace(new RegExp('\\s+\\((?:' + doctypes + '),?\\s+[0-9\\.]+\\s*[KM]B\\)$'), ''),
	    e.wrapInner('<span class="title"/>'),
	    e.append(' '),
	    e.append(d)) : (f = e.attr('href').replace(/^.*\.(.+)$/, '$1').toUpperCase(),
	    e.wrapInner('<span class="title"/>').append(' <span class="meta">(' + f + ')</span>'));
	  });
	}
	
	function addCorrectIncorrect() {
	  var ext = ':not(:has(.qg-blank-notice))';
	  var $correct = $('.qg-correct' + ext + ', table.qg-correct-incorrect td:nth-child(odd)' + ext);
	  var $incorrect = $('.qg-incorrect' + ext + ', table.qg-correct-incorrect td:nth-child(even)' + ext);
	
	  $correct.prepend('<span class="qg-blank-notice sr-only">Correct.</span> ');
	  $incorrect.prepend('<span class="qg-blank-notice sr-only">Incorrect.</span> ');
	}
	
	function init() {
	  if ($('body').attr('data-qg-accessibility') !== false) {
	    opensInNewWindow();
	    addFileType();
	    addCorrectIncorrect();
	  }
	}
	
	module.exports = { init: init };

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	'use strict';
	
	var activeSideNav = function () {
	  // const currentFilename = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);
	
	  function refineText(text) {
	    return text.toLowerCase().replace(/ /g, '');
	  }
	
	  function getCurrentTitle() {
	    var currentPageTitle = '';
	    if ($('#guide-title').length > 0) {
	      currentPageTitle = $('#guide-title').text();
	    } else if ($('meta[name="DCTERMS.alternative"]').length > 0 && refineText($('meta[name="DCTERMS.alternative"]').eq(0).attr('content')) !== '') {
	      currentPageTitle = $('meta[name="DCTERMS.alternative"]').eq(0).attr('content');
	    } else {
	      var titleClone = $('h1', '#qg-primary-content').eq(0).clone();
	      titleClone.find('.page-number').remove();
	      currentPageTitle = titleClone.text();
	    }
	    return refineText(currentPageTitle);
	  }
	
	  function highlightNavItem() {
	    var currentPageTitle = getCurrentTitle();
	    $('#qg-section-nav ul>li').each(function () {
	      if (refineText($(this).text()) === $.trim(currentPageTitle)) {
	        $(this).find('a').addClass('active');
	      }
	    });
	  }
	
	  return {
	    highlightNavItem: highlightNavItem };
	
	}();
	
	module.exports = activeSideNav;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	'use strict'; /**
	              * Function for rendering social media links on CUE compliant sites
	              *
	              * Requires:
	              * - JQuery
	              **/
	
	/**
	                  * #####################################
	                  * Model
	                  **/
	
	var socialLinksList = {
	  primary: [
	  { title: 'Facebook', showTitle: false, icon: renderIcon('fa', 'facebook') },
	  { title: 'Twitter', showTitle: false, icon: renderIcon('fa', 'twitter') },
	  { title: 'LinkedIn', showTitle: false, icon: renderIcon('fa', 'linkedin') }],
	
	  secondary: [
	  // {title: 'Delicious',    showTitle: true, icon: renderIcon('fa', 'delicious')},
	  { title: 'Digg', showTitle: true, icon: renderIcon('fa', 'digg') },
	  // {title: 'Evernote',     showTitle: true, icon: renderIcon('svg', 'evernote', '/assets/v3/images/evernote-logo-white.svg')},
	  // {title: 'Reddit',       showTitle: true, icon: renderIcon('fa', 'reddit')},
	  // {title: 'StumbleUpon',  showTitle: true, icon: renderIcon('fa', 'stumbleupon')},
	  // {title: 'Tumblr',       showTitle: true, icon: renderIcon('fa', 'tumblr')},
	  { title: 'Google+', showTitle: true, icon: renderIcon('fa', 'google-plus') }] };
	
	
	
	/**
	                                                                                   * #####################################
	                                                                                   * Views
	                                                                                   **/
	
	function renderSocialURL(who, from, title, domain, description) {
	  switch (who) {
	
	    case 'facebook':
	      return 'http://www.facebook.com/share.php?u=' + from + '&title=' + title;
	    case 'twitter':
	      return 'http://twitter.com/home?status=' + title + '+' + from;
	    case 'linkedin':
	      return 'http://www.linkedin.com/shareArticle?mini=true&url=' + from + '&title=' + title + '&source=' + domain;
	    case 'delicious':
	      return 'http://del.icio.us/post?url=' + from + '&title=' + title + ']&notes=' + description;
	    case 'digg':
	      return 'http://www.digg.com/submit?phase=2&url=' + from + '&title=' + title;
	    case 'evernote':
	      return 'http://www.evernote.com/clip.action?url=' + from + '&title=' + title;
	    case 'reddit':
	      return 'http://www.reddit.com/submit?url=' + from + '&title=' + title;
	    case 'stumbleupon':
	      return 'http://www.stumbleupon.com/submit?url=' + from + '&title=' + title;
	    case 'tumblr':
	      return 'https://www.tumblr.com/widgets/share/tool?posttype=link&content=' + from + '&title=' + title + '&caption=' + description;
	    case 'google+':
	      return 'https://plus.google.com/share?url=' + from;}
	
	
	  return false;
	}
	
	function renderIcon(type, name) {var src = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	  switch (type) {
	
	    case 'fa':
	      return '<span class="fa fa-' + name + ' fa-2x qg-share-icon" aria-hidden="true"></span>';
	    case 'svg':
	      return '<img src="' + src + '" aria-hidden="true" class="qg-share-icon" alt="name" />';}
	
	  // Default, return nothing
	  return '';
	}
	
	function renderHidden() {
	  return 'qg-visually-hidden';
	}
	
	function renderLink(url, title, icon) {var hidden = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
	  return '<li>\n<a class="qg-share-link qg-accessibility-off" href="' +
	  url + '" title="' + title + '">' + icon + '<span class="title ' + hidden + '"">' + title + '</span></a>\n</li>';
	
	}
	
	function renderShareButtons() {
	  return '<h2>Share:</h2>\n<ul class="navbar navbar-right">\n  ' +
	
	  getLinks('primary') + '\n  <li id="shareDropdown" class="dropdown dropdown-menu-right">\n    <button id="shareDropdownToggle" class="qg-share-link noicon" title="share" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n      <span class="fa fa-share-alt fa-2x" aria-hidden="true"></span><span class="qg-visually-hidden">Share</span>\n    </button>\n    <ul class="dropdown-menu" aria-labelledby="shareDropdownToggle">\n      ' +
	
	
	
	
	
	  getLinks('secondary') + '\n    </ul>\n  </li>\n</ul>';
	
	
	
	}
	
	/**
	  * #####################################
	  * Controller
	  **/
	
	function getLinks(type) {
	  // Get link list
	  var socialLinks = socialLinksList;
	  // Get page data
	  var from = window.location.href;
	  var domain = window.location.hostname;
	  // const title = $(document).find('title').text();
	  var description = $('meta[name="DCTERMS.description"]').attr('content');
	
	  // Iterate
	  var str = '';
	  for (var prop in socialLinks[type]) {
	    var entry = socialLinks[type][prop];
	    var titleKey = entry.title.toLowerCase();
	    var url = renderSocialURL(titleKey, from, entry.title, domain, description);
	    var hidden = '';
	    if (entry.showTitle !== true) {
	      hidden = renderHidden();
	    }
	    str = str + renderLink(url, entry.title, entry.icon, hidden);
	  }
	  return str;
	}
	
	function init() {
	  var $target = $('#qg-share');
	  $target.html(renderShareButtons());
	}
	
	module.exports = { init: init };

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	'use strict'; /**
	              * Adds page and user details to hidden inputs on the feedback form
	              **/
	
	function sanitize(str) {
	  if (!str) {
	    return false;
	  }
	  return str.replace(/</g, '&lt;') // strip <
	  .replace(/>/g, '&gt;') // strip >
	  .replace(/\+/g, '&#43;') // strip +
	  .replace(/\\/g, '&#92;') // strip \
	  .replace(/\(/g, '&#40;') // strip (
	  .replace(/\)/g, '&#41;') // strip )
	  .replace(/{/g, '&#123;') // strip (
	  .replace(/}/g, '&#124;'); // strip )
	}
	
	function addHiddenInput(key, val) {
	  var newHiddenInput = $('<input type="hidden"/>');
	  newHiddenInput.attr('name', key);
	  newHiddenInput.attr('value', sanitize(val));
	  $('#feedback-hidden-inputs').append(newHiddenInput);
	}
	function init(franchiseTitle) {
	  addHiddenInput('franchise', franchiseTitle);
	  addHiddenInput('page-title', $(document).find('title').text());
	  addHiddenInput('page-url', window.location.href);
	  addHiddenInput('page-referer', encodeURIComponent(document.referrer));
	  addHiddenInput('rspUsrAgent', navigator.userAgent);
	}
	
	module.exports = { init: init };

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	'use strict'; /**
	               * This file contains general initialisation, element eventlisteners etc
	               */
	
	(function () {
	  'use strict';
	
	  $(document).ready(function () {
	    /**
	                                  * Event listener on header search box to make it accessible
	                                  * If search box's suggestion list is empty, aria-busy of suggestion list should be true
	                                  */
	    $('#qg-search-query').on('focusout', function () {
	      $(this).siblings('#suggestbox').attr('aria-busy', 'true');
	    });
	  });
	})();

/***/ })
/******/ ]);
//# sourceMappingURL=qg-main.js.map