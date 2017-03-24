(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                // angular bundles
                '@angular/core': 'node_modules/@angular/core/bundles/core.umd.js',
                '@angular/common': 'node_modules/@angular/common/bundles/common.umd.js',
                '@angular/compiler': 'node_modules/@angular/compiler/bundles/compiler.umd.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
                '@angular/http': 'node_modules/@angular/http/bundles/http.umd.js',
                '@angular/router': 'node_modules/@angular/router/bundles/router.umd.js',
                '@angular/forms': 'node_modules/@angular/forms/bundles/forms.umd.js',
                // other libraries
                'rxjs': 'node_modules/rxjs',
                // ag libraries
                'ag-grid-angular' : 'node_modules/ag-grid-angular',
                'ag-grid' : 'node_modules/ag-grid',
                'ag-grid-enterprise' : 'node_modules/ag-grid-enterprise'
            },
            packages: {
                'ag-grid': {
                    main: 'main.js'
                }
            }
        }
    );
})(this);