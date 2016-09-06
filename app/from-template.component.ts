import {Component,ViewContainerRef,Input} from '@angular/core';

import {AgGridNg2} from 'ag-grid-ng2/main';
import {AgComponentFactory} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'ag-from-template',
    templateUrl: 'app/from-template.component.html'
})
export class FromTemplateComponent {
    private gridOptions:GridOptions;

    constructor(private _viewContainerRef:ViewContainerRef,
                private _agComponentFactory:AgComponentFactory) {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Square Template",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value}}', this._viewContainerRef),
                width: 200
            },
            {
                headerName: "Cube Template",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('{{params.value * params.value * params.value}}', this._viewContainerRef),
                width: 200
            },
            {
                headerName: "Name Params Template",
                field: "name",
                cellRenderer: this._agComponentFactory.createCellRendererFromTemplate('Field: {{params.colDef.field}}, Value: {{params.value}}', this._viewContainerRef),
                width: 250
            }
        ];
    }

    private createRowData() {
        let rowData:any[] = [];

        for (var i = 0; i < 15; i++) {
            rowData.push({
                name: "Name " + i,
                index: i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100)
            });
        }

        return rowData;
    }
}