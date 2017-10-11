<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-visual-studio-code/develop/assets/nord-visual-studio-code-banner.png" srcset="https://cdn.rawgit.com/arcticicestudio/nord-visual-studio-code/develop/assets/nord-visual-studio-code-banner-2x.png 2x"/></p>

<p align="center"><img src="https://cdn.travis-ci.org/images/favicon-c566132d45ab1a9bcae64d8d90e4378a.svg" width=24 height=24/> <a href="https://travis-ci.org/arcticicestudio/nord-visual-studio-code"><img src="https://img.shields.io/travis/arcticicestudio/nord-visual-studio-code/develop.svg?style=flat-square"/></a> <img src="https://circleci.com/favicon.ico" width=24 height=24/> <a href="https://circleci.com/gh/arcticicestudio/nord-visual-studio-code"><img src="https://img.shields.io/circleci/project/github/arcticicestudio/nord-visual-studio-code/develop.svg?style=flat-square"/></a> <img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-visual-studio-code/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg?style=flat-square"/></a> <img src="https://marketplace.visualstudio.com/favicon.ico" width=24 height=24/> <a href="https://code.visualstudio.com/updates/v1_12"><img src="https://img.shields.io/badge/VS_Code-v1.12+-373277.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/version/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/installs/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/rating-short/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a></p>

<p align="center"><a href="https://github.com/arcticicestudio/nord-visual-studio-code/blob/v0.5.0/CHANGELOG.md"><img src="https://img.shields.io/badge/Changelog-0.5.0-81A1C1.svg?style=flat-square"/></a></p>

<p align="center">An arctic, north-bluish clean and elegant <a href="https://code.visualstudio.com">Visual Studio Code</a> theme.</p>

<p align="center">Designed for a fluent and clear workflow.<br>
Based on the <a href="https://github.com/arcticicestudio/nord">Nord</a> color palette.</p>

---

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-preview.png"/><br><blockquote>Icons provided by <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</a>.<br>Font: <a href="https://adobe-fonts.github.io/source-code-pro">Source Code Pro</a> 20px</blockquote></p>

## Getting started
### Installation
#### <img src="https://marketplace.visualstudio.com/favicon.ico" width=16 height=16/> [VS Code Extension Marketplace](https://code.visualstudio.com/docs/editor/extension-gallery)
Launch *Quick Open*
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `⌘P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

Paste the following command and press `Enter`:
```shell
ext install nord-visual-studio-code
```

#### <img src="https://marketplace.visualstudio.com/favicon.ico" width=16 height=16/> [Packaged VSIX Extension](https://code.visualstudio.com/docs/extensions/install-extension#_install-from-a-vsix)
[Download](https://github.com/arcticicestudio/nord-visual-studio-code/releases/latest) the latest [`nord-visual-studio-code-0.5.0.vsix`](https://github.com/arcticicestudio/nord-visual-studio-code/releases/download/v0.5.0/nord-visual-studio-code-0.5.0.vsix) file from the GitHub repository and install it from the command line
```shell
code --install-extension nord-visual-studio-code-0.5.0.vsix
```
or from within VS Code by launching *Quick Open* and running the *Install from VSIX...* command.

#### From Source
Continuous integration builds are running at [Travis-CI](https://travis-ci.org/arcticicestudio/nord-visual-studio-code) and [Circle CI](https://circleci.com/gh/arcticicestudio/nord-visual-studio-code).

##### <img src="https://github.com/favicon.ico" width=16 height=16/> [GitHub Repository Clone](https://help.github.com/articles/cloning-a-repository)
Change to your `.vscode/extensions` [VS Code extensions directory](https://code.visualstudio.com/docs/extensions/install-extension#_side-loading).
Depending on your platform it is located in the following folders:
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> **Linux** `~/.vscode/extensions`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> **macOs** `~/.vscode/extensions`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> **Windows** `%USERPROFILE%\.vscode\extensions`

Clone the Nord repository as `nord-visual-studio-code`:
```shell
git clone https://github.com/arcticicestudio/nord-visual-studio-code arcticicestudio.nord-visual-studio-code
```

##### <img src="https://marketplace.visualstudio.com/favicon.ico" width=16 height=16/> [VSIX Package Extension Build](https://code.visualstudio.com/docs/extensions/install-extension#_sharing-privately-with-others)
The VSIX package extension file can be build from source using the [`vsce` publishing tool](https://code.visualstudio.com/docs/tools/vscecli) by running
```shell
vsce package
```
from the command line.

### [Activation](https://code.visualstudio.com/docs/customization/themes)
Launch *Quick Open*,
  - <img src="https://www.kernel.org/theme/images/logos/favicon.png" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf">Linux</a> `Ctrl+P`
  - <img src="https://developer.apple.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-macos.pdf">macOS</a> `Shift+⌘+P`
  - <img src="https://www.microsoft.com/favicon.ico" width=16 height=16/> <a href="https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf">Windows</a> `Ctrl+P`

run the `Preferences: Color Theme` command and select `Nord` from the drop-down menu.

The color theme drop-down can alternatively be opened via *File* (*Code* on macOS) > *Preferences* > *Color Theme*.

## Features
### Editor
<p align="center"><strong>Non-obtrusive cusror line and search marker.</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-cursorline.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-search.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-search.gif"/></p>

<p align="center"><strong>Colors of selected code can still be easily recognized.</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-selection.gif"/></p>

### Workbench
Fully supported [Workbench](https://code.visualstudio.com/docs/getstarted/theme-color-reference) styles.

<p align="center"><strong>Activity Bar Badges</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-activity-bar-badge.png"/></p>

<p align="center"><strong>Tabs</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-tab-bar.png"/></p>

<p align="center"><strong>Status Bar</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-status-bar.png"/></p>

<p align="center"><strong>Panels and terminal colors</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-panel-terminal-colors.png"/></p>

<p align="center"><strong>Debug panel</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-debug-panel.png"/></p>

<p align="center"><strong>Debug status panel</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-status-bar-debug.png"/></p>

<p align="center"><strong>Editor Widgets (Search)</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-editor-widget-search.png"/></p>

<p align="center"><strong>Notifications</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-notification.png"/></p>

<p align="center"><strong>Badges</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-badges.png"/></p>

<p align="center"><strong>Side Bar Views (Debug)</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-side-bar-debug.png"/></p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Diff Editor</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-inserted.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-removed.png"</p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Validations</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-info.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-warning.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-validation-error.png"/></p>

<p align="center"><strong>Validations</strong><br><strong>Active selection</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection.png"/><br><strong>Inactive selection</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection.png"/><br><strong>Active selection with keyboard navigation marker</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection-keyboard.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-ui-list-active-selection-keyboard.gif"/><br><strong>Active- and inactive selection with hover marker</strong><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection-hover.png"/><br><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrcast-feature-ui-list-hover.gif"/></p>

## Languages
This theme contains optimized styles to achieve a consistent and uniform coloring across languages.  
Detailed descriptions for supported languages can be found in the [project wiki](https://github.com/arcticicestudio/nord-visual-studio-code/wiki).

![][scrot-lang-c]
![][scrot-lang-css]
![][scrot-lang-diff]
![][scrot-lang-java]
![][scrot-lang-javascript]
![][scrot-lang-json]
![][scrot-lang-markdown]
![][scrot-lang-php]
![][scrot-lang-python]
![][scrot-lang-ruby]
![][scrot-lang-xml]
![][scrot-lang-yaml]

### Contribution
Please report issues/bugs, feature requests and suggestions for improvements to the [issue tracker](https://github.com/arcticicestudio/nord-visual-studio-code/issues).

<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord/develop/src/assets/banner-footer-mountains-2x.png" /></p>

<p align="center">Copyright &copy; 2017 Arctic Ice Studio</p>

<p align="center"><a href="http://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/badge/License-Apache_2.0-5E81AC.svg?style=flat-square"/></a> <a href="https://creativecommons.org/licenses/by-sa/4.0"><img src="https://img.shields.io/badge/License-CC_BY--SA_4.0-5E81AC.svg?style=flat-square"/></a></p>

[scrot-lang-c]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-c.png
[scrot-lang-css]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-css.png
[scrot-lang-diff]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-diff.png
[scrot-lang-java]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-java.png
[scrot-lang-javascript]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-javascript.png
[scrot-lang-json]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-json.png
[scrot-lang-markdown]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-markdown.png
[scrot-lang-php]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-php.png
[scrot-lang-python]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-python.png
[scrot-lang-ruby]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-ruby.png
[scrot-lang-xml]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-xml.png
[scrot-lang-yaml]: https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-lang-yaml.png
