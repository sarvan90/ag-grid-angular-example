(function (global) {
    System.config({
            defaultJSExtensions: true,
            map: {
                // angular bundles
                '@angular/core': 'node_modules/@angular/core',
                '@angular/common': 'node_modules/@angular/common',
                '@angular/compiler': 'node_modules/@angular/compiler/index.js',
                '@angular/platform-browser': 'node_modules/@angular/platform-browser',
                '@angular/forms': 'node_modules/@angular/forms',
                '@angular/router': 'node_modules/@angular/router',
                '@angular/http': 'node_modules/@angular/http',
                // other libraries
                'rxjs': 'node_modules/rxjs',
                'jquery': 'node_modules/jquery/dist',
                'jquery-ui': 'node_modules/jquery-ui/ui/widgets',
                'lodash': 'node_modules/lodash',
                // ag libraries
                'ag-grid-angular': 'node_modules/ag-grid-angular',
                'ag-grid': 'node_modules/ag-grid',
                'ag-grid-enterprise': 'node_modules/ag-grid-enterprise'
            },
            packages: {
                '@angular/core': {
                    main: 'index.js'
                },
                '@angular/common': {
                    main: 'index.js'
                },
                '@angular/platform-browser': {
                    main: 'index.js'
                },
                '@angular/forms': {
                    main: 'index.js'
                },
                '@angular/router': {
                    main: 'index.js'
                },
                '@angular/http': {
                    main: 'index.js'
                },
                'ag-grid': {
                    main: 'main.js'
                },
                'jquery': {
                    main: 'jquery.js'
                },
                'jquery-ui': {
                    main: 'slider.js'
                },
                'lodash': {
                    main: 'index.js',
                    defaultExtension: 'js'
                }

            }
        }
    );
})(this);