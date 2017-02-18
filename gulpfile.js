/*
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
title      Project Gulp File                                           +
project    nord-visual-studio-code                                     +
repository https://github.com/arcticicestudio/nord-visual-studio-code  +
author     Arctic Ice Studio                                           +
email      development@arcticicestudio.com                             +
copyright  Copyright (C) 2017                                          +
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

[References]
Gulp
  (http://gulpjs.com)
npmjs
  (https://www.npmjs.com)
*/

"use strict";
/*+---------+
  + Imports +
  +---------+*/
const gulp = require("gulp-help")(require("gulp"));
const xmlValidator = require("gulp-xml-validator");

/*+---------------+
  + Configuration +
  +---------------+*/
const tmThemeFiles = ["themes/*.tmTheme"];

/*+-------+
  + Tasks +
  +-------+*/
/**
 * Shows the help.
 *
 * @since 0.1.0
 */
gulp.task("default", ["help"]);

/**
 * Lints all color theme files.
 *
 * @since 0.1.0
 */
gulp.task('lint', "Lints all color theme files", () => {
  return gulp.src(tmThemeFiles)
    .pipe(xmlValidator());
});
