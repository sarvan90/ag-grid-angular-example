import { Component, Input, Output, EventEmitter } from '@angular/core';
export var ClickableComponent = (function () {
    function ClickableComponent() {
        this.onClicked = new EventEmitter();
    }
    ClickableComponent.prototype.click = function () {
        this.onClicked.emit(this.cell);
    };
    ClickableComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ag-clickable',
                    template: "\n    <button (click)=\"click()\">Click Me</button>\n  "
                },] },
    ];
    /** @nocollapse */
    ClickableComponent.ctorParameters = [];
    ClickableComponent.propDecorators = {
        'cell': [{ type: Input },],
        'onClicked': [{ type: Output },],
    };
    return ClickableComponent;
}());
//# sourceMappingURL=clickable.component.js.map