import {Component} from '@angular/core';

import {GridOptions} from 'ag-grid/main';
import {SquareComponent} from "./square.component";
import {ParamsComponent} from "./params.component";
import {CubeComponent} from "./cube.component";

@Component({
    selector: 'ag-from-component',
    templateUrl: 'from-component.component.html'
})
export class FromComponentComponent {
    public gridOptions:GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private onCellValueChanged($event) {
        this.gridOptions.api.refreshCells([$event.node],["cube"]);
    }

    private createColumnDefs() {
        return [
            {headerName: "Row", field: "row", width: 200},
            {
                headerName: "Square Component",
                field: "value",
                cellRendererFramework: {
                    component: SquareComponent
                },
                editable:true,
                colId: "square",
                width: 200
            },
            {
                headerName: "Cube Component",
                field: "value",
                cellRendererFramework: {
                    component: CubeComponent
                },
                colId: "cube",
                width: 200
            },
            {
                headerName: "Row Params Component",
                field: "row",
                cellRendererFramework: {
                    component: ParamsComponent
                },
                width: 250
            }
        ];
    }

    private createRowData() {
        let rowData:any[] = [];

        for (var i = 0; i < 15; i++) {
            rowData.push({
                row: "Row " + i,
                value: i
            });
        }

        return rowData;
    }
}