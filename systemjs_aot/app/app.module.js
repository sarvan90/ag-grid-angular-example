"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
// ag-grid
var main_1 = require("ag-grid-angular/main");
// application
var app_component_1 = require("./app.component");
// rich grid
var rich_grid_component_1 = require("./rich-grid-example/rich-grid.component");
// declarative
var rich_grid_declarative_component_1 = require("./rich-grid-declarative-example/rich-grid-declarative.component");
// rich grid and rich grid declarative
var date_component_1 = require("./date-component/date.component");
var header_component_1 = require("./header-component/header.component");
var header_group_component_1 = require("./header-group-component/header-group.component");
// from component
var dynamic_component_1 = require("./dynamic-component-example/dynamic.component");
var square_component_1 = require("./dynamic-component-example/square.component");
var params_component_1 = require("./dynamic-component-example/params.component");
var cube_component_1 = require("./dynamic-component-example/cube.component");
var currency_component_1 = require("./dynamic-component-example/currency.component");
var child_message_component_1 = require("./dynamic-component-example/child-message.component");
// from rich component
var rich_component_1 = require("./rich-dynamic-component-example/rich.component");
var clickable_module_1 = require("./rich-dynamic-component-example/clickable.module");
var ratio_module_1 = require("./rich-dynamic-component-example/ratio.module");
var ratio_parent_component_1 = require("./rich-dynamic-component-example/ratio.parent.component");
var clickable_parent_component_1 = require("./rich-dynamic-component-example/clickable.parent.component");
// editor
var editor_component_1 = require("./editor-component-example/editor.component");
var numeric_editor_component_1 = require("./editor-component-example/numeric-editor.component");
var mood_editor_component_1 = require("./editor-component-example/mood-editor.component");
var mood_renderer_component_1 = require("./editor-component-example/mood-renderer.component");
// floating row
var floating_row_renderer_component_1 = require("./floating-row-example/floating-row-renderer.component");
var styled_renderer_component_1 = require("./floating-row-example/styled-renderer.component");
// full width
var full_width_renderer_component_1 = require("./full-width-example/full-width-renderer.component");
var name_age_renderer_component_1 = require("./full-width-example/name-age-renderer.component");
// grouped inner
var medal_renderer_component_1 = require("./grouped-row-example/medal-renderer.component");
var group_row_renderer_component_1 = require("./grouped-row-example/group-row-renderer.component");
// filter
var filter_component_1 = require("./filter-component-example/filter.component");
var partial_match_filter_component_1 = require("./filter-component-example/partial-match-filter.component");
// master detail
var masterdetail_master_component_1 = require("./master-detail-example/masterdetail-master.component");
var detail_panel_component_1 = require("./master-detail-example/detail-panel.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            main_1.AgGridModule.withComponents([
                square_component_1.SquareComponent,
                cube_component_1.CubeComponent,
                params_component_1.ParamsComponent,
                currency_component_1.CurrencyComponent,
                child_message_component_1.ChildMessageComponent,
                ratio_parent_component_1.RatioParentComponent,
                clickable_parent_component_1.ClickableParentComponent,
                numeric_editor_component_1.NumericEditorComponent,
                mood_editor_component_1.MoodEditorComponent,
                mood_renderer_component_1.MoodRendererComponent,
                styled_renderer_component_1.StyledComponent,
                name_age_renderer_component_1.NameAndAgeRendererComponent,
                medal_renderer_component_1.MedalRendererComponent,
                partial_match_filter_component_1.PartialMatchFilterComponent,
                detail_panel_component_1.DetailPanelComponent,
                date_component_1.DateComponent,
                header_component_1.HeaderComponent,
                header_group_component_1.HeaderGroupComponent
            ]),
            ratio_module_1.RatioModule,
            clickable_module_1.ClickableModule
        ],
        declarations: [
            app_component_1.AppComponent,
            rich_grid_component_1.RichGridComponent,
            date_component_1.DateComponent,
            header_component_1.HeaderComponent,
            header_group_component_1.HeaderGroupComponent,
            rich_grid_declarative_component_1.RichGridDeclarativeComponent,
            dynamic_component_1.DynamicComponent,
            square_component_1.SquareComponent,
            cube_component_1.CubeComponent,
            params_component_1.ParamsComponent,
            currency_component_1.CurrencyComponent,
            child_message_component_1.ChildMessageComponent,
            rich_component_1.RichComponent,
            editor_component_1.EditorComponent,
            numeric_editor_component_1.NumericEditorComponent,
            mood_editor_component_1.MoodEditorComponent,
            mood_renderer_component_1.MoodRendererComponent,
            floating_row_renderer_component_1.FloatingRowComponent,
            styled_renderer_component_1.StyledComponent,
            full_width_renderer_component_1.FullWidthComponent,
            name_age_renderer_component_1.NameAndAgeRendererComponent,
            group_row_renderer_component_1.GroupRowComponent,
            medal_renderer_component_1.MedalRendererComponent,
            filter_component_1.FilterComponentComponent,
            partial_match_filter_component_1.PartialMatchFilterComponent,
            masterdetail_master_component_1.MasterComponent,
            detail_panel_component_1.DetailPanelComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map