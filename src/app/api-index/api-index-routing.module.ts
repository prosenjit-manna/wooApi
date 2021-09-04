import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiIndexComponent } from './api-index.component';

const routes: Routes = [
  {
    path: '',
    component: ApiIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApiIndexRoutingModule { }
