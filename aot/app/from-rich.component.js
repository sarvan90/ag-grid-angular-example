import { Component } from '@angular/core';
import { RatioParentComponent } from "./ratio.parent.component";
import { ClickableParentComponent } from "./clickable.parent.component";
export var FromRichComponent = (function () {
    function FromRichComponent() {
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
                cellRendererFramework: RatioParentComponent,
                width: 200
            },
            {
                headerName: "Clickable Component",
                field: "name",
                cellRendererFramework: ClickableParentComponent,
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
    FromRichComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-from-rich-component',
                    templateUrl: 'from-rich.component.html'
                },] },
    ];
    /** @nocollapse */
    FromRichComponent.ctorParameters = [];
    return FromRichComponent;
}());
//# sourceMappingURL=from-rich.component.js.map