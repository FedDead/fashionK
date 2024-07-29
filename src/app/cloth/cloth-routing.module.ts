import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './pages/new/new.component';
import { OffersComponent } from './pages/offers/offers.component';
import { DressedComponent } from './pages/dressed/dressed.component';

const routes: Routes = [
  {
    path: 'new',
    component: NewComponent
  },
  {
    path: 'offers',
    component: OffersComponent
  },
  {
    path: 'dressed',
    component: DressedComponent
  },
  {
    path: '**',
    redirectTo: 'dressed'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClothRoutingModule { }
