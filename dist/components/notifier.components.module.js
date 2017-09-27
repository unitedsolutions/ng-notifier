import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNotifierComponent } from './simple-notifier/simple-notifier.component';
import { ActionsNotifierComponent } from './actions-notifier/actions-notifier.component';
var NotifierComponentsModule = (function () {
    function NotifierComponentsModule() {
    }
    NotifierComponentsModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule
                    ],
                    declarations: [
                        SimpleNotifierComponent,
                        ActionsNotifierComponent
                    ],
                    exports: [
                        SimpleNotifierComponent,
                        ActionsNotifierComponent
                    ]
                },] },
    ];
    /** @nocollapse */
    NotifierComponentsModule.ctorParameters = function () { return []; };
    return NotifierComponentsModule;
}());
export { NotifierComponentsModule };
//# sourceMappingURL=notifier.components.module.js.map