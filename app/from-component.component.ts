import {Component,ViewContainerRef,OnDestroy} from '@angular/core';

import {AgComponentFactory} from 'ag-grid-ng2/main';
import {AgAware} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'square-cell',
    template: `{{valueSquared()}}`
})
class SquareComponent implements AgAware, OnDestroy {
    private params:any;

    agInit(params:any):void {
        this.params = params;
    }

    private valueSquared():number {
        return this.params.value * this.params.value;
    }

    ngOnDestroy() {
        console.log(`Destroying SquareComponent`);
    }
}

@Component({
    selector: 'cube-cell',
    template: `{{valueCubed()}}`
})
class CubeComponent implements AgAware {
    private params:any;
    private cubed:number;

    // called on init
    agInit(params:any):void {
        this.params = params;
        this.cubed = this.params.data.index * this.params.data.index * this.params.data.index;
    }

    // called when the cell is refreshed
    refresh(params:any):void {
        this.params = params;
        this.cubed = this.params.data.index * this.params.data.index * this.params.data.index;
    }

    private valueCubed():number {
        return this.cubed;
    }
}

@Component({
    selector: 'params-cell',
    template: `Field: {{params.colDef.field}}, Value: {{params.value}}`
})
class ParamsComponent implements AgAware {
    private params:any;

    agInit(params:any):void {
        this.params = params;
    }
}

@Component({
    selector: 'ag-from-component',
    templateUrl: 'app/from-component.component.html'
})
export class FromComponentComponent {
    private gridOptions:GridOptions;

    constructor(private _viewContainerRef:ViewContainerRef,
                private _agComponentFactory:AgComponentFactory) {

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private onCellValueChanged($event) {
        this.gridOptions.api.refreshCells([$event.node],["cube"]);
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Square Component",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(SquareComponent, this._viewContainerRef),
                editable:true,
                colId: "square",
                width: 200
            },
            {
                headerName: "Cube Component",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(CubeComponent, this._viewContainerRef),
                colId: "cube",
                width: 200
            },
            {
                headerName: "Name Params Component",
                field: "name",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(ParamsComponent, this._viewContainerRef),
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