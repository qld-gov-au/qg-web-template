/*global qg*/

//plugin
import './lib/jquery.jsonp';
import './lib/data';

// init code
$(function () {
	var dataUrl = $('#data-url').data('url'),
		dataEnvironment = dataUrl.indexOf('staging.data.qld.gov.au') >= 0 ? 'staging.data.qld.gov.au' : 'data.qld.gov.au',
		resourceId = dataUrl.split('resource/')[1],
		sql = 'Select * from "' + resourceId + '"';
	qg.data.get(dataEnvironment, sql, {
		cache: !0,
		successCallback: function (data) {
		// var titleField = displayTemplateHtml.replace( /^[\s\S]*?\{\{.*?\}\}.*?\{\{(.*?)\}\}[\s\S]*$/m, '$1' );
			if (data.result.records.length > 0) {
				$.each(data.result.records, function (k, v) {
					$('.search-result').append(v.Title + '<br>');
				});
			} else {
				$('.search-result').html('No records found');
			}
		}
	});
});
