import { Component } from '@angular/core';
import { NumericEditorComponent } from "./numeric-editor.component";
import { MoodRendererComponent } from "./mood-renderer.component";
import { MoodEditorComponent } from "./mood-editor.component";
export var EditorComponent = (function () {
    function EditorComponent() {
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    EditorComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Name", field: "name", width: 198 },
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
    };
    EditorComponent.prototype.createRowData = function () {
        return [
            { name: "Bob", happy: "Happy", number: 10 },
            { name: "Harry", happy: "Sad", number: 3 },
            { name: "Sally", happy: "Happy", number: 20 },
            { name: "Mary", mood: "Sad", number: 5 },
            { name: "John", mood: "Happy", number: 15 },
        ];
    };
    EditorComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'ag-editor-component',
                    templateUrl: 'editor-component.component.html'
                },] },
    ];
    /** @nocollapse */
    EditorComponent.ctorParameters = [];
    return EditorComponent;
}());
//# sourceMappingURL=editor-component.component.js.map