/*global jQuery*/
(function($){
	'use strict';

	var
	//objects
	options,twitter,facebook;

	options = {
		// GENERAL SETTINGS
		length: 200,
		show_media: true,
		template: '/assets/includes/global/qg-social-media-template.html',
		// Moderation function - if returns false, template will have class hidden
		moderation: function(content) {
			return (content.text) ? content.text.indexOf('fuck') === -1 : true;
		},
		//update_period: 5000,
		// When all the posts are collected and displayed - this function is evoked
		callback: function() {
			console.log('all posts are collected');
		}
	};

		//closure for all functionalities related to twitter
	twitter = {
			ele : $('.twitter-updates') || '',
			init : function(){
				if(twitter.ele.length>0){
					var
					// consumer_key = 'BZe4vtxjAg5wB7Ayn1xtreZPD', // make sure to have your app read-only
                    // consumer_secret = '9p6XhUzIMUmJCMAJkCHCTyYNGLVs1OVHvuTEMXCAn0qFjkPtIl',
					account = twitter.ele.data('account') || '',	//account name
					list = twitter.ele.data('list') || '',	//list name
					widgetid = twitter.ele.data('widgetid') || '',	//widget id
					num = twitter.ele.data('num') || 5;  //number of tweets to display

					if(account.length>0 && widgetid.length>0) {
						twitter.generateIframe(account,list,widgetid,num);
					}
					// if(account.length>0 && list.length>0){
					// 	var cb = new Codebird();
					// 	cb.setConsumerKey(consumer_key,consumer_secret);

					// 	cb.__call(
     //                            'lists_members',
     //                            'slug=' + list + '&owner_screen_name=' + account,
     //                            function(reply) {
     //                                var listMembers = [];
     //                                $.each(reply.users,function(k,v){ listMembers.push('@'+v.screen_name); });
     //                                console.log(listMembers);
     //                                twitter.generateHTML(listMembers,num,consumer_key,consumer_secret);
     //                            },
     //                            true // this parameter required
     //                        );
					// }
					// else if(account.length>0){
					// 	twitter.generateHTML('@'+account,num,consumer_key,consumer_secret);
					// }
					else {
						console.log('data-account/data-widgetid attribute is empty');
					}
				}
			},
			generateIframe : function(account,list,widgetid,num){
				var html = '<div style="padding: 1em 1em 0"><a class="twitter-timeline" href="https://twitter.com/'+account+(list.length>0?'/'+list:'')+'" data-widget-id="'+widgetid+'" data-tweet-limit="'+num+'" data-chrome="transparent noheader noborders nofooter" data-link-color="#546A9A">Tweets from @'+account+(list.length>0?'/'+list:'')+'</a></div>';
				twitter.ele.append(html);
				twitter.runScript();
			},
			generateHTML : function(accounts,num,consumer_key,consumer_secret){
				twitter.ele.socialfeed({
					// FACEBOOK
					twitter: {
						accounts: accounts,
						limit: num,
						consumer_key: consumer_key, // make sure to have your app read-only
						consumer_secret: consumer_secret // make sure to have your app read-only
					},

					// GENERAL SETTINGS
					length: options.length,
					show_media: options.show_media,
					template: options.template,
					moderation: options.moderation,
					callback: options.callback
	            });
			},
			runScript : function(){
				return !(function(d,s,id){
					var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
					if(!d.getElementById(id)){
						js=d.createElement(s);
						js.id=id;
						js.src=p+'://platform.twitter.com/widgets.js';
						fjs.parentNode.insertBefore(js,fjs);
					}
				}(document,'script','twitter-wjs'));
			}
			
		};

	facebook = {
		ele: $('.facebook-updates'),
		init: function () {
			var fbUrl = this.ele.attr('data-href');
			this.ele.append('<div class=\'fb-page\' data-href=' + fbUrl + ' data-tabs=\'timeline\' data-small-header=\'true\' data-width=\'10000\'  data-adapt-container-width=\'true\' data-show-facepile=\'false\'></div>');
			this.facebookSdkScript();
			this.adjustWidth();
		},
		facebookSdkScript: function () {
			var js, fjs = document.getElementsByTagName('script')[0];
			if (document.getElementById('facebook-jssdk')) { return; }
			js = document.createElement('script');
			js.id = 'facebook-jssdk';
			js.src = '//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.8';
			fjs.parentNode.insertBefore(js, fjs);
		},
		adjustWidth: function () {
			var timeVar;
			$(window).on('resize', function () {
				clearTimeout(timeVar);
				timeVar = setTimeout(doneResizing, 200);
			});
			var doneResizing = function () {
				$('.fb-page').removeClass('fb_iframe_widget fb_iframe_widget_fluid');
				window.FB.XFBML.parse();
			};
		}
	};
	twitter.init();
	$(window).load(function () {
		if(document.getElementById('facebook-jssdk')) { return false; }
		facebook.init();
	});
}(jQuery));