import { Component, ViewContainerRef, ViewChild } from '@angular/core';
export var NumericEditorComponent = (function () {
    function NumericEditorComponent() {
        this.cancelBeforeStart = false;
    }
    NumericEditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.value = this.params.value;
        // only start edit if key pressed is a number, not a letter
        this.cancelBeforeStart = params.charPress && ('1234567890'.indexOf(params.charPress) < 0);
    };
    NumericEditorComponent.prototype.getValue = function () {
        return this.value;
    };
    NumericEditorComponent.prototype.isCancelBeforeStart = function () {
        return this.cancelBeforeStart;
    };
    // will reject the number if it greater than 1,000,000
    // not very practical, but demonstrates the method.
    NumericEditorComponent.prototype.isCancelAfterEnd = function () {
        return this.value > 1000000;
    };
    ;
    NumericEditorComponent.prototype.onKeyDown = function (event) {
        if (!this.isKeyPressedNumeric(event)) {
            if (event.preventDefault)
                event.preventDefault();
        }
    };
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    NumericEditorComponent.prototype.ngAfterViewInit = function () {
        this.input.element.nativeElement.focus();
    };
    NumericEditorComponent.prototype.getCharCodeFromEvent = function (event) {
        event = event || window.event;
        return (typeof event.which == "undefined") ? event.keyCode : event.which;
    };
    NumericEditorComponent.prototype.isCharNumeric = function (charStr) {
        return !!/\d/.test(charStr);
    };
    NumericEditorComponent.prototype.isKeyPressedNumeric = function (event) {
        var charCode = this.getCharCodeFromEvent(event);
        var charStr = String.fromCharCode(charCode);
        return this.isCharNumeric(charStr);
    };
    NumericEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'numeric-cell',
                    template: "<input #input (keydown)=\"onKeyDown($event)\" [(ngModel)]=\"value\">"
                },] },
    ];
    /** @nocollapse */
    NumericEditorComponent.ctorParameters = [];
    NumericEditorComponent.propDecorators = {
        'input': [{ type: ViewChild, args: ['input', { read: ViewContainerRef },] },],
    };
    return NumericEditorComponent;
}());
//# sourceMappingURL=numeric-editor.component.js.map