import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccesoriesRoutingModule } from './accesories-routing.module';
import { LotionComponent } from './pages/lotion/lotion.component';


@NgModule({
  declarations: [
    LotionComponent
  ],
  imports: [
    CommonModule,
    AccesoriesRoutingModule
  ],
  exports:[
    LotionComponent
  ]
})
export class AccesoriesModule { }
