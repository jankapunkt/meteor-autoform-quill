/*
* @Author: berkbadem
* @Date:   2017-08-04 08:47:55
* @Last Modified by:   jkuester
* @Last Modified time: 2018-06-05 14:50:55
*/

'use strict';

import { Template } from 'meteor/templating';

const Quill = require('quill');

import './template.html';

Template.quillEditor.onRendered(function rendered() {
	const data = Template.currentData() || {};
	const {atts} = data || {};
	const options = {
		modules: atts.modules ? JSON.parse(atts.modules) : {
			toolbar: [
				['bold', 'italic', 'underline', 'strike'],
				['blockquote', 'code-block'],
				[{'header': 1}, {'header': 2}],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				[{'script': 'sub'}, {'script': 'super'}],
				[{'indent': '-1'}, {'indent': '+1'}],
				[{'direction': 'rtl'}],
				[{'size': ['small', false, 'large', 'huge']}],
				[{'header': [1, 2, 3, 4, 5, 6, false]}],
				[{'color': []}, {'background': []}],
				[{'font': []}],
				[{'align': []}],
				['clean']
			]
		},
		placeholder: atts.placeholder || 'Lütfen metni giriniz...',
		theme: atts.theme || 'snow'
	}, editor = new Quill(".editor", options);

	$('.editor .ql-editor').html(this.data.value);
});

Meteor.startup(function() {
	import { Autoform } from 'meteor/aldeed:autoform';

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