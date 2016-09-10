import {Component,ViewContainerRef,ViewChild,AfterViewInit,OnDestroy} from '@angular/core';
import {DomSanitizer,SafeStyle} from '@angular/platform-browser';

import {AgComponentFactory} from 'ag-grid-ng2/main';
import {AgAware} from 'ag-grid-ng2/main';
import {AgEditorAware} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
    selector: 'editor-cell',
    template: `
        <div #container class="mood" tabindex="0" (keydown)="onKeyDown($event)">
            <img src="../images/smiley.png" (click)="happyClicked()" [style]="happyStyle">
            <img src="../images/smiley-sad.png" (click)="sadClicked()" [style]="sadStyle">
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
class MoodEditorComponent implements AgEditorAware, AfterViewInit {
    private params:any;

    @ViewChild('container', {read: ViewContainerRef}) container;

    private defaultImgStyle:SafeStyle;
    private selectedImgStyle:SafeStyle;

    private happyStyle:SafeStyle;
    private sadStyle:SafeStyle;
    private mood:string;

    constructor(private sanitizer:DomSanitizer) {
        this.defaultImgStyle = sanitizer.bypassSecurityTrustStyle('padding-left:10px; padding-right:10px;  border: 1px solid transparent; padding: 4px;');
        this.selectedImgStyle = sanitizer.bypassSecurityTrustStyle('padding-left:10px; padding-right:10px; border: 1px solid lightgreen; padding: 4px;');
    }

    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    ngAfterViewInit() {
        this.container.element.nativeElement.focus();
    }

    agInit(params:any):void {
        this.params = params;
        this.selectMood(params.value);
    }

    getValue():any {
        return this.mood;
    }

    isPopup():boolean {
        return true;
    }

    selectMood(mood):void {
        this.mood = mood;
        this.happyStyle = (this.mood === 'Happy') ? this.selectedImgStyle : this.defaultImgStyle;
        this.sadStyle = (this.mood === 'Sad') ? this.selectedImgStyle : this.defaultImgStyle;
    };

    happyClicked():void {
        this.selectMood("Happy");
        this.params.stopEditing();
    }

    sadClicked():void {
        this.selectMood("Sad");
        this.params.stopEditing();
    }

    toggleMood():void {
        this.selectMood(this.mood === 'Happy' ? 'Sad' : 'Happy');
        console.log(this.mood)
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
            {headerName: "Name", field: "name", width: 200},
            {
                headerName: "Mood",
                field: "mood",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(MoodRendererComponent, this._viewContainerRef),
                cellEditor: this._agComponentFactory.createCellEditorFromComponent(MoodEditorComponent, this._viewContainerRef),
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