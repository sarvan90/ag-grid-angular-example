import { Component } from '@angular/core';
export var ParamsComponent = (function () {
    function ParamsComponent() {
    }
    ParamsComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    ParamsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'params-cell',
                    template: "Field: {{params.colDef.field}}, Value: {{params.value}}"
                },] },
    ];
    /** @nocollapse */
    ParamsComponent.ctorParameters = [];
    return ParamsComponent;
}());
//# sourceMappingURL=params.component.js.map