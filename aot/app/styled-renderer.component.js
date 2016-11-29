import { Component } from '@angular/core';
export var StyledComponent = (function () {
    function StyledComponent() {
    }
    StyledComponent.prototype.agInit = function (params) {
        this.params = params;
        this.style = this.params.style;
    };
    StyledComponent.decorators = [
        { type: Component, args: [{
                    selector: 'floating-cell',
                    template: "<span [ngStyle]=\"style\">{{params.value}}</span>"
                },] },
    ];
    /** @nocollapse */
    StyledComponent.ctorParameters = [];
    return StyledComponent;
}());
//# sourceMappingURL=styled-renderer.component.js.map