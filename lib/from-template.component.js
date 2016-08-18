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
var FromTemplateComponent = (function () {
    // shouldn't be necessary to inject ViewContainerRef here, but if we don't the child AgGridCellRendererFactory
    // doesn't get it injected either (and an error is thrown)
    function FromTemplateComponent(_viewContainerRef, agComponentFactory) {
        this._viewContainerRef = _viewContainerRef;
        this.agComponentFactory = agComponentFactory;
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    FromTemplateComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Name", field: "name", width: 200 },
            {
                headerName: "Square Template",
                field: "index",
                cellRenderer: this.agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value}}'),
                width: 200
            },
            {
                headerName: "Cube Template",
                field: "index",
                cellRenderer: this.agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value * params.value}}'),
                width: 200
            },
            {
                headerName: "Name Params Template",
                field: "name",
                cellRenderer: this.agComponentFactory.createCellRendererFromTemplate('Field: {{params.colDef.field}}, Value: {{params.value}}'),
                width: 250
            }
        ];
    };
    FromTemplateComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                name: "Name " + i,
                index: i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100)
            });
        }
        return rowData;
    };
    FromTemplateComponent = __decorate([
        core_1.Component({
            selector: 'ag-from-template',
            templateUrl: 'app/from-template.component.html',
            directives: [main_1.AgGridNg2],
            providers: [main_2.AgComponentFactory]
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, main_2.AgComponentFactory])
    ], FromTemplateComponent);
    return FromTemplateComponent;
}());
exports.FromTemplateComponent = FromTemplateComponent;
//# sourceMappingURL=from-template.component.js.map