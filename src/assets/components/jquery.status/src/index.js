(function ($) {
	// var depFlag = [];
	const jqueryStatus = function () {
		/*
			jquery status plugin

			displays a "status" box

			<div class="status info">
				<h2>Title<h2>
				body
			</div>

			requires jquery
			requires jquery.butterfly
			requires jquery.generateId

		*/
		'use strict';
		console.log('inside status');

		var methods = {

			// $( element ).status( 'show', options )
			// shows status box
			// options are:
			// status - info | warn | fail |success - class of status to show
			// lightbox - true | false - display status box in a lightbox, false displays nothing (TODO)
			// title - text/html - contents for the <h2>
			// body - text/html - contents of the lightbox (after the h2)
			show: function (options) {
				var html,
					link,
					callback;

				// butterfly options
				options = $.extend({}, {
					status: 'info',
					lightbox: false,
					title: 'Status message',
					body: ''
				}, options);

				// show status in a lightbox
				if (options.lightbox === true) {
					// create dummy status box
					html = $(
							'<div class="status ' + options.status + '">' +
								'<h2>' + options.title + '</h2>' + options.body +
							'</div>'
						)
						// give it an id for lightbox
						.generateId(options.status)
					;

					link = $('<a>' + options.title + '</a>').attr('href', '#' + html[ 0 ].id);

					// add dummy html to page
					html
						.wrap('<div style="display: none"/>')
						.parent()
							.append(link)
							.appendTo(document.body)
					;

					// hardcoded butterfly options
					callback = options.callbackPostOpen;
					$.extend(options, {

						// prevent status lightbox from going in browser history
						storeState: false,

						callbackPostOpen: function () {
							// cleanup DOM after lightbox opened
							html.parent().remove();
							// support callback
							if (typeof callback === 'function') {
								callback.apply(this);
							}
						}
					});

					// find the status box link
					link
						// set us up a lightbox
						.butterfly(options)
						// activate it
						.click()
					;
				}

				// chaining
				return this;
			},

			// init - does nothing
			init: function () {
				return this;
			}
		};

		$.fn.status = function (method) {
			// Method calling logic
			// http://docs.jquery.com/Plugins/Authoring#Plugin_Methods
			if (methods[method]) {
				return methods[ method ].apply(this, Array.prototype.slice.call(arguments, 1));
			} else if (typeof method === 'object' || !method) {
				return methods.init.apply(this, arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.status');
			}
		};
	};

	//Check dependencies are all available
	if ($.fn.generateId === undefined || window.ResizeEvents === undefined || $.butterfly === undefined) {
		console.log('missing dependency');
		var d1 = $.Deferred(),
			d2 = $.Deferred(),
			d3 = $.Deferred();
		if ($.fn.generateId === undefined) {
			$.getScript('https://rawgit.com/qld-gov-au/glue-template/working/src/assets/components/autocomplete/src/lib/generate-id.js').done(function () { console.log('generate id loaded'); d1.resolve(); });
		}
		if (window.ResizeEvents === undefined || $.butterfly === undefined) {
			if (window.ResizeEvents === undefined) {
				$.getScript('https://rawgit.com/qld-gov-au/glue-template/Feature/QOL-1101-Maps-JS-Transfer/src/assets/components/jquery.resize-events/build/jquery.resize-events.js').done(function () { console.log('resize loaded'); d2.resolve(); });
			} else {
				d2.resolve();
			}
			$.when(d2).done(function () {
				$.getScript('https://rawgit.com/qld-gov-au/glue-template/working/src/assets/_project/lib/ext/butterfly/jquery.butterfly.js').done(function () { console.log('butterfly loaded'); d3.resolve(); });
			});
		}
		$.when(d1, d2, d3).then(function (v1, v2, v3) {
		    jqueryStatus();
		});
	} else {
		jqueryStatus();
	}
})(jQuery);
