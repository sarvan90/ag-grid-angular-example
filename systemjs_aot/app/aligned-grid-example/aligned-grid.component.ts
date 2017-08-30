import {AfterViewInit, Component} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {GridOptions} from "ag-grid/main";

@Component({
    selector: 'ag-aligned-grid',
    templateUrl: './aligned-grid.component.html'
})
export class AlignedGridComponent implements AfterViewInit {
    public gridOptionsTop: GridOptions;
    public gridOptionsBottom: GridOptions;

    constructor(private http: HttpClient) {
        this.gridOptionsTop = <GridOptions>{
            columnDefs: this.createColumnDefs(),
            rowData: null,
            enableColResize: true,
            debug: true,
            alignedGrids: [],
            onGridReady: (params) => {
                this.retrieveAndSetRowData(params)
            }

        };

        this.gridOptionsBottom = <GridOptions>{
            columnDefs: this.createColumnDefs(),
            rowData: null,
            enableColResize: true,
            debug: true,
            alignedGrids: [],
            onGridReady: (params) => {
                this.retrieveAndSetRowData(params);
            }

        };
    }

    private retrieveAndSetRowData(params) {
        this.http.get('/olympicWinners.json')
            .subscribe(data => {
                    params.api.setRowData(<any[]>data);
                }
            );
    }

    private createColumnDefs() {
        return [
            {headerName: "Athlete", field: "athlete", width: 200},
            {headerName: "Age", field: "age", width: 150},
            {headerName: "Country", field: "country", width: 150},
            {headerName: "Year", field: "year", width: 120},
            {headerName: "Date", field: "date", width: 150},
            {headerName: "Sport", field: "sport", width: 150},
            {
                headerName: 'Medals',
                children: [
                    {
                        headerName: "Total", columnGroupShow: 'closed', field: "total",
                        valueGetter: "data.gold + data.silver + data.bronze", width: 200
                    },
                    {headerName: "Gold", columnGroupShow: 'open', field: "gold", width: 100},
                    {headerName: "Silver", columnGroupShow: 'open', field: "silver", width: 100},
                    {headerName: "Bronze", columnGroupShow: 'open', field: "bronze", width: 100}
                ]
            }
        ];
    }

    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    ngAfterViewInit() {
        this.gridOptionsTop.alignedGrids.push(this.gridOptionsBottom);
        this.gridOptionsBottom.alignedGrids.push(this.gridOptionsTop);

        this.gridOptionsTop.api.sizeColumnsToFit();
        this.gridOptionsBottom.api.sizeColumnsToFit();


    }
}