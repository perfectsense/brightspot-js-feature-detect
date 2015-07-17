import $ from 'jquery';

export default {

	isTouchDevice: undefined,

	defaults: {
		classes: {
			isTouchDevice: ['touch','no-touch']
		}
	},

	addClasses() {
		var classes = this.options.classes;
		var self = this;
		for (var key in classes) {
			if (self[key]) {
				self.$el.addClass(classes[key][0]);
			} else {
				self.$el.addClass(classes[key][1]);
			}
		}
	},

	/** @see: http://stackoverflow.com/questions/4817029/whats-the-best-way-to-detect-a-touch-screen-device-using-javascript */
	setIsTouchDevice() {
		var msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture;
		this.isTouchDevice = (( "ontouchstart" in window ) || msGesture || window.DocumentTouch && document instanceof DocumentTouch);
	},

	init($el, options) {
		this.$el = $el;
		this.options = $.extend(true, {}, this.defaults, options);
		this.setIsTouchDevice();
		this.addClasses();
	}
};