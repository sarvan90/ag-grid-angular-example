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
var main_1 = require('ag-grid-ng2/main');
var SquareComponent = (function () {
    function SquareComponent() {
    }
    SquareComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    SquareComponent.prototype.valueSquared = function () {
        return this.params.value * this.params.value;
    };
    SquareComponent.prototype.ngOnDestroy = function () {
        console.log("Destroying SquareComponent");
    };
    SquareComponent = __decorate([
        core_1.Component({
            selector: 'square-cell',
            template: "{{valueSquared()}}"
        }), 
        __metadata('design:paramtypes', [])
    ], SquareComponent);
    return SquareComponent;
}());
var CubeComponent = (function () {
    function CubeComponent() {
    }
    // called on init
    CubeComponent.prototype.agInit = function (params) {
        this.params = params;
        this.cubed = this.params.data.index * this.params.data.index * this.params.data.index;
    };
    // called when the cell is refreshed
    CubeComponent.prototype.refresh = function (params) {
        this.params = params;
        this.cubed = this.params.data.index * this.params.data.index * this.params.data.index;
    };
    CubeComponent.prototype.valueCubed = function () {
        return this.cubed;
    };
    CubeComponent = __decorate([
        core_1.Component({
            selector: 'cube-cell',
            template: "{{valueCubed()}}"
        }), 
        __metadata('design:paramtypes', [])
    ], CubeComponent);
    return CubeComponent;
}());
var ParamsComponent = (function () {
    function ParamsComponent() {
    }
    ParamsComponent.prototype.agInit = function (params) {
        this.params = params;
    };
    ParamsComponent = __decorate([
        core_1.Component({
            selector: 'params-cell',
            template: "Field: {{params.colDef.field}}, Value: {{params.value}}"
        }), 
        __metadata('design:paramtypes', [])
    ], ParamsComponent);
    return ParamsComponent;
}());
var FromComponentComponent = (function () {
    function FromComponentComponent(_viewContainerRef, _agComponentFactory) {
        this._viewContainerRef = _viewContainerRef;
        this._agComponentFactory = _agComponentFactory;
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    FromComponentComponent.prototype.onCellValueChanged = function ($event) {
        this.gridOptions.api.refreshCells([$event.node], ["cube"]);
    };
    FromComponentComponent.prototype.createColumnDefs = function () {
        return [
            { headerName: "Name", field: "name", width: 200 },
            {
                headerName: "Square Component",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(SquareComponent, this._viewContainerRef),
                editable: true,
                colId: "square",
                width: 200
            },
            {
                headerName: "Cube Component",
                field: "index",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(CubeComponent, this._viewContainerRef),
                colId: "cube",
                width: 200
            },
            {
                headerName: "Name Params Component",
                field: "name",
                cellRenderer: this._agComponentFactory.createCellRendererFromComponent(ParamsComponent, this._viewContainerRef),
                width: 250
            }
        ];
    };
    FromComponentComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 15; i++) {
            rowData.push({
                name: "Name " + i,
                index: i,
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100)
            });
        }
        return rowData;
    };
    FromComponentComponent = __decorate([
        core_1.Component({
            selector: 'ag-from-component',
            templateUrl: 'app/from-component.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, main_1.AgComponentFactory])
    ], FromComponentComponent);
    return FromComponentComponent;
}());
exports.FromComponentComponent = FromComponentComponent;
//# sourceMappingURL=from-component.component.js.map