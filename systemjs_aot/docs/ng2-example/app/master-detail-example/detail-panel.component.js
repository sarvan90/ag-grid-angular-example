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
var DetailPanelComponent = (function () {
    function DetailPanelComponent() {
        this.gridOptions = {};
        this.gridOptions.enableSorting = true;
        this.gridOptions.enableFilter = true;
        this.gridOptions.enableColResize = true;
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    DetailPanelComponent.prototype.agInit = function (params) {
        this.parentRecord = params.node.parent.data;
    };
    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    DetailPanelComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.setRowData(this.parentRecord.callRecords);
        this.gridOptions.api.sizeColumnsToFit();
    };
    DetailPanelComponent.prototype.onSearchTextChange = function (newData) {
        this.gridOptions.api.setQuickFilter(newData);
    };
    DetailPanelComponent.prototype.createColumnDefs = function () {
        return [{ headerName: 'Call ID', field: 'callId', cellClass: 'call-record-cell' },
            { headerName: 'Direction', field: 'direction', cellClass: 'call-record-cell' },
            { headerName: 'Number', field: 'number', cellClass: 'call-record-cell' },
            {
                headerName: 'Duration',
                field: 'duration',
                cellClass: 'call-record-cell',
                valueFormatter: this.secondCellFormatter
            },
            { headerName: 'Switch', field: 'switchCode', cellClass: 'call-record-cell' }];
    };
    DetailPanelComponent.prototype.secondCellFormatter = function (params) {
        return params.value.toLocaleString() + 's';
    };
    ;
    // if we don't do this, then the mouse wheel will be picked up by the main
    // grid and scroll the main grid and not this component. this ensures that
    // the wheel move is only picked up by the text field
    DetailPanelComponent.prototype.consumeMouseWheelOnDetailGrid = function ($event) {
        $event.stopPropagation();
    };
    DetailPanelComponent.prototype.onButtonClick = function () {
        window.alert('Sample button pressed!!');
    };
    DetailPanelComponent.prototype.refresh = function () {
        return false;
    };
    return DetailPanelComponent;
}());
DetailPanelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ag-full-width-grid',
        templateUrl: 'detail-panel.component.html',
        styleUrls: ['detail-panel.component.css'],
    }),
    __metadata("design:paramtypes", [])
], DetailPanelComponent);
exports.DetailPanelComponent = DetailPanelComponent;
//# sourceMappingURL=detail-panel.component.js.map