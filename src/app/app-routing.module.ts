import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'form',loadChildren:()=> import ("src/app/input-form-mod/input-form-mod.module").then(mod=>mod.InputFormModModule)},
  {path:'table',loadChildren:()=> import ("src/app/show-table/show-table.module").then(mod=>mod.ShowTableModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
