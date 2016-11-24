import { Component } from '@angular/core';
import { PartialMatchFilterComponent } from "./partial-match-filter.component";
export var FilterComponentComponent = (function () {
    function FilterComponentComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.enableFilter = true;
        this.gridOptions.suppressMenuColumnPanel = true; // ag-enterprise only
        this.gridOptions.suppressMenuMainPanel = true; // ag-enterprise only
    }
    FilterComponentComponent.prototype.onClicked = function (event) {
        this.gridOptions.api.getFilterInstance("name").getFrameworkComponentInstance().componentMethod("Hello World!");
    };
    FilterComponentComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Row", field: "row", width: 400 },
            {
                headerName: "Filter Component",
                field: "name",
                filterFramework: PartialMatchFilterComponent,
                width: 400
            }
        ];
    };
    FilterComponentComponent.prototype.createRowData = function () {
        return [
            { "row": "Row 1", "name": "Michael Phelps" },
            { "row": "Row 2", "name": "Natalie Coughlin" },
            { "row": "Row 3", "name": "Aleksey Nemov" },
            { "row": "Row 4", "name": "Alicia Coutts" },
            { "row": "Row 5", "name": "Missy Franklin" },
            { "row": "Row 6", "name": "Ryan Lochte" },
            { "row": "Row 7", "name": "Allison Schmitt" },
            { "row": "Row 8", "name": "Natalie Coughlin" },
            { "row": "Row 9", "name": "Ian Thorpe" },
            { "row": "Row 10", "name": "Bob Mill" },
            { "row": "Row 11", "name": "Willy Walsh" },
            { "row": "Row 12", "name": "Sarah McCoy" },
            { "row": "Row 13", "name": "Jane Jack" },
            { "row": "Row 14", "name": "Tina Wills" }
        ];
    };
    FilterComponentComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-filter-component',
                    templateUrl: 'filter-component.component.html'
                },] },
    ];
    /** @nocollapse */
    FilterComponentComponent.ctorParameters = [];
    return FilterComponentComponent;
}());
//# sourceMappingURL=filter-component.component.js.map