<p align="center">
  <a href="https://www.nordtheme.com/ports/visual-studio-code" target="_blank">
    <picture>
      <source srcset="https://raw.githubusercontent.com/arcticicestudio/nord-docs/main/assets/images/ports/visual-studio-code/repository-hero.png" srcset="https://raw.githubusercontent.com/arcticicestudio/nord-docs/main/assets/images/ports/visual-studio-code/repository-hero-2x.png 2x" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
      <img srcset="https://raw.githubusercontent.com/arcticicestudio/nord-docs/main/assets/images/ports/visual-studio-code/repository-hero.png" srcset="https://raw.githubusercontent.com/arcticicestudio/nord-docs/main/assets/images/ports/visual-studio-code/repository-hero-2x.png 2x" width="100%" />
    </picture>
  </a>
</p>

<p align="center">
  <a href="https://www.nordtheme.com/docs/ports/visual-studio-code" target="_blank">
    <img src="https://img.shields.io/github/release/nordtheme/visual-studio-code.svg?style=flat-square&label=Docs&colorA=4c566a&colorB=88c0d0&logo=data%3Aimage%2Fsvg%2Bxml%3Bbase64%2CPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI%2BCiAgICA8cGF0aCBmaWxsPSIjZDhkZWU5IiBkPSJNMTMuNzQ2IDIuODEzYS42Ny42NyAwIDAgMC0uNTU5LS4xMzNMOCAzLjg0OGwtNS4xODgtMS4xOGEuNjY5LjY2OSAwIDAgMC0uNTcuMTMzLjY3Ny42NzcgMCAwIDAtLjI0Mi41MzF2OC4xMzNjLS4wMDguMzIuMjEuNTk4LjUyLjY2OGw1LjMzMiAxLjE5OWguMjk2bDUuMzMyLTEuMmEuNjY4LjY2OCAwIDAgMCAuNTItLjY2N1YzLjMzMmEuNjU5LjY1OSAwIDAgMC0uMjU0LS41MnpNMy4zMzIgNC4xNjhsNCAuODk4djYuNzY2bC00LS44OTh6bTkuMzM2IDYuNzY2bC00IC44OThWNS4wNjZsNC0uODk4em0wIDAiLz4KPC9zdmc%2BCg%3D%3D"/>
  </a>
</p>

<p align="center">
  <a href="https://code.visualstudio.com/updates/v1_12" target="_blank">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&label=Compatibility&message=%3E%3D1.12.0&logo=visual-studio-code&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/>
  </a>
</p>

<p align="center">Changelog for <a href="https://www.nordtheme.com/ports/visual-studio-code" target="_blank">Nord Visual Studio Code</a> — An arctic, north-bluish clean and elegant <a href="https://code.visualstudio.com" target="_blank">Visual Studio Code</a> theme.</p>

<!--lint disable no-duplicate-headings no-duplicate-headings-in-section-->

# 0.19.0

![Release Date: 2021-09-25](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-09-25&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.19.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.19.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/26)

⇅ [Show all commits][137]

This release version includes features introduced in [VS Code version 1.59][140] and [1.60][143].

### Features

<details>
<summary><strong>Color token for active terminal tab indicator</strong> — #226 ⇄ #227 (⊶ 852c7894)</summary>

↠ [VS Code 1.59][140] (July 2021) introduced [a new color token for active terminal tab indicators][141]. It has been added to make it conform with Nord's theme style:

- `terminal.tab.activeBorder` — color for the border on the side of the terminal tab in the panel.

<div align="center">
  <p><strong>Before</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/133668853-53f5b563-3bdb-4fd4-830f-02734c2efd14.png" />
</div>

<div align="center">
  <p><strong>After</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/133668851-4d0f7e1a-2f68-459e-ba4e-4c7ba270ea12.png"/>
</div>

</details>

<details>
<summary><strong>Color tokens for status bar warning items</strong> — #228 ⇄ #230 (⊶ 80e3bb26)</summary>

↠ [VS Code 1.59][140] (July 2021) introduced [new color tokens for status bar warnings][142]. They have been added and adjusted to match Nord's theme style:

- `statusBarItem.warningBackground` — the background color used for warning items in the status bar that stand out from other status bar entries to indicate warning conditions.
- `statusBarItem.warningForeground` — the foreground color used for warning items in the status bar that stand out from other status bar entries to indicate warning conditions.

</details>

<details>
<summary><strong>Color tokens for bracket pair colorization</strong> — #225 ⇄ #231 (⊶ b3f2b83a) by <a href="https://github.com/roosephu">@roosephu</a></summary>

↠ [VS Code 1.60][143] (August 2021) introduced [native, high performance bracket pair colorization][144] (opt-in via `editor.bracketPairColorization.enabled` setting) to address performance issues of popular extensions. The color tokens have been added and adjusted to match Nord's theme style:

- `statusBarItem.warningBackground` — the background color used for warning items in the status bar that stand out from other status bar entries to indicate warning conditions.
- `statusBarItem.warningForeground` — the foreground color used for warning items in the status bar that stand out from other status bar entries to indicate warning conditions.

Note that bracket pair colorization is a feature that does not go well with the design concepts of Nord and the recommendation is therefore to not enable it. Of course this is always a personal preference and the feature be used as you wish, but note that the bracket colors defined by the Nord theme won't be changed on request but users can [simply customize it on their own][133].

<h3 align="center">Preview</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/7836623/133943533-17614f8f-c9f0-4a3a-a1b3-c5bcb2f7fb7e.png" width="75%" />
</div>

</details>

<details>
<summary><strong>Color tokens for TypeScript and JavaScript inlay hints</strong> — #224 ⇄ #232 (⊶ 2ea762e7) by <a href="https://github.com/wenmin92">@wenmin92</a></summary>

↠ [VS Code 1.60][143] (August 2021) introduced [inlay hints for JavaScript and TypeScript][145] (opt-in via `editor.inlayHints.enabled`), including new color tokens to customize their appereance. They have been added and adjusted to match Nord's theme style:

- `editorInlayHint.background` — the background color used for inline hint boxes.
- `editorInlayHint.foreground` — the foreground color used for inline hint boxes.

<div align="center">
  <p><strong>Before</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/134240461-943cc2d8-286a-45be-8701-841f7bccedf6.png" />
</div>

<div align="center">
  <p><strong>After</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/134240448-88802d32-ed01-4166-8b4c-b6ac146f00d0.png"/>
</div>

</details>

### Improvements

<details>
<summary><strong><code>npm</code> v7 & dependency improvements</strong> — #233 ⇄ #234 (⊶ e188f064)</summary>

↠ The [npm CLI v7][136] introduced the new [`package-lock.json` format v2][138] that unlocks the ability to do deterministically reproducible builds and includes everything npm needs to fully build the package tree. Since this is a new major version the current `package-lock.json` file has been updated to the new format.

At the same time outdated dependencies have been upgraded to their latest, compatible version. This also changed the versions by using [the `^` caret range selector][139] to reduce the overhead of updating dependencies.

- [`@svengreb/eslint-config-base`][135] — the minimum versions will be bumped from `0.5.0` to [`0.11.0`][134].
- [`babel-eslint`][146] → [`@babel/eslint-parser`][152] — the `babel-eslint` package is deprecated and is now available as `@babel/eslint-parser`.
- [`eslint-plugin-json`][163] → [`eslint-plugin-jsonc`][166] — since Visual Studio Code uses [JSONC][170] the `eslint-plugin-jsonc` matches better to the scope of this repository. It also utilizes the ESLint engine by passing the AST to it.
- [`del-cli`][171] — updated from version [`1.1.0`][172] to [`^4.0.1`][173].
- [`eslint`][4] — updated from version [`5.16.0`][148] to [`^7.32.0`][149].
- [`eslint-plugin-import`][150] — updated from version [`2.17.3`][151] to [`^2.24.2`][153].
- [`eslint-plugin-prettier`][154] — updated from version [`3.1.0`][155] to [`^4.0.0`][156].
- [`prettier`][35] — updated from version [`1.17.1`][158] to [`^2.4.1`][159].
- [`remark-cli`][160] — updated from version [`6.0.1`][161] to [`^9.0.0`][162].
- [`remark-preset-lint-arcticicestudio`][32] → [`@svengreb/remark-preset-lint`][164] — the `remark-preset-lint-arcticicestudio` package is deprecated and is now available as `@svengreb/remark-preset-lint`. This also includes the linting and adjusting for matches that are found after running with the new rules.
- [`vsce`][40] — updated from version [`6.0.1`][168] to [`^1.100.0`][169].

</details>

# 0.18.0

![Release Date: 2021-07-14](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-04-14&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.18.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.18.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/25)

⇅ [Show all commits][130]

This release version includes features introduced in [VS Code version 1.58][131].

### Features

<details>
<summary><strong><em>TextMate</em> rules for Markdown math formula syntax highlighting</strong> — #221 ⇄ #222 (⊶ 60733483)</summary>

↠ [VS Code 1.58][131] (June 2021) introduced [syntax highlighting for Markdown math formulas][132]. To adapt the coloring to Nord's style new _TextMate_ rules with the following scopes have been added:

- `text.html.markdown constant.character.math.tex` — targets constants like `\displaystyle` and `\left`.
- `text.html.markdown constant.character.math.tex` — targets `$$` definition markers.
- `text.html.markdown punctuation.definition.function.math.tex` — targets the `\` (backslash) function definition marker.
- `text.html.markdown punctuation.math.operator.latex` — targets operators like `=`.

<h3 align="center">Before</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/7836623/125685322-3fd170ae-8927-44e3-ab3e-bd5e062cc1de.png" width="75%" />
</div>

<h3 align="center">After</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/7836623/125685315-d03b4719-4957-44c5-bb1e-674889a063cc.png" width="75%" />
</div>

</details>

# 0.17.1

![Release Date: 2021-06-23](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-06-23&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.17.1&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.17.1&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/24)

⇅ [Show all commits][129]

This release version includes a small bug fix, introduced [version 0.17.0](#0170), for the background color of input lists in focused state.

## Bug Fixes

<details>
<summary><strong>Invalid quick input list background for focused state</strong> — #219 ⇄ #220 (⊶ 280ae189)</summary>

↠ In #206 the [deprecated `list.focusBackground` color token][38] was replaced by the new `quickInputList.focusBackground` token, but somehow in #215 (while resolving merge conflicts) the value was changed to use a alpha layer value of 60%. This is not intended was should use `nord8` instead without any transparency.

<h3 align="center">Before</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/7836623/123047579-bdd56e80-d3fd-11eb-9467-faa1275d50f3.png" width="75%" />
</div>

<h3 align="center">After</h3>
<div align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122639074-1522c880-d0f8-11eb-9e9e-ac5acd219e99.png" width="75%" />
</div>

</details>

# 0.17.0

![Release Date: 2021-06-22](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-06-22&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.17.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.17.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/23)

⇅ [Show all commits][116]

This release version includes various theme features introduced in Visual Studio Code versions [1.46][37] to [1.57][39].

## Features

<details>
<summary><strong>Color tokens for input fields</strong> — #200 ⇄ #210 (⊶ 59ad1616)</summary>

↠ [VS Code 1.46][37] (May 2020) introduced the [new `inputOption.activeForeground` theme token for the foreground color of active inputs][117] which are used in the search view and find widget.
The token uses `nord6` to make it more conform with Nord's style.

</details>

<details>
<summary><strong>Pinned tabs, Git and charts color tokens</strong> — #202 ⇄ #211 (⊶ 973b9272)</summary>

↠ [VS Code 1.50][118] (September 2020) introduced [new theme color tokens pinned tabs, Git integration and charts][119].

The following tokens have been added to make it more conform with Nord's style:

- `tab.lastPinnedBorder` — border on the right of the last pinned editor to separate from unpinned editors.
- `gitDecoration.stageDeletedResourceForeground` — foreground color for staged deletions git decorations.
- `gitDecoration.stageModifiedResourceForeground` — foreground color for staged modifications git decorations.
- Colors intended to be used by data visualization extensions:
  - `charts.red`
  - `charts.blue`
  - `charts.yellow`
  - `charts.orange`
  - `charts.green`
  - `charts.purple`
  - `charts.foreground`
  - `charts.lines`

<h3 align="center">Git Staged State Decorations</h3>
<div align="center">
  <p><strong>Deleted</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122881628-a766de80-d33b-11eb-98f9-e45298419558.png" width="75%" />
</div>
<div align="center">
  <p><strong>Modified</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122881630-a7ff7500-d33b-11eb-996d-688d3a81e3f8.png" width="75%" />
</div>

<h3 align="center">Last Tab Separator</h3>
<div align="center">
  <p><strong>Before</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122881627-a6ce4800-d33b-11eb-97cc-725b69a521e0.png" width="75%" />
</div>
<div align="center">
  <p><strong>After</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122881623-a635b180-d33b-11eb-8e04-9fb732c7c9cb.png" width="75%" />
</div>

</details>

<details>
<summary><strong>Status bar error color tokens</strong> — #203 ⇄ #212 (⊶ a51c0ef3)</summary>

↠ [VS Code 1.52][120] (November 2020) introduced [new theme color tokens for error items in the status bar][121].

The following tokens have been added to make it more conform with Nord's style:

- `statusBarItem.errorBackground` — status bar error items background color. Error items stand out from other status bar entries to indicate error conditions.
- `statusBarItem.errorForeground` — status bar error items foreground color. Error items stand out from other status bar entries to indicate error conditions.

</details>

<details>
<summary><strong>Sash hover border color token</strong> — #204 ⇄ #213 (⊶ 097e0cc2)</summary>

↠ [VS Code 1.52][120] (November 2020) introduced [the new `sash.hoverBorder` theme color token for the sash border in hover state][122].
The token uses `nord8` to make it more conform with Nord's style.

<h3 align="center">Before</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122885680-961fd100-d33f-11eb-9498-c00dcca0512f.png" />
</p>
<video align="center" src="https://user-images.githubusercontent.com/7836623/122885712-9ddf7580-d33f-11eb-9419-1ae913797257.mp4"></video>

<h3 align="center">After</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122885678-961fd100-d33f-11eb-9f96-807a8ddc5669.png" />
</p>
<video align="center" src="https://user-images.githubusercontent.com/7836623/122885710-9ddf7580-d33f-11eb-96c0-093cba7092fd.mp4"></video>

</details>

<details>
<summary><strong>Color token for debugged line shown in overview ruler</strong> — #205 ⇄ #214 (⊶ 94f35a3b)</summary>

↠ [VS Code 1.52][120] (November 2020) introduced [the new `editor.focusedStackFrameHighlightBackground` theme color token][123] to highlight the currently focused debugged line in the overview ruler.
Additionally, the `editor.stackFrameHighlightBackground` key has been added that is used to highlight the decoration in the overview ruler on the right of the editor.
Both tokens use `nord10` to make them more conform with Nord's style.

</details>

<details>
<summary><strong>Deprecated color token for focused background of list/tree UI elements</strong> — #206 ⇄ #215 (⊶ 942e9d12)</summary>

↠ [VS Code 1.54][124] (February 2021) introduced a breaking change for the focused background color of list/tree UI elements by [deprecating the `list.focusBackground` in favor of the `quickInputList.focusBackground` theme color token][38]. The advised adaption for theme authors is to simply adopt the same value of the deprecated token.

</details>

<details>
<summary><strong>Color tokens for secondary buttons of custom dialogs</strong> — #207 ⇄ #216 (⊶ 24e34f8a)</summary>

↠ [VS Code 1.56][125] (April 2021) introduced [new colors tokens for secondary buttons of custom dialogs][126]:

- `button.secondaryBackground`
- `button.secondaryForeground`
- `button.secondaryHoverBackground`

This also includes a visual improvement for the current Nord theme styles of primary buttons:

- `button.background` - `nord2` to `nord8` with a transparency of ~93%.
- `button.foreground` - `nord4` to `nord0`.
- `button.hoverBackground` - `nord3` to `nord8`.

<h3 align="center">Before</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122892482-b783bb80-d345-11eb-846d-fd02253df2d0.png" />
</p>
<video align="center" src="https://user-images.githubusercontent.com/7836623/122892413-a76bdc00-d345-11eb-9bb0-7d846679b959.mp4"></video>

<h3 align="center">After</h3>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122892479-b6eb2500-d345-11eb-9297-b2781cab5068.png" />
</p>
<video align="center" src="https://user-images.githubusercontent.com/7836623/122892406-a6d34580-d345-11eb-8199-6f1a809f6bf1.mp4"></video>

</details>

<details>
<summary><strong>Color tokens for keybinding labels</strong> — #208 ⇄ #217 (⊶ 266a8a15)</summary>

↠ [VS Code 1.56][125] (April 2021) introduced [new color tokens for keybinding labels][127].
These have been added to make them conform with Nord's theme style:

- `keybindingLabel.background` — keybinding label background color used to represent a keyboard shortcut.
- `keybindingLabel.foreground` — keybinding label foreground color used to represent a keyboard shortcut.
- `keybindingLabel.border` — keybinding label border color used to represent a keyboard shortcut.
- `keybindingLabel.bottomBorder` — keybinding label border bottom color used to represent a keyboard shortcut.

<h3 align="center">Command Palette</h3>
<div align="center">
  <p><strong>Before</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122893202-66c09280-d346-11eb-8477-cbffbb2b9f6f.png" width="75%" />
</div>
<div align="center">
  <p><strong>After</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122893199-66c09280-d346-11eb-82d8-0a3e554514d3.png" width="75%" />
</div>

<h3 align="center">Key Binding Configurations</h3>
<div align="center">
  <p><strong>Before</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122893203-67592900-d346-11eb-9aaf-f42d218a0525.png" width="75%" />
</div>
<div align="center">
  <p><strong>After</strong></p>
  <img src="https://user-images.githubusercontent.com/7836623/122893205-67f1bf80-d346-11eb-8021-eccf60a1af3f.png" width="75%" />
</div>

</details>

<details>
<summary><strong>Color tokens for debugger inline values</strong> — #209 ⇄ #218 (⊶ 299f1cd1)</summary>

↠ [VS Code 1.57][39] (May 2021) introduced [new color tokens for debugger inline values][128].
They have been added to make them conform with Nord's theme style:

- `editor.inlineValuesBackground` — color for the debug inline value foreground text.
- `editor.inlineValuesForeground` — color for the debug inline value background.

</details>

# 0.16.0

![Release Date: 2021-06-19](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-06-19&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.16.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.16.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/22)

⇅ [Show all commits][113]

This release version mainly migrates to the [new color tokens editor suggest and quick picker widget changes introduced in Visual Studio Code version 1.57.0][115] which made the theme kind of unusable.

## Features

<details>
<summary><strong>Debug console text and input icon colors</strong> — #197 ⇄ #198 (⊶ 52432cb7)</summary>

↠ [VS Code 1.46][37] (May 2020) introduced [new debug console colors][114] for text of messages and the input icon.

The following theme keys have been added to make it conform with Nord's theme style:

- `debugConsole.infoForeground` — foreground color for info messages in the debug console.
- `debugConsole.warningForeground` — foreground color for warning messages in the debug console.
- `debugConsole.errorForeground` — foreground color for error messages in the debug console.
- `debugConsole.sourceForeground` — foreground color for source filenames in the debug console.
- `debugConsoleInputIcon.foreground` — foreground color for the debug console input marker icon.

<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/121751227-06438100-cb0e-11eb-975f-f21a23dd0fbf.png"  />
</p>

</details>

<details>
<summary><strong>Quick pick and suggest widget colors</strong> — #196 ⇄ #199 (⊶ 11cd6c3d)</summary>

↠ [VS Code 1.57][39] (May 2021) introduced [new color tokens for the “quick pick“ and “editor suggest“ widgets][115] in focused state to better align with the tree widget styles.
These changes broke the current style of Nord and made the theme har to use. The new keys have now been added to make it conform with Nord‘s style:

- `editorSuggestWidget.focusHighlightForeground` — color of the match highlights in the suggest widget when an item is focused.
- `editorSuggestWidget.selectedForeground` — foreground color of the selected entry in the suggest widget.
- `list.focusHighlightForeground` — list/tree foreground color of the match highlights on actively focused items when searching inside the list/tree.
- `quickInputList.focusForeground` — quick picker foreground color for the focused item.

<h3 align="center">Editor Suggest Widget</h3>
<p align="center"><strong>Before</strong></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122639072-148a3200-d0f8-11eb-9110-8abd4c06258c.png" width="80%">
</p>
<p align="center"><strong>After</strong></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122639070-13590500-d0f8-11eb-98c2-9b45ac6b172c.png" width="80%">
</p>

<h3 align="center">(Quick) List</h3>
<p align="center"><strong>Before</strong></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122639075-15bb5f00-d0f8-11eb-801e-640c3b352467.png" width="80%">
</p>
<p align="center"><strong>After</strong></p>
<p align="center">
  <img src="https://user-images.githubusercontent.com/7836623/122639074-1522c880-d0f8-11eb-9e9e-ac5acd219e99.png" width="80%">
</p>

</details>

## Bug Fixes

<details>
<summary><strong>GitHub repository link to license in README</strong> — #195, #189 (⊶ 31236d88, 5ccef9c1) by <a href="https://github.com/Pukimaa" target="_blank" rel="noreferrer">@Pukimaa</a> and <a href="https://github.com/shmokmt" target="_blank" rel="noreferrer">@shmokmt</a></summary>

↠ The link still included the `md` file extension that was mainly used for license files some years ago.

</details>

# 0.15.1

![Release Date: 2021-02-01](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2021-02-01&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.15.1&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.15.1&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/21)

⇅ [Show all commits][111]

This release version mainly migrates a NPM package dependency that has been deprecated and deleted from the registry to the new package.

## Bug Fixes

<details>
<summary><strong>Switch to new ESLint configuration preset package</strong> — #190 (⊶ 13ef97ec) by <a href="https://github.com/kremalicious" target="_blank">@kremalicious</a></summary>

↠ Before the [`eslint-config-arcticicestudio-base` NPM package][31] was used which has been deprecated and also deleted from the registry.
Because the goal of the deprecation was to move to the new [`@svengreb/eslint-config-base` package][112] anyway it has now been switched.

</details>

# 0.15.0

![Release Date: 2020-06-23](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2020-06-23&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.15.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.15.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/20)

## Features

### UI

**Activity Bar indicator styles** — #174 ⇄ #175 (⊶ 7beecae3)
↠ Added support for the [new indicator _Activity Bar_ active item indicator][105] that was introduced in [VS Code 1.40][104] (October 2019) to make it stand out better and increase readability.

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/84931625-52aed900-b0d3-11ea-8e16-d7fb2a4ddf33.png" width="600px" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/84931619-50e51580-b0d3-11ea-9b4a-5ca3ab820178.png" width="600px" /></p>

**Editor title border** — #176 ⇄ #177 (⊶ c2aca53e)
↠ Added support for new theme keys to [render a border below the editor group header][109] (for example, below breadcrumbs if enabled) that was introduced in [VS Code 1.45][108] (April 2020) in order to restore the previous behavior of `editorGroupHeader.tabsBorder`.

**Minimap background, slider and Git state colors** — #178 ⇄ #179 (⊶ bd98c86c)
↠ Added support for the new [minimap background, slider and _Git_ state colors][110] that were [introduced in VSCode 1.43.0][107] (February 2020) and [version 1.41.0][106] (November 2019).

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85201914-398c6f00-b303-11ea-839c-5b786ad81795.png" /></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85201941-5759d400-b303-11ea-9422-cc36a224b2d2.gif" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85201912-36917e80-b303-11ea-8492-07de14325dba.png" /></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85201931-4d37d580-b303-11ea-90f6-e1d65852ecf8.gif" /></p>

## Improvements

### Syntax

**Braces in JavaScript template literals** — #162 ⇄ #163 (⊶ 41e2391d) by [@kufii][102]
↠ Improved the highlighting of braces within [_JavaScript_ template literals][103] to use `nord4` as foreground color instead of `nord14` like strings.

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85290066-abe28800-b498-11ea-80ca-919c1a4f24cb.png" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/85290061-aab15b00-b498-11ea-9587-e6e00167a789.png" /></p>

# 0.14.0

![Release Date: 2020-06-16](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2020-06-16&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.14.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.14.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/19)

## Features

### Syntax

**Adaption and activation of semantic highlighting** — #172 ⇄ #173 (⊶ e05a9997) by [@aeschli][97]
↠ [Visual Studio Code version 1.44 introduced support][99] for [semantic highlighting][101] that allows to assign colors and styles to tokens. _Semantic highlighting_ enriches syntax coloring based on symbol information from the language service, which has more complete understanding of the project so the coloring changes appear once the language server is running and has computed the semantic tokens.
The feature has been tested for some weeks and worked out-of-the-box without the need to change or add specific matchers or rules.
See the [semantic highlighting guide for themes][100] and [Github wiki][98] for more details.

# 0.13.0

![Release Date: 2019-12-23](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2019-12-23&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.13.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.13.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/18)

## Features

### UI

**Inline code block background for hover/completion popups** — #155 ⇄ #158 (⊶ 7be0eaf6) by [@octref][24]
↠ Added the `textCodeBlock.background` workbench theme key that is used by VS Code features like the [IntelliSense _quick info_][44] to style the background color of code blocks in the documentation text. By default this used a very dark color which has been changed to `nord3` instead.

<p align="center"><strong>Auto-Completion</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/66107330-483dc500-e5c0-11e9-9482-2dc648019b7c.png" /></p>

<p align="center"><strong><em>Quick Info</em></strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/66107331-48d65b80-e5c0-11e9-842c-31d8a01daf36.png" /></p>

**Text color related workbench theme keys** — #154 ⇄ #159 (⊶ 7be0eaf6) by [@mserajnik][91]
↠ Added some workbench color keys for text related elements that were not supported by Nord yet.
The commit in the VS Code repository ([93][]) added multiple new theme keys through [95][] that was merged over 2 years ago and released for the first time in stable version [1.13.0][96] but were never mentioned in the release notes.

The following theme keys have now been added:

- `textBlockQuote.background` — Background color for block quotes in text.
- `textBlockQuote.border` — Right-side border color for block quotes in text.
- `textLink.activeForeground` — Foreground color for links in text when clicked on and on mouse hover.
- `textLink.foreground` — Foreground color for links in text.
- `textPreformat.foreground` — Foreground color for preformatted text segments like inline code.
- `textSeparator.foreground` — Color for text separators.

<p align="center"><strong><em>Interactive Playground</em> before/after</strong></p>
<img src="https://user-images.githubusercontent.com/7836623/66111612-84c1ee80-e5c9-11e9-93cc-8aa51c936ff9.png">
<img src="https://user-images.githubusercontent.com/7836623/66111608-84295800-e5c9-11e9-9251-ab3629245df1.png">

<p align="center"><strong><em>Interface Overview</em> before/after</strong></p>
<img src="https://user-images.githubusercontent.com/7836623/66111610-84295800-e5c9-11e9-9a45-31c0a625abb7.png">
<img src="https://user-images.githubusercontent.com/7836623/66111607-8390c180-e5c9-11e9-8cd7-5225a5dd3cef.png">

<p align="center"><strong><em>Welcome Screen</em> before/after</strong></p>
<img src="https://user-images.githubusercontent.com/7836623/66111613-855a8500-e5c9-11e9-877b-c449cdb9c201.png">
<img src="https://user-images.githubusercontent.com/7836623/66111609-84295800-e5c9-11e9-81a4-f1174d4b39c5.png">

**`descriptionForeground` workbench theme key** — #160 ⇄ #161 (⊶ fe870f4f)
↠ Added the `descriptionForeground` workbench theme key that was introduced almost 2 years ago in [94][] for [95][], but not mentioned in a changelog so there was no support for it in Nord.
It now uses `nord4` with a opacity of 90% as color value (`#d8dee9e6`).

### Syntax

**Syntax highlighting for Elixir module names and atoms** — #165 ⇄ #166 (⊶ 810a894b) by [@feliperenan][90]
↠ Added improved syntax highlighting for Elixir atoms and module names using scopes provided by the [92][] extension since they are not supported by VSCode out-of-the-box.

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/71354925-b8376800-257d-11ea-8d64-f04538d066ae.png" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/71354924-b79ed180-257d-11ea-89ff-e194bb78a463.png" /></p>

# 0.12.0

![Release Date: 2019-08-10](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2019-08-10&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.12.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.12.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/17)

## Features

**Minimap search results visibility** — #150 ⇄ #152 (⊶ 6b6655fc)
↠ In [VS Code 1.37][89] (July 2019) the search decorations in the minimap (code outline) have been improved so the entire line will now be highlighted with low opacity, and the actual match shown with high opacity.
To customize the color, the new `minimap.findMatchHighlight` UI/workbench theme key has been added to Nord.

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/62819896-1548f900-bb5c-11e9-8590-47b65c68466b.png" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/62819895-1548f900-bb5c-11e9-819e-fe9e84ef21be.png" /></p>

**Filled background color for „Find“ widget's button toggle active state** — #151 ⇄ #153 (⊶ f5c767fd)
↠ In [VS Code 1.37][88] (July 2019) the Find widget's button toggle active state now has a filled background so that it is easier to tell when the focus is on an active toggle.
To customize the background color of the toggle active state, the new `inputOption.activeBackground` UI/workbench theme key has been added to Nord.

<p align="center"><strong>Before</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/62819937-ba63d180-bb5c-11e9-88cf-2d9c9c699693.png" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/62819936-ba63d180-bb5c-11e9-9dd0-47544a046ac9.png" /></p>
<p align="center"><img src="https://user-images.githubusercontent.com/7836623/62819940-c94a8400-bb5c-11e9-8189-6bd29132560b.gif" /></p>

Unfortunately there is no UI theme key (yet) to also change the foreground color of active state toggles. It is "hard-coded" using a relatively bright color so it is not possible to also use a bright background color. It would be great to apply a "reverse" effect to e.g. use `nord0` as foreground to increase the contrast when using `nord8` as background color.

## Improvements

**Renamed theme file to enable „hidden“ theme development features** — #143/#148 (⊶ 4f808c88) co-authored by [@svipas][86]
↠ An undocumented feature for theme extension developers is to ensure the name of the JSON file is suffixed with `-color-theme.json`. This enables the JSON scheme validation for the theme API allowing developers to validate the implemented theme keys, showing warnings about deprecated keys and providing full auto completion, field documentations and color previews (color picker) for the HEX format.
By renaming the theme file, Nord aligns to the [official bundled and default themes][87] by adapting to the naming scheme without introducing a breaking change since the theme is identified by it's extension ID as well as the `_metadata` field in the `package.json` and not by the name of the theme file (which would be odd since a theme can provide multiple theme files).

# 0.11.0

![Release Date: 2019-07-21](https://img.shields.io/static/v1.svg?style=flat-square&label=Release%20Date&message=2019-07-21&colorA=4c566a&colorB=88c0d0) [![Project Board](https://img.shields.io/static/v1.svg?style=flat-square&label=Project%20Board&message=0.11.0&colorA=4c566a&colorB=88c0d0)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/static/v1.svg?style=flat-square&label=Milestone&message=0.11.0&colorA=4c566a&colorB=88c0d0)](https://github.com/nordtheme/visual-studio-code/milestone/16)

## Features

**Indent guide lines in explorer tree view** — #145 ⇄ #147 (⊶ 54b6b205) by [@octref][24]
↠ Added the `tree.indentGuidesStroke` theme key introduced in [VS Code 1.36.0][85] (June 2019) that adds [support for indent guide lines in the tree view][84]. To adapt to Nord's style and ensure it is still distinguishable from the background when hovering with the mouse, the new brightened comment color based on `nord3` ([5][]) is used.

<p align="center"><strong>Before</strong></p>
<p align="center"><img width="60%" src="https://user-images.githubusercontent.com/7836623/61582804-c0532d80-ab2f-11e9-9626-9c95610f0d09.png" /></p>

<p align="center"><strong>After</strong></p>
<p align="center"><img width="60%" src="https://user-images.githubusercontent.com/7836623/61582803-c0532d80-ab2f-11e9-92e4-b801f60092f6.png" /></p>

## Bug Fixes

**Duplicate feature screenshot in README** — #141 (⊶ 994cae19) by [@chris78er][83]
↠ Renamed the invalid key `editorWidgetBorder` to the valid `editorWidget.border` key.

### Documentation

**Duplicate feature screenshot in README** — #140 (⊶ 46cce261)
↠ The second block in the [README's _Features_ section][20] made use of the same screenshot two times like already used in the first block that has been fixed by adding and replacing the screenshot showing Go syntax instead.

# 0.10.0

![Release Date: 2019-06-01](https://img.shields.io/badge/Release_Date-2019--06--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.10.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.10.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/15)

## Features

**Nord Docs Transition** — #138 ⇄ #139 (⊶ ee91f385)
↠ Transferred all documentations, assets and from „Nord Visual Studio Code“ to [Nord Docs][29]
Please see the [corresponding issue in the Nord Docs repository][82] to get an overview of what has changed for Nord Visual Studio Code and what has been done to migrate to Nord Docs.

###### Landing Page

<p align="center"><a href="https://www.nordtheme.com/ports/visual-studio-code" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/58706701-14a12300-83b3-11e9-8bad-d652e7d910d1.png" alt="Preview: Nord Visual Studio Code Port Project Landing Page"/></a></p>

###### Landing Page Docs

<p align="center"><a href="https://www.nordtheme.com/docs/ports/visual-studio-code" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/58706700-14a12300-83b3-11e9-8bd4-1f3f29f61775.png" alt="Preview: Nord Visual Studio Code Docs Project Landing Page"/></a></p>

###### Installation & Activation Docs

<p align="center"><a href="https://www.nordtheme.com/docs/ports/visual-studio-code/installation" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/58706699-14a12300-83b3-11e9-8700-27fa215ae6e9.png" alt="Preview: Nord Visual Studio Code Docs Installation & Activation Docs Page"/></a></p>

###### Customization Docs

<p align="center"><a href="https://www.nordtheme.com/docs/ports/visual-studio-code/customization" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/58706697-14088c80-83b3-11e9-8dc9-3b13cb8ab9e3.png" alt="Preview: Nord Visual Studio Code Docs Customization Docs Page"/></a></p>

###### Development Docs

<p align="center"><a href="https://www.nordtheme.com/docs/ports/visual-studio-code/development" target="_blank"><img src="https://user-images.githubusercontent.com/7836623/58706698-14a12300-83b3-11e9-9fb6-b1b61cfa1cad.png" alt="Preview: Nord Visual Studio Code Docs Development Docs Page"/></a></p>

# 0.9.1

![Release Date: 2019-05-26](https://img.shields.io/badge/Release_Date-2019--05--26-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.9.1-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.9.1-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/14)

# Bug Fixes

**VSCE artifact build due to restricted SVG image policy** — #137 (⊶ 97d8b7ee)
↠ Due to the [restricted security policy of the `vsce` packaging and publishing tool][47] the previously used SVG images in the `CHANGELOG.md` have been removed in order to fix the build process.

# 0.9.0

![Release Date: 2019-05-26](https://img.shields.io/badge/Release_Date-2019--05--26-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.9.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.9.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/13)

# Features

**GitHub code owners** — #129 (⊶ 9fce5d88)
↠ Adapted to GitHub's [code owners][77] feature to define matching pattern for project paths to automatically add all required reviewers of the core team and contributors to new PRs. Read the [GitHub Help article][11] for more details.

![](https://user-images.githubusercontent.com/2513/27803645-87c9a9c8-5ff8-11e7-91d7-2fa0718e6871.png)

![](https://user-images.githubusercontent.com/2513/27803663-a4bb073e-5ff8-11e7-9c45-2c3cbdc999cd.png)

![](https://user-images.githubusercontent.com/2513/27803610-544ba222-5ff8-11e7-9313-e4062315fb0c.png)

**GitHub issue and pull request templates** — #130 (⊶ 393640ad)
↠ Integrated GitHub's feature to define [multiple issue templates][81] while the [initial template file][80] is used as a fallback/generic template to link to the specific ones.

<p align="center"><img src="https://user-images.githubusercontent.com/7321362/35420642-8e5271e2-01f3-11e8-8109-0d21ddb89011.png" width="80%" /></p>

<p align="center"><img src="https://blog.github.com/assets/img/2018-04-30-issue-templates/new-issue-page-with-multiple-templates.png" width="80%" /></p>

Read the [GitHub Help article][15] for more details about issue and pull request templates. Also check out how to manually create [issue templates][16], a [pull request template][14]. and the guide on [how to create the (deprecated) fallback/generic issue template][13].

**GitHub Open Source community standards** — #131 (⊶ 90c6906f)
↠ Inspired _Nord Visual Studio Code's_ project philosophy using GitHub's features for [recommended community standards][78]. It adheres to the great [Open Source Guides][34] and adapted to the recommendations to complete the projects [community profile][9].

To facilitate a healthy and constructive community behavior, _Nord Visual Studio Code_ also introduced and enforces a [code of conduct][10].
Read the [GitHub Help article][10] for more details about the provided integrations.

The added [contribution guidelines][79] help to build a community that [encourages people to use, contribute to][33], and evangelize the project.

It includes sections about

- how to get started
- bug reports
- enhancement suggestions
- pull requests
- style guides
  - [JavaScript Style Guide][7]
  - [Markdown Style Guide][8]
  - [Git Style Guide][6]
- credits

Read the [GitHub introduction blog post][79] and the [GitHub Help article][12] for more details about the provided integrations.

**Git mail mapping** — #132 (⊶ 9fce5d88)
↠ Added a Git [mailmap][27] file to link to in documentations and allow contributors to send mails regarding security issues. This prevents unnecessary overhead of updating all documents when new core team and members and contributors are added and additionally adds the main functionality of the file: Mapping commits when someone uses a different email address.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658851-01e38400-ea49-11e8-911e-d859eefe6dd5.png" width="100" /></p>

**Introducing _lint-staged_** — #133 (⊶ 80dee6a1)
↠ Integrated [lint-staged][18] to run linters against staged Git files and prevent adding code that violates any style guide into the code base.

Read [#133][76] for more details about the configuration and setup.

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/48658801-30ad2a80-ea48-11e8-9323-16bb0b25002b.png" width="100" /></p>

**Introducing _Husky_** — #134 (⊶ 38a50d65)
↠ Integrated [Husky][17], the tool that make Git hooks easy and can prevent bad Git commits, pushes and more _woof_!

Read #18 for more details about the configuration and setup.

# Improvements

**Active editor line highlighting** — #123 ⇄ #125 (⊶ fbfab3b8)
↠ The currently active editor line now uses `nord1` for both the background and border to match Nord's design principles/guidelines. Previously it was highlighted with `nord2` instead with a opacity of ~32% as background color and additionally used a border with a higher opacity.

<p align="center"><strong>Before</strong></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/58370550-34929b80-7f08-11e9-97f6-ee0b81cbd930.png" /></p>

<p align="center"><strong>After</strong></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/58370549-34929b80-7f08-11e9-9399-76f9f43f2881.png" /></p>

**Active and inactive editor line number highlighting** — #124 ⇄ #126 (⊶ 17be33d8)
↠ Inactive editor line numbers now using `nord3` as foreground color while the theme key for the active number `editorLineNumber.activeForeground` has alos been added using `nord4`. Previously inactive editor line numbers used `nord4` with a opacity of ~40% as foreground color and the theme key for the active line number wasn't supported.

<p align="center"><strong>Before</strong></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/58370586-9521d880-7f08-11e9-9130-1cee41a1d5b5.png" /></p>

<p align="center"><strong>After</strong></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/58370585-9521d880-7f08-11e9-9a47-68f6f9060d2b.png" /></p>

**Refactored project workflow and update dependencies** — #127 ⇄ #128 (⊶ 8177b8f3)
↠ To match Arctic Ice Studio's workflow for all projects, the current setup has been refactored including updates for all outdated dependencies, addition of new packages and changes to existing CI/CD tools and NPM scripts.

- Retired Travis CI — As of Circle CI v2, the features like multi-stage builds and custom workflows are by far sufficient and doesn't require a second CI binding.
- [Circle CI v2.1][75] — Updated to the latest Circle CI version 2.1 for full compatibility and latest features.
- NPM scripts — Refactored all NPM scripts and added new commands to simplify and stabilize the project development process.

Also updated all outdated development dependencies and added new packages:

- babel-eslint 8.2.5 ➜ 10.0.1
- del-cli 1.1.0 🆕
- eslint 4.19.1 ➜ 5.16.0
- eslint-config-arcticicestudio-base 0.3.0 ➜ >=0.1.0 <1.0.0
- eslint-plugin-import 2.13.0 ➜ 2.17.3
- eslint-plugin-json 1.2.0 ➜ 1.4.0
- eslint-plugin-prettier 2.6.1 ➜ 3.1.0
- npm-run-all 4.1.5 🆕
- prettier 1.13.7 ➜ 1.17.1
- remark-preset-lint-arcticicestudio >=0.1.0 <1.0.0
- vsce 1.62.0 🆕

New and refactored NPM script commands are

- `build` — Creates a clean `*.vsix` project artifact using the `vsce` VS Code's official packaging tool.
- `clean` — Cleans the project root directory from previous builds and VSC ignored metadata files.
- `format:pretty` — Extracted from the main `format` command for a better modularity.
- `package` — Packages the project `*.vsix` artifact using the `vsce` VS Code's official packaging tool.

# 0.8.0

![Release Date: 2019-04-11](https://img.shields.io/badge/Release_Date-2019--04--11-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.8.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.8.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/12)

## Features

### UI

**Background color of inactive keyboard focused list items** — #107 ⇄ #116 (⊶ 3e35efb9) by [@octref][24]
↠ Added support for `list.inactiveFocusBackground` theme key used for the background color of the selected item when navigating the file explorer list with the keyboard and moving the focus to another UI component (like the editor).
It has been set to `nord2` with a opacity of 80% to match the style of inactive list items that were focused without the keyboard (`list.inactiveSelectionBackground`).

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54876811-74f57080-4e16-11e9-9a21-119837740a33.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54876810-74f57080-4e16-11e9-94f2-32b641288b54.png" /></p>

## Improvements

### Syntax

**Perl sigils same color as variables** — #67 (⊶ 698d9bae) by [@marcusramberg][70]
↠ To ensure a consistent highlighting Perl _Sigils_ are now also colorized like variables since they are actually part of the variable. They are now less distracting by using the same color like the variable itself instead of handling them as prefixed characters or a keyword.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54866393-82a5ea00-4d73-11e9-98d6-b90db34b3fd2.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54866400-905b6f80-4d73-11e9-97fa-c5433ba1a98c.png" /></p>

**Correct colors for JavaScript objects** — #115 / #97 (⊶ b0c399cd) by [@samchamberland][72]
↠ Previously JavaScript objects colorized with `nord7` caused by a superfluous definition of the `meta.var.expr` scope selector. This has been changed. This has been changed to correctly use `nord4` for variables.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54870063-f7901880-4da1-11e9-9860-6d8116b6c8c5.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54870062-f7901880-4da1-11e9-9ff4-43737783c1df.png" /></p>

**Better function parameter highlighting in Python** — #108 ⇄ #113 (⊶ 840b36c3) by [@Al2Me6][68]
↠ Previously the highlighting for function parameters in Python were colorized with the same color like the function itself (`nord8`) instead of `nord4`. This has been improved by removing the too generic scope `meta.function-call` from the `source.python` scope.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54865125-17ebb300-4d61-11e9-8f59-1f5c37795195.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54865128-23d77500-4d61-11e9-8c67-3acff0ed487f.png" /></p>

**Improved interpolated string literals** — #106 ⇄ #114 (⊶ e13ded12) by [@varog-norman][74]
↠ Improved the color for function braces in string templates to use `nord6` instead of `nord14`. Begin and end characters of an interpolated string literal `${}` are now also colorized as keyword (`nord9`) for better visual distinction.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54867234-298f8380-4d7e-11e9-820f-244cfaf65b92.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54867233-28f6ed00-4d7e-11e9-9a65-ef12a61203f9.png" /></p>

**Comment Color Brightness** — #117/#14/#72 ⇄ #118 (⊶ 7e3881b6)
↠ Implemented the frequently requested and long-time outstanding increase of the comment color (`nord3`) brightness by 10% from a lightness level of ~35% to ~45%.

➜ **Please see [nordtheme/nord#94][67] for all details about this design change decision**!

For users who would like to use the previously used coloring VS Code allows to [customize and override styles of a specific theme][43] through the user settings. To override the highlighting color of comments **only for Nord** the following snippet can be added to the settings (JSON) file:

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54902736-76886c80-4eda-11e9-86cd-dfc935aff5e3.png" /></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54902735-76886c80-4eda-11e9-9aa0-41ded647bdb2.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54902766-856f1f00-4eda-11e9-897a-9b0971586a0b.png" /></p>

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/54902765-856f1f00-4eda-11e9-9d09-50c89faece43.png" /></p>

```json
"editor.tokenColorCustomizations": {
  "[29]": {
    "comments": "#4C566A"
  }
}
```

Please see the official documentation about [user and workspace settings][45] for more details how to customize and configure VS Code.

### UI

**Decreased opacity for peek view match highlighting** — #99 ⇄ #112 (⊶ 7d9547ea) by [@octref][24]
↠ Previously the opacity for peek view match highlighting was too bright that made it almost impossible to read the underlying text. This has been improved by decreasing the opacity of the used color (`nord8`) to 30%.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/4033249/44305931-3e63ee80-a339-11e8-91e3-ad40ccbbe98e.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54864866-76af2d80-4d5d-11e9-9800-37fb5c7e10dc.png" /></p>

**Cleaner Git diff view highlighting** — #105 (⊶ 63fa7d9e) by [@danfo][69]
↠
Previously the Git diff view used `nord14` with a opacity of 30% to highlight added/modified elements causing some syntax elements like comments to be bad readable. This has now been changed to use `nord9` with a opacity of 20% instead to ensure a better readability and general clearer visual appearance. Also the previously used theme keys `diffEditor.insertedTextBorder` and `diffEditor.removedTextBorder` have been removed for a more clutter-free style.

<p align="center"><strong>Before</strong><br /><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-inserted.png" /></p>

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-removed.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54881878-f53ac680-4e54-11e9-8b84-e27e13b5dd34.png" /></p>

There is still a lot of potential to improve the highlighting for Git diff views. The feature request [Microsoft/vscode#71663][66] has been requested from the VS Code team to allow theme authors to improve the styles of syntax elements within Git diff scopes which would solve the problem of unreadable elements.

## Bug Fixes

### UI

**Tabs in split views can not be dragged and moved** — #98 ⇄ #104 (⊶ 924c1901) by [@mdogadailo][71] and [@sdr0x07b6][73]
↠ Previously the `editorGroup.border` theme key used a transparent color that caused tabs in split views to not being moveable anymore since the underlying logic removes some requires CSS classes. This has been fixed by to a opacity of 1% to fix the tab usage while still keeping the theme ambience (almost invisible for the human eye).

# 0.7.1

![Release Date: 2019-03-22](https://img.shields.io/badge/Release_Date-2019--03--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.7.1-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.7.1-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/11)

## Bug Fixes

### Documentation

**Removed not allowed SVG image in changelog** — ⇄ #60 (⊶ 613b515c) by [@kingdaro][22]
↠ The [40][] doesn't allow to use SVG images in the README or CHANGELOG, therefore the SVG image used in the section of version 0.7.0 has been removed.

# 0.7.0

![Release Date: 2019-03-22](https://img.shields.io/badge/Release_Date-2019--03--22-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.7.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.7.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/10)

## Features

### Syntax Highlighting

**Support syntax highlighting for TypeScript and TSX** — ⇄ #60 (⊶ 613b515c) by [@kingdaro][22]
↠ Added basic syntax highlighting support for [36][] and TSX (React JSX) by adding `source.ts` and `source.tsx` classes to existing `source.js` and `source.jsx` scopes.

### UI

**Tab mouse hovering and border styles** — #66 ⇄ #89 (⊶ 338e06f1) by [@OfficerHalf][25]
↠ Added support for the new theme keys that have been introduced in VS Code version 1.20 to customize the [background and border styles when a tab is hovered][55].

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/42076752-b4a91420-7b76-11e8-8917-13e81bc377f0.gif" /></p>

<p align="center"><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/42076751-b492eb0a-7b76-11e8-9a7c-64cf23ecf23b.gif" /></p>

**Highlight active indent guide** — #69 ⇄ #90 (⊶ 6b99557e) by [@gulshan][21] and [@OfficerHalf][25]
↠ Added support for the new theme key introduced in VS Code version 1.23 that allows to customize the [highlighting of the active indent guide][62].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42078193-def3f844-7b7b-11e8-8016-c13a843c2b7e.gif" /></p>

**Colorized error and warning file status in explorer** — #82 ⇄ #95 (⊶ d5ce00f9)
↠ Added support for the new theme keys introduced in [VS Code 1.24][64] (May 2018) that allows to customize [the color of items in the Explorer with errors and warnings][63].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42122232-e64bb596-7c3e-11e8-9220-8ab174855fe9.png" /></p>

**Highlight active indent guide** — #77 ⇄ #91 (⊶ c0bc5de2)
↠ Added support for the new theme keys introduced in [VS Code 1.18][54] (October 2017) for the [very popular feature request][65] to allow to customize the [Git status in the File Explorer][53] documented in the official [Theme Color Reference][46].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42107091-6cbaa024-7bd6-11e8-8384-3619bf0606c3.png" /></p>

**Coloring of active line number** — #79 ⇄ #92 (⊶ e73d2b36)
↠ Added support for the new theme keys introduced in [VS Code 1.21][58] (February 2018) introduced new theme keys for [coloring of active line number][56].

<p align="center"><strong>Before</strong><br><img src="https://user-images.githubusercontent.com/7836623/42121621-c032b60e-7c32-11e8-80bf-a9601e5618b5.png"/></p>

<p align="center"><strong>After</strong><br><img src="https://user-images.githubusercontent.com/7836623/42121620-be468f00-7c32-11e8-888d-7c68304f9a6f.png"/></p>

**Editor hints** — #80 ⇄ #93 (⊶ d0d6bfd0)
↠ Added support for the new theme keys introduced in [VS Code 1.22][61] (March 2018) allowing to customize [editor "hint" diagnostics][60] that are [shown in the editor][59].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42121852-1af585b8-7c37-11e8-86c8-833e36e8008a.png"/></p>

**Tap top borders** — #81 ⇄ #94 (⊶ d5a6f7ef)
↠ Added support for new theme keys introduced in [VS Code 1.24][64] (May 2018) that allow to [show a colored border at the top of a tab][63]. Nord defines this keys, but uses a opacity of 0% to hide these lines since they are distracting and doesn't fit Nord's design.

**Notification Center UI** — #78 ⇄ #96 (⊶ 8602df8d)
↠ Added support for new theme keys introduced in [VS Code 1.21][58] (February 2018) that allow to customize the [new notifications UI][57].

<p align="center"><img src="https://user-images.githubusercontent.com/7836623/42122749-00d24170-7c47-11e8-86ce-db83e393ac54.gif"/></p>

## Improvements

### Syntax Highlighting

**Underline links in Markdown** — ⇄ #71 (⊶ 2895e638) by [@octref][24]
↠ Links in Markdown documents are now underlined to make them more visually appealing and prevent rendering inconsistencies that might occur because VS Code's tokenizer is much faster than the linkifying in Markdown causing delays while typing.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/4033249/40806523-ad98a2d8-64d6-11e8-8efe-7d70b8140e2a.gif" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/4033249/40806603-e176d7dc-64d6-11e8-9965-666f59314abd.gif" /></p>

### UI

**Quick picker group borders** — #100 ⇄ #103 (⊶ 5ba2ac57) by [@octref][24]
↠ Nord now highlights borders of groups within the `view` quick panel again for a better visual distinction and to make it easier to immediately determine what group a specific item is in.
The separators have been disabled in the first place because it made the whole drop-down look divided and broken into multiple pieces and a bit cluttered instead of smooth transitions into the next section. It was still distinguishable through the names of the labels on the right.
However, it was hard to see which item on the left is on the same level as the label to immediately determine what the next item's group.

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54824350-f92ae500-4caa-11e9-9e52-a384581d202a.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54824477-5888f500-4cab-11e9-9cce-563e139cd61d.png" /></p>

**Font color for labels of `view` quick panel** — #109 ⇄ #110 (⊶ 04a9ddf5)
↠ Labels of the `view` quick panel are now colorized with `nord8` instead of `nord4` to make them stand out more. This improvement was born out of a conversation with [@octref][24] in [#100][52].

<p align="center"><strong>Before</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54782707-cf78ac00-4c1f-11e9-8562-0e6fe7eb1693.png" /></p>

<p align="center"><strong>After</strong><br /><img src="https://user-images.githubusercontent.com/7836623/54782702-cab3f800-4c1f-11e9-9f96-3e5ae58bf8e7.png" /></p>

### Workflow

**Replaced Gulp with npm scripts** — #73 ⇄ #84 (⊶ 68c33d0c)
↠ Completely replaced [28][] with npm scripts. Even though Gulp is a great tool to create simple or complex build workflows with streams, there are also many drawbacks:

- Gulp plugins often get out of date and don't support new features from the underlying library.
- The project depends on the Gulp plugin author and not the library that is being wrapped.
- Documentation for Gulp plugins are typically not very robust or comprehensive.
- Debugging a Gulp plugin can be frustrating (“Is the problem in the plugin or in the underlying library?“).
- If a plugin doesn't exist already for Gulp you need to write it yourself.
- Errors that occur inside a Gulp wrapper aren't always handled very well.

All currently implemented Gulp tasks have therefore been migrated to npm scripts by directly using the CLI API of the wrapped library.

**Updated CI build configurations** — #83 ⇄ #85 (⊶ 9eac763f)
↠ Updated the [Circle CI][2] build configuration to the new [API version 2.0][1]. Also both Circle CI and [Travis CI][3] are now configured to test against the latest NodeJS version.

**Prettier** — #76 ⇄ #86 (⊶ 6f2ace5b)
↠ Integrated [35][], an awesomes opinionated code formatter that enforces a consistent style across a large amount of languages by parsing the code and re-printing it.

<p align="center"><img src="https://camo.githubusercontent.com/0839818322a1f81721f7f35e55e5a84fc8f27437/68747470733a2f2f70726574746965722e696f2f69636f6e2e706e67" width="200" /></p>

**Arctic Ice Studio ESLint rule set** — #75 ⇄ #87 (⊶ c9e0c93d)
↠ The default rule set coming with [4][] has been replaced with [Arctic Ice Studio's custom rule set][31] that adheres to the [Arctic Ice Studio JavaScript code style][7].

<p align="center"><img src="https://cdn-images-1.medium.com/max/1920/1*_jMm9Z6Adgj6BIso7kCEhA.png" width="888" /></p>

**Arctic Ice Studio remark-lint rule preset** — #74 ⇄ #88 (⊶ 02721f01)
↠ The default rule set coming with [remark-lint][19] has been replaced with [Arctic Ice Studio's custom rule preset][32] that adheres to the [Arctic Ice Studio Markdown code style][8].

## Bug Fixes

### Documentation

**Fixed typo in word `cursor`** — ⇄ #62 (⊶ 967e1bab) by [@Oxyrus][26]
↠ Fixed a typo in the README: `cusror` 🠖 `cursor`

**Fixed invalid install instructions** — ⇄ #70 (⊶ 967e1bab) by [@lilyball][23]
↠ Added the missing `arcticicestudio.` author namespace of the VS Code marketplace extension ID separated with a dot in front of the extension name itself to fix the install instructions.

## Tasks

### Documentation

**Migration to MIT license** — #63 ⇄ #64 (⊶ b26446a5)
↠ Adapted to the MIT license migration of [29][]. Details can be found in the main task ticket [nordtheme/nord#55][30].

# 0.6.0

![Release Date: 2017-10-11](https://img.shields.io/badge/Release_Date-2017--10--11-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.6.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.6.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/9)

## Features

### UI

❯ Added new [new theming color keys][51] for highlighting the [overview ruler][42] introduced in Visual Studio Code version 1.16. (#45 in PR #48, @svengreb, 0459527b)

<p align="center"><strong>Status Highlighting</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780022-9c9b7ea4-a101-11e7-92ca-f786106469f3.png"/><br><strong>Word Highlighting</strong><br><img src="https://user-images.githubusercontent.com/7836623/30780023-9edf84c6-a101-11e7-8be7-8415b111327f.png"/></p>

❯ Added new [new theming color key for title bar border][50] for macOS introduced in Visual Studio Code version 1.15. (#46 in PR #49, @svengreb, ad564a4d)

❯ Added new [new theming color keys][51] to determine the activity of tabs via a bottom-border introduced in Visual Studio Code version 1.16. (#47 in PR #50, @svengreb, aaf7447f)

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

❯ Due to security concerns, [VS Code version 1.14 introduced a change so SVG images are no more rendered within VS Code][49]. (#55 in PR #56, @kushalpandya, 9e91ece4)

Nord Visual Studio Code adapted to the following contraints:

- The icon provided in _package.json_ may not be an SVG.
- The badges provided in the _package.json_ may not be SVGs unless they are from [approved badge providers][41].
- Image URLs in `README.md` and `CHANGELOG.md` need to resolve to https URLs.
- Images in `README.md` and `CHANGELOG.md` may not be SVGs unless they are from [approved badge providers][41].
- Images in `README.md` and `CHANGELOG.md` may not use data URIs.

Additionally, the [footer mountain banner](https://github.com/nordtheme/nord/blob/main/src/assets/banner-footer-mountains.svg) has been changed to PNG format (nordtheme/nord#49) and removed the non-HTTPS Arctic Ice Studio logo favicon from the copyright footer line.

![](https://user-images.githubusercontent.com/7836623/31324602-9f40d5be-acb4-11e7-88b3-f86cf6cdacf1.png)

❯ A [`.vscodeignore`][48] file has been added to reduce the size of the distributed `vsix` extension package. (#57 in PR #58, @svengreb @kevinah95, 4660525b)

This results in a reduced `vsix` extension package size of **almost 99%** from **~4.7 MB to ~41 kB**!

# 0.5.0

![Release Date: 2017-08-07](https://img.shields.io/badge/Release_Date-2017--08--07-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.5.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/6)

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

![Release Date: 2017-07-02](https://img.shields.io/badge/Release_Date-2017--07--02-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.2-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.4.2-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/8)

## Bug Fixes

❯ Fixed underlined warning squiggles. (@ajitid, #31, 8158f164)

<p align="center">Before<br><img src="https://user-images.githubusercontent.com/7836623/27767496-818b5138-5ef9-11e7-80aa-4d4f03ec5856.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27767497-8667f382-5ef9-11e7-9060-7f48106bd012.png"/></p>

❯ Fixed the background color of the status bar when no folder is active which has been unintentionally removed during a merge conflict. (@ajitid, #32 (#31), 1c01b0d4)

# 0.4.1

![Release Date: 2017-07-01](https://img.shields.io/badge/Release_Date-2017--07--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.1-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.4.1-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/7)

## Bug Fixes

❯ Fixed underlined error squiggles. (@ajitid, #31, ce23e9cd)

<p align="center">Before<br><img src="https://user-images.githubusercontent.com/7836623/27764412-17801de2-5e99-11e7-9aa8-eabf39f30a75.png"/><br>After<br><img src="https://user-images.githubusercontent.com/7836623/27764413-1c29a516-5e99-11e7-917b-cabd827967ba.png"/></p>

# 0.4.0

![Release Date: 2017-07-01](https://img.shields.io/badge/Release_Date-2017--07--01-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.4.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/1)

[VS Code 1.13](https://code.visualstudio.com/updates/v1_13) has been released including a bunch of [new workbench theme features](https://code.visualstudio.com/updates/v1_13#_new-theming-colors) documented in the official [Theme Color Reference](https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors). (@svengreb, #25, PR #27, 6aff96bb)
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

![Release Date: 2017-06-11](https://img.shields.io/badge/Release_Date-2017--06--11-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.3.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/5)

## Improvements

### Syntax

#### Go

❯ Readded the _Go_ string format placeholder which has been removed unintentionally after converting from the `.tmTheme` to the new JSON format. (@jsvensson, PR #16, d5529d59)

## Bug Fixes

### UI

❯ Fixed the scrollbar covering (VCS) code info marker in the right gutter. The scrollbar now has a transparency of 60%. (@Phlicess, #13, 5bd2c70c)

<p align="center"><strong>Preview</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023389/a75879d8-37ba-11e7-8c1b-c5ee6020db1c.png"/><br><strong>Hovered</strong><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023391/b64e6074-37ba-11e7-8b8b-210e6056d029.png"/><br><img src="https://cloud.githubusercontent.com/assets/7836623/26023400/dc858a92-37ba-11e7-8e76-85a8cbff12b0.gif"/></p>

# 0.2.0

![Release Date: 2017-05-07](https://img.shields.io/badge/Release_Date-2017--05--07-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.2.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/6)

**Please note that the minimal version for this theme is now >=1.12.0 due to the new VS Code theme- and workbench API!**

## Features

### UI

❯ Implemented full support for the new VS Code theme- and [workbench](https://code.visualstudio.com/docs/getstarted/theme-color-reference) API introduced in version [1.12.0](https://code.visualstudio.com/updates/v1_12#_workbench-theming). (@skbolton, #8 PR #11, e25f748b)

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-preview.png"/><br><blockquote>Icons provided by <a href="https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme">Material Icon Theme</a>.<br>Font: <a href="https://adobe-fonts.github.io/source-code-pro">Source Code Pro</a> 20px</blockquote></p>

A complete list of all implemented workbench UI styles can be found in the [README](https://github.com/nordtheme/visual-studio-code/blob/develop/readme.md#features).

Thanks to @octref and @Tyriar for testing and providing improvement suggestions!

<p align="center"><strong>Activity Bar Badges</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-activity-bar-badge.png"/></p>

<p align="center"><strong>Tabs</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-tab-bar.png"/></p>

<p align="center"><strong>Status Bar</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-status-bar.png"/></p>

<p align="center"><strong>Panels and terminal colors</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-panel-terminal-colors.png"/></p>

<p align="center"><strong>Editor Widgets (Search)</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-editor-widget-search.png"/></p>

<p align="center"><strong>Notifications</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-notification.png"/></p>

<p align="center"><strong>Side Bar Views (Debug)</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-side-bar-debug.png"/></p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Diff Editor</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-inserted.png"/><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-diffeditor-removed.png"</p>

<p align="center"><strong>Peek View</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-peek-view.png"/></p>

<p align="center"><strong>Validations</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-validation-info.png"/><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-validation-warning.png"/><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-validation-error.png"/></p>

<p align="center"><strong>Validations</strong><br><strong>Active selection</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection.png"/><br><strong>Inactive selection</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection.png"/><br><strong>Active selection with keyboard navigation marker</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-list-active-selection-keyboard.png"/><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrcast-feature-ui-list-active-selection-keyboard.gif"/><br><strong>Active- and inactive selection with hover marker</strong><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-list-inactive-selection-hover.png"/><br><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrcast-feature-ui-list-hover.gif"/></p>

❯ Implemented support for terminal ANSI colors. (@threeve, PR #4, 4e5815be)

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-feature-ui-panel-terminal-colors.png"/></p>

## Improvement

### Languages

#### Go

❯ Implemented highlighting for Go string format placeholders. (@jsvensson, #7, 92ea6619)

<p align="center"><img src="https://cloud.githubusercontent.com/assets/7836623/24760013/a12bb286-1ae7-11e7-9a4a-f3c745e2c497.png"/></p>

### Documentation

❯ Updated the _Quick Open_ keymapping for OSX. (@uonick, PR #9, e93694da)

❯ Changed the shields (badges) style to `flat-square`. (@svengreb, caafb9d5)

## Bug Fixes

### Documentation

❯ Fixed a typo in the project description. (@svengreb, #6, 8744b392)

# 0.1.1

![Release Date: 2017-02-25](https://img.shields.io/badge/Release_Date-2017--02--25-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.1.1-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/3)

## Bug Fixes

❯ Fixed uncolored start- and end elements/tags of block comments for various languages. (@Platzer, #2 #3, 6db13ea2)

<p align="center"><strong>Before</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333765/c540e0a8-fb91-11e6-9c21-37e6bcda0e54.png"/><br><strong>After</strong><img src="https://cloud.githubusercontent.com/assets/7836623/23333769/d1d5c2f2-fb91-11e6-9f06-9c50d006388c.png"/></p>

# 0.1.0

![Release Date: 2017-02-18](https://img.shields.io/badge/Release_Date-2017--02--18-88C0D0.svg?style=flat-square) [![Project Board](https://img.shields.io/badge/Project_Board-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/orgs/nordtheme/projects/1/views/10) [![Milestone](https://img.shields.io/badge/Milestone-0.1.0-88C0D0.svg?style=flat-square)](https://github.com/nordtheme/visual-studio-code/milestone/2)

**Initial VS Code Marketplace extension release version!**

## Features

A complete list of all implemented features can be found in the [README][174] section.

❯ Implemented the main color theme file [`Nord.tmTheme`][175]. (@svengreb, #1, 63b16747)

<p align="center"><img src="https://raw.githubusercontent.com/nordtheme/visual-studio-code/develop/assets/scrot-top.png"/></p>

Detailed information about features, supported languages and install instructions can be found in the [repository documentation][176].

# 0.0.0

![Release Date: 2017-02-18][178]

**Project Initialization**

<p align="center">
  <picture>
    <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced.png" srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced-2x.png 2x" width="100%" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
    <source srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/light/spaced.png" srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/light/spaced-2x.png 2x" width="100%" media="(prefers-color-scheme: dark)" />
    <img src="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced.png" srcset="https://raw.githubusercontent.com/nordtheme/assets/main/static/images/elements/separators/iceberg/footer/dark/spaced-2x.png 2x" width="100%" />
  </picture>
</p>

<p align="center">
  Copyright &copy; 2016-present <a href="https://www.svengreb.de" target="_blank">Sven Greb</a>
</p>

<p align="center">
  <a href="https://github.com/nordtheme/vim/blob/develop/license" target="_blank">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&label=License&message=MIT&logoColor=eceff4&colorA=4c566a&colorB=88c0d0"/>
  </a>
  <a href="https://www.svengreb.de">
    <img src="https://img.shields.io/static/v1.svg?style=flat-square&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAABMklEQVQ4jcWQvUoDQRRGz52s5IfVIiDWPkGKFFaCIVaGdIagjcFAwICFb7DvIK6QQlNpY2UQLMQVBbEQ0SewFkGbKCQmOzaTJay7/lR+zTAf9xwuF/47Mv45rdezqWEq72v/RWZnHgqOMwDwHMfSj085JSqb6Pu38we7r18E3nqzhmYbsE11rxKsAvhDfQiSM30XYbOw57YDwfnaRl6U3ABWaMNn806H+oGPzBX3d+4UgChZiYBHYBgGsBLoKoAyhR0x9G20Zmpc4P1ZoMQDcwMNclFrdhBKv6M5WWi7ZQGtjEUn35IV4OwnVjSX/WGmKqCDDUa5rmyle3bvGFiMg3WGUsF1u0EXHoqTRMGRgkAy2eugKZrqijRLYThWANBpNDL2h3UE0J0YLJdbrfe42f/NJ0wqY7/KcXKPAAAAAElFTkSuQmCC&label=lovely%20crafted%20in&message=Germany&colorA=4c566a&colorB=88c0d0"/>
  </a>
</p>

<!--
+------------------+
+ Formatting Notes +
+------------------+

The `<summary />` tag must be separated with a blank line from the actual item content paragraph,
otherwise Markdown elements are not parsed and rendered!

+------------------+
+ Symbol Reference +
+------------------+
↠ (U+21A0): Start of a log section description
— (U+2014): Separator between a log section title and the metadata
⇄ (U+21C4): Separator between a issue ID and pull request ID in a log metadata
⊶ (U+22B6): Icon prefix for the short commit SHA checksum in a log metadata
⇅ (U+21C5): Icon prefix for the link of the Git commit history comparison on GitHub
-->

<!--lint disable final-definition-->

<!-- Shared -->

[1]: https://circleci.com/docs/2.0
[2]: https://circleci.com
[3]: https://travis-ci.org
[4]: https://eslint.org
[5]: https://github.com/nordtheme/visual-studio-code/issues/118
[6]: https://github.com/arcticicestudio/styleguide-git
[7]: https://github.com/arcticicestudio/styleguide-javascript
[8]: https://github.com/arcticicestudio/styleguide-markdown
[9]: https://github.com/arcticicestudio/nord-docs/community
[10]: https://help.github.com/articles/adding-a-code-of-conduct-to-your-project
[11]: https://help.github.com/articles/about-codeowners
[12]: https://help.github.com/articles/setting-guidelines-for-repository-contributors
[13]: https://help.github.com/articles/manually-creating-a-single-issue-template-for-your-repository
[14]: https://help.github.com/articles/creating-issue-templates-for-your-repository
[15]: https://help.github.com/articles/about-issue-and-pull-request-templates
[16]: https://help.github.com/articles/creating-a-pull-request-template-for-your-repository
[17]: https://github.com/typicode/husky
[18]: https://github.com/okonet/lint-staged
[19]: https://github.com/remarkjs/remark-lint
[20]: https://github.com/nordtheme/visual-studio-code#features
[21]: https://github.com/gulshan
[22]: https://github.com/kingdaro
[23]: https://github.com/lilyball
[24]: https://github.com/octref
[25]: https://github.com/OfficerHalf
[26]: https://github.com/Oxyrus
[27]: https://git-scm.com/docs/git-shortlog#_mapping_authors
[28]: https://gulpjs.com
[29]: https://www.nordtheme.com
[30]: https://github.com/nordtheme/nord/issues/55
[31]: https://www.npmjs.com/package/eslint-config-arcticicestudio-base
[32]: https://www.npmjs.com/package/remark-preset-lint-arcticicestudio
[33]: https://opensource.guide/how-to-contribute
[34]: https://opensource.guide
[35]: https://prettier.io
[36]: https://www.typescriptlang.org
[37]: https://code.visualstudio.com/updates/v1_46
[38]: https://code.visualstudio.com/updates/v1_54#_updated-listtree-ui
[39]: https://code.visualstudio.com/updates/v1_57
[40]: https://github.com/Microsoft/vscode-vsce
[41]: https://code.visualstudio.com/docs/extensionAPI/extension-manifest#_approved-badges
[42]: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_editor-colors
[43]: https://code.visualstudio.com/docs/getstarted/themes#_customizing-a-color-theme
[44]: https://code.visualstudio.com/docs/editor/intellisense
[45]: https://code.visualstudio.com/docs/getstarted/settings
[46]: https://code.visualstudio.com/docs/getstarted/theme-color-reference#_git-colors
[47]: https://code.visualstudio.com/api/working-with-extensions/publishing-extension#publishing-extensions
[48]: https://code.visualstudio.com/docs/extensions/publish-extension#_vscodeignore
[49]: https://code.visualstudio.com/updates/v1_14#_extension-authoring
[50]: https://code.visualstudio.com/updates/v1_15#_new-theme-color-for-title-bar-border
[51]: https://code.visualstudio.com/updates/v1_16#_theming-improvements

<!-- v0.1.0 -->

[174]: https://github.com/nordtheme/visual-studio-code/blob/develop/readme.md#features
[175]: https://github.com/nordtheme/visual-studio-code/blob/develop/themes/Nord.tmTheme
[176]: https://github.com/nordtheme/visual-studio-code/blob/develop/readme.md#installation
[178]: https://img.shields.io/badge/Release_Date-2017--02--18-88C0D0.svg?style=flat-square

<!-- v0.7.0 -->

[52]: https://github.com/nordtheme/visual-studio-code/issues/100#issuecomment-426005938
[53]: https://code.visualstudio.com/updates/v1_18#_git-status-in-file-explorer
[54]: https://code.visualstudio.com/updates/v1_18
[55]: https://code.visualstudio.com/updates/v1_20#_more-themable-colors-for-editor-tabs
[56]: https://code.visualstudio.com/updates/v1_21#_coloring-of-active-line-number
[57]: https://code.visualstudio.com/updates/v1_21#_new-notifications-ui
[58]: https://code.visualstudio.com/updates/v1_21
[59]: https://code.visualstudio.com/updates/v1_22#_hints-in-the-editor
[60]: https://code.visualstudio.com/updates/v1_22#_new-theme-colors
[61]: https://code.visualstudio.com/updates/v1_22
[62]: https://code.visualstudio.com/updates/v1_23#_highlighted-indent-guides
[63]: https://code.visualstudio.com/updates/v1_24#_new-theme-colors
[64]: https://code.visualstudio.com/updates/v1_24
[65]: https://github.com/Microsoft/vscode/issues/178

<!-- v0.8.0 -->

[66]: https://github.com/Microsoft/vscode/issues/71663
[67]: https://github.com/nordtheme/nord/issues/94
[68]: https://github.com/al2Me6
[69]: https://github.com/danfo
[70]: https://github.com/marcusramberg
[71]: https://github.com/mdogadailo
[72]: https://github.com/samchamberland
[73]: https://github.com/sdr0x07b6
[74]: https://github.com/varog-norman

<!-- v0.9.0 -->

[75]: https://circleci.com/docs/2.0/configuration-reference
[76]: https://github.com/nordtheme/visual-studio-code/issues/133
[77]: https://github.com/blog/2392-introducing-code-owners
[78]: https://github.com/blog/2380-new-community-tools
[79]: https://github.com/blog/1184-contributing-guidelines
[80]: https://blog.github.com/2016-02-17-issue-and-pull-request-templates
[81]: https://blog.github.com/2018-01-25-multiple-issue-and-pull-request-templates

<!-- v0.10.0 -->

[82]: https://github.com/arcticicestudio/nord-docs/issues/149

<!-- v0.11.0 -->

[83]: https://github.com/chris78er
[84]: https://code.visualstudio.com/updates/v1_36#_tree-indent-guides
[85]: https://code.visualstudio.com/updates/v1_36

<!-- v0.12.0 -->

[86]: https://github.com/svipas
[87]: https://github.com/microsoft/vscode/tree/master/extensions/theme-abyss/themes
[88]: https://code.visualstudio.com/updates/v1_37#_button-toggle-active-state-in-find-widget
[89]: https://code.visualstudio.com/updates/v1_37#_improved-minimap-search-results-visibility

<!-- v0.13.0 -->

[90]: https://github.com/feliperenan
[91]: https://github.com/mserajnik
[92]: https://marketplace.visualstudio.com/items?itemName=JakeBecker.elixir-ls
[93]: https://github.com/microsoft/vscode/blame/752acd504206f00ffe4ed101c2496540d0197f56/src/vs/platform/theme/common/colorRegistry.ts#L164-L170
[94]: https://github.com/microsoft/vscode/blame/f450e0b1fe3ac26ce6bf8367ff1bd60fb1387a7d/src/vs/platform/theme/common/colorRegistry.ts#L154
[95]: github.com/microsoft/vscode/issues/26298
[96]: https://code.visualstudio.com/updates/v1_13

<!-- v0.14.0 -->

[97]: https://github.com/aeschli
[98]: https://github.com/microsoft/vscode/wiki/Semantic-Highlighting-Overview
[99]: https://code.visualstudio.com/updates/v1_44#_semantic-tokens-provider-api
[100]: https://code.visualstudio.com/api/language-extensions/semantic-highlight-guide#theming
[101]: https://code.visualstudio.com/docs/getstarted/themes#_semantic-highlighting

<!-- v0.15.0 -->

[102]: https://github.com/kufii
[103]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
[104]: https://code.visualstudio.com/updates/v1_40
[105]: https://code.visualstudio.com/updates/v1_40#_activity-bar-indicator
[106]: https://code.visualstudio.com/updates/v1_41#_minimap-decorations-for-errors-warnings-and-content-changes
[107]: https://code.visualstudio.com/updates/v1_43#_minimap-background-and-slider-colors
[108]: https://code.visualstudio.com/updates/v1_45
[109]: https://code.visualstudio.com/updates/v1_45#_new-theme-color-for-editor-title-border
[110]: https://code.visualstudio.com/api/references/theme-color#minimap

<!-- v0.15.1 -->

[111]: https://github.com/nordtheme/visual-studio-code/compare/v0.15.0...v0.15.1
[112]: https://www.npmjs.com/package/@svengreb/eslint-config-base

<!-- v0.16.0 -->

[113]: https://github.com/nordtheme/visual-studio-code/compare/v0.15.1...v0.16.0
[114]: https://code.visualstudio.com/updates/v1_46#_new-debug-console-theme-colors
[115]: https://code.visualstudio.com/updates/v1_57#_updated-quick-pick-suggest-widget-color

<!-- v0.17.0 -->

[116]: https://github.com/nordtheme/visual-studio-code/compare/v0.16.0...v0.17.0
[117]: https://code.visualstudio.com/updates/v1_46#_new-input-theme-colors
[118]: https://code.visualstudio.com/updates/v1_50
[119]: https://code.visualstudio.com/updates/v1_50#_new-theme-colors
[120]: https://code.visualstudio.com/updates/v1_52
[121]: https://code.visualstudio.com/updates/v1_52#_new-theme-colors
[122]: https://code.visualstudio.com/updates/v1_52#_sash-hover-border-color
[123]: https://code.visualstudio.com/updates/v1_52#_ui-improvements
[124]: https://code.visualstudio.com/updates/v1_54
[125]: https://code.visualstudio.com/updates/v1_56
[126]: https://code.visualstudio.com/updates/v1_56#_updated-custom-dialogs
[127]: https://code.visualstudio.com/updates/v1_56#_keybinding-label-colors
[128]: https://code.visualstudio.com/updates/v1_57#_new-theme-colors-for-inline-values

<!-- v0.17.1 -->

[129]: https://github.com/nordtheme/visual-studio-code/compare/v0.17.0...v0.17.1

<!-- v0.18.0 -->

[130]: https://github.com/nordtheme/visual-studio-code/compare/v0.17.1...v0.18.0
[131]: https://code.visualstudio.com/updates/v1_58
[132]: https://code.visualstudio.com/updates/v1_58#_markdown-math-formula-syntax-highlighting

<!-- v0.19.0 -->

[133]: https://www.nordtheme.com/docs/ports/visual-studio-code/customization
[134]: https://github.com/arcticicestudio/styleguide-javascript/releases/tag/v0.11.0
[135]: https://github.com/arcticicestudio/styleguide-javascript/tree/main/packages/%40arcticicestudio/eslint-config-base
[136]: https://github.blog/2020-10-13-presenting-v7-0-0-of-the-npm-cli
[137]: https://github.com/nordtheme/visual-studio-code/compare/v0.18.0...v0.19.0
[138]: https://blog.npmjs.org/post/621733939456933888/npm-v7-series-why-keep-package-lockjson
[139]: https://semver.npmjs.com
[140]: https://code.visualstudio.com/updates/v1_59
[141]: https://code.visualstudio.com/updates/v1_59#_active-terminal-tab-indicator
[142]: https://code.visualstudio.com/updates/v1_59#_status-bar-warning-colors
[143]: https://code.visualstudio.com/updates/v1_60
[144]: https://code.visualstudio.com/updates/v1_60#_high-performance-bracket-pair-colorization
[145]: https://code.visualstudio.com/updates/v1_60#_inlay-hints-for-javascript-and-typescript
[146]: https://github.com/babel/babel-eslint
[148]: https://github.com/eslint/eslint/releases/tag/v5.16.0
[149]: https://github.com/eslint/eslint/releases/tag/v7.32.0
[150]: https://github.com/import-js/eslint-plugin-import
[151]: https://github.com/import-js/eslint-plugin-import/releases/tag/v2.17.3
[152]: https://github.com/babel/babel/tree/main/eslint/babel-eslint-parser
[153]: https://github.com/import-js/eslint-plugin-import/releases/tag/v2.24.2
[154]: https://github.com/prettier/eslint-plugin-prettier
[155]: https://github.com/prettier/eslint-plugin-prettier/releases/tag/v3.1.0
[156]: https://github.com/prettier/eslint-plugin-prettier/releases/tag/v4.0.0
[158]: https://github.com/prettier/prettier/releases/tag/1.17.1
[159]: https://github.com/prettier/prettier/releases/tag/2.4.1
[160]: https://remark.js.org
[161]: https://github.com/remarkjs/remark/releases/tag/remark-cli%406.0.1
[162]: https://github.com/remarkjs/remark/releases/tag/remark-cli%409.0.0
[163]: https://github.com/azeemba/eslint-plugin-json
[164]: https://github.com/arcticicestudio/styleguide-markdown/tree/main/packages/%40arcticicestudio/remark-preset-lint
[166]: https://github.com/ota-meshi/eslint-plugin-jsonc
[168]: https://github.com/microsoft/vscode-vsce/releases/tag/v1.62.0
[169]: https://github.com/microsoft/vscode-vsce/releases/tag/v1.100.0
[170]: https://komkom.github.io
[171]: https://github.com/sindresorhus/del-cli
[172]: https://github.com/sindresorhus/del-cli/releases/tag/v1.1.0
[173]: https://github.com/sindresorhus/del-cli/releases/tag/v4.0.1
