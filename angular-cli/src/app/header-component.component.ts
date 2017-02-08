import {Component, ElementRef} from "@angular/core";
import {IHeader, IHeaderParams} from "ag-grid/main";

@Component({
    templateUrl: 'header-component.component.html',
    styleUrls: ['header-component.component.css']
})
export class HeaderComponent implements IHeader{
    private params:IHeaderParams;
    private elementRef: ElementRef;
    private sorted:string;

    constructor (elementRef: ElementRef){
        this.elementRef= elementRef;
    }

    agInit(params:IHeaderParams):void {
        this.params = params;
        this.params.column.addEventListener('sortChanged', this.onSortChanged.bind(this));
        this.onSortChanged();
    }

    ngOnDestroy() {
        console.log(`Destroying HeaderComponent`);
    }

    onMenuClick (){
        this.params.showColumnMenu (this.querySelector('.customHeaderMenuButton'));
    }

    onSortRequested (order, event) {
        this.params.setSort (order, event.shiftKey);
    };

    onSortChanged (){
        if (this.params.column.isSortAscending()){
            this.sorted = 'asc'
        } else if (this.params.column.isSortDescending()){
            this.sorted = 'desc'
        } else {
            this.sorted = ''
        }
    };



    private querySelector(selector: string) {
        return <HTMLElement>this.elementRef.nativeElement.querySelector(
            '.customHeaderMenuButton', selector);
    }
}