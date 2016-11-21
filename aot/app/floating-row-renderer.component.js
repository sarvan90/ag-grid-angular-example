import { Component } from '@angular/core';
import { StyledComponent } from "./styled-renderer.component";
export var WithFloatingRowComponent = (function () {
    function WithFloatingRowComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.floatingTopRowData = [
            { row: "Top Row", number: "Top Number" }
        ];
        this.gridOptions.floatingBottomRowData = [
            { row: "Bottom Row", number: "Bottom Number" }
        ];
    }
    WithFloatingRowComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: "Row",
                field: "row",
                width: 200,
                floatingCellRendererFramework: StyledComponent,
                floatingCellRendererParams: {
                    style: { 'font-weight': 'bold' }
                }
            },
            {
                headerName: "Number",
                field: "number",
                width: 180,
                floatingCellRendererFramework: StyledComponent,
                floatingCellRendererParams: {
                    style: { 'font-style': 'italic' }
                }
            },
        ];
    };
    WithFloatingRowComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                number: Math.round(Math.random() * 100)
            });
        }
        return rowData;
    };
    WithFloatingRowComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-floating-row-renderer-component',
                    templateUrl: 'floating-row-renderer.component.html'
                },] },
    ];
    /** @nocollapse */
    WithFloatingRowComponent.ctorParameters = [];
    return WithFloatingRowComponent;
}());
//# sourceMappingURL=floating-row-renderer.component.js.map