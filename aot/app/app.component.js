import { Component } from "@angular/core";
import { URLSearchParams } from '@angular/http';
import "rxjs/add/operator/map";
export var AppComponent = (function () {
    function AppComponent() {
        this.example = 'rich-grid';
        var params = new URLSearchParams(window.location.search.replace("?", ""));
        this.example = params.get('example') ? params.get("example") : 'rich-grid';
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-app',
                    templateUrl: 'app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map