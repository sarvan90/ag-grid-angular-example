var fs = require('fs');
var resources = [
    'node_modules/core-js/client/shim.min.js',
    'node_modules/zone.js/dist/zone.min.js',
    'node_modules/ag-grid/dist/styles/ag-grid.css',
    'node_modules/ag-grid/dist/styles/theme-fresh.css'
];
resources.map(function (f) {
    var path = f.split('/');
    var t = 'lib/' + path[path.length - 1];
    fs.createReadStream(f).pipe(fs.createWriteStream(t));
});
