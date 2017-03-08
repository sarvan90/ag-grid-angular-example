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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent() {
        this.fromDocs = false;
        this.currentExample = 'rich-grid';
        this.examples = [
            { key: 'rich-grid', title: "Rich Grid Example" },
            { key: 'rich-grid-declarative', title: "Rich Grid with Declarative Markup" },
            { key: 'from-component', title: "Dynamic Angular Component Example" },
            { key: 'from-rich-component', title: "Dynamic Angular Components - Richer Example" },
            { key: 'editor-component', title: "Cell Editor Component Example" },
            { key: 'floating-row', title: "Floating Row Renderer Example" },
            { key: 'full-width', title: "Full Width Renderer Example" },
            { key: 'group-row', title: "Group Row Renderer Example" },
            { key: 'filter', title: "Filters Component Example" },
            { key: 'master-detail', title: "Master Detail Example" },
        ];
        var params = new http_1.URLSearchParams(window.location.search.replace("?", ""));
        this.currentExample = params.has('example') ? params.get("example") : 'rich-grid';
        this.fromDocs = params.has('fromDocs') ? params.get("fromDocs") === 'true' : false;
    }
    AppComponent.prototype.setCurrentExample = function (currentExample) {
        this.currentExample = currentExample;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'app.component.html'
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map