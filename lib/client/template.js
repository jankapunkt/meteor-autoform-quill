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
  var self = this;
  var options = this.data.atts.settings || {};
  var $editor = $(this.firstNode);
  
  afQuillEditor = new Quill(".editor", options);
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