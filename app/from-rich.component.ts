import {Component,ViewContainerRef} from '@angular/core';

import {AgComponentFactory} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

import {RatioComponent} from "./ratio.component";
import {ClickableComponent} from "./clickable.component";
import {RatioParentComponent} from "./ratio.parent.component";
import {ClickableParentComponent} from "./clickable.parent.component";

@Component({
    selector: 'ag-from-rich-component',
    templateUrl: 'app/from-rich.component.html'
})
export class FromRichComponent {
    private gridOptions:GridOptions;

    constructor(private _viewContainerRef:ViewContainerRef,
                private agComponentFactory:AgComponentFactory) {

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Ratio Component",
                field: "ratios",
                cellRenderer: this.agComponentFactory.createCellRendererFromComponent(RatioParentComponent,
                    this._viewContainerRef,
                    [RatioComponent]
                ),
                width: 200
            },
            {
                headerName: "Clickable Component",
                field: "name",
                cellRenderer: this.agComponentFactory.createCellRendererFromComponent(ClickableParentComponent,
                    this._viewContainerRef,
                    [ClickableComponent]),
                width: 200
            }
        ];
    }

    private createRowData() {
        return [
            {name: 'Homer Simpson', ratios: {top: 0.25, bottom: 0.75}},
            {name: 'Marge Simpson', ratios: {top: 0.67, bottom: 0.39}},
            {name: 'Bart Simpson', ratios: {top: 0.82, bottom: 0.47}},
            {name: 'Lisa Simpson', ratios: {top: 0.39, bottom: 1}}
        ];
    }
}