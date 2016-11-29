import { NgModule } from '@angular/core';
import { ClickableComponent } from "./clickable.component";
import { ClickableParentComponent } from "./clickable.parent.component";
export var ClickableModule = (function () {
    function ClickableModule() {
    }
    ClickableModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [
                        ClickableComponent,
                        ClickableParentComponent
                    ],
                    exports: [
                        ClickableParentComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    ClickableModule.ctorParameters = [];
    return ClickableModule;
}());
//# sourceMappingURL=clickable.module.js.map