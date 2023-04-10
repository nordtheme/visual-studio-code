/*
 * Copyright (c) 2016-present Sven Greb <development@svengreb.de>
 * This source code is licensed under the MIT license found in the license file.
 */

/**
 * Configurations for ESLint.
 * @see https://eslint.org/docs/latest/use/configure
 * @see https://eslint.org/docs/latest/use/configure/#using-configuration-files
 * @see https://eslint.org/docs/latest/use/configure/#specifying-environments
 * @see https://eslint.org/docs/latest/use/configure/#configuring-plugins
 * @see https://eslint.org/docs/latest/rules
 */
module.exports = {
  root: true,
  extends: [
    "@arcticicestudio/eslint-config-base",
    /*
     * Enable support for projects using Prettier.
     * Note that this must always be placed after the `@arcticicestudio/eslint-config-base` preset to take precedence,
     * otherwise it won't prevent errors due to useless and possibly conflicting rules!
     */
    "@arcticicestudio/eslint-config-base/prettier",
  ],
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "capitalized-comments": "off",
      },
    },
  ],
};
