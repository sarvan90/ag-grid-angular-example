import {Component} from "@angular/core";

import {GridOptions} from "ag-grid/main";

import {MedalRendererComponent} from "./medal-renderer.component";

@Component({
    moduleId: module.id,
    selector: 'ag-group-row-renderer-component',
    templateUrl: 'group-row-renderer.component.html'
})
export class GroupRowComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
        this.gridOptions.groupUseEntireRow = true;
        //this.gridOptions.groupRowInnerRendererFramework = MedalRendererComponent;
        this.gridOptions.onGridReady = () => {
            this.gridOptions.api.sizeColumnsToFit();
        };
    }

    private createColumnDefs() {
        return [
            {
                headerName: "Currency",
                field: "currency",
                width: 100,
                rowGroupIndex: 0
            },
            {
                headerName: "Country",
                field: "country",
                width: 100,
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
            {currency: "USD", country: "United States", name: "Bob", gold: 1, silver: 0, bronze: 0},
            {currency: "EUR", country: "United States", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {currency: "USD", country: "United States", name: "Sue", gold: 1, silver: 0, bronze: 1},
            {currency: "EUR", country: "United Kingdom", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "United Kingdom", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "United Kingdom", name: "John", gold: 0, silver: 2, bronze: 1},
            {currency: "EUR", country: "Jamaica", name: "Bob", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Jamaica", name: "Jack", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Jamaica", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "USD", country: "South Africa", name: "Bob", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "South Africa", name: "Jack", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "South Africa", name: "Mary", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "South Africa", name: "John", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "New Zealand", name: "Bob", gold: 1, silver: 0, bronze: 0},
            {currency: "EUR", country: "New Zealand", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {currency: "USD", country: "New Zealand", name: "Sue", gold: 1, silver: 0, bronze: 1},
            {currency: "EUR", country: "Australia", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Australia", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "Australia", name: "John", gold: 0, silver: 2, bronze: 1},
            {currency: "EUR", country: "Canada", name: "Bob", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Canada", name: "Jack", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Canada", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "USD", country: "Switzerland", name: "Bob", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Switzerland", name: "Jack", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Switzerland", name: "Mary", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Switzerland", name: "John", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Spain", name: "Bob", gold: 1, silver: 0, bronze: 0},
            {currency: "EUR", country: "Spain", name: "Jack", gold: 0, silver: 1, bronze: 1},
            {currency: "USD", country: "Spain", name: "Sue", gold: 1, silver: 0, bronze: 1},
            {currency: "EUR", country: "Portugal", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Portugal", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "Portugal", name: "John", gold: 0, silver: 2, bronze: 1},
            {currency: "EUR", country: "Zimbabwe", name: "Bob", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Zimbabwe", name: "Jack", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Zimbabwe", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "USD", country: "Brazil", name: "Bob", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Brazil", name: "Jack", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Brazil", name: "Mary", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Brazil", name: "John", gold: 1, silver: 0, bronze: 1}];
    }
}