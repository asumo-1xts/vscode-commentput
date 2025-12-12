import * as vscode from 'vscode'




export function activate(context: vscode.ExtensionContext) {
  console.log('Commentput extension is now active')

  const disposable = vscode.commands.registerCommand(
    'commentput.insertPrefix',
    () => {
      const editor = vscode.window.activeTextEditor
      if (!editor) {
        return
      }

      // 現在のファイルの言語IDを取得
      const languageId = editor.document.languageId
      // 設定から言語ごとのコメントプレフィクスを取得
      const config = vscode.workspace.getConfiguration('commentput')
      const languagePrefixes = config.get<{ [key: string]: string }>(
        'languagePrefixes',
        {}
      )
      // 言語IDに対応するコメントプレフィクスを取得
      const commentPrefix = languagePrefixes[languageId]
      if (!commentPrefix) {
        vscode.window.showWarningMessage(
          `No comment prefix defined for language: ${languageId}. ` +
            `You can add it in settings under "commentput.languagePrefixes".`
        )
        return
      }

      // カーソル位置にコメントプレフィクスを挿入
      editor.edit((editBuilder: vscode.TextEditorEdit) => {
        editor.selections.forEach((selection: vscode.Selection) => {
          editBuilder.insert(selection.active, commentPrefix)
        })
      })
    }
  )

  context.subscriptions.push(disposable)
}

export function deactivate() {}
