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
        this.visible = false;
    };
    SimpleNotifierComponent.prototype.ngOnDestroy = function () {
        clearTimeout(this.timeout);
        this.notifier.deregisterHandle(this.address);
    };
    SimpleNotifierComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ng-simple-notifier',
                    template: "\n    <div *ngIf = \"visible\" class = \"ng-simple-notifier-container\" \n    [ngClass] = \"classes?.container\">\n      <div class = \"ng-simple-notifier\" [ngClass] = \"classes?.notifier\">\n        <div class = \"ng-simple-notifier-inner\">\n          <div class = \"ng-simple-notifier-icon\" [ngClass] = \"classes?.icon\"></div>\n          <div class = \"ng-simple-notifier-messages\">\n            <div class = \"ng-simple-notifier-message\" *ngFor = \"let part of message\">\n              {{part}}\n            </div>\n          </div>\n          <div class = \"ng-simple-notifier-closer\" [ngClass] = \"classes?.closer\"\n          (click) = \"close()\">\n            <span *ngIf = \"!classes?.closer\">&times;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SimpleNotifierComponent.ctorParameters = function () { return [
        { type: Notifier, },
    ]; };
    SimpleNotifierComponent.propDecorators = {
        'address': [{ type: Input },],
    };
    return SimpleNotifierComponent;
}());
export { SimpleNotifierComponent };
//# sourceMappingURL=simple-notifier.component.js.map