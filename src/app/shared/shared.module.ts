import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/list/list.component';
import { CardComponent } from './components/card/card.component';
import { NavbardComponent } from './components/navbard/navbard.component';
import { SearchComponent } from './components/search/search.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';



@NgModule({
  declarations: [
    ListComponent,
    CardComponent,
    NavbardComponent,
    SearchComponent,
    FilterComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    ListComponent,
    CardComponent,
    NavbardComponent,
    SearchComponent,
    FilterComponent,
    FooterComponent
  ]
})
export class SharedModule { }
