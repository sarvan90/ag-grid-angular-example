"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var numeric_editor_component_1 = require("./numeric-editor.component");
var mood_renderer_component_1 = require("./mood-renderer.component");
var mood_editor_component_1 = require("./mood-editor.component");
var EditorComponent = (function () {
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
                cellRendererFramework: mood_renderer_component_1.MoodRendererComponent,
                cellEditorFramework: mood_editor_component_1.MoodEditorComponent,
                editable: true,
                width: 150
            },
            {
                headerName: "Numeric",
                field: "number",
                cellEditorFramework: numeric_editor_component_1.NumericEditorComponent,
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
    EditorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ag-editor-component',
            templateUrl: 'editor-component.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor-component.component.js.map