"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var main_1 = require('ag-grid-ng2/main');
var main_2 = require('ag-grid-ng2/main');
var ratio_component_1 = require("./ratio.component");
var clickable_component_1 = require("./clickable.component");
// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
var RatioParentComponent = (function () {
    function RatioParentComponent() {
    }
    RatioParentComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    RatioParentComponent = __decorate([
        core_1.Component({
            selector: 'ratio-cell',
            template: "\n    <ag-ratio style=\"height:20px\" [topRatio]=\"params?.value?.top\" [bottomRatio]=\"params?.value?.bottom\">\n    </ag-ratio>\n    ",
            styles: ["\n        ag-ratio {\n          display: block;\n          overflow:hidden;\n          border:1px solid #ccc;\n          border-radius:6px;\n          background: #fff;\n        }\n    "],
            directives: [ratio_component_1.RatioComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], RatioParentComponent);
    return RatioParentComponent;
}());
// both this and the parent component could be folded into one component as they're both simple, but it illustrates how
// a fuller example could work
var ClickableParentComponent = (function () {
    function ClickableParentComponent() {
    }
    ClickableParentComponent.prototype.agInit = function (params) {
        this.params = params;
        this.cell = { row: params.value, col: params.colDef.headerName };
    };
    ClickableParentComponent.prototype.clicked = function (cell) {
        console.log("Child Cell Clicked: " + JSON.stringify(cell));
    };
    ClickableParentComponent = __decorate([
        core_1.Component({
            selector: 'clickable-cell',
            template: "\n    <ag-clickable (onClicked)=\"clicked($event)\" [cell]=\"cell\"></ag-clickable>\n    ",
            directives: [clickable_component_1.ClickableComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], ClickableParentComponent);
    return ClickableParentComponent;
}());
var FromRichComponent = (function () {
    // shouldn't be necessary to inject ViewContainerRef here, but if we don't the child AgGridCellRendererFactory
    // doesn't get it injected either (and an error is thrown)
    function FromRichComponent(_viewContainerRef, agComponentFactory) {
        this._viewContainerRef = _viewContainerRef;
        this.agComponentFactory = agComponentFactory;
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    FromRichComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Name", field: "name", width: 200 },
            {
                headerName: "Ratio Component",
                field: "ratios",
                cellRenderer: this.agComponentFactory.createCellRendererFromComponent(RatioParentComponent),
                width: 200
            },
            {
                headerName: "Clickable Component",
                field: "name",
                cellRenderer: this.agComponentFactory.createCellRendererFromComponent(ClickableParentComponent),
                width: 200
            }
        ];
    };
    FromRichComponent.prototype.createRowData = function () {
        return [
            { name: 'Homer Simpson', ratios: { top: 0.25, bottom: 0.75 } },
            { name: 'Marge Simpson', ratios: { top: 0.67, bottom: 0.39 } },
            { name: 'Bart Simpson', ratios: { top: 0.82, bottom: 0.47 } },
            { name: 'Lisa Simpson', ratios: { top: 0.39, bottom: 1 } }
        ];
    };
    FromRichComponent = __decorate([
        core_1.Component({
            selector: 'ag-from-rich-component',
            templateUrl: 'app/from-rich.component.html',
            directives: [main_1.AgGridNg2],
            providers: [main_2.AgComponentFactory]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, main_2.AgComponentFactory])
    ], FromRichComponent);
    return FromRichComponent;
}());
exports.FromRichComponent = FromRichComponent;
//# sourceMappingURL=from-rich.component.js.map