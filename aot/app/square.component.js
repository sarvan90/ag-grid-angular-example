import { Component } from '@angular/core';
export var SquareComponent = (function () {
    function SquareComponent() {
    }
    SquareComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SquareComponent.prototype.valueSquared = function () {
        return this.params.value * this.params.value;
    };
    SquareComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying SquareComponent");
    };
    SquareComponent.decorators = [
        { type: Component, args: [{
                    selector: 'square-cell',
                    template: "{{valueSquared()}}"
                },] },
    ];
    /** @nocollapse */
    SquareComponent.ctorParameters = [];
    return SquareComponent;
}());
//# sourceMappingURL=square.component.js.map