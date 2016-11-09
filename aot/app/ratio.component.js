import { Component, Input } from '@angular/core';
export var RatioComponent = (function () {
    function RatioComponent() {
        this.topRatio = 0.67;
        this.bottomRatio = 0.50;
    }
    RatioComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ag-ratio',
                    template: "\n    <svg viewBox=\"0 0 300 100\" preserveAspectRatio=\"none\">\n      <rect x=\"0\" y=\"0\" [attr.width]=\"topRatio * 300\" height=\"50\" rx=\"4\" ry=\"4\" class=\"topBar\" />\n      <rect x=\"0\" y=\"50\" [attr.width]=\"bottomRatio * 300\" height=\"50\" rx=\"4\" ry=\"4\" class=\"bottomBar\" />\n    </svg>\n  ",
                    styles: ["\n    svg {\n      width:100%;\n      height:100%;\n      pointer-events: none;\n    }\n\n    .topBar {\n      fill: #ff9933;\n    }\n\n    .bottomBar {\n      fill: #6699ff;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    RatioComponent.ctorParameters = [];
    RatioComponent.propDecorators = {
        'topRatio': [{ type: Input },],
        'bottomRatio': [{ type: Input },],
    };
    return RatioComponent;
}());
//# sourceMappingURL=ratio.component.js.map