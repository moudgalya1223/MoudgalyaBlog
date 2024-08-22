import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MWComponent } from '../mw/mw.component';
//import { Component2 } from './components/component2.component';

const routes: Routes = [
  { path: 'mw', component: MWComponent },
 // { path: 'component2', component: Component2 },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
