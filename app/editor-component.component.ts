import {Component,ViewContainerRef,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import {CommonModule} from "@angular/common"

import {DomSanitizer,SafeStyle} from '@angular/platform-browser';

import {AgComponentFactory} from 'ag-grid-ng2/main';
import {AgAware} from 'ag-grid-ng2/main';
import {AgEditorAware} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'editor-cell',
    template: `
        <div #container class="mood" tabindex="0" (keydown)="onKeyDown($event)">
            <img src="../images/smiley.png" (click)="setHappy(true)" [ngClass]="{'selected' : happy, 'default' : !happy}">
            <img src="../images/smiley-sad.png" (click)="setHappy(false)" [ngClass]="{'selected' : !happy, 'default' : happy}">
        </div>
    `,
    styles: [`
        .mood {
            border-radius: 15px;
            border: 1px solid grey;
            background: #e6e6e6;
            padding: 15px;
            text-align:center;
            display:inline-block;
            outline:none
        }

        .default {
            padding-left:10px;
            padding-right:10px;
            border: 1px solid transparent;
            padding: 4px;
        }

        .selected {
            padding-left:10px;
            padding-right:10px;
            border: 1px solid lightgreen;
            padding: 4px;
        }
    `]
})
class MoodEditorComponent implements AgEditorAware, AfterViewInit {
    private params:any;

    @ViewChild('container', {read: ViewContainerRef}) container;
    private happy:boolean = false;

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        this.container.element.nativeElement.focus();
    }

    agInit(params:any):void {
        this.params = params;
        this.setHappy(params.value === "Happy");
    }

    getValue():any {
        return this.happy ? "Happy" : "Sad";
    }

    isPopup():boolean {
        return true;
    }

    setHappy(happy:boolean):void {
        this.happy = happy;
    }

    toggleMood():void {
        this.setHappy(!this.happy);
    }

    onKeyDown(event):void {
        let key = event.which || event.keyCode;
        if (key == 37 ||  // left
            key == 39) {  // right
            this.toggleMood();
            event.stopPropagation();
        }
    }
}

@Component({
    selector: 'mood-cell',
    template: `<img width="20px" [src]="imgForMood" />`
})
class MoodRendererComponent implements AgAware {
    private params:any;
    private mood:string;
    private imgForMood:string;

    agInit(params:any):void {
        this.params = params;
        this.setMood(params);
    }

    refresh(params:any):void {
        this.params = params;
        this.setMood(params);
    }

    private setMood(params) {
        this.mood = params.value;
        this.imgForMood = this.mood === 'Happy' ? '../images/smiley.png' : '../images/smiley-sad.png';
    };
}


@Component({
    selector: 'ag-editor-component',
    templateUrl: 'app/editor-component.component.html'
})
export class EditorComponent {
    private gridOptions:GridOptions;

    constructor(private _viewContainerRef:ViewContainerRef,
                private _agComponentFactory:AgComponentFactory) {

        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 300},
            {
                headerName: "Mood",
                field: "mood",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(MoodRendererComponent, this._viewContainerRef),
                cellEditor: this._agComponentFactory.createCellEditorFromComponent(MoodEditorComponent,
                    this._viewContainerRef,
                    [],
                    [CommonModule]
                ),
                editable: true,
                width: 198
            }
        ];
    }

    private createRowData() {
        return [
            {name: "Bob", happy: "Happy"},
            {name: "Harry", happy: "Sad"},
            {name: "Sally", happy: "Happy"},
            {name: "Mary", mood: "Sad"},
            {name: "John", mood: "Happy"},
        ];
    }
}