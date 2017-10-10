import {NgModule}                 from '@angular/core';
import {CommonModule}             from '@angular/common';
import {SimpleNotifierComponent}  from './simple-notifier/simple-notifier.component';
import {ActionsNotifierComponent} from './actions-notifier/actions-notifier.component';

@NgModule({
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
}) export class NotifierComponentsModule {}
