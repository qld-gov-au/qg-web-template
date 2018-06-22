/**
 * When using functionality related to google libraries, this fuction comes handy to check if libraries already exists and then execute custom function
 */
(function( qg, $ ) {
    'use strict';
    // lazy load a script
    function lazyScript( url ) {
        $( 'head' ).append( '<script type="text/javascript" src="' + url + '"></script>' );
    };
    //load Google APi
	qg.loadGoogle = function (callback) {
		if($('#googleapi').length<=0) {
			var s = document.createElement('script'),
				u = 'https://maps.googleapis.com/maps/api/js?key='+ (window.qg.swe.isProduction !== true? 'AIzaSyAqkq7IK18bsh-TUMmNR-x9v9PsptT3LMY' : 'AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE') +'&region=AU&libraries=places';
			s.type = 'text/javascript';
			s.id = 'googleapi';
			s.src = u;
			document.getElementsByTagName( 'head' )[0].appendChild( s );
			s.onreadystatechange= function () { //trigger for IE
				if (this.readyState === 'complete') {
					lazyScript(callback);
				}
			};
			s.onload = function () {
				lazyScript(callback);
			};
		}
		else { //if script is already created but either loading or loaded
			if(document.readyState === 'loading') {
				document.onreadystatechange= function () {
					if (this.readyState === 'complete') {
						lazyScript(callback);
					}
				};
			}
			else {
				lazyScript(callback);
			}
		}

	}
}( qg, jQuery ));
