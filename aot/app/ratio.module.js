import { NgModule } from '@angular/core';
import { RatioComponent } from "./ratio.component";
import { RatioParentComponent } from "./ratio.parent.component";
export var RatioModule = (function () {
    function RatioModule() {
    }
    RatioModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        RatioComponent,
                        RatioParentComponent
                    ],
                    exports: [
                        RatioParentComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    RatioModule.ctorParameters = [];
    return RatioModule;
}());
//# sourceMappingURL=ratio.module.js.map