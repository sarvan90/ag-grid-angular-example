import { Component } from '@angular/core';
export var MoodRendererComponent = (function () {
    function MoodRendererComponent() {
    }
    MoodRendererComponent.prototype.agInit = function (params) {
        this.params = params;
        this.setMood(params);
    };
    MoodRendererComponent.prototype.refresh = function (params) {
        this.params = params;
        this.setMood(params);
    };
    MoodRendererComponent.prototype.setMood = function (params) {
        this.mood = params.value;
        this.imgForMood = this.mood === 'Happy' ? 'images/smiley.png' : 'images/smiley-sad.png';
    };
    ;
    MoodRendererComponent.decorators = [
        { type: Component, args: [{
                    selector: 'mood-cell',
                    template: "<img width=\"20px\" [src]=\"imgForMood\" />"
                },] },
    ];
    /** @nocollapse */
    MoodRendererComponent.ctorParameters = [];
    return MoodRendererComponent;
}());
//# sourceMappingURL=mood-renderer.component.js.map