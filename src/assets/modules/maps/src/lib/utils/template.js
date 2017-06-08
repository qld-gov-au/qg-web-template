/*global qg, markdown */
(function( $, swe ) {
	'use strict';


	function pad( s, length, padding ) {
		s = String( s );
		while ( s.length < length ) {
			s = padding + s;
		}
		return s;
	}


	function qgovTimeFormat( date ) {
		var hours = date.getHours();
		var hours12 = hours % 12;
		return ( hours12 === 0 ? '12' : hours12 ) + '.' + pad( date.getMinutes(), 2, '0' ) + ( hours < 12 ? 'am' : 'pm' );
	}


	swe.template = {};

	// clean text before updating html
	swe.template.clean = function( text ) {
		return $( '<div/>' ).text( text ).html().replace( /"/g, '&quot;' );
	};


	// format text
	swe.template.format = function( text, format, options ) {
		options = $.extend( {}, options );
		var value, actual;

		if ( text === null ) {
			return '';
		}

		switch ( format ) {
		case '%':
			return Math.round( parseFloat( text )) + '%';

		case '$':
			value = parseFloat( text );
			if ( value >= 10000 ) {
				actual = text.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
				if ( value < 1000000 ) {
					// thousands
					return '$' + actual;

				} else {
					// millions
					actual = text.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
					text = String( Math.round( text / 100000 ) / 10 ) + '\xA0million';

					switch ( options.abbr ) {
					case true:
						return '<abbr title="$' + actual + '">$' + text + '</abbr>';
					case 'both':
						return '$' + text + ' ($' + actual + ')';
					}
				}
			}
			return '$' + text;

		case 'shortnum':
			value = parseFloat( text );
			if ( value >= 10000 ) {
				actual = text.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
				if ( value < 1000000 ) {
					// thousands
					return actual;

				} else {
					// millions
					actual = text.replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1,' );
					text = String( Math.round( text / 100000 ) / 10 ) + '\xA0million';

					switch ( options.abbr ) {
					case true:
						return '<abbr title="' + actual + '">' + text + '</abbr>';
					case 'both':
						return text + ' (' + actual + ')';
					}
				}
			}
			return text;

		case 'md':
			return markdown.toHTML( text );

		case 'date':
		case 'datetime':
			if ( typeof text === 'string' ) {
				value = new Date( text );
				if ( isNaN( value.getTime() )) {
					// assume ISO format: YYYY-MM-DD
					actual = text.split( /[-:T ]/ );
					value = new Date( actual[ 0 ], parseInt( actual[ 1 ], 10 ) - 1, actual[ 2 ] );
					if ( isNaN( value.getTime() )) {
						return text;
					}
					// optional time component
					if ( actual.length > 3 ) {
						value.setHours( actual[ 3 ] );
						if ( actual.length > 4 ) {
							value.setMinutes( actual[ 4 ] );
							if ( actual.length > 5 ) {
								value.setSeconds( actual[ 5 ] );
							}
						}
					}
				}
			} else {
				// assume date object
				value = text;
			}

			text = value.getDate() + ' ' + 'January,February,March,April,May,June,July,August,September,October,November,December'.split( ',' )[ value.getMonth() ] + ' ' + value.getFullYear();

			if ( format === 'datetime' ) {
				// format time component
				text += ', ' + qgovTimeFormat( value );
			}

			return text;

		case 'time':
			if ( typeof text === 'string' ) {
				if ( /^\d+[:.]\d+$/.test( text )) {
					text = text.split( /[:.]/ );
					value = new Date();
					value.setHours( text[ 0 ] );
					value.setMinutes( text[ 1 ] );
				} else {
					return text;
				}
			} else {
				// assume date object
				value = text;
			}
			return qgovTimeFormat( value );

		case 'abn':
			return String( text ).replace( /\s+/g, '' ).replace( /(\d)(?=(\d\d\d)+(?!\d))/g, '$1\xA0' );
		}
		// default
		return swe.template.clean( text );
	};

	//displays closure details for counters
	swe.template.closure = function(data){
		// var closure='not decided;no notice;10/03/17;12/03/17-15/03/17;17/11/18-20/11/18',
        var closure=data,
        closureEle = '',l,
        closureFinal='';
        $.each(closure.split(';'),function(index,value){
            if(/[a-zA-Z]/.test(value)){ // is it a custom string?
                closureEle+=value+';';
            }
            else if(/[0-9\/]/.test(this)){  // should be a date we can extract
                var dates = this.split(/[^0-9\/]/),
                startDate = dates[0].split('/'),
                endDate,
                d = new Date(),
                maxDate = d.setDate(d.getDate()+35);  // we only care about closures happening now or in the near future

                d= new Date();
                startDate = new Date(startDate[1]+'/'+startDate[0]+'/'+startDate[2]);

                if(startDate>=d && startDate<=maxDate) {
                    closureEle+=dates[0];
                    if(dates.length>1){
                        endDate = dates[1].split('/');
                        endDate = new Date(endDate[1]+'/'+endDate[0]+'/'+endDate[2]);
                        if(endDate>startDate){
                            closureEle+='-'+dates[1];
                        }
                    }
                    closureEle+=';';
                }
            }

        });
        closureEle = closureEle.split(';');
        l = closureEle.length-1;  //pop-coz last element would be empty
        for(var i=0;i<l;i++){
            switch (i+1) {
                case(l-1):{
						closureFinal+=closureEle[i]+' & ';
						break;
					}
                case(l):{
						closureFinal+=closureEle[i];
						break;
					}
                default:{
						closureFinal+=closureEle[i]+', ';
						break;
					}
            }
        }
        return closureFinal;
	};

	//displays opening hours in counters page
	swe.template.openingHours = function(data){
		var d,h, min, temp;
		if(!isNaN(Date.parse(data))){
			d = new Date(data);
			d.setTime( d.getTime() + d.getTimezoneOffset()*60*1000 );
			h = d.getHours();
			min = d.getMinutes();
			return String((h+11)%12+1) + ':' + (min === 0 ? '00' : String(min)) + (h>=12 ? 'pm' : 'am');
		}
		else {
			temp = data.split('-');
			for(var j=0;j<temp.length;j++) {  //converts 24hrs to 12hrs
				temp[j] = String(((parseInt(temp[j].split(':')[0],10)+11)%12+1)) + ':' + (temp[j].split(':')[1] !== undefined ? temp[j].split(':')[1] : '00') + (parseInt(temp[j].split(':')[0],10)>=12?'pm':'am');
			}
			return temp.join('-');
		}
	};


	//process centre list - for science capability directory
	swe.template.centreList = function(data,k,m,n){
        var eleString = '';
        if(data.length>1) {
            $.each(data, function (key, value) {
                if (value[k] !== n) {
                    switch (k) {
                        case 'Centre name':{
	                            if (value[k] === m) {
	                                eleString += '<li><a href="?title=' + value[k] + '">' + value[k] + '</a> - (Primary)</li>';
	                            }
	                            else {
	                                eleString += '<li><a href="?title=' + value[k] + '">' + value[k] + '</a></li>';
	                            }
	                            break;
							}
                        default:{
	                            eleString += value[k];
	                            break;
	                        }
                    }
                }
            });
        }
        else {
            eleString = 'invalid';
        }
        return eleString;
    };
	
	// simple templates
	swe.template.process = function( template, data ) {
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_function_as_a_parameter
		return template.replace( /\{\{(.*?)\}\}/g, function( matched, key ) {
			var keys = key.split( /[:|]/ ),
			    value = ''
			;
			var openingHours = ['Mon am','Mon pm','Tues am','Tues pm','Wed am','Wed pm','Thurs am','Thurs pm','Fri am','Fri pm','Sat am','Sat pm','Sun am','Sun pm'];

			if ( keys.length > 1 ) {
				key = keys[ 1 ];
			}

			// if requires googleApiKey return
			if(key === 'googleApiKey') {
				return window.location.hostname==='www.qld.gov.au'? 'AIzaSyAqkq7IK18bsh-TUMmNR-x9v9PsptT3LMY' : 'AIzaSyCKuaFIFo7YYZXHZ5zaiEZdJx0UBoyfuAE';
			}
			//to view closure details in counters page

			if(key === 'Closure' && typeof data[ key ] !== 'undefined') {
				if(!(data[ key ] === undefined || data[ key ] === null) && data[key].trim() !== '') {
					return swe.template.closure(data[key]);
				}
				else {
					return matched;
				}
			}
			//Returns opening hours
			if(openingHours.indexOf(key)>-1) {
				if(!(data[key] === undefined || data[key] === null) && data[key].trim().length>0) {
					return swe.template.openingHours(data[key]);
				}
				else {
					return 'Closed';
				}
			}

			//Generate static map
			if(key === 'staticmap') {
				if(!(data.Latitude === undefined || data.Latitude === null) && data.Latitude.trim().length>0 && !(data.Longitude === undefined || data.Longitude === null) && data.Longitude.trim().length>0) {
					var img = document.createElement('img');
					img.src = 'https://maps.googleapis.com/maps/api/staticmap?size=373x189&maptype=roadmap&markers='+data.Latitude+'%2C'+data.Longitude+'&key='+swe.template.process('{{googleApiKey}}')+'&sensor=false';
					return img.outerHTML;
				}
				else {
					return matched;
				}
			}
			// check we have the data
			if ( typeof data !== 'object' || typeof data[ key ] === 'undefined' ) {
				return matched;
			}

			// plain text data
			if ( keys.length === 1 ) {
				return swe.template.clean( data[ key ] );
			}

			// handle syntax: type:key|pipeType:pipeValue
			switch( keys[ 0 ] ) {
			// parse plain text from markdown
			case 'text':
				value = swe.template.clean( $( markdown.toHTML( data[ key ] )).text() );
				break;

			// split value into a list
			case 'list':
				value = (function( items ) {
					if ( items.length > 1 ) {
						return '<ul>' + $.map( items, function( item ) {
							return '<li>' + swe.template.clean( item ) + '</li>';
						}).join( '' ) + '</ul>';
					}
					return items[ 0 ];

				}( data[ key ].split( /\s*;\s*/ ) ));
				break;

			// compare 2 values
			case 'compare':
				if ( keys.length < 3 || typeof data[ keys[ 2 ]] === 'undefined' || data[ keys[ 2 ]] === null || data[ keys[ 2 ]].length === 0 ) {
					value = markdown.toHTML( data[ key ] );
				} else {
					value =
						'<div class="section comparison advantage comparison-first"><div class="comparison-inner">' +
						markdown.toHTML( data[ key ] ) +'</div></div>' +
						'<div class="section comparison disadvantage comparison-last"><div class="comparison-inner">' +
						markdown.toHTML( data[ keys[ 2 ]] ) + '</div></div>';
				}
				break;

			// status box
			case 'info':
			case 'warn':
				(function() {
					var content = data[ key ];
					var defaultH2 = {
						'warn': 'Warning',
						'info': 'Information'
					};
					var heading = defaultH2[ keys[ 0 ]];

					if ( keys.length >= 3 ) {
						if ( /^(['"]).*\1$/.test( keys[ 2 ] )) {
							heading = swe.template.clean( keys[ 2 ].substring( 1, keys[ 2 ].length - 1 ));
						} else if ( data[ keys[ 2 ]].length > 0 ) {
							heading = swe.template.clean( data[ keys[ 2 ]] );
						}
					}

					if ( content.length ) {
						value =
							'<div class="status ' + swe.template.clean( keys[ 0 ] ) + '">' +
								'<h2>' + heading + '</h2>' + markdown.toHTML( content ) +
							'</div>';
					} else {
						value = '';
					}
				}());
				break;

			case 'streetAddress':
				var extendedAddress, streetAddress, suburb, state, postcode;

				if ( keys < 6 ) {
					value = swe.template.format( data[ key ], keys[ 0 ] );
					break;
				}

				if ( keys.length < 6 ) {
					extendedAddress = false;
					streetAddress = data[ keys[ 1 ]];
					
				} else {
					extendedAddress = data[ keys[ 1 ]];
					streetAddress = data[ keys[ 2 ]];

					if ( streetAddress.length === 0 ) {
						streetAddress = extendedAddress;
						extendedAddress = false;
					}
				}
				suburb = data[ keys[ keys.length - 3 ]];
				state = keys[ keys.length - 2 ];
				postcode = data[ keys[ keys.length - 1 ]];

				if ( /^(['"]).*\1$/.test( state )) {
					state = swe.template.clean( state.substring( 1, state.length - 1 ));
				} else {
					state = data[ state ];
				}

				value = '<div class="caption location adr">' +
					( extendedAddress ? '<span class="extended-address">' + swe.template.clean( extendedAddress ) + '</span><br>' : '' ) +
					'<span class="street-address">' + swe.template.clean( streetAddress ) + '</span><br>' +
					'<span class="locality">' + swe.template.clean( suburb ) + '</span> ' +
					'<span class="region">' + swe.template.clean( state ) + '</span> ' +
					'<span class="postal-code">' + swe.template.clean( postcode ) + '</span></div>';
				break;

				//create sector icons in science capability directory
			case 'SectorIcons':
				value = (function (items) {
					return items.length > 0 ? $.map(items, function (item) {

						var sectorIcons = {
							'Biotechnology': 'flask',
							'Life sciences': 'bug',
							'Engineering': 'wrench',
							'Food and agriculture': 'cutlery',
							'Health and medical': 'medkit',
							'ICT and multimedia': 'laptop',
							'Advanced manufacturing': 'cogs',
							'Mining/resources': 'cog',
							'Environment and nature': 'leaf',
							'Defence, aviation and space': 'fighter-jet',
							'Energy': 'bolt',
							'Transport': 'bus',
							'Social sciences': 'group',
							'Tropical': 'sun-o'
						};
						var sectorIconsLinks = {    //VG To link sector icons in search results to its respective pages
							'Biotechnology': '/dsiti/about-us/business-areas/science-precincts-projects/biotechnology/',
							'Life sciences': '/dsiti/about-us/business-areas/science-precincts-projects/life-sciences/',
							'Engineering': '/dsiti/about-us/business-areas/science-precincts-projects/engineering/',
							'Food and agriculture': '/dsiti/about-us/business-areas/science-precincts-projects/food-agriculture/',
							'Health and medical': '/dsiti/about-us/business-areas/science-precincts-projects/health-medical/',
							'ICT and multimedia': '/dsiti/about-us/business-areas/science-precincts-projects/ict-multimedia/',
							'Advanced manufacturing': '/dsiti/about-us/business-areas/science-precincts-projects/advanced-manufacturing/',
							'Mining/resources': '/dsiti/about-us/business-areas/science-precincts-projects/mining-resources/',
							'Environment and nature': '/dsiti/about-us/business-areas/science-precincts-projects/environment-nature/',
							'Defence, aviation and space': '/dsiti/about-us/business-areas/science-precincts-projects/defence-aviation-space/',
							'Energy': '/dsiti/about-us/business-areas/science-precincts-projects/energy/',
							'Transport': '/dsiti/about-us/business-areas/science-precincts-projects/transport/',
							'Social sciences': '/dsiti/about-us/business-areas/science-precincts-projects/social-sciences/',
							'Tropical': '/dsiti/about-us/business-areas/science-precincts-projects/tropical/'
						};

						return item = $.trim(item), sectorIcons[item] ? '<a href="' + sectorIconsLinks[item] + '"><i class="fa fa-' + sectorIcons[item] + '" title="' + swe.template.clean(item) + ' sector summary"></i><span>' + swe.template.clean(item) + '</span></a>' : ' '  + swe.template.clean(item) + ' ';

					}).join('') : items[0];
				}(data[key].split(/\s*;\s*/)));
				break;

			case 'link':    //VG to convert characters in links to html entities
				var escapeChars = {
					' ':'%20',
					'&':'%26'
				},val = data[key];
				for(var i=0;i<val.length;i++){
					if(escapeChars[val.charAt(i)]!==undefined){
						val = val.substr(0,i) + escapeChars[val.charAt(i)] + val.substr(i+1);
					}
				}
				value = val;
				break;

			// convert from markdown
			case 'markdown':
				value = markdown.toHTML(data[key]);
				break;

			//brings centre data
			case 'getData':
                if(keys[2] && keys[1] && $('#data-url').data('url')){
                    var sql = 'SELECT "'+keys[1]+'" from "'+$('#data-url').data('url').split('resource/')[1]+'" WHERE ( upper("'+keys[2]+'") LIKE upper(\''+data[keys[2]]+'\' ) )';
                    var dataEnvironment = $('#data-url').data('url').indexOf('staging.data.qld.gov.au')>=0 ? 'staging.data.qld.gov.au' : 'data.qld.gov.au';

                    value='<ul class="other-centres"></ul>';  // since ajax is async call, have this element to retain position

                    var eleString = qg.data.get(dataEnvironment, sql, {
                        cache: !0,
                        successCallback: function (d) {

                            if(d.result.records.length > 0){
                                eleString = swe.template.centreList(d.result.records,keys[1],data[keys[2]],data[keys[1]]);
                                if(eleString.indexOf('invalid')<0) {
                                    //parent.append(key.replace(/\{\{(.*?)\}\}/g, eleString));
                                    $('#view-result-container').find('.other-centres').append(eleString);
                                }
                                //console.log(matched+m);
                            }

                        }
                    });
                }
                else {
                    value = '';
                }
                break;
                            

			// use format
			default:
				value = swe.template.format( data[ key ], keys[ 0 ] );
			}

			// piping
			if ( keys.length === 4 ) {
				(function() {
					// assume keys[ 2 ] === 'words'
					var words = value.split( /\s+/ ),
					    count = parseInt( keys[ 3 ], 10 )
					;

					// if longer than word count
					if ( words.length > count ) {
						// truncate it
						value = words.slice( 0, count ).join( ' ' ) + '…';
					}
				}());
			}

			return value;
		});
	};


}( jQuery, qg.swe ));
