var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleNotifierComponent } from './simple-notifier/simple-notifier.component';
import { ActionsNotifierComponent } from './actions-notifier/actions-notifier.component';
var NotifierComponentsModule = /** @class */ (function () {
    function NotifierComponentsModule() {
    }
    NotifierComponentsModule = __decorate([
        NgModule({
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
        })
    ], NotifierComponentsModule);
    return NotifierComponentsModule;
}());
export { NotifierComponentsModule };
//# sourceMappingURL=notifier.components.module.js.map