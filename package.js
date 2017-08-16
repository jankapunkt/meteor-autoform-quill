Package.describe({
  name: 'berkbadem:meteor-autoform-quill',
  git: 'https://github.com/berkbadem/meteor-autoform-quill',
  summary: 'Autoform Quill editor.',
  version: '0.1.8'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use([
    'templating',
    'underscore',
    'reactive-var',
    'aldeed:autoform@6.0.0',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/template.html',
    'lib/client/template.js',
    'lib/client/autoform-quill.js'  
  ], 'client');
  
  api.addFiles([
    'lib/client/quill/quill.snow.css',
    'lib/client/quill/quill.bubble.css'
  ], 'client');

});

Npm.depends({
  quill: '1.3.0'
});