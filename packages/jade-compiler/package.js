Package.describe({
  summary: "Compiler for the meteor-jade template language",
  version: "0.4.0",
  name: "mquandalle:jade-compiler",
  git: "https://github.com/mquandalle/meteor-jade.git"
});

Npm.depends({
 "jade": "https://github.com/mquandalle/jade/tarball/f3f956fa1031e05f85be7bc7b67f12e9ec80ba37"
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use([
    'underscore',
    'htmljs',
    'html-tools',
    'spacebars-compiler'
  ]);
  api.addFiles([
    'lib/lexer.js',
    'lib/parser.js',
    'lib/compilers.js',
    'lib/exports.js'
  ]);
  api.export('Jade');
});

Package.onTest(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.use("tinytest");
  api.use("mquandalle:jade-compiler", "server");
  api.addFiles(["tests/compile.js"], "server");
});
