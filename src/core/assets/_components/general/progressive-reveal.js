/**
 ************************
 ** Progressive Reveal **
 ************************
 *
 * Version: 1.2
 * Developed by: Nimrod Evans for DSITIA > OSSIO
 *
 * A progressive reveal function to show the next form element once a previous element has been selected.
 *
 * Requires:
 * - JQuery
 *
 * How to use:
 * ===========
 * Attach the following classes / attributes to your objects:
 * data-qg-pr-group - Attach to group of objects to apply progressive reveal to. Note: Direct Children must be the items to reveal
 * data-qg-pr-target - Set on radio buttons within each reveal group with the JQUERY target for the next reveal object (eg. ".option2")
 *
 * Optional:
 * data-btn-target - Attribute - Set on .pr-group. Determins a target for text changes to the submit button. When present, saves the inital state of the button, which will be revealed when a checkbox in the final element is selected.
 * 		data-btn-text - Attribute - Set on any child of .pr-group. When that child is revealed, the 'btn-target' value will be set to this text.
 * 		NOTE: REQUIRES data-btn-target to be set on group element.
 * data-pr-not - Attribute - Set on ratio buttons within each reveal group to hide elements when selected (over-ridden if items being hidden are 'revealed' inside an element which is being revealed at the same time)
 *
 * Version Control:
 * ================
 * 1.2 		- 10/1 -Re-factored, modularised, closure, changed class requirements to data targets (as they do not add styling),
 * 					added QG prefix, removed button custom functionality.
 * 1.1		- 29/4 - Added 'NOT' functionality, hack fix 'stutter' on init
 * 1.0.1 	- 28/4 - Fixed minor bugs for robustness
 * 1.0		- First full version
 */

'use strict';

const progressiveReveal = (function () {
	const defaultSettings = {
		toggle: 'false',
		hideOthers: 'true'
	};

	// const groupAttr = 'data-qg-pr-group'; // Optional
	const settingsAttr = {
		toggle: 'data-toggle',
		hideOthers: 'data-hide-others'
	};

	const triggerAttr = 'data-qg-pr';
	const triggerTargetAttr = 'data-target';
	const triggerGroupTargetAttr = 'data-parent'; // Optional

	const triggerActiveData = 'qgProgressiveRevealActive';

	// function saveSetting(target, $parent, targetAttr, parentAttr, setting) {
	function saveSetting (target, $parent, setting) {
		const settingAttrVal = settingsAttr[setting];

		if (!$(target).attr(settingAttrVal)) {
			if ($parent.attr(settingAttrVal)) {
				$(target).attr(settingAttrVal, $parent.attr(settingAttrVal));
			} else {
				$(target).attr(settingAttrVal, defaultSettings[setting]);
			}
		}
	}

	function handleNonActiveElements (trigger, $group) {
		if ($(trigger).attr(settingsAttr.hideOthers) !== 'triggerGroupTargetAttre') {
			// Do nothing
		} else {
			$group.find(`*[${triggerAttr}]`).each(function () {
				if ($(this).data(triggerActiveData) !== true && $($(this).attr(triggerTargetAttr)).is(':visible')) {
					$($(this).attr(triggerTargetAttr)).slideUp();
				}
			});
		}
	}

	// Set up triggers
	$(`*[${triggerAttr}]`).each(function () {
		// Find parent
		let $parent = $('body');
		if (!$(this).attr(triggerGroupTargetAttr) && $(this).closest(`*[${groupAttr}]`)) {
			$(this).attr(triggerGroupTargetAttr, `*[${groupAttr}]`);
		}
		$parent = $(this).closest($(this).attr(triggerGroupTargetAttr));
		// Save settings
		saveSetting(this, $parent, 'toggle');
		saveSetting(this, $parent, 'hideOthers');
	});

	// Set trigger action
	$(`*[${triggerAttr}]`).on('click', function () {
		$(this).data(triggerActiveData, true);
		// Handle other active elements
		if ($(this).attr(triggerGroupTargetAttr)) {
			const $group = $(this).closest($(this).attr(triggerGroupTargetAttr));
			if ($group.length) {
				handleNonActiveElements(this, $group);
			}
		}
		// Handle this element action
		if ($(this).attr(settingsAttr.toggle) === 'true') {
			$($(this).attr(triggerTargetAttr)).slideToggle();
		} else if (!$($(this).attr(triggerTargetAttr)).is(':visible')) {
			$($(this).attr(triggerTargetAttr)).slideDown();
		}

		$(this).removeData(triggerActiveData);
	});
}());

module.exports = progressiveReveal;
