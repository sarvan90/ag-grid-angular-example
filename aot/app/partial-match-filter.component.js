import { Component, ViewChild, ViewContainerRef } from '@angular/core';
export var PartialMatchFilterComponent = (function () {
    function PartialMatchFilterComponent() {
        this.text = '';
    }
    PartialMatchFilterComponent.prototype.agInit = function (params) {
        this.params = params;
        this.valueGetter = params.valueGetter;
    };
    PartialMatchFilterComponent.prototype.isFilterActive = function () {
        return this.text !== null && this.text !== undefined && this.text !== '';
    };
    PartialMatchFilterComponent.prototype.doesFilterPass = function (params) {
        var _this = this;
        return this.text.toLowerCase()
            .split(" ")
            .every(function (filterWord) {
            return _this.valueGetter(params.node).toString().toLowerCase().indexOf(filterWord) >= 0;
        });
    };
    PartialMatchFilterComponent.prototype.getModel = function () {
        return { value: this.text };
    };
    PartialMatchFilterComponent.prototype.setModel = function (model) {
        this.text = model.value;
    };
    PartialMatchFilterComponent.prototype.afterGuiAttached = function (params) {
        this.input.element.nativeElement.focus();
    };
    PartialMatchFilterComponent.prototype.componentMethod = function (message) {
        alert("Alert from PartialMatchFilterComponent " + message);
    };
    PartialMatchFilterComponent.prototype.onChange = function (newValue) {
        if (this.text !== newValue) {
            this.text = newValue;
            this.params.filterChangedCallback();
        }
    };
    PartialMatchFilterComponent.decorators = [
        { type: Component, args: [{
                    selector: 'filter-cell',
                    template: "\n        Filter: <input style=\"height: 10px\" #input (ngModelChange)=\"onChange($event)\" [ngModel]=\"text\">\n    "
                },] },
    ];
    /** @nocollapse */
    PartialMatchFilterComponent.ctorParameters = [];
    PartialMatchFilterComponent.propDecorators = {
        'input': [{ type: ViewChild, args: ['input', { read: ViewContainerRef },] },],
    };
    return PartialMatchFilterComponent;
}());
//# sourceMappingURL=partial-match-filter.component.js.map