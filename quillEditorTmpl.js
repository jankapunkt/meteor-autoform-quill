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

Template.quillEditor.onRendered(function rendered() {
	var $input = this.data.atts.buttonClasses ? this.$('.editor') : this.$('input'); 
	var data = this.data;                    
	const quillEditor = new Quill('.editor', data.atts.quillOptions);

	$('.editor .ql-editor').html(this.data.value);
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