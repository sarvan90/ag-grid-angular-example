import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import "rxjs/add/operator/map";
export var AppComponent = (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.showNav = true;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route
            .queryParams
            .map(function (params) { return params['fromDocs'] !== undefined || false; })
            .subscribe(function (fromDocs) {
            _this.showNav = !fromDocs;
        });
    };
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