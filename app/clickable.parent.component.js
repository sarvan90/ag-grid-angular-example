import { Component } from '@angular/core';
// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
export var ClickableParentComponent = (function () {
    function ClickableParentComponent() {
    }
    ClickableParentComponent.prototype.agInit = function (params) {
        this.params = params;
        this.cell = { row: params.value, col: params.colDef.headerName };
    };
    ClickableParentComponent.prototype.clicked = function (cell) {
        console.log("Child Cell Clicked: " + JSON.stringify(cell));
    };
    ClickableParentComponent.decorators = [
        { type: Component, args: [{
                    selector: 'clickable-cell',
                    template: "\n    <ag-clickable (onClicked)=\"clicked($event)\" [cell]=\"cell\"></ag-clickable>\n    "
                },] },
    ];
    /** @nocollapse */
    ClickableParentComponent.ctorParameters = [];
    return ClickableParentComponent;
}());
//# sourceMappingURL=clickable.parent.component.js.map