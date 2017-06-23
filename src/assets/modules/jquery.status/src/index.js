import './styles/status.scss';

(function ($) {
	/*
		jquery status  plugin

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
})(jQuery);