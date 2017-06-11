<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-visual-studio-code/develop/assets/nord-visual-studio-code-banner.svg"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-visual-studio-code/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg?style=flat-square"/></a> <img src="https://marketplace.visualstudio.com/favicon.ico" width=24 height=24/> <a href="https://code.visualstudio.com/updates/v1_12"><img src="https://img.shields.io/badge/VS_Code-v1.12+-373277.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="http://vsmarketplacebadge.apphb.com/version/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="http://vsmarketplacebadge.apphb.com/installs/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="http://vsmarketplacebadge.apphb.com/rating-short/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a></p>

---

# 0.3.0
*2017-06-11*

## Improvements
### Syntax
#### Go
❯ Readded the *Go* string format placeholder which has been removed unintentionally after converting from the `.tmTheme` to the new JSON format. (@jsvensson, PR #16, d5529d59)

## Bug Fixes
### UI
❯ Fixed the scrollbar covering (VCS) code info marker in the right gutter. The scrollbar now has a transparency of 60%. (@Phlicess, #13, 5bd2c70c)

<p align="center"><strong>Preview</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023389/a75879d8-37ba-11e7-8c1b-c5ee6020db1c.png"/><br><strong>Hovered</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023391/b64e6074-37ba-11e7-8b8b-210e6056d029.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023400/dc858a92-37ba-11e7-8e76-85a8cbff12b0.gif"/></p>

# 0.2.0
*2017-05-07*

**Please note that the minimal version for this theme is now >=1.12.0 due to the new VS Code theme- and workbench API!**

## Features
### UI
❯ Implemented full support for the new VS Code theme- and [workbench](https://code.visualstudio.com/docs/getstarted/theme-color-reference) API introduced in version [1.12.0](https://code.visualstudio.com/updates/v1_12#_workbench-theming). (@skbolton, #8 PR #11, e25f748b)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-preview.png"/><br><blockquote>Icons provided by <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</a>.<br>Font: <a href="https://adobe-fonts.github.io/source-code-pro">Source Code Pro</a> 20px</blockquote></p>

A complete list of all implemented workbench UI styles can be found in the [README](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/README.md#features).

Thanks to @octref and @Tyriar for testing and providing improvement suggestions!

<p align="center"><strong>Activity Bar Badges</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-activity-bar-badge.png"/></p>

<p align="center"><strong>Tabs</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-tab-bar.png"/></p>

<p align="center"><strong>Status Bar</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-status-bar.png"/></p>

<p align="center"><strong>Panels and terminal colors</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-panel-terminal-colors.png"/></p>

<p align="center"><strong>Editor Widgets (Search)</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-editor-widget-search.png"/></p>

<p align="center"><strong>Notifications</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-notification.png"/></p>

<p align="center"><strong>Side Bar Views (Debug)</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-side-bar-debug.png"/></p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Diff Editor</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-inserted.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-removed.png"</p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Validations</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-info.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-warning.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-error.png"/></p>

<p align="center"><strong>Validations</strong><br><strong>Active selection</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection.png"/><br><strong>Inactive selection</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection.png"/><br><strong>Active selection with keyboard navigation marker</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection-keyboard.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-ui-list-active-selection-keyboard.gif"/><br><strong>Active- and inactive selection with hover marker</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection-hover.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-ui-list-hover.gif"/></p>

❯ Implemented support for terminal ANSI colors. (@threeve, PR #4, 4e5815be)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-panel-terminal-colors.png"/></p>

## Improvement
### Languages
#### Go
❯ Implemented highlighting for Go string format placeholders. (@jsvensson, #7, 92ea6619)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24760013/a12bb286-1ae7-11e7-9a4a-f3c745e2c497.png"/></p>

### Documentation
❯ Updated the *Quick Open* keymapping for OSX. (@uonick, PR #9, e93694da)

❯ Changed the shields (badges) style to `flat-square`. (@arcticicestudio, caafb9d5)

## Bug Fixes
### Documentation
❯ Fixed a typo in the project description. (@arcticicestudio, #6, 8744b392)

# 0.1.1
*2017-02-25*
## Bug Fixes
❯ Fixed uncolored start- and end elements/tags of block comments for various languages. (@Platzer, #2 #3, 6db13ea2)

<p align="center"><strong>Before</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333765/c540e0a8-fb91-11e6-9c21-37e6bcda0e54.png"/><br><strong>After</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333769/d1d5c2f2-fb91-11e6-9f06-9c50d006388c.png"/></p>

# 0.1.0
*2017-02-18*
**Initial VS Code Marketplace extension release version!**

## Features
A complete list of all implemented features can be found in the [README](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/README.md#features) section.

❯ Implemented the main color theme file [`Nord.tmTheme`](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/themes/Nord.tmTheme). (@arcticicestudio, #1, 63b16747)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-top.png"/></p>

Detailed information about features, supported languages and install instructions can be found in the [README](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/README.md#installation) and in the [project wiki](https://github.com/arcticicestudio/nord-visual-studio-code/wiki).

# 0.0.0
*2017-02-18*
**Project Initialization**
