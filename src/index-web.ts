/*---------------------------------------------------------------
 *  Homepage:   https://github.com/sainnhe/everforest-vscode
 *  Copyright:  2020 Sainnhe Park <sainnhe@gmail.com>
 *  License:    MIT
 *--------------------------------------------------------------*/

import { workspace, window } from "vscode";

export function activate() {
  workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration("everforest")) {
      window.showInformationMessage(
        "Configuration options are currently not available in vscode web."
      );
    }
  });
}

export function deactivate() {}

// vim: fdm=marker fmr={{{,}}}:
