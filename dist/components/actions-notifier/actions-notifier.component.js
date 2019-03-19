var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as _ from 'lodash';
import { Component, Input } from '@angular/core';
import { Notifier } from '../../services/notifier.service';
var ActionsNotifierComponent = /** @class */ (function () {
    function ActionsNotifierComponent(notifier) {
        this.notifier = notifier;
    }
    ActionsNotifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifier.registerHandle(this.address).subscribe(function (data) {
            _.extend(_this, data, { visible: true });
        });
    };
    ActionsNotifierComponent.prototype.close = function () {
        this.visible = false;
    };
    ActionsNotifierComponent.prototype.ngOnDestroy = function () {
        this.notifier.deregisterHandle(this.address);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ActionsNotifierComponent.prototype, "address", void 0);
    ActionsNotifierComponent = __decorate([
        Component({
            selector: 'ng-actions-notifier',
            template: "\n    <div *ngIf = \"visible\" class = \"ng-actions-notifier-container\" \n    [ngClass] = \"classes?.container\">\n      <div class = \"ng-actions-notifier\" [ngClass] = \"classes?.notifier\">\n        <div class = \"ng-actions-notifier-header\">\n          <div class = \"ng-actions-notifier-title\">\n            {{title}}\n          </div>\n          <div class = \"ng-actions-notifier-closer\" [ngClass] = \"classes?.closer\"\n          (click) = \"close(); onClose && onClose()\">\n            <span *ngIf = \"!classes?.closer\">&times;</span>\n          </div>\n        </div>\n        <div class = \"ng-actions-notifier-body\">\n          <div class = \"ng-actions-notifier-icon\" [ngClass] = \"classes?.icon\"></div>\n          <div class = \"ng-actions-notifier-messages\">\n            <div class = \"ng-actions-notifier-message\" *ngFor = \"let part of message\">\n              {{part}}\n            </div>\n          </div>\n        </div>\n        <div class = \"ng-actions-notifier-footer\">\n          <div class = \"ng-actions-notifier-actions\">\n            <div class = \"ng-actions-notifier-action\" *ngFor = \"let action of actions\">\n              <button class = \"ng-actions-notifier-button {{action.class}}\" \n              (click) = \"action.callback && action.callback(); this.close()\">\n                {{action.label}}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [Notifier])
    ], ActionsNotifierComponent);
    return ActionsNotifierComponent;
}());
export { ActionsNotifierComponent };
//# sourceMappingURL=actions-notifier.component.js.map