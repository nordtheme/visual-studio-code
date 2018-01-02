/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <code@svengreb.de>
 *
 * Project:    Nord Visual Studio Code
 * Repository: https://github.com/arcticicestudio/nord-visual-studio-code
 * License:    MIT
 * References:
 *   http://gulpjs.com
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
