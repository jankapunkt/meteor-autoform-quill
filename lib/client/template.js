/*
* @Author: berkbadem
* @Date:   2017-08-04 08:47:55
* @Last Modified by:   berkbadem
* @Last Modified time: 2017-08-04 08:47:55
*/

Template.afQuillEditor.created = function () {
  this.value = new ReactiveVar(this.data.value);
};

Template.afQuillEditor.rendered = function() {
  var options = {	
		modules: {
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
		placeholder: 'Lütfen metni giriniz...',
		theme: 'snow'
	}, afQuillEditor = new Quill(".editor", options);
  
  $('.editor .ql-editor').html(this.data.value);
 
};

Template.afQuillEditor.helpers({
  atts: function () {
    var self = this;

    Tracker.nonreactive(function () {
      var t = Template.instance();
      if (t.value.get() !== self.value) {
        t.value.set(self.value);
      }
    });
    
    return _.omit(this.atts, 'settings');
  }
});