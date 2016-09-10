import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AgGridModule} from 'ag-grid-ng2/main';

import {AppComponent} from "./app.component";
import {RichGridComponent} from "./rich-grid.component";
import {FromComponentComponent} from "./from-component.component";
import {FromTemplateComponent} from "./from-template.component";
import {FromRichComponent} from "./from-rich.component";
import {RatioModule} from "./ratio.module";
import {ClickableModule} from "./clickable.module";
import {EditorComponent} from "./editor-component.component";

@NgModule({
    imports: [
        BrowserModule,
        AgGridModule,
        RatioModule,
        ClickableModule
    ],
    declarations: [
        AppComponent,
        RichGridComponent,
        FromComponentComponent,
        FromTemplateComponent,
        FromRichComponent,
        EditorComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
