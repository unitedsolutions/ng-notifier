(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common'), require('lodash'), require('rxjs')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common', 'lodash', 'rxjs'], factory) :
	(factory((global.ngNotifier = {}),global.ng.core,global.ng.common,global._,global.Rx));
}(this, (function (exports,core,common,_,rxjs) { 'use strict';

var Notifier = /** @class */ (function () {
    function Notifier() {
    }
    Notifier.prototype.registerHandle = function (handle) {
        var broadcasters = Notifier.broadcasters;
        if (broadcasters.has(handle)) {
            return broadcasters.get(handle).asObservable();
        }
        var subject = new rxjs.Subject();
        broadcasters.set(handle, subject);
        return subject.asObservable();
    };
    Notifier.prototype.deregisterHandle = function (handle) {
        Notifier.broadcasters.delete(handle);
    };
    Notifier.prototype.send = function (handle, data) {
        var message = data.message, actions = data.actions;
        if (!_.isArray(message)) {
            message = [message];
            _.extend(data, { message: message });
        }
        if (actions) {
            for (var _i = 0, actions_1 = actions; _i < actions_1.length; _i++) {
                var action = actions_1[_i];
                var callback = action.callback, onClose = action.onClose;
                if (onClose) {
                    _.extend(data, { onClose: callback });
                    break;
                }
            }
        }
        Notifier.broadcasters.get(handle).next(data);
    };
    Notifier.broadcasters = new Map();
    Notifier.decorators = [
        { type: core.Injectable },
    ];
    /** @nocollapse */
    Notifier.ctorParameters = function () { return []; };
    return Notifier;
}());

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
        { type: core.Component, args: [{
                    selector: 'ng-simple-notifier',
                    template: "\n    <div *ngIf = \"visible\" class = \"ng-simple-notifier-container\" \n    [ngClass] = \"classes?.container\">\n      <div class = \"ng-simple-notifier\" [ngClass] = \"classes?.notifier\">\n        <div class = \"ng-simple-notifier-inner\">\n          <div class = \"ng-simple-notifier-icon\" [ngClass] = \"classes?.icon\"></div>\n          <div class = \"ng-simple-notifier-messages\">\n            <div class = \"ng-simple-notifier-message\" *ngFor = \"let part of message\">\n              {{part}}\n            </div>\n          </div>\n          <div class = \"ng-simple-notifier-closer\" [ngClass] = \"classes?.closer\"\n          (click) = \"close()\">\n            <span *ngIf = \"!classes?.closer\">&times;</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    SimpleNotifierComponent.ctorParameters = function () { return [
        { type: Notifier, },
    ]; };
    SimpleNotifierComponent.propDecorators = {
        'address': [{ type: core.Input },],
    };
    return SimpleNotifierComponent;
}());

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
    ActionsNotifierComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'ng-actions-notifier',
                    template: "\n    <div *ngIf = \"visible\" class = \"ng-actions-notifier-container\" \n    [ngClass] = \"classes?.container\">\n      <div class = \"ng-actions-notifier\" [ngClass] = \"classes?.notifier\">\n        <div class = \"ng-actions-notifier-header\">\n          <div class = \"ng-actions-notifier-title\">\n            {{title}}\n          </div>\n          <div class = \"ng-actions-notifier-closer\" [ngClass] = \"classes?.closer\"\n          (click) = \"close(); onClose && onClose()\">\n            <span *ngIf = \"!classes?.closer\">&times;</span>\n          </div>\n        </div>\n        <div class = \"ng-actions-notifier-body\">\n          <div class = \"ng-actions-notifier-icon\" [ngClass] = \"classes?.icon\"></div>\n          <div class = \"ng-actions-notifier-messages\">\n            <div class = \"ng-actions-notifier-message\" *ngFor = \"let part of message\">\n              {{part}}\n            </div>\n          </div>\n        </div>\n        <div class = \"ng-actions-notifier-footer\">\n          <div class = \"ng-actions-notifier-actions\">\n            <div class = \"ng-actions-notifier-action\" *ngFor = \"let action of actions\">\n              <button class = \"ng-actions-notifier-button {{action.class}}\" \n              (click) = \"action.callback && action.callback(); this.close()\">\n                {{action.label}}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    ActionsNotifierComponent.ctorParameters = function () { return [
        { type: Notifier, },
    ]; };
    ActionsNotifierComponent.propDecorators = {
        'address': [{ type: core.Input },],
    };
    return ActionsNotifierComponent;
}());

var NotifierComponentsModule = /** @class */ (function () {
    function NotifierComponentsModule() {
    }
    NotifierComponentsModule.decorators = [
        { type: core.NgModule, args: [{
                    imports: [
                        common.CommonModule
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

var NotifierServicesModule = /** @class */ (function () {
    function NotifierServicesModule() {
    }
    NotifierServicesModule.decorators = [
        { type: core.NgModule, args: [{
                    providers: [Notifier]
                },] },
    ];
    /** @nocollapse */
    NotifierServicesModule.ctorParameters = function () { return []; };
    return NotifierServicesModule;
}());

exports.NotifierComponentsModule = NotifierComponentsModule;
exports.SimpleNotifierComponent = SimpleNotifierComponent;
exports.ActionsNotifierComponent = ActionsNotifierComponent;
exports.NotifierServicesModule = NotifierServicesModule;
exports.Notifier = Notifier;

Object.defineProperty(exports, '__esModule', { value: true });

})));
