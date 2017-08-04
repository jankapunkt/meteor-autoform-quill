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
	const options = {
		modules: {
			toolbar: [
				  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
				  ['blockquote', 'code-block'],

				  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
				  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
				  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
				  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
				  [{ 'direction': 'rtl' }],                         // text direction

				  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
				  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

				  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
				  [{ 'font': [] }],
				  [{ 'align': [] }],

				  ['clean']                                         // remove formatting button
			]
		},
		placeholder: 'Lütfen metni giriniz...',
		theme: 'snow'
    }
	,	editor = new Quill('.editor', options);

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