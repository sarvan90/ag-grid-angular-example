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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require("@angular/forms");
var main_1 = require('ag-grid-ng2/main');
var app_component_1 = require("./app.component");
// rich grid
var rich_grid_component_1 = require("./rich-grid.component");
// declarative
var rich_grid_declarative_component_1 = require("./rich-grid-declarative.component");
// from component
var from_component_component_1 = require("./from-component.component");
var square_component_1 = require("./square.component");
var params_component_1 = require("./params.component");
var cube_component_1 = require("./cube.component");
// from rich component
var from_rich_component_1 = require("./from-rich.component");
var clickable_module_1 = require("./clickable.module");
var ratio_module_1 = require("./ratio.module");
var ratio_parent_component_1 = require("./ratio.parent.component");
var clickable_parent_component_1 = require("./clickable.parent.component");
// editor
var editor_component_component_1 = require("./editor-component.component");
var numeric_editor_component_1 = require("./numeric-editor.component");
var mood_editor_component_1 = require("./mood-editor.component");
var mood_renderer_component_1 = require("./mood-renderer.component");
// floating row
var floating_row_renderer_component_1 = require("./floating-row-renderer.component");
var styled_renderer_component_1 = require("./styled-renderer.component");
// full width
var full_width_renderer_component_1 = require("./full-width-renderer.component");
var name_age_renderer_component_1 = require("./name-age-renderer.component");
// grouped inner
var medal_renderer_component_1 = require("./medal-renderer.component");
var group_row_renderer_component_1 = require("./group-row-renderer.component");
// filter
var filter_component_component_1 = require("./filter-component.component");
var partial_match_filter_component_1 = require("./partial-match-filter.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                main_1.AgGridModule.withComponents([
                    square_component_1.SquareComponent,
                    cube_component_1.CubeComponent,
                    params_component_1.ParamsComponent,
                    ratio_parent_component_1.RatioParentComponent,
                    clickable_parent_component_1.ClickableParentComponent,
                    numeric_editor_component_1.NumericEditorComponent,
                    mood_editor_component_1.MoodEditorComponent,
                    mood_renderer_component_1.MoodRendererComponent,
                    styled_renderer_component_1.StyledComponent,
                    name_age_renderer_component_1.NameAndAgeRendererComponent,
                    medal_renderer_component_1.MedalRendererComponent,
                    partial_match_filter_component_1.PartialMatchFilterComponent
                ]),
                ratio_module_1.RatioModule,
                clickable_module_1.ClickableModule,
                forms_1.FormsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                rich_grid_component_1.RichGridComponent,
                rich_grid_declarative_component_1.RichGridDeclarativeComponent,
                from_component_component_1.FromComponentComponent,
                square_component_1.SquareComponent,
                cube_component_1.CubeComponent,
                params_component_1.ParamsComponent,
                from_rich_component_1.FromRichComponent,
                editor_component_component_1.EditorComponent,
                numeric_editor_component_1.NumericEditorComponent,
                mood_editor_component_1.MoodEditorComponent,
                mood_renderer_component_1.MoodRendererComponent,
                floating_row_renderer_component_1.WithFloatingRowComponent,
                styled_renderer_component_1.StyledComponent,
                full_width_renderer_component_1.WithFullWidthComponent,
                name_age_renderer_component_1.NameAndAgeRendererComponent,
                group_row_renderer_component_1.WithGroupRowComponent,
                medal_renderer_component_1.MedalRendererComponent,
                filter_component_component_1.FilterComponentComponent,
                partial_match_filter_component_1.PartialMatchFilterComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map