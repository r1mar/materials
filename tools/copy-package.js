const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json').toString());

packageJson.main = 'rm-materials.umd.js';
packageJson.module = packageJson['jsnext:main'] = 'rm-materials.esm.js';
packageJson.types = 'rm-materials.d.ts';

delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));