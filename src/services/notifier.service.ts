import * as _       from 'lodash';
import {Injectable} from '@angular/core';
import {Subject}    from 'rxjs';

@Injectable()
export class Notifier {
  static broadcasters = new Map();
  
  registerHandle(handle) {
    let {broadcasters} = Notifier;
    
    if(broadcasters.has(handle)) {
      return broadcasters.get(handle).asObservable();
    }
    
    let subject = new Subject();
    broadcasters.set(handle, subject);
    return subject.asObservable();
  }
  
  deregisterHandle(handle) {
    Notifier.broadcasters.delete(handle);
  }
  
  send(handle, data) {
    let {message, actions} = data;
    
    if(!_.isArray(message)) {
      message = [message];
      _.extend(data, {message});
    }
    
    if(actions) {
      for(let action of actions) {
        let {callback, onClose} = action;
        if(onClose) {
          _.extend(data, {onClose: callback});
          break;
        }
      }
    }
    
    Notifier.broadcasters.get(handle).next(data);
  }
}
