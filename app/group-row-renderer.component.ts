import {Component} from '@angular/core';

import {GridOptions} from 'ag-grid/main';

import {MedalRendererComponent} from "./medal-renderer.component";

@Component({
    moduleId: module.id,
    selector: 'ag-group-row-renderer-component',
    templateUrl: 'group-row-renderer.component.html'
})
export class WithGroupRowComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.groupUseEntireRow = true;
        this.gridOptions.groupRowInnerRendererFramework = {
            component: MedalRendererComponent
        }
    }

    private createColumnDefs() {
        return [
            {
                headerName: "Country",
                field: "country",
                width: 100,
                rowGroupIndex: 0
            },
            {
                headerName: "Name",
                field: "name",
                width: 100
            },
            {
                headerName: "Gold",
                field: "gold",
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: "Silver",
                field: "silver",
                width: 100,
                aggFunc: 'sum'
            },
            {
                headerName: "Bronze",
                field: "bronze",
                width: 100,
                aggFunc: 'sum'
            },
        ];
    }

    private createRowData() {
        return [
            {country: "United States", name: "Bob", gold: 1, silver: 0, bronze: 0},
            {country: "United States", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {country: "United States", name: "Sue", gold: 1, silver: 0, bronze: 1},
            {country: "United Kingdom", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {country: "United Kingdom", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {country: "United Kingdom", name: "John", gold: 0, silver: 2, bronze: 1},
            {country: "Jamaica", name: "Henry", gold: 1, silver: 1, bronze: 0},
            {country: "South Africa", name: "Kate", gold: 1, silver: 0, bronze: 1},
        ];
    }
}