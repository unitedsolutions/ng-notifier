var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var Notifier = /** @class */ (function () {
    function Notifier() {
    }
    Notifier_1 = Notifier;
    Notifier.prototype.registerHandle = function (handle) {
        var broadcasters = Notifier_1.broadcasters;
        if (broadcasters.has(handle)) {
            return broadcasters.get(handle).asObservable();
        }
        var subject = new Subject();
        broadcasters.set(handle, subject);
        return subject.asObservable();
    };
    Notifier.prototype.deregisterHandle = function (handle) {
        Notifier_1.broadcasters.delete(handle);
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
        Notifier_1.broadcasters.get(handle).next(data);
    };
    var Notifier_1;
    Notifier.broadcasters = new Map();
    Notifier = Notifier_1 = __decorate([
        Injectable()
    ], Notifier);
    return Notifier;
}());
export { Notifier };
//# sourceMappingURL=notifier.service.js.map