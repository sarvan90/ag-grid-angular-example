import {Component} from "@angular/core";
import {GridOptions} from "ag-grid/main";
import {NumericEditorComponent} from "./numeric-editor.component";
import {MoodRendererComponent} from "./mood-renderer.component";
import {MoodEditorComponent} from "./mood-editor.component";

@Component({
    moduleId: module.id,
    selector: 'ag-date-component',
    templateUrl: 'date-component.component.html'
})
export class DateComponent {
    public gridOptions: GridOptions;

    constructor() {
        this.gridOptions = <GridOptions>{};
    }

}