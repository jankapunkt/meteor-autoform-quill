Package.describe({
  name: 'berkbadem:meteor-autoform-quill',
  git: 'https://github.com/berkbadem/meteor-autoform-quill',
  summary: 'Autoform Quill editor.',
  version: '0.1.11'
});

Package.onUse(function (api) {
  api.versionsFrom('1.0');
  api.use([
    'ecmascript',
    'es5-shim',
    'templating',
    'reactive-var',
    'blaze-html-templates',
    'aldeed:autoform@6.0.0',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/template.js',
    'lib/client/template.html',
  ], 'client');
  
  api.addFiles([
    'lib/client/quill/quill.snow.css',
    'lib/client/quill/quill.bubble.css'
  ], 'client');

});

Npm.depends({
  quill: '1.3.0'
});