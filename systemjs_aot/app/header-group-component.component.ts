import {Component} from "@angular/core";
import {IHeaderGroup, IHeaderGroupParams} from "ag-grid/main";

@Component({
    moduleId: module.id,
    templateUrl: 'header-group-component.component.html',
    styleUrls: ['header-group-component.component.css']
})
export class HeaderGroupComponent implements IHeaderGroup{
    private params:IHeaderGroupParams;

    public expanded:boolean;

    agInit(params:IHeaderGroupParams):void {
        this.params = params;
        this.params.columnGroup.getOriginalColumnGroup().addEventListener('expandedChanged', this.onExpandChanged.bind(this));
    }

    ngOnDestroy() {
        console.log(`Destroying HeaderComponent`);
    }


    expandOrCollapse (){
        this.params.setExpanded(!this.expanded);
    };

    onExpandChanged (){
        this.expanded =this.params.columnGroup.getOriginalColumnGroup().isExpanded()
    }
}