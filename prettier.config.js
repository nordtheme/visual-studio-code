/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Visual Studio Code
 * Repository: https://github.com/arcticicestudio/nord-visual-studio-code
 * License:    MIT
 * References:
 *   https://prettier.io/docs/en/configuration.html
 *   https://prettier.io/docs/en/options.html
 */

/**
 * @file The Prettier configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 * @see https://prettier.io/docs/en/configuration.html
 */

module.exports = {
  printWidth: 120,
  overrides: [
    {
      files: ["*.json", "themes/**/*.json"],
      options: {
        parser: "json"
      }
    }
  ]
};
