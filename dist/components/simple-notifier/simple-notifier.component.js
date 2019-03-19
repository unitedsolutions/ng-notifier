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
var SimpleNotifierComponent = /** @class */ (function () {
    function SimpleNotifierComponent(notifier) {
        this.notifier = notifier;
        this.activeTime = 2000;
    }
    SimpleNotifierComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.notifier.registerHandle(this.address).subscribe(function (data) {
            _.extend(_this, data, { visible: true });
            _this.timeout = setTimeout(function () { return _this.close(); }, _this.activeTime);
        });
    };
    SimpleNotifierComponent.prototype.close = function () {
        clearTimeout(this.timeout);
        this.visible = false;
    };
    SimpleNotifierComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
        this.notifier.deregisterHandle(this.address);
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], SimpleNotifierComponent.prototype, "address", void 0);
    SimpleNotifierComponent = __decorate([
        Component({
            selector: 'ng-simple-notifier',
            template: "\n    <div *ngIf = \"visible\" class = \"ng-simple-notifier-container\" \n    [ngClass] = \"classes?.container\">\n      <div class = \"ng-simple-notifier\" [ngClass] = \"classes?.notifier\">\n        <div class = \"ng-simple-notifier-inner\">\n          <div class = \"ng-simple-notifier-icon\" [ngClass] = \"classes?.icon\"></div>\n          <div class = \"ng-simple-notifier-messages\">\n            <div class = \"ng-simple-notifier-message\" *ngFor = \"let part of message\">\n              {{part}}\n            </div>\n          </div>\n          <div class = \"ng-simple-notifier-closer\" [ngClass] = \"classes?.closer\"\n          (click) = \"close()\">\n            <span *ngIf = \"!classes?.closer\">&times;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [Notifier])
    ], SimpleNotifierComponent);
    return SimpleNotifierComponent;
}());
export { SimpleNotifierComponent };
//# sourceMappingURL=simple-notifier.component.js.map