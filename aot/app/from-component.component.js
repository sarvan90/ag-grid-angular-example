import { Component } from '@angular/core';
import { SquareComponent } from "./square.component";
import { ParamsComponent } from "./params.component";
import { CubeComponent } from "./cube.component";
export var FromComponentComponent = (function () {
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
                cellRendererFramework: SquareComponent,
                editable: true,
                colId: "square",
                width: 175
            },
            {
                headerName: "Cube Component",
                field: "value",
                cellRendererFramework: CubeComponent,
                colId: "cube",
                width: 175
            },
            {
                headerName: "Row Params Component",
                field: "row",
                cellRendererFramework: ParamsComponent,
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
    FromComponentComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-from-component',
                    templateUrl: 'from-component.component.html'
                },] },
    ];
    /** @nocollapse */
    FromComponentComponent.ctorParameters = [];
    return FromComponentComponent;
}());
//# sourceMappingURL=from-component.component.js.map