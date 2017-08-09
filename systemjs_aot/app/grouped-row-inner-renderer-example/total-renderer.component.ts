import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'group-row-cell',
    template: `{{renderVal}}`
})
export class TotalRendererComponent implements ICellRendererAngularComp {
    private params: any;    
    private renderVal: string;    

    agInit(params: any): void {        
        this.params = params;
        if(params.node.group && params.node.footer){
            //remove total text from the footer header
            this.renderVal = "Total";
        } else {
            this.renderVal = params.value;
        }
    }

    refresh(): boolean {
        return false;
    }
}