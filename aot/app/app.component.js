import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
export var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    AppComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'my-app',
                    templateUrl: 'app.component.html'
                },] },
    ];
    /** @nocollapse */
    AppComponent.ctorParameters = [
        { type: Router, },
        { type: ActivatedRoute, },
    ];
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map