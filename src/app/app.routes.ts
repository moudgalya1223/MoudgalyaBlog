import { RouterModule, Routes } from '@angular/router';
import {MWComponent} from '../app/mw/mw.component'
import { NgModule } from '@angular/core';
export const routes: Routes = [
    { path: 'mw', component: MWComponent },
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }