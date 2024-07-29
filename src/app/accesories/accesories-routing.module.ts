import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LotionComponent } from './pages/lotion/lotion.component';

const routes: Routes = [
  {
    path: 'lotion',
    component:LotionComponent
  },
  {
    path: '**',
    redirectTo: 'lotion'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccesoriesRoutingModule { }
