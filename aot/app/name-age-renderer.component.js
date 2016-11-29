import { Component } from '@angular/core';
export var NameAndAgeRendererComponent = (function () {
    function NameAndAgeRendererComponent() {
    }
    NameAndAgeRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.values = "Name: " + params.data.name + ", Age: " + params.data.age;
    };
    NameAndAgeRendererComponent.decorators = [
        { type: Component, args: [{
                    selector: 'full-width-cell',
                    template: "<span>Full Width Column! {{ values }}</span>"
                },] },
    ];
    /** @nocollapse */
    NameAndAgeRendererComponent.ctorParameters = [];
    return NameAndAgeRendererComponent;
}());
//# sourceMappingURL=name-age-renderer.component.js.map