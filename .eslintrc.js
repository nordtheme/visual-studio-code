/*
 * Copyright (c) 2017-present Arctic Ice Studio <development@arcticicestudio.com>
 * Copyright (c) 2017-present Sven Greb <development@svengreb.de>
 *
 * Project:    Nord Visual Studio Code
 * Repository: https://github.com/arcticicestudio/nord-visual-studio-code
 * License:    MIT
 */

/**
 * @file The ESLint configuration.
 * @author Arctic Ice Studio <development@arcticicestudio.com>
 * @author Sven Greb <development@svengreb.de>
 */

module.exports = {
  extends: "arcticicestudio-base",
  plugins: ["json", "prettier"],
  parser: "babel-eslint",
  env: {
    node: true,
    browser: true
  },
  rules: {
    "prettier/prettier": "error"
  }
};
