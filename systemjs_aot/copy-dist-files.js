var fs = require('fs');
var resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/ag-grid/dist/styles/ag-grid.css',
    'node_modules/ag-grid/dist/styles/theme-fresh.css',
    'node_modules/bootstrap/dist/css/bootstrap.css'
];

// to run manually from cmd line, node -e 'require("./copy-dist-files").copyFiles()' -  will by default
// update aot css/js files
module.exports = {
    'copyFiles': (prefix) => {
        const pathPrefix = prefix || './aot/';
        resources.map(function (f) {
            const path = f.split('/');
            const t = pathPrefix + path[path.length - 1];
            fs.createReadStream(f).pipe(fs.createWriteStream(t));
        });
    }
};
