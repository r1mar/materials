const fs = require('fs');
const oAngularCli = JSON.parse(fs.readFileSync('.angular-cli.json').toString());

export const nameLibrary = oAngularCli.project.name;
export const PATH_SRC = oAngularCli.apps[0].root + "/";
export const PATH_DIST = oAngularCli.apps[0].outDir + "/";