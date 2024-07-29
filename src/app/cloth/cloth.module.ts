import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClothRoutingModule } from './cloth-routing.module';
import { DressedComponent } from './pages/dressed/dressed.component';
import { OffersComponent } from './pages/offers/offers.component';
import { NewComponent } from './pages/new/new.component';


@NgModule({
  declarations: [
    DressedComponent,
    OffersComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    ClothRoutingModule
  ],
  exports:[
    DressedComponent,
    OffersComponent,
    NewComponent
  ]
})
export class ClothModule { }
