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
var square_component_1 = require("./square.component");
var params_component_1 = require("./params.component");
var cube_component_1 = require("./cube.component");
var FromComponentComponent = (function () {
    function FromComponentComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    FromComponentComponent.prototype.onCellValueChanged = function ($event) {
        this.gridOptions.api.refreshCells([$event.node], ["cube"]);
    };
    FromComponentComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Row", field: "row", width: 200 },
            {
                headerName: "Square Component",
                field: "value",
                cellRendererFramework: square_component_1.SquareComponent,
                editable: true,
                colId: "square",
                width: 175
            },
            {
                headerName: "Cube Component",
                field: "value",
                cellRendererFramework: cube_component_1.CubeComponent,
                colId: "cube",
                width: 175
            },
            {
                headerName: "Row Params Component",
                field: "row",
                cellRendererFramework: params_component_1.ParamsComponent,
                width: 250
            }
        ];
    };
    FromComponentComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                value: i
            });
        }
        return rowData;
    };
    FromComponentComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ag-from-component',
            templateUrl: 'from-component.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FromComponentComponent);
    return FromComponentComponent;
}());
exports.FromComponentComponent = FromComponentComponent;
//# sourceMappingURL=from-component.component.js.map