import * as _             from 'lodash';
import {Component, Input} from '@angular/core';
import {Notifier}         from '../../services/notifier.service';

@Component({
  selector: 'ng-simple-notifier',
  templateUrl: './simple-notifier.component.html'
})
export class SimpleNotifierComponent {
  visible;
  message;
  timeout;
  classes;
  activeTime = 2000;
  @Input() address;
  
  constructor(private notifier: Notifier) {}

  ngOnInit() {
    this.notifier.registerHandle(this.address).subscribe(data => {
      _.extend(this, data, {visible: true});
      this.timeout = setTimeout(() => this.close(), this.activeTime);
    });    
  }

  close() {
    clearTimeout(this.timeout);
    this.visible = false;
  }

  ngOnDestroy() {
    clearTimeout(this.timeout);
    this.notifier.deregisterHandle(this.address);
  }
}
