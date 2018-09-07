const vscode = require('vscode');
function activate(context) {

    let disposable = vscode.commands.registerCommand('extension.ifErr', function () {
        
        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }
        const position = editor.selection.active;
        editor.insertSnippet(new vscode.SnippetString('if err != nil {\n\treturn\n}'), position);
    });
    context.subscriptions.push(disposable);
}
exports.activate = activate;

function deactivate() {
}
exports.deactivate = deactivate;
