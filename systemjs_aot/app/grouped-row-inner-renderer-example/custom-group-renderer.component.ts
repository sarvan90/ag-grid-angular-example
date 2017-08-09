import {Component} from "@angular/core";

import {ICellRendererAngularComp} from "ag-grid-angular/main";

@Component({
    selector: 'group-row-cell',
    template: `{{renderVal}}`
})
export class customGroupRendererComponent implements ICellRendererAngularComp {
    private params: any;    
    private renderVal: string;    

    agInit(params: any): void {               
        this.params = params;
         if(params.node.group && params.node.footer){
            //remove total text from the footer header
            this.renderVal = params.value;
        }else if (params.node.group) {
            this.renderVal = "Total: "+ params.value;
        } else {
            this.renderVal = params.value;
        }
    }

    refresh(): boolean {
        return false;
    }
}