/*
 * grunt-po2mo
 * https://github.com/floatwork711/grunt-po2mo
 *
 * Copyright (c) 2013 Michele Bertoli, floatwork_
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    eslint: {
      options: {
        configFile: '.eslintrc',
      },
      target: ['tasks/po2mo.js']
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['tmp'],
    },

    // Configuration to be run (and then tested).
    po2mo: {
      stage: {
        src: 'test/fixtures/fr.po',
        dest: 'tmp/fr.mo',
      },
      prod: {
        options: {
          deleteSrc: true
        },
        src: 'tmp/fixtures/fr.po',
        dest: 'tmp/fr.mo'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js'],
    },

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('copy', 'Copy fixtures to a temp location.', function() {
    grunt.file.copy('test/fixtures/fr.po', 'tmp/fixtures/fr.po');
  });

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'copy', 'po2mo', 'nodeunit']);

  grunt.registerTask('lint', ['eslint']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['lint', 'test']);

};
