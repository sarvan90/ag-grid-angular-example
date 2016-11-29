import { Component } from '@angular/core';
import { NameAndAgeRendererComponent } from "./name-age-renderer.component";
export var WithFullWidthComponent = (function () {
    function WithFullWidthComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.isFullWidthCell = function (rowNode) {
            return (rowNode.id === "0") || (parseInt(rowNode.id) % 2 === 0);
        };
        this.gridOptions.fullWidthCellRendererFramework = NameAndAgeRendererComponent;
    }
    WithFullWidthComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: "Name",
                field: "name",
                width: 400
            },
            {
                headerName: "Age",
                field: "age",
                width: 399
            },
        ];
    };
    WithFullWidthComponent.prototype.createRowData = function () {
        return [
            { name: "Bob", age: 10 },
            { name: "Harry", age: 3 },
            { name: "Sally", age: 20 },
            { name: "Mary", age: 5 },
            { name: "John", age: 15 },
            { name: "Bob", age: 10 },
            { name: "Harry", age: 3 },
            { name: "Sally", age: 20 },
            { name: "Mary", age: 5 },
            { name: "John", age: 15 },
            { name: "Jack", age: 25 },
            { name: "Sue", age: 43 },
            { name: "Sean", age: 44 },
            { name: "Niall", age: 2 },
            { name: "Alberto", age: 32 },
            { name: "Fred", age: 53 },
            { name: "Jenny", age: 34 },
            { name: "Larry", age: 13 },
        ];
    };
    WithFullWidthComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-full-width-renderer-component',
                    templateUrl: 'full-width-renderer.component.html'
                },] },
    ];
    /** @nocollapse */
    WithFullWidthComponent.ctorParameters = [];
    return WithFullWidthComponent;
}());
//# sourceMappingURL=full-width-renderer.component.js.map