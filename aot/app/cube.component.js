import { Component } from '@angular/core';
export var CubeComponent = (function () {
    function CubeComponent() {
    }
    // called on init
    CubeComponent.prototype.agInit = function (params) {
        this.params = params;
        this.cubed = this.params.data.value * this.params.data.value * this.params.data.value;
    };
    // called when the cell is refreshed
    CubeComponent.prototype.refresh = function (params) {
        this.params = params;
        this.cubed = this.params.data.value * this.params.data.value * this.params.data.value;
    };
    CubeComponent.prototype.valueCubed = function () {
        return this.cubed;
    };
    CubeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cube-cell',
                    template: "{{valueCubed()}}"
                },] },
    ];
    /** @nocollapse */
    CubeComponent.ctorParameters = [];
    return CubeComponent;
}());
//# sourceMappingURL=cube.component.js.map