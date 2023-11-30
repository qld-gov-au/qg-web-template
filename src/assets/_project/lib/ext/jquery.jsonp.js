/*
 * jQuery JSONP Core Plugin 2.4.0 (2012-08-21)
 *
 * https://github.com/jaubourg/jquery-jsonp
 *
 * Copyright (c) 2012 Julian Aubourg
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 */
(function($) {
  // ###################### UTILITIES ##

  // Noop
  function noop() {
  }

  // Generic callback
  function genericCallback(data) {
    lastValue = [data];
  }

  // Call if defined
  function callIfDefined(method, object, parameters) {
    return method && method.apply(object.context || object, parameters);
  }

  // Give joining character given url
  function qMarkOrAmp(url) {
    return /\?/.test(url) ? '&' : '?';
  }

  var // String constants (for better minification)
    STR_ASYNC = 'async';
  var STR_CHARSET = 'charset';
  var STR_EMPTY = '';
  var STR_ERROR = 'error';
  var STR_INSERT_BEFORE = 'insertBefore';
  var STR_JQUERY_JSONP = '_jqjsp';
  var STR_ON = 'on';
  var STR_ON_CLICK = STR_ON + 'click';
  var STR_ON_ERROR = STR_ON + STR_ERROR;
  var STR_ON_LOAD = STR_ON + 'load';
  var STR_ON_READY_STATE_CHANGE = STR_ON + 'readystatechange';
  var STR_READY_STATE = 'readyState';
  var STR_REMOVE_CHILD = 'removeChild';
  var STR_SCRIPT_TAG = '<script>';
  var STR_SUCCESS = 'success';
  var STR_TIMEOUT = 'timeout';

  // Window
  var win = window;
  // Deferred
  var Deferred = $.Deferred;
  // Head element
  var head = $('head')[0] || document.documentElement;
  // Page cache
  var pageCache = {};
  // Counter
  var count = 0;
  // Last returned value
  var lastValue;

  // ###################### DEFAULT OPTIONS ##
  var xOptionsDefaults = {
    //beforeSend: undefined,
    //cache: false,
    callback: STR_JQUERY_JSONP,
    //callbackParameter: undefined,
    //charset: undefined,
    //complete: undefined,
    //context: undefined,
    //data: "",
    //dataFilter: undefined,
    //error: undefined,
    //pageCache: false,
    //success: undefined,
    //timeout: 0,
    //traditional: false,
    url: location.href,
  };

  // opera demands sniffing :/
  var opera = win.opera;

  // IE < 10
  var oldIE = !!$('<div>').html('<!--[if IE]><i><![endif]-->').find('i').length;

  // ###################### MAIN FUNCTION ##
  function jsonp(xOptions) {
    // Build data with default
    xOptions = $.extend({}, xOptionsDefaults, xOptions);

    // References to xOptions members (for better minification)
    var successCallback = xOptions.success;
    var errorCallback = xOptions.error;
    var completeCallback = xOptions.complete;
    var dataFilter = xOptions.dataFilter;
    var callbackParameter = xOptions.callbackParameter;
    var successCallbackName = xOptions.callback;
    var cacheFlag = xOptions.cache;
    var pageCacheFlag = xOptions.pageCache;
    var charset = xOptions.charset;
    var url = xOptions.url;
    var data = xOptions.data;
    var timeout = xOptions.timeout;
    var pageCached;

    // Abort/done flag
    var done = 0;

    // Life-cycle functions
    var cleanUp = noop;

    // Support vars
    var supportOnload;
    var supportOnreadystatechange;

    // Request execution vars
    var firstChild;
    var script;
    var scriptAfter;
    var timeoutTimer;

    // If we have Deferreds:
    // - substitute callbacks
    // - promote xOptions to a promise
    Deferred && Deferred(function(defer) {
      defer.done(successCallback).fail(errorCallback);
      successCallback = defer.resolve;
      errorCallback = defer.reject;
    }).promise(xOptions);

    // Create the abort method
    xOptions.abort = function() {
      !(done++) && cleanUp();
    };

    // Call beforeSend if provided (early abort if false returned)
    if (callIfDefined(xOptions.beforeSend, xOptions, [xOptions]) === !1 || done) {
      return xOptions;
    }

    // Control entries
    url = url || STR_EMPTY;
    data = data ? ((typeof data) === 'string' ? data : $.param(data, xOptions.traditional)) : STR_EMPTY;

    // Build final url
    url += data ? (qMarkOrAmp(url) + data) : STR_EMPTY;

    // Add callback parameter if provided as option
    callbackParameter && (url += qMarkOrAmp(url) + encodeURIComponent(callbackParameter) + '=?');

    // Add anticache parameter if needed
    !cacheFlag && !pageCacheFlag && (url += qMarkOrAmp(url) + '_' + (new Date()).getTime() + '=');

    // Replace last ? by callback parameter
    url = url.replace(/=\?(&|$)/, '=' + successCallbackName + '$1');

    // Success notifier
    function notifySuccess(json) {
      if (!(done++)) {
        cleanUp();
        // Pagecache if needed
        pageCacheFlag && (pageCache[url] = { s: [json] });
        // Apply the data filter if provided
        dataFilter && (json = dataFilter.apply(xOptions, [json]));
        // Call success then complete
        callIfDefined(successCallback, xOptions, [json, STR_SUCCESS, xOptions]);
        callIfDefined(completeCallback, xOptions, [xOptions, STR_SUCCESS]);
      }
    }

    // Error notifier
    function notifyError(type) {
      if (!(done++)) {
        // Clean up
        cleanUp();
        // If pure error (not timeout), cache if needed
        pageCacheFlag && type != STR_TIMEOUT && (pageCache[url] = type);
        // Call error then complete
        callIfDefined(errorCallback, xOptions, [xOptions, type]);
        callIfDefined(completeCallback, xOptions, [xOptions, type]);
      }
    }

    // Check page cache
    if (pageCacheFlag && (pageCached = pageCache[url])) {
      pageCached.s ? notifySuccess(pageCached.s[0]) : notifyError(pageCached);
    } else {
      // Install the generic callback
      // (BEWARE: global namespace pollution ahoy)
      win[successCallbackName] = genericCallback;

      // Create the script tag
      script = $(STR_SCRIPT_TAG)[0];
      script.id = STR_JQUERY_JSONP + count++;

      // Set charset if provided
      if (charset) {
        script[STR_CHARSET] = charset;
      }

      opera && opera.version() < 11.60
      // onerror is not supported: do not set as async and assume in-order execution.
      // Add a trailing script to emulate the event
        ? ((scriptAfter = $(STR_SCRIPT_TAG)[0]).text = "document.getElementById('" + script.id + "')." + STR_ON_ERROR + '()')
        :
      // onerror is supported: set the script as async to avoid requests blocking each others
        (script[STR_ASYNC] = STR_ASYNC)

      ;

      // Internet Explorer: event/htmlFor trick
      if (oldIE) {
        script.htmlFor = script.id;
        script.event = STR_ON_CLICK;
      }

      // Attached event handlers
      script[STR_ON_LOAD] = script[STR_ON_ERROR] = script[STR_ON_READY_STATE_CHANGE] = function (result) {
        // Test readyState if it exists
        if (!script[STR_READY_STATE] || !/i/.test(script[STR_READY_STATE])) {
          try {
            script[STR_ON_CLICK] && script[STR_ON_CLICK]();
          } catch (_) {}

          result = lastValue;
          lastValue = 0;
          result ? notifySuccess(result[0]) : notifyError(STR_ERROR);
        }
      };

      // Set source
      script.src = url;

      // Re-declare cleanUp function
      cleanUp = function(i) {
        timeoutTimer && clearTimeout(timeoutTimer);
        script[STR_ON_READY_STATE_CHANGE] = script[STR_ON_LOAD] = script[STR_ON_ERROR] = null;
        head[STR_REMOVE_CHILD](script);
        scriptAfter && head[STR_REMOVE_CHILD](scriptAfter);
      };

      // Append main script
      head[STR_INSERT_BEFORE](script, (firstChild = head.firstChild));

      // Append trailing script if needed
      scriptAfter && head[STR_INSERT_BEFORE](scriptAfter, firstChild);

      // If a timeout is needed, install it
      timeoutTimer = timeout > 0 && setTimeout(function() {
        notifyError(STR_TIMEOUT);
      }, timeout);
    }

    return xOptions;
  }

  // ###################### SETUP FUNCTION ##
  jsonp.setup = function(xOptions) {
    $.extend(xOptionsDefaults, xOptions);
  };

  // ###################### INSTALL in jQuery ##
  $.jsonp = jsonp;
})(jQuery);
