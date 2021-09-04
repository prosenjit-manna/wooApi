import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiIndexRoutingModule } from './api-index-routing.module';
import { ApiIndexComponent } from './api-index.component';
import { NgxJsonViewerModule } from 'ngx-json-viewer';


@NgModule({
  declarations: [
    ApiIndexComponent
  ],
  imports: [
    CommonModule,
    ApiIndexRoutingModule,
    NgxJsonViewerModule
  ]
})
export class ApiIndexModule { }
