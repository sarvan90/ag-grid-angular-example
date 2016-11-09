import {Component} from '@angular/core';

import {GridOptions,RowNode} from 'ag-grid/main';

import {NameAndAgeRendererComponent} from "./name-age-renderer.component";

@Component({
    moduleId: module.id,
    selector: 'ag-full-width-renderer-component',
    templateUrl: 'full-width-renderer.component.html'
})
export class WithFullWidthComponent {
    public gridOptions:GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.isFullWidthCell = (rowNode:RowNode)=> {
            return (rowNode.id === "0") || (parseInt(rowNode.id) % 2 === 0);
        };
        this.gridOptions.fullWidthCellRendererFramework = {
            component: NameAndAgeRendererComponent
        }
    }

    private createColumnDefs() {
        return [
            {
                headerName: "Name",
                field: "name",
                width: 200
            },
            {
                headerName: "Age",
                field: "age",
                width: 180
            },
        ];
    }

    private createRowData() {
        return [
            {name: "Bob", age: 10},
            {name: "Harry", age: 3},
            {name: "Sally", age: 20},
            {name: "Mary", age: 5},
            {name: "John", age: 15},
        ];
    }
}