/*
 * Copyright (C) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (C) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Visual Studio Code
 * Repository: https://github.com/arcticicestudio/nord-visual-studio-code
 * License:    MIT
 */

/**
 * Configurations for ESLint.
 *
 * @see https://eslint.org/docs/user-guide/configuring
 */
module.exports = {
  extends: [
    "plugin:jsonc/recommended-with-jsonc",
    "@arcticicestudio/eslint-config-base",
    /*
     * Enable support for projects using Prettier.
     * Note that this must always be placed after the `@arcticicestudio/eslint-config-base` preset to take precedence,
     * otherwise it won't prevent errors due to useless and possibly conflicting rules!
     */
    "@arcticicestudio/eslint-config-base/prettier",
  ],
  plugins: ["jsonc"],
};
