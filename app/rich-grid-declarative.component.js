import { Component } from '@angular/core';
import ProficiencyFilter from './proficiencyFilter';
import SkillFilter from './skillFilter';
import RefData from './refData';
import 'ag-grid-enterprise/main';
export var RichGridDeclarativeComponent = (function () {
    function RichGridDeclarativeComponent() {
        // we pass an empty gridOptions in, so we can grab the api out
        this.gridOptions = {};
        this.createRowData();
        this.showGrid = true;
    }
    RichGridDeclarativeComponent.prototype.createRowData = function () {
        var rowData = [];
        for (var i = 0; i < 10000; i++) {
            var countryData = RefData.countries[i % RefData.countries.length];
            rowData.push({
                name: RefData.firstNames[i % RefData.firstNames.length] + ' ' + RefData.lastNames[i % RefData.lastNames.length],
                skills: {
                    android: Math.random() < 0.4,
                    html5: Math.random() < 0.4,
                    mac: Math.random() < 0.4,
                    windows: Math.random() < 0.4,
                    css: Math.random() < 0.4
                },
                address: RefData.addresses[i % RefData.addresses.length],
                years: Math.round(Math.random() * 100),
                proficiency: Math.round(Math.random() * 100),
                country: countryData.country,
                continent: countryData.continent,
                language: countryData.language,
                mobile: this.createRandomPhoneNumber(),
                landline: this.createRandomPhoneNumber()
            });
        }
        this.rowData = rowData;
    };
    RichGridDeclarativeComponent.prototype.calculateRowCount = function () {
        if (this.gridOptions.api && this.rowData) {
            var model = this.gridOptions.api.getModel();
            var totalRows = this.rowData.length;
            var processedRows = model.getRowCount();
            this.rowCount = processedRows.toLocaleString() + ' / ' + totalRows.toLocaleString();
        }
    };
    RichGridDeclarativeComponent.prototype.onModelUpdated = function () {
        console.log('onModelUpdated');
        this.calculateRowCount();
    };
    RichGridDeclarativeComponent.prototype.onReady = function () {
        console.log('onReady');
        this.calculateRowCount();
    };
    RichGridDeclarativeComponent.prototype.onQuickFilterChanged = function ($event) {
        this.gridOptions.api.setQuickFilter($event.target.value);
    };
    RichGridDeclarativeComponent.prototype.countryCellRenderer = function (params) {
        var flag = "<img border='0' width='15' height='10' style='margin-bottom: 2px' src='../images/flags/" + RefData.COUNTRY_CODES[params.value] + ".png'>";
        return flag + " " + params.value;
    };
    RichGridDeclarativeComponent.prototype.skillsCellRenderer = function (params) {
        var data = params.data;
        var skills = [];
        RefData.IT_SKILLS.forEach(function (skill) {
            if (data && data.skills && data.skills[skill]) {
                skills.push('<img src="/images/skills/' + skill + '.png" width="16px" title="' + skill + '" />');
            }
        });
        return skills.join(' ');
    };
    RichGridDeclarativeComponent.prototype.percentCellRenderer = function (params) {
        var value = params.value;
        var eDivPercentBar = document.createElement('div');
        eDivPercentBar.className = 'div-percent-bar';
        eDivPercentBar.style.width = value + '%';
        if (value < 20) {
            eDivPercentBar.style.backgroundColor = 'red';
        }
        else if (value < 60) {
            eDivPercentBar.style.backgroundColor = '#ff9900';
        }
        else {
            eDivPercentBar.style.backgroundColor = '#00A000';
        }
        var eValue = document.createElement('div');
        eValue.className = 'div-percent-value';
        eValue.innerHTML = value + '%';
        var eOuterDiv = document.createElement('div');
        eOuterDiv.className = 'div-outer-div';
        eOuterDiv.appendChild(eValue);
        eOuterDiv.appendChild(eDivPercentBar);
        return eOuterDiv;
    };
    RichGridDeclarativeComponent.prototype.getSkillFilter = function () {
        return SkillFilter;
    };
    RichGridDeclarativeComponent.prototype.getProficiencyFilter = function () {
        return ProficiencyFilter;
    };
    RichGridDeclarativeComponent.prototype.getCountryFilterParams = function () {
        return {
            cellRenderer: this.countryCellRenderer,
            cellHeight: 20
        };
    };
    RichGridDeclarativeComponent.prototype.createRandomPhoneNumber = function () {
        var result = '+';
        for (var i = 0; i < 12; i++) {
            result += Math.round(Math.random() * 10);
            if (i === 2 || i === 5 || i === 8) {
                result += ' ';
            }
        }
        return result;
    };
    RichGridDeclarativeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ag-rich-grid-declarative',
                    templateUrl: 'rich-grid-declarative.component.html',
                    styles: ['.toolbar button {margin: 2px; padding: 0px;}'],
                },] },
    ];
    /** @nocollapse */
    RichGridDeclarativeComponent.ctorParameters = [];
    return RichGridDeclarativeComponent;
}());
//# sourceMappingURL=rich-grid-declarative.component.js.map