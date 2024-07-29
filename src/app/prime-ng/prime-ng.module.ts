import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule
  ],
  exports:[
    MenubarModule,
    AvatarModule,
    InputTextModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
