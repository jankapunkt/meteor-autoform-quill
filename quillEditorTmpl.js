/*
* @Author: philipp
* @Date:   2016-11-03 13:24:32
* @Last Modified by:   berkbadem
* @Last Modified time: 2016-11-03 16:59:04
*/

'use strict';

import { Template } from 'meteor/templating';

const Quill = require('quill');

import './quillEditorTmpl.html';

Template.quillEditor.created = function () {
  this.value = new ReactiveVar(this.data.value);
};

Template.quillEditor.onRendered(function rendered() {
	var self = this;
	var options = this.data.atts.settings || {};
	var $input = this.data.atts.buttonClasses ? this.$('.editor') : this.$('input'); 
	
	const quillEditor = new Quill(".editor", options);
});

Template.quillEditor.helpers({
  atts: function addFormControlAtts() {
    var atts = _.clone(this.atts);
    atts = AutoForm.Utility.addClass(atts, 'editor');
    delete atts.settings;
    return atts;
  }
});

Meteor.startup(function() {
	import { Autoform } from 'meteor/aldeed:autoform';

	if(AutoForm) {
		return AutoForm.addInputType('quilleditor', {
			template: 'quillEditor',
			valueOut: function () {
				return this.find('.ql-editor').html();
			}
		});
	} else {
		return;
	}
});