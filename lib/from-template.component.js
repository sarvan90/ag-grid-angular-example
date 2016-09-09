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
var FromTemplateComponent = (function () {
    function FromTemplateComponent(_viewContainerRef, _agComponentFactory) {
        this._viewContainerRef = _viewContainerRef;
        this._agComponentFactory = _agComponentFactory;
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
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value}}', this._viewContainerRef),
                width: 200
            },
            {
                headerName: "Cube Template",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value * params.value}}', this._viewContainerRef),
                width: 200
            },
            {
                headerName: "Name Params Template",
                field: "name",
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('Field: {{params.colDef.field}}, Value: {{params.value}}', this._viewContainerRef),
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
            templateUrl: 'app/from-template.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, main_1.AgComponentFactory])
    ], FromTemplateComponent);
    return FromTemplateComponent;
}());
exports.FromTemplateComponent = FromTemplateComponent;
//# sourceMappingURL=from-template.component.js.map