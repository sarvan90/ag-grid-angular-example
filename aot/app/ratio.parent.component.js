import { Component } from '@angular/core';
// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
export var RatioParentComponent = (function () {
    function RatioParentComponent() {
        this.params = {
            value: { top: 0.25, bottom: 0.75 }
        };
    }
    RatioParentComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    RatioParentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ratio-cell',
                    template: "\n    <ag-ratio style=\"height:20px\" [topRatio]=\"params?.value?.top\" [bottomRatio]=\"params?.value?.bottom\">\n    </ag-ratio>\n    ",
                    styles: ["\n        ag-ratio {\n          display: block;\n          overflow:hidden;\n          border:1px solid #ccc;\n          border-radius:6px;\n          background: #fff;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    RatioParentComponent.ctorParameters = [];
    return RatioParentComponent;
}());
//# sourceMappingURL=ratio.parent.component.js.map