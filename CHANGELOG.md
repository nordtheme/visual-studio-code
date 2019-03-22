<p align="center"><img src="https://cdn.rawgit.com/arcticicestudio/nord-visual-studio-code/develop/assets/nord-visual-studio-code-banner.png" srcset="https://cdn.rawgit.com/arcticicestudio/nord-visual-studio-code/develop/assets/nord-visual-studio-code-banner-2x.png 2x"/></p>

<p align="center"><img src="https://assets-cdn.github.com/favicon.ico" width=24 height=24/> <a href="https://github.com/arcticicestudio/nord-visual-studio-code/releases/latest"><img src="https://img.shields.io/github/release/arcticicestudio/nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://github.com/arcticicestudio/nord/releases/tag/v0.2.0"><img src="https://img.shields.io/badge/Nord-v0.2.0-88C0D0.svg?style=flat-square"/></a> <img src="https://marketplace.visualstudio.com/favicon.ico" width=24 height=24/> <a href="https://code.visualstudio.com/updates/v1_12"><img src="https://img.shields.io/badge/VS_Code-v1.12+-373277.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/version/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/installs/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a> <a href="https://marketplace.visualstudio.com/items/arcticicestudio.nord-visual-studio-code"><img src="https://vsmarketplacebadge.apphb.com/rating-short/arcticicestudio.nord-visual-studio-code.svg?style=flat-square"/></a></p>

<!--lint disable no-duplicate-headings-->

# 0.7.1

![Release Date: 2019-03-22](https://img.shields.io/badge/Release_Date-2019--03--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.7.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/14) [![Milestone](https://img.shields.io/badge/Milestone-0.7.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/11)

## Bug Fixes

### Documentation

**Removed not allowed SVG image in changelog** — ⇄ #60 (⊶ 613b515c) by [@kingdaro][gh-user-kingdaro]
↠ The [vsce][] doesn't allow to use SVG images in the README or CHANGELOG, therefore the SVG image used in the section of version 0.7.0 has been removed.

# 0.7.0

![Release Date: 2019-03-22](https://img.shields.io/badge/Release_Date-2019--03--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.7.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/12) [![Milestone](https://img.shields.io/badge/Milestone-0.7.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/10)

## Features

### Syntax Highlighting

**Support syntax highlighting for TypeScript and TSX** — ⇄ #60 (⊶ 613b515c) by [@kingdaro][gh-user-kingdaro]
↠ Added basic syntax highlighting support for [TypeScript][] and TSX (React JSX) by adding `source.ts` and `source.tsx` classes to existing `source.js` and `source.jsx` scopes.

### UI

**Tab mouse hovering and border styles** — #66 ⇄ #89 (⊶ 338e06f1) by [@OfficerHalf][gh-user-officerhalf]
↠ Added support for the new theme keys that have been introduced in VS Code version 1.20 to customize the [background and border styles when a tab is hovered][vsc-rln-1.20-tabc].

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/42076752-b4a91420-7b76-11e8-8917-13e81bc377f0.gif" /></p>

<p align="center"><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/42076751-b492eb0a-7b76-11e8-9a7c-64cf23ecf23b.gif" /></p>

**Highlight active indent guide** — #69 ⇄ #90 (⊶ 6b99557e) by [@gulshan][gh-user-gulshan] and [@OfficerHalf][gh-user-officerhalf]
↠ Added support for the new theme key introduced in VS Code version 1.23 that allows to customize the [highlighting of the active indent guide][vsc-rln-1.23-idg].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42078193-def3f844-7b7b-11e8-8016-c13a843c2b7e.gif" /></p>

**Colorized error and warning file status in explorer** — #82 ⇄ #95 (⊶ d5ce00f9)
↠ Added support for the new theme keys introduced in [VS Code 1.24][vsc-rln-1.24] (May 2018) that allows to customize [the color of items in the Explorer with errors and warnings][vsc-rln-1.24-thc].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42122232-e64bb596-7c3e-11e8-9220-8ab174855fe9.png" /></p>

**Highlight active indent guide** — #77 ⇄ #91 (⊶ c0bc5de2)
↠ Added support for the new theme keys introduced in [VS Code 1.18][vsc-rln-1.18] (October 2017) for the [very popular feature request][vscode#178] to allow to customize the [Git status in the File Explorer][vsc-rln-1.18-gitexp] documented in the official [Theme Color Reference][vscode-docs-theme-git-colors].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42107091-6cbaa024-7bd6-11e8-8384-3619bf0606c3.png" /></p>

**Coloring of active line number** — #79 ⇄ #92 (⊶ e73d2b36)
↠ Added support for the new theme keys introduced in [VS Code 1.21][vsc-rln-1.21] (February 2018) introduced new theme keys for [coloring of active line number][vsc-rln-1.21-actl].

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/42121621-c032b60e-7c32-11e8-80bf-a9601e5618b5.png"/></p>

<p align="center"><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/42121620-be468f00-7c32-11e8-888d-7c68304f9a6f.png"/></p>

**Editor hints** — #80 ⇄ #93 (⊶ d0d6bfd0)
↠ Added support for the new theme keys introduced in [VS Code 1.22][vsc-rln-1.22] (March 2018) allowing to customize [editor "hint" diagnostics][vsc-rln-1.22-thc] that are [shown in the editor][vsc-rln-1.22-hint].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42121852-1af585b8-7c37-11e8-86c8-833e36e8008a.png"/></p>

**Tap top borders** — #81 ⇄ #94 (⊶ d5a6f7ef)
↠ Added support for new theme keys introduced in [VS Code 1.24][vsc-rln-1.24] (May 2018) that allow to [show a colored border at the top of a tab][vsc-rln-1.24-thc]. Nord defines this keys, but uses a opacity of 0% to hide these lines since they are distracting and doesn't fit Nord's design.

**Notification Center UI** — #78 ⇄ #96 (⊶ 8602df8d)
↠ Added support for new theme keys introduced in [VS Code 1.21][vsc-rln-1.21] (February 2018) that allow to customize the [new notifications UI][vsc-rln-1.21-noti].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42122749-00d24170-7c47-11e8-86ce-db83e393ac54.gif"/></p>

## Improvements

### Syntax Highlighting

**Underline links in Markdown** — ⇄ #71 (⊶ 2895e638) by [@octref][gh-user-octref]
↠ Links in Markdown documents are now underlined to make them more visually appealing and prevent rendering inconsistencies that might occur because VS Code's tokenizer is much faster than the linkifying in Markdown causing delays while typing.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/4033249/40806523-ad98a2d8-64d6-11e8-8efe-7d70b8140e2a.gif" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/4033249/40806603-e176d7dc-64d6-11e8-9965-666f59314abd.gif" /></p>

### UI

**Quick picker group borders** — #100 ⇄ #103 (⊶ 5ba2ac57) by [@octref][gh-user-octref]
↠ Nord now highlights borders of groups within the `view` quick panel again for a better visual distinction and to make it easier to immediately determine what group a specific item is in.
The separators have been disabled in the first place because it made the whole drop-down look divided and broken into multiple pieces and a bit cluttered instead of smooth transitions into the next section. It was still distinguishable through the names of the labels on the right.
However, it was hard to see which item on the left is on the same level as the label to immediately determine what the next item's group.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54824350-f92ae500-4caa-11e9-9e52-a384581d202a.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54824477-5888f500-4cab-11e9-9cce-563e139cd61d.png" /></p>

**Font color for labels of `view` quick panel** — #109 ⇄ #110 (⊶ 04a9ddf5)
↠ Labels of the `view` quick panel are now colorized with `nord8` instead of `nord4` to make them stand out more. This improvement was born out of a conversation with [@octref][gh-user-octref] in [#100][gh-100-c-fontc].

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54782707-cf78ac00-4c1f-11e9-8562-0e6fe7eb1693.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54782702-cab3f800-4c1f-11e9-9f96-3e5ae58bf8e7.png" /></p>

### Workflow

**Replaced Gulp with npm scripts** — #73 ⇄ #84 (⊶ 68c33d0c)
↠ Completely replaced [Gulp][] with npm scripts. Even though Gulp is a great tool to create simple or complex build workflows with streams, there are also many drawbacks:

- Gulp plugins often get out of date and don't support new features from the underlying library.
- The project depends on the Gulp plugin author and not the library that is being wrapped.
- Documentation for Gulp plugins are typically not very robust or comprehensive.
- Debugging a Gulp plugin can be frustrating (“Is the problem in the plugin or in the underlying library?“).
- If a plugin doesn't exist already for Gulp you need to write it yourself.
- Errors that occur inside a Gulp wrapper aren't always handled very well.

All currently implemented Gulp tasks have therefore been migrated to npm scripts by directly using the CLI API of the wrapped library.

**Updated CI build configurations** — #83 ⇄ #85 (⊶ 9eac763f)
↠ Updated the [Circle CI][ci-circle] build configuration to the new [API version 2.0][ci-circle-docs-api-2.0]. Also both Circle CI and [Travis CI][ci-travis] are now configured to test against the latest NodeJS version.

**Prettier** — #76 ⇄ #86 (⊶ 6f2ace5b)
↠ Integrated [Prettier][], an awesomes opinionated code formatter that enforces a consistent style across a large amount of languages by parsing the code and re-printing it.

<p align="center"><img src="https://camo.githubusercontent.com/0839818322a1f81721f7f35e55e5a84fc8f27437/68747470733a2f2f70726574746965722e696f2f69636f6e2e706e67" width="200" /></p>

**Arctic Ice Studio ESLint rule set** — #75 ⇄ #87 (⊶ c9e0c93d)
↠ The default rule set coming with [ESLint][] has been replaced with [Arctic Ice Studio's custom rule set][eslint-config-arcticicestudio-base] that adheres to the [Arctic Ice Studio JavaScript code style][gh-arcticicestudio/styleguide-javascript].

<p align="center"><img src="https://cdn-images-1.medium.com/max/1920/1*_jMm9Z6Adgj6BIso7kCEhA.png" width="888" /></p>

**Arctic Ice Studio remark-lint rule preset** — #74 ⇄ #88 (⊶ 02721f01)
↠ The default rule set coming with [remark-lint][gh-remark-lint] has been replaced with [Arctic Ice Studio's custom rule preset][npm-remark-preset-lint-arcticicestudio] that adheres to the [Arctic Ice Studio Markdown code style][gh-arcticicestudio/styleguide-markdown].

## Bug Fixes

### Documentation

**Fixed typo in word `cursor`** — ⇄ #62 (⊶ 967e1bab) by [@Oxyrus][gh-user-oxyrus]
↠ Fixed a typo in the README: `cusror` 🠖 `cursor`

**Fixed invalid install instructions** — ⇄ #70 (⊶ 967e1bab) by [@lilyball][gh-user-lilyball]
↠ Added the missing `arcticicestudio.` author namespace of the VS Code marketplace extension ID separated with a dot in front of the extension name itself to fix the install instructions.

## Tasks

### Documentation

**Migration to MIT license** — #63 ⇄ #64 (⊶ b26446a5)
↠ Adapted to the MIT license migration of [Nord][]. Details can be found in the main task ticket [arcticicestudio/nord#55][nord#55].

# 0.6.0

![Release Date: 2017-10-11](https://img.shields.io/badge/Release_Date-2017--10--11-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.6.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/11) [![Milestone](https://img.shields.io/badge/Milestone-0.6.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/9)

## Features

### UI

❯ Added new [new theming color keys][vscode-relnote-1.16-theme-improv] for highlighting the [overview ruler][vscode-color-ref-editor-colors] introduced in Visual Studio Code version 1.16. (#45 in PR #48, @arcticicestudio, 0459527b)

<p align="center"><strong>Status Highlighting</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780022-9c9b7ea4-a101-11e7-92ca-f786106469f3.png"/><br><strong>Word Highlighting</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780023-9edf84c6-a101-11e7-8be7-8415b111327f.png"/></p>

❯ Added new [new theming color key for title bar border][vscode-relnote-1.15-title-bar-border] for macOS introduced in Visual Studio Code version 1.15. (#46 in PR #49, @arcticicestudio, ad564a4d)

❯ Added new [new theming color keys][vscode-relnote-1.16-theme-improv] to determine the activity of tabs via a bottom-border introduced in Visual Studio Code version 1.16. (#47 in PR #50, @arcticicestudio, aaf7447f)

## Improvements

### Syntax

❯ The punctuation characters of JavaScript template literals are now colorized with `nord10` for better recognizability within the string. Variable properties are now using `nord4` instead of string colors (`nord14`). (#39 PR #51, @peterdanis, 42ca03c2)

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780203-fda672b8-a105-11e7-89e5-4ee024bbc1ae.png"/><br><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780208-092bcf52-a106-11e7-8189-41e30a7dd3b6.png"/></p>

❯ CSS properties are now colorized with `nord4` to make it easier to distinguish between HTML tags. (#52 in PR #53, @peterdanis, 9e91ece4)

![](https://user-images.githubusercontent.com/7836623/31055755-de2428fa-a6c7-11e7-9aeb-b1534d8e634d.png)

### UI

❯ The scrollbar was too dark/transparent making it hard to see the current position. This has been changed by using `nord2` instead of `nord1` as color with a transparency of 60% and 66% when hovered and active. (#41 in PR #43, @peterdanis, b394a7a5)

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/29301919-0588f992-8180-11e7-9ee6-17c7004ac947.png"/><br><img src="https://user-images.githubusercontent.com/7836623/29301920-07ed8a5e-8180-11e7-97cc-694fbda73c5e.gif"/><br><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/29301933-1b0ad68c-8180-11e7-8af7-358c51587a92.png"/><br><img src="https://user-images.githubusercontent.com/7836623/29301935-1c9bffee-8180-11e7-99ad-7730bb3fe3e3.gif"/></p>

## Bug Fixes

### UI

❯ The background color of the snap-in split window, which appears when a tab of a tab group is dragged, had the same color as base background (`nord0`). This has been changed to `nord1` with a transparency of 60%. (#40 in PR #44, @peterdanis, b3e2cb2f)

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/29306057-fc77aa4e-819b-11e7-9b42-fd915ec9a8db.png"/><br<strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/29306076-0b008d92-819c-11e7-8254-0bc2cf39a330.png"/></p>

## Tasks

❯ Due to security concerns, [VS Code version 1.14 introduced a change so SVG images are no more rendered within VS Code][vscode-relnote-1.14-extension-authoring]. (#55 in PR #56, @kushalpandya, 9e91ece4)

Nord Visual Studio Code adapted to the following contraints:

- The icon provided in _package.json_ may not be an SVG.
- The badges provided in the _package.json_ may not be SVGs unless they are from [approved badge providers][vscode-docs-approved-badges].
- Image URLs in `README.md` and `CHANGELOG.md` need to resolve to https URLs.
- Images in `README.md` and `CHANGELOG.md` may not be SVGs unless they are from [approved badge providers][vscode-docs-approved-badges].
- Images in `README.md` and `CHANGELOG.md` may not use data URIs.

Additionally, the [footer mountain banner](https://github.com/arcticicestudio/nord/blob/develop/src/assets/banner-footer-mountains.svg) has been changed to PNG format (arcticicestudio/nord#49) and removed the non-HTTPS Arctic Ice Studio logo favicon from the copyright footer line.

![](https://user-images.githubusercontent.com/7836623/31324602-9f40d5be-acb4-11e7-88b3-f86cf6cdacf1.png)

❯ A [`.vscodeignore`][vscode-docs-vscodeignore] file has been added to reduce the size of the distributed `vsix` extension package. (#57 in PR #58, @arcticicestudio @kevinah95, 4660525b)

This results in a reduced `vsix` extension package size of **almost 99%** from **~4.7 MB to ~41 kB**!

# 0.5.0

![Release Date: 2017-08-07](https://img.shields.io/badge/Release_Date-2017--08--07-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/8) [![Milestone](https://img.shields.io/badge/Milestone-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/6)

## Features

### UI

❯ Added support for new workbench theme features for notification styles introduced in VS Code 1.14. Buttons of notifications now using specific setting keys instead of the generic `button.*` and the notification level badges are now also customized using the associated setting keys. (#34 in PR #36, @ajitid)

![scrot-feature-ui-notification](https://user-images.githubusercontent.com/7836623/28993120-5430d896-79ae-11e7-8025-c8526db2641e.png)

![scrot-feature-ui-notification-error](https://user-images.githubusercontent.com/7836623/28993116-4c978dbe-79ae-11e7-82f7-cd4d09d43be1.png)

![scrot-feature-ui-notification-info](https://user-images.githubusercontent.com/7836623/28993117-4cafc97e-79ae-11e7-8221-b8b4ff7c9c68.png)

![scrot-feature-ui-notification-warning](https://user-images.githubusercontent.com/7836623/28993118-4cb2bb8e-79ae-11e7-8219-7630d9e2d5a8.png)

## Improvements

### UI

❯ The foreground color for _CodeLenses_ (hints to show references in the code for a specific variable/constant/entity) have been adjusted to match comments, to make it less disturbing and to distinguish it from the actual code. (#33 in PR #37, @yurlovm)

# 0.4.2

![Release Date: 2017-07-02](https://img.shields.io/badge/Release_Date-2017--07--02-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.2-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/10) [![Milestone](https://img.shields.io/badge/Milestone-0.4.2-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/8)

## Bug Fixes

❯ Fixed underlined warning squiggles. (@ajitid, #31, 8158f164)

<p align="center">Before<br><img src="https://user-images.githubusercontent.com/7836623/27767496-818b5138-5ef9-11e7-80aa-4d4f03ec5856.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27767497-8667f382-5ef9-11e7-9060-7f48106bd012.png"/></p>

❯ Fixed the background color of the status bar when no folder is active which has been unintentionally removed during a merge conflict. (@ajitid, #32 (#31), 1c01b0d4)

# 0.4.1

![Release Date: 2017-07-01](https://img.shields.io/badge/Release_Date-2017--07--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/9) [![Milestone](https://img.shields.io/badge/Milestone-0.4.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/7)

## Bug Fixes

❯ Fixed underlined error squiggles. (@ajitid, #31, ce23e9cd)

<p align="center">Before<br><img src="https://user-images.githubusercontent.com/7836623/27764412-17801de2-5e99-11e7-9aa8-eabf39f30a75.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27764413-1c29a516-5e99-11e7-917b-cabd827967ba.png"/></p>

# 0.4.0

![Release Date: 2017-07-01](https://img.shields.io/badge/Release_Date-2017--07--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/7) [![Milestone](https://img.shields.io/badge/Milestone-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/1)

[VS Code 1.13](https://code.visualstudio.com/updates/v1_13) has been released including a bunch of [new workbench theme features](https://code.visualstudio.com/updates/v1_13#_new-theming-colors) documented in the official [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors). (@arcticicestudio, #25, PR #27, 6aff96bb)
(@ajitid, #24, PR #28, 6840124e)

## Features

### Workbench UI

❯ Implemented new VS Code 1.13 workbench theme features

<p align="center"><strong>Bracket Matching</strong><br><code>editorBracketMatch.background</code>, <code>editorBracketMatch.border</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759429-0b865ea6-5e31-11e7-99ff-e2c37a06bdf2.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759434-2c94473e-5e31-11e7-8e41-73051d1c85bd.png"/></p>

<p align="center"><strong>Editor Ruler</strong><br><code>editorRuler.foreground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759443-6f6f851e-5e31-11e7-9727-81e2a1e2fb8d.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759444-753f3476-5e31-11e7-90c3-a38d23be279c.png"/></p>

<p align="center"><strong>Gutter VCS</strong><br><code>editorGutter.background</code>, <code>editorGutter.modifiedBackground</code>, <code>editorGutter.addedBackground</code>, <code>editorGutter.deletedBackground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759448-87a45bb4-5e31-11e7-9aa6-91edfe07a86c.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759450-8d851eba-5e31-11e7-87f0-11c172ed9005.png"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_merge-conflicts">Merge Conflicts</a></strong><br><code>merge.currentHeaderBackground</code>, <code>merge.currentContentBackground</code>, <code>merge.incomingHeaderBackground</code>, <code>merge.incomingContentBackground</code>, <code>merge.border</code>, <code>editorOverviewRuler.currentContentForeground</code>, <code>editorOverviewRuler.incomingContentForeground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759455-aa743722-5e31-11e7-856b-50e551b48e02.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759479-329e0f9c-5e32-11e7-84d3-a41379945393.png"/></p>

<p align="center"><strong>Placeholder Foreground</strong><br><code>input.placeholderForeground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759461-d0ea5026-5e31-11e7-976d-a8b4167fa2f3.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759465-d60a9124-5e31-11e7-83b9-cf6a5938af3c.png"/></p>

<p align="center"><strong>Tab Groups Header Foreground</strong><br><code>tab.unfocusedActiveForeground</code>, <code>tab.unfocusedInactiveForeground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759466-e9a6e728-5e31-11e7-9c2a-bc4d1c497e77.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759467-efdff418-5e31-11e7-8aca-97f3e37593a6.png"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_welcome-page">Welcome Page</a></strong><br><code>welcomePage.buttonBackground</code>, <code>welcomePage.buttonHoverBackground</code>, <code>walkThrough.embeddedEditorBackground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759472-0182b07a-5e32-11e7-8869-e63a21a1704f.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759474-0f75776c-5e32-11e7-9815-83ea876b43d1.png"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_badge">Badges</a></strong><br><code>badge.foreground</code>, <code>badge.background</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759698-543f25d2-5e37-11e7-8c58-fa4e82e881d7.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759700-5ec2e534-5e37-11e7-8674-c3249c741b8e.png"/></p>

<p align="center"><strong>Squiggles</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759702-6836de36-5e37-11e7-8f4f-2552ffd1b776.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759703-6fce42f6-5e37-11e7-8e22-58cc0d001eab.png"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors">Selection Background</a></strong><br><code>selection.background</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759705-7904c4b2-5e37-11e7-9e31-3d474adc374e.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759709-84ca27b0-5e37-11e7-93a0-20ec6eaa6179.png"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_extensions">Extension Buttons</a></strong><br><code>extensionButton.prominentForeground</code>, <code>extensionButton.prominentBackground</code>, <code>extensionButton.prominentHoverBackground</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759711-9928c43c-5e37-11e7-80f4-1c7dea70080a.gif"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759712-aac1d120-5e37-11e7-8b0a-f5d177c0e21a.gif"/></p>

<p align="center"><strong><a href="https://code.visualstudio.com/docs/getstarted/theme-color-reference#_progress-bar">Progress Bar</a></strong><br><code>progressBar.background</code><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759714-b51b3558-5e37-11e7-964b-d75e499cfefe.gif"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759715-ba385c3c-5e37-11e7-9ee2-f64b24694932.gif"/></p>

Next to the changes above the following new workbench theme settings have been adapted to Nord:

- [Base Colors](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_base-colors)
  - `errorForeground`
- [List and Trees](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_lists-and-trees)
  - `list.inactiveSelectionForeground`
  - `list.hoverForeground`
  - `list.focusForeground`
- [Sidebar](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_side-bar)
  - `sideBar.foreground`
  - `sideBar.border`
  - `sideBarSectionHeader.foreground`
- Code Lens
  - `editorCodeLens.foreground`
- Overview ruler
  - `editorOverviewRuler.border`
- [Editor Widgets](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-widget-colors)
  - `editorWidgetBorder`
- [Peek View Colors](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_peek-view-colors)
  - `peekViewEditorGutter.background`
- [Status Bar Colors](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_status-bar-colors)
  - `statusBar.debuggingForeground`
  - `statusBar.noFolderForeground`
  - `statusBar.noFolderBackground`
  - `statusBar.border`
- [Quick Picker](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_quick-picker)
  - `pickerGroup.border`
- [Integrated Terminal Colors](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_integrated-terminal-colors)
  - `terminal.background`
  - `terminal.foreground`
- [Errors and Warnings](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors)
  - `editorError.foreground`
  - `editorError.border`
  - `editorWarning.foreground`
  - `editorWarning.border`

### Syntax

❯ Implemented ANSI Terminal colors. (@threeve, PR #4, 4e5815be)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/23821915/912cb74c-0640-11e7-9913-77c4780893bd.png"/></p>

## Improvements

### Syntax

❯ Implemented syntax improvements for TypeScript and CSS. (@octref, #12 PR #30, c12d0471)

#### TypeScript

<p align="center"><strong>Classes/Types/Interfaces</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27760064-c3dc372a-5e3e-11e7-8430-774065398bbe.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27760066-cac394c0-5e3e-11e7-8e17-2e246850b8b7.png"/></p>

<p align="center"><strong>Decorators</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27760076-f28c3958-5e3e-11e7-824b-6d2ec4eaaefb.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27760079-036e0882-5e3f-11e7-971b-45901f8703fe.png"/></p>

<p align="center"><strong>Static Classes</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27760080-0c4b2e76-5e3f-11e7-84d6-94e84e1c6101.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27760083-19b46a32-5e3f-11e7-93ed-c81f27fb3dd6.png"/></p>

#### CSS

<p align="center"><strong>CSS Media Queries</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27760036-95dc3a50-5e3e-11e7-9f07-aa72b4974f37.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27760049-a37fde32-5e3e-11e7-8b31-049dd6525109.png"/></p>

<p align="center"><strong>CSS Property Names</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27760055-afe65caa-5e3e-11e7-96f7-8ffce927e236.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27760059-b8d03b56-5e3e-11e7-9246-1c1518bf081f.png"/></p>

❯ Implemented syntax improvements for Python. (@ajitid, #26 PR #29, 2b19d242)

<p align="center"><strong>Function calls</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759807-b58e188c-5e39-11e7-9272-c86b68247bad.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759814-c85a5a8e-5e39-11e7-93bd-6b5d25c60841.png"/></p>

<p align="center"><strong><code>self</code> as parameter</strong><br>Before<br><img src="https://user-images.githubusercontent.com/7836623/27759823-eb336dfc-5e39-11e7-9c5b-bd29a05fa975.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27759826-f6a56f3c-5e39-11e7-9ab1-4af950bb3fc1.png"/></p>

# 0.3.0

![Release Date: 2017-06-11](https://img.shields.io/badge/Release_Date-2017--06--11-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/6) [![Milestone](https://img.shields.io/badge/Milestone-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/5)

## Improvements

### Syntax

#### Go

❯ Readded the _Go_ string format placeholder which has been removed unintentionally after converting from the `.tmTheme` to the new JSON format. (@jsvensson, PR #16, d5529d59)

## Bug Fixes

### UI

❯ Fixed the scrollbar covering (VCS) code info marker in the right gutter. The scrollbar now has a transparency of 60%. (@Phlicess, #13, 5bd2c70c)

<p align="center"><strong>Preview</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023389/a75879d8-37ba-11e7-8c1b-c5ee6020db1c.png"/><br><strong>Hovered</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023391/b64e6074-37ba-11e7-8b8b-210e6056d029.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023400/dc858a92-37ba-11e7-8e76-85a8cbff12b0.gif"/></p>

# 0.2.0

![Release Date: 2017-05-07](https://img.shields.io/badge/Release_Date-2017--05--07-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/5) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/6)

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

❯ Updated the _Quick Open_ keymapping for OSX. (@uonick, PR #9, e93694da)

❯ Changed the shields (badges) style to `flat-square`. (@arcticicestudio, caafb9d5)

## Bug Fixes

### Documentation

❯ Fixed a typo in the project description. (@arcticicestudio, #6, 8744b392)

# 0.1.1

![Release Date: 2017-02-25](https://img.shields.io/badge/Release_Date-2017--02--25-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/4) [![Milestone](https://img.shields.io/badge/Milestone-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/3)

## Bug Fixes

❯ Fixed uncolored start- and end elements/tags of block comments for various languages. (@Platzer, #2 #3, 6db13ea2)

<p align="center"><strong>Before</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333765/c540e0a8-fb91-11e6-9c21-37e6bcda0e54.png"/><br><strong>After</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333769/d1d5c2f2-fb91-11e6-9f06-9c50d006388c.png"/></p>

# 0.1.0

![Release Date: 2017-02-18](https://img.shields.io/badge/Release_Date-2017--02--18-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/projects/3) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/arcticicestudio/nord-visual-studio-code/milestone/2)

**Initial VS Code Marketplace extension release version!**

## Features

A complete list of all implemented features can be found in the [README](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/README.md#features) section.

❯ Implemented the main color theme file [`Nord.tmTheme`](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/themes/Nord.tmTheme). (@arcticicestudio, #1, 63b16747)

<p align="center"><img src="https://raw.githubusercontent.com/arcticicestudio/nord-visual-studio-code/develop/assets/scrot-top.png"/></p>

Detailed information about features, supported languages and install instructions can be found in the [README](https://github.com/arcticicestudio/nord-visual-studio-code/blob/develop/README.md#installation) and in the [project wiki](https://github.com/arcticicestudio/nord-visual-studio-code/wiki).

# 0.0.0

![Release Date: 2017-02-18](https://img.shields.io/badge/Release_Date-2017--02--18-88C0D0.svg?style=flat-square)

**Project Initialization**

<!--
+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
-->

<!-- lint disable final-definition -->

<!-- Base Links -->

[ci-circle-docs-api-2.0]: https://circleci.com/docs/2.0
[ci-circle]: https://circleci.com
[ci-travis]: https://travis-ci.org
[eslint-config-arcticicestudio-base]: https://www.npmjs.com/package/eslint-config-arcticicestudio-base
[eslint]: https://eslint.org
[gh-arcticicestudio/styleguide-javascript]: https://github.com/arcticicestudio/styleguide-javascript
[gh-arcticicestudio/styleguide-markdown]: https://github.com/arcticicestudio/styleguide-markdown
[gh-remark-lint]: https://github.com/remarkjs/remark-lint
[gh-user-gulshan]: https://github.com/gulshan
[gh-user-kingdaro]: https://github.com/kingdaro
[gh-user-lilyball]: https://github.com/lilyball
[gh-user-octref]: https://github.com/octref
[gh-user-officerhalf]: https://github.com/OfficerHalf
[gh-user-oxyrus]: https://github.com/Oxyrus
[gulp]: https://gulpjs.com
[nord]: https://www.nordtheme.com
[nord#55]: https://github.com/arcticicestudio/nord/issues/55
[npm-remark-preset-lint-arcticicestudio]: https://www.npmjs.com/package/remark-preset-lint-arcticicestudio
[prettier]: https://prettier.io
[typescript]: https://www.typescriptlang.org
[vsce]: https://github.com/Microsoft/vscode-vsce
[vscode-color-ref-editor-colors]: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors
[vscode-docs-approved-badges]: https://code.visualstudio.com/docs/extensionAPI/extension-manifest#_approved-badges
[vscode-docs-theme-git-colors]: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
[vscode-docs-vscodeignore]: https://code.visualstudio.com/docs/extensions/publish-extension#_vscodeignore
[vscode-relnote-1.14-extension-authoring]: https://code.visualstudio.com/updates/v1_14#_extension-authoring
[vscode-relnote-1.15-title-bar-border]: https://code.visualstudio.com/updates/v1_15#_new-theme-color-for-title-bar-border
[vscode-relnote-1.16-theme-improv]: https://code.visualstudio.com/updates/v1_16#_theming-improvements

<!--v 0.7.0 -->

[gh-100-c-fontc]: https://github.com/arcticicestudio/nord-visual-studio-code/issues/100#issuecomment-426005938
[vsc-rln-1.18-gitexp]: https://code.visualstudio.com/updates/v1_18#_git-status-in-file-explorer
[vsc-rln-1.18]: https://code.visualstudio.com/updates/v1_18
[vsc-rln-1.20-tabc]: https://code.visualstudio.com/updates/v1_20#_more-themable-colors-for-editor-tabs
[vsc-rln-1.21-actl]: https://code.visualstudio.com/updates/v1_21#_coloring-of-active-line-number
[vsc-rln-1.21-noti]: https://code.visualstudio.com/updates/v1_21#_new-notifications-ui
[vsc-rln-1.21]: https://code.visualstudio.com/updates/v1_21
[vsc-rln-1.22-hint]: https://code.visualstudio.com/updates/v1_22#_hints-in-the-editor
[vsc-rln-1.22-thc]: https://code.visualstudio.com/updates/v1_22#_new-theme-colors
[vsc-rln-1.22]: https://code.visualstudio.com/updates/v1_22
[vsc-rln-1.23-idg]: https://code.visualstudio.com/updates/v1_23#_highlighted-indent-guides
[vsc-rln-1.24-thc]: https://code.visualstudio.com/updates/v1_24#_new-theme-colors
[vsc-rln-1.24]: https://code.visualstudio.com/updates/v1_24
[vscode#178]: https://github.com/Microsoft/vscode/issues/178
