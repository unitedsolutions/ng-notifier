import * as _             from 'lodash';
import {Component, Input} from '@angular/core';
import {Notifier}         from '../../services/notifier.service';

@Component({
  selector: 'ng-actions-notifier',
  templateUrl: './actions-notifier.component.html'
})
export class ActionsNotifierComponent {
  visible;
  message;
  classes;
  title;
  actions;
  onClose;
  @Input() address;
  
  constructor(private notifier: Notifier) {}
  
  ngOnInit() {
    this.notifier.registerHandle(this.address).subscribe(data => {
      _.extend(this, data, {visible: true});
    });
  }

  close() {
    this.visible = false;
  }

  ngOnDestroy() {
    this.notifier.deregisterHandle(this.address);
  }
}
