<h1 align="center"> 
vscode-commentput
</h1>

<div align="center">

[![Yarn](https://img.shields.io/badge/Built_with_Yarn-v4.9.2-%232C8EBB?logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![ESLint](https://img.shields.io/badge/Lint_with-ESLint-%234B32C3?style=flat&logo=eslint&logoColor=white&labelColor=gray)](https://github.com/asumo-1xts/vscode-commentput/actions/workflows/eslint.yml)
[![Prettier](https://img.shields.io/badge/Format_with-Prettier-%23F7B93E?style=flat&logo=prettier&logoColor=white&labelColor=gray)](https://github.com/asumo-1xts/vscode-commentput/actions/workflows/prettier.yml)
[![MIT](https://img.shields.io/badge/License-MIT-green)](/LICENSE)

**A simple alternative to `ctrl+/`.**

Simply insert a comment symbol where the cursor is positioned.

55 major languages are supported by default.

<!-- TODO: ここに比較の図 -->

</div>

## Getting started

<!-- TODO: ダウンロードリンク -->

## Options

### Customize keybinding

The keybinding is `ctrl+shift+/` (or `cmd+Shift+/`) by default.

You could assign it to an unused key on your keyboard.

`keybindings.json`

```jsonc
{
  "key": "ctrl+alt+/", // Use alt instead of shift
  "command": "commentput.insertPrefix",
  "when": "editorTextFocus"
}
```

### Modify or add your prefix

**The languages and prefix supported by default is [here](.config/languages.md).**

`settings.json`

```jsonc
{
  "commentput.languagePrefixes": {
    "c": "/* ", // Replace the default prefix
    "custom-language": "## " // Add otehr language's prefix
  }
}
```

If you would like support for a new language, please let us know via an issue.
