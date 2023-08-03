import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabledataComponent } from './tabledata/tabledata.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',component:TabledataComponent}
];


@NgModule({
  declarations: [
    TabledataComponent
  ],
  imports: [
    CommonModule,[RouterModule.forChild(routes)]
  ]
})
export class ShowTableModule { }
