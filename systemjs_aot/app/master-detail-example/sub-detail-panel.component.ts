import {AfterViewInit, Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    moduleId: module.id,
    selector: 'sub-full-width-grid',
    templateUrl: 'sub-detail-panel.component.html',
    styleUrls: ['sub-detail-panel.component.css'],
})
export class SubDetailPanelComponent implements ICellRendererAngularComp, AfterViewInit {
    public gridOptions: GridOptions;
    public parentRecord: any;
    columnDefs:any;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;    
        // this.gridOptions.rowHeight = 50;
        console.log('sub detail level constructor');     
        // this.gridOptions.columnDefs = this.createColumnDefs(0);    
    }

    agInit(params: any): void {
        this.parentRecord = params.node.parent.data;
    }

    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    ngAfterViewInit() {
        // this.gridOptions.columnDefs = this.createColumnDefs(0);                
        this.gridOptions.api.sizeColumnsToFit();        
        if(this.parentRecord.children.length && !this.parentRecord.children[0].children){
            this.gridOptions.api.setPinnedBottomRowData([{period: "Total", commodity: 123}]);
            this.columnDefs = this.createColumnDefs(1);
        } else {
            this.columnDefs = this.createColumnDefs(0);
        }
        this.gridOptions.api.setRowData(this.parentRecord.children);
        // this.gridOptions.api.refreshHeader();
        this.gridOptions.api.hideOverlay()        


        /* setTimeout(()=>{
            let total = 0;

            this.gridOptions.api.forEachNode( function(node) {
                total += +(node.data.duration);
            });
            this.gridOptions.rowData.forEach((item)=>{
                total += +(item.duration);
            }) 
            this.gridOptions.api.setPinnedBottomRowData([{period: "Total", commodity: total}]);
        },500); */
    }

    public getFullWidthCellRenderer1() {
        return SubDetailPanelComponent;
    }    

    public getRenderer() {
        console.log('renderer');
    }

    public isFullWidthCell(rowNode) {
        return rowNode.level === 1;
    }

    public getNodeChildDetails1(record) {
        if (record.children) {
            console.log('has third level children ');
            console.log(record.children);
            return {
                group: true,
                // the key is used by the default group cellRenderer
                // key: record.name,
                // provide ag-Grid with the children of this group
                children: [record.children],
                // for demo, expand the third row by default
                // expanded: record.account === 177002
            };
        } else {
            return null;
        }
    }

    onSearchTextChange(newData: string) {
        this.gridOptions.api.setQuickFilter(newData);
    }

    private createColumnDefs(level) {
        if(level==1){
            return [
                /* {headerName: 'Call ID '+ (new Date().getMilliseconds()), field: 'callId', cellClass: 'call-record-cell'},
                {headerName: 'Direction', field: 'direction', cellClass: 'call-record-cell'},
                {headerName: 'Number', field: 'number', cellClass: 'call-record-cell'},
                {
                    headerName: 'Duration',
                    field: 'duration',
                    cellClass: 'call-record-cell',
                    valueFormatter: this.secondCellFormatter
                },
                {headerName: 'Switch', field: 'switchCode', cellClass: 'call-record-cell'} */
                {headerName: 'period', field: 'period'},
                {headerName: 'Commodity', field: 'commodity'}
            ];
        } else if (level==0){
            return [
                {
                    headerName: 'Name', field: 'name',
                    // left column is going to act as group column, with the expand / contract controls
                    cellRenderer: 'group',
                    // we don't want the child count - it would be one each time anyway as each parent
                    // not has exactly one child node
                    cellRendererParams: {suppressCount: true}
                },
                {headerName: 'EU', field: 'eu'},
                {headerName: 'LOCAL', field: 'local' }
            ]
        } else {
            return [];
        }
    }

    private secondCellFormatter(params) {
        return params.value ? params.value.toLocaleString() + 's' : params.value;
    };

    // if we don't do this, then the mouse wheel will be picked up by the main
    // grid and scroll the main grid and not this component. this ensures that
    // the wheel move is only picked up by the text field
    consumeMouseWheelOnDetailGrid($event) {
        $event.stopPropagation();
    }

    onButtonClick() {
        window.alert('Sample button pressed!!');
    }

    refresh(): boolean {
        return false;
    }
}