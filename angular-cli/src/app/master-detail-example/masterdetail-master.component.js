"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var detail_panel_component_1 = require("./detail-panel.component");
var MasterComponent = (function () {
    function MasterComponent() {
        // a list of names we pick from when generating data
        this.firstnames = ['Sophia', 'Emma', 'Olivia', 'Isabella', 'Mia', 'Ava', 'Lily', 'Zoe', 'Emily', 'Chloe', 'Layla', 'Madison', 'Madelyn', 'Abigail', 'Aubrey', 'Charlotte', 'Amelia', 'Ella', 'Kaylee', 'Avery', 'Aaliyah', 'Hailey', 'Hannah', 'Addison', 'Riley', 'Harper', 'Aria', 'Arianna', 'Mackenzie', 'Lila', 'Evelyn', 'Adalyn', 'Grace', 'Brooklyn', 'Ellie', 'Anna', 'Kaitlyn', 'Isabelle', 'Sophie', 'Scarlett', 'Natalie', 'Leah', 'Sarah', 'Nora', 'Mila', 'Elizabeth', 'Lillian', 'Kylie', 'Audrey', 'Lucy', 'Maya'];
        this.lastnames = ['Smith', 'Jones', 'Williams', 'Taylor', 'Brown', 'Davies', 'Evans', 'Wilson', 'Thomas', 'Johnson'];
        this.images = ['niall', 'sean', 'alberto', 'statue', 'horse'];
        // each call gets a unique id, nothing to do with the grid, just help make the sample
        // data more realistic
        this.callIdSequence = 555;
        this.gridOptions = {};
        this.gridOptions.rowData = this.createRowData();
        this.gridOptions.columnDefs = this.createColumnDefs();
    }
    MasterComponent.prototype.createColumnDefs = function () {
        return [
            {
                headerName: 'Name', field: 'name',
                // left column is going to act as group column, with the expand / contract controls
                cellRenderer: 'group',
                // we don't want the child count - it would be one each time anyway as each parent
                // not has exactly one child node
                cellRendererParams: { suppressCount: true }
            },
            { headerName: 'Account', field: 'account' },
            { headerName: 'Calls', field: 'totalCalls' },
            { headerName: 'Minutes', field: 'totalMinutes', cellFormatter: this.minuteCellFormatter }
        ];
    };
    MasterComponent.prototype.isFullWidthCell = function (rowNode) {
        return rowNode.level === 1;
    };
    // Sometimes the gridReady event can fire before the angular component is ready to receive it, so in an angular
    // environment its safer to on you cannot safely rely on AfterViewInit instead before using the API
    MasterComponent.prototype.ngAfterViewInit = function () {
        this.gridOptions.api.sizeColumnsToFit();
    };
    MasterComponent.prototype.getFullWidthCellRenderer = function () {
        return detail_panel_component_1.DetailPanelComponent;
    };
    MasterComponent.prototype.getRowHeight = function (params) {
        var rowIsDetailRow = params.node.level === 1;
        // return 100 when detail row, otherwise return 25
        return rowIsDetailRow ? 200 : 25;
    };
    MasterComponent.prototype.getNodeChildDetails = function (record) {
        if (record.callRecords) {
            return {
                group: true,
                // the key is used by the default group cellRenderer
                key: record.name,
                // provide ag-Grid with the children of this group
                children: [record.callRecords],
                // for demo, expand the third row by default
                expanded: record.account === 177002
            };
        }
        else {
            return null;
        }
    };
    MasterComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 20; i++) {
            var firstName = this.firstnames[Math.floor(Math.random() * this.firstnames.length)];
            var lastName = this.lastnames[Math.floor(Math.random() * this.lastnames.length)];
            var image = this.images[i % this.images.length];
            var totalDuration = 0;
            var callRecords = [];
            // call count is random number between 20 and 120
            var callCount = Math.floor(Math.random() * 100) + 20;
            for (var j = 0; j < callCount; j++) {
                // duration is random number between 20 and 120
                var callDuration = Math.floor(Math.random() * 100) + 20;
                var callRecord = {
                    callId: this.callIdSequence++,
                    duration: callDuration,
                    switchCode: 'SW' + Math.floor(Math.random() * 10),
                    // 50% chance of in vs out
                    direction: (Math.random() > .5) ? 'In' : 'Out',
                    // made up number
                    number: '(0' + Math.floor(Math.random() * 10) + ') ' + Math.floor(Math.random() * 100000000)
                };
                callRecords.push(callRecord);
                totalDuration += callDuration;
            }
            var record = {
                name: firstName + ' ' + lastName,
                account: i + 177000,
                totalCalls: callCount,
                image: image,
                // convert from seconds to minutes
                totalMinutes: totalDuration / 60,
                callRecords: callRecords
            };
            rowData.push(record);
        }
        return rowData;
    };
    MasterComponent.prototype.minuteCellFormatter = function (params) {
        return params.value.toLocaleString() + 'm';
    };
    ;
    MasterComponent = __decorate([
        core_1.Component({
            selector: 'ag-masterdetail-master',
            templateUrl: 'masterdetail-master.component.html'
        })
    ], MasterComponent);
    return MasterComponent;
}());
exports.MasterComponent = MasterComponent;
//# sourceMappingURL=masterdetail-master.component.js.map