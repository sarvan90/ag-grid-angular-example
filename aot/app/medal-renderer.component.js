import { Component } from '@angular/core';
export var MedalRendererComponent = (function () {
    function MedalRendererComponent() {
    }
    MedalRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.country = params.node.key;
        this.gold = params.data.gold;
        this.silver = params.data.silver;
        this.bronze = params.data.bronze;
    };
    MedalRendererComponent.decorators = [
        { type: Component, args: [{
                    selector: 'group-row-cell',
                    template: "{{country}} Gold: {{gold}}, Silver: {{silver}}, Bronze: {{bronze}}"
                },] },
    ];
    /** @nocollapse */
    MedalRendererComponent.ctorParameters = [];
    return MedalRendererComponent;
}());
//# sourceMappingURL=medal-renderer.component.js.map