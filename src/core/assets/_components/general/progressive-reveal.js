////////////////////////
// Progressive Reveal //
////////////////////////
/*
Version: 1.2
Developed by: Nimrod Evans for DSITIA > OSSIO

A progressive reveal function to show the next form element once a previous element has been selected.

Requires:
- JQuery

How to use:
===========
Attach the following classes / attributes to your objects:
data-qg-pr-group	- Attach to group of objects to apply progressive reveal to. Note: Direct Children must be the items to reveal
data-qg-pr-target	- Set on radio buttons within each reveal group with the JQUERY target for the next reveal object (eg. ".option2")

Optional:
data-btn-target - Attribute - Set on .pr-group. Determins a target for text changes to the submit button. When present, saves the inital state of the button, which will be revealed when a checkbox in the final element is selected.
	data-btn-text - Attribute - Set on any child of .pr-group. When that child is revealed, the 'btn-target' value will be set to this text.
	NOTE: REQUIRES data-btn-target to be set on group element.
data-pr-not - Attribute - Set on ratio buttons within each reveal group to hide elements when selected (over-ridden if items being hidden are 'revealed' inside an element which is being revealed at the same time)

Version Control:
================
1.2		- 10/1 - Re-factored, modularised, closure, changed class requirements to data targets (as they do not add styling),
	added QG prefix, removed button custom functionality.
1.1		- 29/4 - Added 'NOT' functionality, hack fix 'stutter' on init
1.0.1	- 28/4 - Fixed minor bugs for robustness
1.0		- First full version

*/

'use strict';

const progressiveReveal = (function() {
	const defaultSettings = {
		toggle: 'false',
		hideOthers: 'true'
	};

	const groupSettingAttrAnimate = 'data-qg-pr-set-animate'; // to be used

	const groupAttr = 'data-qg-pr-group';
	const groupSettings = {
		toggleAttr: 'data-Toggle', 
		hideOthersAttr: 'data-hide-others'
	};

	const triggerAttr = 'data-qg-pr';
	const triggerTargetAttr = 'data-target';
	const triggerGroupTargetAttr = 'data-parent'; // Optional
	const triggerSettings = {
		toggleAttr: 'data-toggle',
		hideOthersAttr: 'data-hide-others'
	};

	const triggerActiveData = 'qgProgressiveRevealActive';

	function saveSetting(target, $parent, targetAttr, parentAttr, setting) {
		if(!$(target).attr(targetAttr)) {
			if ($parent.attr(parentAttr)) {
				$(target).attr(targetAttr, $parent.attr(parentAttr));
			} else {
				$(target).attr(targetAttr, setting);
			}
		}
	}

	function handleNonActiveElements(trigger, $group) {
		if ($(trigger).attr(triggerSettings.hideOthersAttr) != 'true' ) {
			// Do nothing
		} else {
			$group.find(`*[${triggerAttr}]`).each (function() {
				if ($(this).data(triggerActiveData) !== true && $($(this).attr(triggerTargetAttr)).is(':visible')) {
					$($(this).attr(triggerTargetAttr)).slideUp();
				}
			});
		}
	}

	// Set up triggers
	$(`*[${triggerAttr}]`).each (function(){
		// Default settings
		let settings = defaultSettings;
		let $parent = $('body');

		// Find parent
		if (!$(this).attr(triggerGroupTargetAttr) && $(this).closest(`*[${groupAttr}]`)) {
			$(this).attr(triggerGroupTargetAttr,`*[${groupAttr}]`);
		}
		$parent = $(this).closest($(this).attr(triggerGroupTargetAttr));
		// Save settings
		saveSetting (this, $parent, triggerSettings.toggleAttr, groupSettings.toggleAttr, settings.toggle);
		saveSetting (this, $parent, triggerSettings.hideOthersAttr, groupSettings.hideOthersAttr, settings.hideOthers);
	});
	
	// Set trigger action
	$(`*[${triggerAttr}]`).on ('click', function() {
		$(this).data(triggerActiveData, true);
		
		if ($(this).attr(triggerGroupTargetAttr)) {
			const $group = $(this).closest($(this).attr(triggerGroupTargetAttr));
			if ($group.length) {
				handleNonActiveElements (this, $group);
			}
		}

		if ($(this).attr(triggerSettings.toggleAttr) == 'true') {
			$($(this).attr(triggerTargetAttr)).slideToggle();
		} else if (!$($(this).attr(triggerTargetAttr)).is(':visible')) {
			$($(this).attr(triggerTargetAttr)).slideDown();
		}

		$(this).removeData(triggerActiveData);
	});
}());

module.exports = progressiveReveal;

// (function () {
// 	'use strict';

// 	const groupTarget = "*[data-qg-pr-group]";
// 	const $groupTarget = $("*[data-qg-pr-group]");
// 	const btnTargetAttr = "data-qg-button";
// 	const btnRevealTargetAttr = "data-qg-pr-target";
// 	const btnHideTargetAttr = "data-qg-pr-hide-target";

	
// 	function initButtonValueChanger(item) {
// 		const $item = $(item);
// 		// Add button default value
// 		const value = $($item.attr(btnTargetAttr)).attr('value');
// 		$(item).data('buttonDefaultValue', value);

// 		// Init button
// 		const $btnTarget = $($(target).attr('data-btn-target'));
// 		const btnText = $(target).first().find('[data-btn-text]').attr('data-btn-text');
// 		$btnTarget.prop('value', btnText);

// 		// Set final button
// 		if ($item.find('input[type=radio], input[type=checkbox]').length) {
// 			$item.children().last().find('input[type=radio], input[type=checkbox]').on('click',function(){
// 				if ($($(this).closest(_this.groupTarget).attr('data-btn-target')).length &&
// 					$(this).closest(_this.groupTarget).attr('data-btn-default') ) {
// 					var button = $(this).closest(_this.groupTarget).attr('data-btn-target');
// 					var string = $(this).closest(_this.groupTarget).attr('data-btn-default');
// 					_this.updateButtonText($(button), string);
// 					_this.showMore(this);
// 				}
// 			});
// 		}
// 	}
// 	function setUpGroups(){
// 		var $elementSet = $(groupTarget);

// 		// Setup button value changer
// 		$elementSet.each (function(index) {
// 			if ($(item).attr(btnTargetAttr).length) {
// 				// Button target exists
// 				initButtonValueChanger(this);
// 			}
// 		});
// 	}
	

// 	function addRevealFunctions($groupTarget) {
// 		$groupTarget.find('[data-pr-target]').each (function(index) {
// 			var target = $(this).attr(btnRevealTargetAttr);
// 			$(this).on ('click', function() {
// 				var not = $(this).attr(btnHideTargetAttr);
// 				if( not ){
// 					_this.hideOption(not);
// 				}
// 				_this.showMore(this);
// 				_this.revealNext(target);
// 				_this.changeButton(this, $(target));
// 			});
// 		});
// 	}

// 	// INIT FUNCTIONS //
// 	if ($groupTarget.length) {	
// 		$groupTarget.show(); // Just in case it's hidden
// 		$(groupTarget + ' > * + *').hide(); // Hide all items

// 		// Init //
// 		// setUpGroups ();
// 		addRevealFunctions ($groupTarget);
// 		setupChildren ();
// 	}
// }());


/*
var progressiveRevealClass = function( groupTarget  ){

	// Default perameters
	if(groupTarget === undefined) { groupTarget = '.pr-group'; }

	this.setupGroups = function(){

		var $elementSet = $(groupTarget);

		$elementSet.each(function(index){

			_this.addDefaultButtonAttr(this);
			_this.initButton(this);

			_this.setFinalButton( $(this) );

		});

	}

	this.addDefaultButtonAttr = function(item){

		if($(item).attr('data-btn-target').length){

			var value = $($(item).attr('data-btn-target')).attr('value');
			$(item).attr('data-btn-default', value);

		}

	}

	this.initButton = function(target){

		var $btnTarget = $($(target).attr('data-btn-target'));
		var btnText = $(target).first().find('[data-btn-text]').attr('data-btn-text');

		$btnTarget.prop('value', btnText);

	}

	this.setupChildren = function(){

		var $elementSet = $(groupTarget).children();
		var len = $elementSet.length;

		$elementSet.each(function(index){

			_this.showChecked( $(this) ); // Reveal hidden elements if checkbox is on

		});

	}

	this.setFinalButton = function($item){

		if( $item.find('input[type=radio], input[type=checkbox]').length  ){

			$item.children().last().find('input[type=radio], input[type=checkbox]').on('click',function(){

				if($($(this).closest(_this.groupTarget).attr('data-btn-target')).length &&
					$(this).closest(_this.groupTarget).attr('data-btn-default') ){

					var button = $(this).closest(_this.groupTarget).attr('data-btn-target');
					var string = $(this).closest(_this.groupTarget).attr('data-btn-default');

					_this.updateButtonText($(button), string);
					_this.showMore(this);

				}

			});
		}

	}

	this.showChecked = function( $this ){

		var $checkboxTarget = $this.find('[data-pr-target]:checked');

		if( $checkboxTarget.length ){

			$this.show(); // Show the element
			var target = $checkboxTarget.attr('data-pr-target');

			this.revealNext(target);

		}

	}

	this.addButtonFunctions = function(){

		$groupTarget.find('[data-pr-target]').each(function(index){
					
			var target = $(this).attr('data-pr-target');

			$(this).on('click',function(){

				var not = $(this).attr('data-pr-not');

				if( not ){

					_this.hideOption(not);

				}

				_this.showMore(this);
				_this.revealNext(target);
				_this.changeButton(this, $(target));

			});

		});

	}

	this.showMore = function(target){

		$this = $(target);

		if( $this.attr("data-pr-more") ){

			$(target).closest(".pr-group > *").find(".d-note").slideUp();

			$( "#" + $this.attr("data-pr-more") ).slideDown("fast");

		}

	}

	this.changeButton = function(item, $target) {

		if($($(item).closest(_this.groupTarget).attr('data-btn-target')).length && $target.attr('data-btn-text')){

			var button = $(item).closest(_this.groupTarget).attr('data-btn-target');
			var btnDefault = $(item).closest(_this.groupTarget).attr('data-btn-default');
			var string = $target.attr('data-btn-text');

			if($(button).prop('value') != btnDefault ){

				_this.updateButtonText($(button), string);

			}

		}

	}

	this.revealNext = function( target ) {

		$target = $(target);
		$target.slideDown('fast');

		_this.showChecked( $target );

	}

	this.hideOption = function( target ){

		$target = $(target);
		$target.slideUp('fast');

	}

	this.updateButtonText = function($button,string){

		if($button.length) {

			$button.prop('value',string); // Set the button

		}

	}

	// INIT FUNCTIONS //

	var $groupTarget = $(groupTarget);
	var _this = this;

	_this.groupTarget = groupTarget;
	_this.$groupTarget = $groupTarget;



	if($groupTarget.length){	

		$(groupTarget).show(); // Just in case it's hidden
		
		$(groupTarget + ' > * + *').hide(); // Hide all items

		this.setupGroups();
		this.addButtonFunctions();
		this.setupChildren();

	}

}

var progressiveReveal = {};
$( document ).ready(function() {
	progressiveReveal = new progressiveRevealClass();
});
*/
