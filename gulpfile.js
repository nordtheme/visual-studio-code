"use strict";
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
  http://gulpjs.com
npmjs
  https://www.npmjs.com
*/
/*+---------+
  + Imports +
  +---------+*/
const gulp = require("gulp-help")(require("gulp"));
const eslint = require("gulp-eslint");

/*+---------------+
  + Configuration +
  +---------------+*/
const jsonThemeFiles = ["themes/**/*.json"];

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
 * Runs all lint tasks.
 *
 * @since 0.2.0
 */
gulp.task("lint", "Runs all lint tasks", ["lint-json"]);

/**
 * Lints all JSON color theme sources.
 *
 * @since 0.2.0
 */
gulp.task("lint-json", "Lints all JSON color theme sources", () => {
  return gulp.src(jsonThemeFiles)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
