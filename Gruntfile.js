// 'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',

    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 9001
        }
      }
    },

    watch: {
      livereload: {
        files: ['**/*.html', 'js/*.js', 'css/*.css'],
        options: {
          livereload: true,
          spawn: false
        }
      }
    }

  });

  // load task
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task
  grunt.registerTask('default', ['connect', 'watch']);
};
