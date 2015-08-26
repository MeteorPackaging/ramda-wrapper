Package.describe({
  name: 'ramda:ramda',  // http://atmospherejs.com/ramda/ramda
  summary: 'Ramda (official): A practical functional library for Javascript programmers.',
  version: '0.17.1',
  git: 'https://github.com/ramda/ramda.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.1');

  api.addFiles([
    'meteor-pre.js',
    'upstream/dist/ramda.js',
    'meteor-post.js',
  ], ['client', 'server']);

  api.export('R');
});

Package.on_test(function(api) {
  api.use('ramda:ramda');

  api.use([
    'tinytest',
    'http',
  ], ['client', 'server']);

  api.add_files([
    'tests/tests.js',
  ], ['client', 'server']);
});
