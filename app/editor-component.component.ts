import {Component} from '@angular/core';
import {CommonModule} from "@angular/common"
import {FormsModule} from "@angular/forms"

import {GridOptions} from 'ag-grid/main';

import {NumericEditorComponent} from "./numeric-editor.component";
import {MoodRendererComponent} from "./mood-renderer.component";
import {MoodEditorComponent} from "./mood-editor.component";

@Component({
    moduleId: module.id,
    selector: 'ag-editor-component',
    templateUrl: 'editor-component.component.html'
})
export class EditorComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }

    private createColumnDefs() {
        return [
            {headerName: "Name", field: "name", width: 198},
            {
                headerName: "Mood",
                field: "mood",
                cellRendererFramework: {
                    component: MoodRendererComponent
                },
                cellEditorFramework: {
                    component: MoodEditorComponent
                },
                editable: true,
                width: 150
            },
            {
                headerName: "Numeric",
                field: "number",
                cellEditorFramework: {
                    component: NumericEditorComponent
                },
                editable: true,
                width: 150
            }
        ];
    }

    private createRowData() {
        return [
            {name: "Bob", happy: "Happy", number: 10},
            {name: "Harry", happy: "Sad", number: 3},
            {name: "Sally", happy: "Happy", number: 20},
            {name: "Mary", mood: "Sad", number: 5},
            {name: "John", mood: "Happy", number: 15},
        ];
    }
}