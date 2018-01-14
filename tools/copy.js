const ncp = require('ncp');

// copy package.json
const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json').toString());

packageJson.main = 'rm-materials.umd.js';
packageJson.module = packageJson['jsnext:main'] = 'rm-materials.esm.js';
packageJson.types = 'rm-materials.d.ts';

delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));

// define copy function
const fCopy = function(fs, src, dst) {
    const sSource = fs.readFileSync(src).toString();

    fs.writeFileSync(dst, sSource); 
};

// copy readme
fCopy(fs, 'npm.README.md', './dist/README.md');

// copy assets
ncp('assets', 'dist/assets', function (err) {
  if (err) { throw err; }
  // done
});