/**
 *  This file contains the variables used in other gulp files
 *  which defines tasks
 *  By design, we only put there very generic config values
 *  which are used in several places to keep good readability
 *  of the tasks
 */

var gutil = require('gulp-util');

/**
 *  The main paths of your project handle these with care
 */
exports.paths = {
  src: 'frontend',
  dist: './',
  tmp: '.tmp',
  e2e: 'e2e'
};

/**
 *  Wiredep is the lib which inject bower dependencies in your project
 *  Mainly used to inject script tags in the index.html but also used
 *  to inject css preprocessor deps and js files in karma
 */
exports.wiredep = {
  //exclude: [/jquery/],
  directory: 'bower_components',
   fileTypes: {
      html: {
         replace: {
            js: '<script src="/{{filePath}}"></script>',
            css: '<link rel="stylesheet" href="/{{filePath}}" />'
         }
      }
   }
};

/**
 *  Common implementation for an error handler of a Gulp plugin
 */
exports.errorHandler = function(title) {
  'use strict';

  return function(err) {
    gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
    this.emit('end');
  };
};
