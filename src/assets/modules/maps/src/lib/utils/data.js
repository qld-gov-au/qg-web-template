/*
	data: API for loading data from CKAN (data.qld.gov.au)

	possible API ideas:
	.getDataFromCKAN()
	-- SQL statement (?)
	-- fields to get (array) SELECT, default *
	-- dataset to get from (multiple?)
	-- success callback (use promises)
	-- text filter (#query in SCD)
	-- custom filters (array) prop=value
	-- sort? (ORDER BY?)
	-- cache: true/false

	(different types of filtering... e.g. A or B, rather than A and B)
*/

/*global qg*/
(function( $, qg ) {
	'use strict';

	// get data
	qg = qg || {};
	qg.data = qg.data || {};


	// TODO make this a promise
	qg.data.get = function( domain, sql, options ) {
		var errorCallback;

		if ( $.isFunction( options )) {
			options = {
				successCallback: options,
				cache: false
			};
		} else {
			options = $.extend({ cache: false }, options );
		}

		errorCallback = function() {
			$( document ).status( 'show', {
				status: 'fail',
				lightbox: true,
				title: 'Error loading data',
				body: '<p>We were unable to retrieve data.</p><p>Please try again later.</p>'
			});
		};

		$.jsonp({
			url: 'https://' + domain + '/api/action/datastore_search_sql',
			data: { sql: sql },
			callbackParameter: 'callback',
			success: options.successCallback,
			error: errorCallback,
			pageCache: options.cache
		});
	};


}( jQuery, qg ));
