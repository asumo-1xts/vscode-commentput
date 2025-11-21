<h1 align="center">
commentPut - VScode extention
</h1>

<div align="center">

<div align="center">
  <img src="./image/logo.png" width="8%" style="vertical-align: middle;">
  <span style="display: inline-block; margin-left: 4%; vertical-align: middle;">
    <strong>A simple alternative to Ctrl+/.</strong>
  </span>
</div>

<br/>

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/asumo-1xts.commentput?color=2F80ED)](https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput)
[![Visual Studio Marketplace Last Updated](https://img.shields.io/visual-studio-marketplace/last-updated/asumo-1xts.commentput?color=2F80ED)](https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput)
[![MIT](https://img.shields.io/badge/License-MIT-green)](/LICENSE)

[![Yarn](https://img.shields.io/badge/Built_with_Yarn-v4.9.2-%232C8EBB?logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![ESLint](https://img.shields.io/badge/Lint_with-ESLint-%234B32C3?style=flat&logo=eslint&logoColor=white&labelColor=gray)](https://github.com/asumo-1xts/vscode-commentput/actions/workflows/eslint.yml)
[![Prettier](https://img.shields.io/badge/Format_with-Prettier-%23F7B93E?style=flat&logo=prettier&logoColor=white&labelColor=gray)](https://github.com/asumo-1xts/vscode-commentput/actions/workflows/prettier.yml)

|Normal commentOut|This extention: commentPut|
|:---:|:---:|
|![commentOut](./image/commentout.gif)|![commentPut](./image/commentput.gif)|

Simply insert a comment prefix where the cursor is positioned.

55 major languages are supported by default.

</div>

## Getting started

See [Marketplace](https://marketplace.visualstudio.com/items?itemName=asumo-1xts.commentput) or search `commentput` from VScode.

Unless there are special circumstances, simply installing it is sufficient.

Just press `Ctrl+Shift+/` in your source files.

## Options

### Customize keybinding

The keybinding is `Ctrl+Shift+/` (or `Cmd+Shift+/`) by default.

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

`settings.json`

```jsonc
{
  "commentput.languagePrefixes": {
    "c": "/* ", // Replace the default prefix
    "custom-language": "## " // Add otehr language's prefix
  }
}
```

The languages and prefix supported by default is [here](.config/languages.md).

If you would like support for a new language, please let us know via [Issues](https://github.com/asumo-1xts/vscode-commentput/issues).
