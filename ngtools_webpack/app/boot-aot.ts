import {platformBrowser} from "@angular/platform-browser";
import {AppModuleNgFactory} from "../aot/app/app.module.ngfactory";

import { enableProdMode } from '@angular/core';

declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
    context: any;
};


function requireAll(r) {
    r.keys().forEach(r);
}
requireAll(require.context('../images/flags', true, /\.png$/));
requireAll(require.context('../images/skills', true, /\.png$/));
requireAll(require.context('../images', true, /\.png$/));

declare var process;
if (process.env.ENV === 'production') {
    console.log("PROD MODE");
    enableProdMode();
}

// for enterprise customers
// import {LicenseManager} from "ag-grid-enterprise/main";
// LicenseManager.setLicenseKey("your license key");


platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
