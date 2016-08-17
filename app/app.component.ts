import {Component} from '@angular/core';
import {RichGridComponent} from "./rich-grid.component";
import {FromComponentComponent} from "./from-component.component";
import {FromTemplateComponent} from "./from-template.component";
import {FromRichComponent} from "./from-rich.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [RichGridComponent,FromComponentComponent, FromTemplateComponent, FromRichComponent]
})
export class AppComponent {
}
