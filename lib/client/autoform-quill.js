AutoForm.addInputType('quilleditor', {
	template: 'afQuillEditor',
	valueOut: function() {
		return this.find('.ql-editor').html();
	}
});