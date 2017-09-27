import * as _ from 'lodash';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
var Notifier = (function () {
    function Notifier() {
    }
    Notifier.prototype.registerHandle = function (handle) {
        var broadcasters = Notifier.broadcasters;
        if (broadcasters.has(handle)) {
            return broadcasters.get(handle).asObservable();
        }
        var subject = new Subject();
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
        { type: Injectable },
    ];
    /** @nocollapse */
    Notifier.ctorParameters = function () { return []; };
    return Notifier;
}());
export { Notifier };
//# sourceMappingURL=notifier.service.js.map