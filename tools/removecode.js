const del = require('del');
del(['dist/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json|src)',
     'dist/src/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json|rm-materials)',
     'dist/src/rm-materials/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json|carousel|img-viewer)',
     'dist/src/rm-materials/carousel/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)',
     'dist/src/rm-materials/img-viewer/!(*.umd.js|*.esm.js|*.d.ts|*.umd.js.map|*.esm.js.map|*.metadata.json)']).then(paths => {
    console.log('Files and folders that would be deleted:\n', paths.join('\n'));
});