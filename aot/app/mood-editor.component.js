import { Component, ViewContainerRef, ViewChild } from '@angular/core';
export var MoodEditorComponent = (function () {
    function MoodEditorComponent() {
        this.happy = false;
    }
    // dont use afterGuiAttached for post gui events - hook into ngAfterViewInit instead for this
    MoodEditorComponent.prototype.ngAfterViewInit = function () {
        this.container.element.nativeElement.focus();
    };
    MoodEditorComponent.prototype.agInit = function (params) {
        this.params = params;
        this.setHappy(params.value === "Happy");
    };
    MoodEditorComponent.prototype.getValue = function () {
        return this.happy ? "Happy" : "Sad";
    };
    MoodEditorComponent.prototype.isPopup = function () {
        return true;
    };
    MoodEditorComponent.prototype.setHappy = function (happy) {
        this.happy = happy;
    };
    MoodEditorComponent.prototype.toggleMood = function () {
        this.setHappy(!this.happy);
    };
    MoodEditorComponent.prototype.onKeyDown = function (event) {
        var key = event.which || event.keyCode;
        if (key == 37 ||
            key == 39) {
            this.toggleMood();
            event.stopPropagation();
        }
    };
    MoodEditorComponent.decorators = [
        { type: Component, args: [{
                    selector: 'editor-cell',
                    template: "\n        <div #container class=\"mood\" tabindex=\"0\" (keydown)=\"onKeyDown($event)\">\n            <img src=\"images/smiley.png\" (click)=\"setHappy(true)\" [ngClass]=\"{'selected' : happy, 'default' : !happy}\">\n            <img src=\"images/smiley-sad.png\" (click)=\"setHappy(false)\" [ngClass]=\"{'selected' : !happy, 'default' : happy}\">\n        </div>\n    ",
                    styles: ["\n        .mood {\n            border-radius: 15px;\n            border: 1px solid grey;\n            background: #e6e6e6;\n            padding: 15px;\n            text-align:center;\n            display:inline-block;\n            outline:none\n        }\n\n        .default {\n            padding-left:10px;\n            padding-right:10px;\n            border: 1px solid transparent;\n            padding: 4px;\n        }\n\n        .selected {\n            padding-left:10px;\n            padding-right:10px;\n            border: 1px solid lightgreen;\n            padding: 4px;\n        }\n    "]
                },] },
    ];
    /** @nocollapse */
    MoodEditorComponent.ctorParameters = [];
    MoodEditorComponent.propDecorators = {
        'container': [{ type: ViewChild, args: ['container', { read: ViewContainerRef },] },],
    };
    return MoodEditorComponent;
}());
//# sourceMappingURL=mood-editor.component.js.map