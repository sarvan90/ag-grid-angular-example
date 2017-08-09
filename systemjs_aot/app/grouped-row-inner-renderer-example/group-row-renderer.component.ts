import {Component} from "@angular/core";

import {GridOptions} from "ag-grid/main";

import {TotalRendererComponent} from "./total-renderer.component";
import {customGroupRendererComponent} from "./custom-group-renderer.component";

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
        //add this for showing the footer 
        this.gridOptions.groupIncludeFooter = true;        
        // we are defining the group columns, so tell the grid we don't want it to auto-generate group columns for us
        this.gridOptions.groupSuppressAutoColumn = true;
        
        // want it to auto-generate group columns for us
        // this.gridOptions.groupMultiAutoColumn = true;        
        
        // configure the auto group column generated already
        /* this.gridOptions.autoGroupColumnDef = {
            headerName : "Currency",
            // cellRendererFramework: TotalRendererComponent
            cellRendererParams : {
                suppressCount : true,
                innerRenderer: function(params){                    
                    if(params.node.group && params.node.footer){
                        //remove total text from the footer header
                        return "";
                    }else{
                        return params.value;
                    }
                }
            }            
        } */
        
        /*  Using this will override the Total Count row as well
        this.gridOptions.groupUseEntireRow = true;
        this.gridOptions.groupRowInnerRendererFramework = customGroupRendererComponent; 
        */

        this.gridOptions.onGridReady = () => {
            this.gridOptions.api.sizeColumnsToFit();
        };

        
    }

    private createColumnDefs() {
        return [            
            { 
                headerName: "Currency", 
                cellRenderer: 'group', 
                cellRendererParams: {
                    suppressCount : true, //supress the count value near header text
                    innerRenderer: function(params){                    
                        if(params.node.group && params.node.footer){
                            //remove total text from the footer header
                            return "";
                        }else{
                            return params.value;
                        }
                    }
                },
                showRowGroup: true
            },
            {
                headerName: "Currency",
                field: "currency",
                width: 100,
                rowGroup: true,                                
                hide: true
            },
            {
                headerName: "Country",
                field: "country",
                width: 100,
            },
            {
                headerName: "Name",
                field: "name",
                width: 100,
                cellRendererFramework: TotalRendererComponent                
            },
            {
                headerName: "Gold",
                suppressMenu: true,
                field: "gold",
                width: 100,
                aggFunc: 'sum'
                // cellRendererFramework: customGroupRendererComponent                
            }/* ,
            {
                headerName: "Silver",
                field: "silver",
                width: 100,
                aggFunc: 'sum',                
                
            },
            {
                headerName: "Bronze",
                field: "bronze",
                width: 100,
                aggFunc: 'sum'
            }, */
        ];
    }

    private createRowData() {
        return [
            {currency: "USD", country: "United States", name: "Bob", gold: 1, silver: 0, bronze: 0},
            {currency: "EUR", country: "United States", name: "Jack", gold: 0, silver: 1, bronze: 1},            
            {currency: "GBP", country: "United Kingdom", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "United Kingdom", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "United Kingdom", name: "John", gold: 0, silver: 2, bronze: 1},                                    
            {currency: "EUR", country: "New Zealand", name: "Jack", gold: 0, silver: 1, bronze: 1},                        
            {currency: "EUR", country: "Australia", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "Australia", name: "John", gold: 0, silver: 2, bronze: 1},                                                                                    
            {currency: "EUR", country: "Spain", name: "Jack", gold: 0, silver: 1, bronze: 1},            
            {currency: "GBP", country: "Portugal", name: "Mary", gold: 1, silver: 1, bronze: 0},
            {currency: "EUR", country: "Portugal", name: "Tess", gold: 0, silver: 1, bronze: 1},
            {currency: "INR", country: "Portugal", name: "John", gold: 0, silver: 2, bronze: 1},
            {currency: "GBP", country: "Zimbabwe", name: "Bob", gold: 1, silver: 1, bronze: 0},
            {currency: "GBP", country: "Zimbabwe", name: "Jack", gold: 1, silver: 1, bronze: 0},
            {currency: "GBP", country: "Zimbabwe", name: "Mary", gold: 1, silver: 1, bronze: 0},            
            {currency: "USD", country: "Brazil", name: "Jack", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Brazil", name: "Mary", gold: 1, silver: 0, bronze: 1},
            {currency: "USD", country: "Brazil", name: "John", gold: 1, silver: 0, bronze: 1}];
    }
}