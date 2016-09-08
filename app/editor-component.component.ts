import {Component,ViewContainerRef,OnDestroy} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AgComponentFactory} from 'ag-grid-ng2/main';
import {AgAware} from 'ag-grid-ng2/main';
import {AgEditorAware} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'editor-cell',
    template: `
        <div class="mood" tabIndex="0">
            <img src="../images/smiley.png" (click)="happyClicked()" style="{{happyStyle}}">
            <img src="../images/smiley-sad.png" (click)="sadClicked()" style="{{sadStyle}}">
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
    `]
})
class MoodEditorComponent implements AgEditorAware {
    private params:any;

    private defaultImgStyle:string = 'padding-left:10px; padding-right:10px;  border: 1px solid transparent; padding: 4px;';
    private selectedImgStyle:string = 'padding-left:10px; padding-right:10px; border: 1px solid lightgreen; padding: 4px;';

    private happyStyle:string;
    private sadStyle:string;
    private mood:string;

    agInit(params:any):void {
        this.params = params;
        this.selectMood(params.value);
    }

    getValue():any {
        return this.mood;
    }

    isPopup(): boolean {
        return true;
    }

    selectMood = function (mood) {
        this.mood = mood;
        this.happyStyle = (this.mood === 'Happy') ? this.selectedImgStyle : this.defaultImgStyle;
        this.sadStyle = (this.mood === 'Sad') ? this.selectedImgStyle : this.defaultImgStyle;
    };

    happyClicked() : void {
        this.selectMood("Happy");
    }

    sadClicked() : void {
        this.selectMood("Sad");
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

    refresh(params:any) : void {
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
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Mood",
                field: "mood",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(MoodRendererComponent, this._viewContainerRef),
                cellEditor: this._agComponentFactory.createCellEditorFromComponent(MoodEditorComponent, this._viewContainerRef, [], [CommonModule]),
                editable: true,
                width: 198
            }
        ];
    }

    private createRowData() {
        return [
            {name: "Bob", mood: "Happy"},
            {name: "Harry", mood: "Sad"},
            {name: "Sally", mood: "Happy"},
            {name: "Mary", mood: "Sad"},
            {name: "John", mood: "Happy"},
        ];
    }
}