/* globals qg, Modernizr */

// Modernizr test for ios6 or less

Modernizr.addTest('ios6', function() {
    'use strict';

    var ios6 = false,
        client = false,
        version = false;

    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        client = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        version = parseInt(client[1], 10);
        ios6 = (version <= 6);
    }

    return ios6;

});

// Modernizr test for retina display

Modernizr.addTest('retina', function() {
    'use strict';

    // disabled for old IE: no support for css background-size
    if ( qg.oldIE ) {
        return false;
    }

    var dpr = window.devicePixelRatio || (window.screen.deviceXDPI / window.screen.logicalXDPI) || 1;

    return (dpr > 1);

});

// Set class values on document element

$(function ( undefined ) {
    'use strict';

    var space = function() {
        return (document.documentElement.className.length) ? ' ' : '';
    };

    if (!!typeof(Modernizr.ios6) || typeof(Modernizr.ios6) !== 'undefined') {
        document.documentElement.className += space() + (Modernizr.ios6 ? 'ios6' : '');
    }

    if (!!typeof(Modernizr.retina) || typeof(Modernizr.retina) !== 'undefined') {
        document.documentElement.className += space() + (Modernizr.retina ? 'retina' : '');
    }

    if (!Modernizr.svg) {
        document.documentElement.className += space() + (Modernizr.retina ? 'no-svg' : '');
    }
});

// Flag that the core scripts have loaded


//Load captchaCatch value to avaoid spam
$(function(){
    'use strict';
    if($('#captchaCatch').length>0) {
        $('#captchaCatch').val(window.location.hostname === 'www.qld.gov.au' ? 'prod' : 'dev');
    }
});

qg.swe.scriptsLoaded = true;
