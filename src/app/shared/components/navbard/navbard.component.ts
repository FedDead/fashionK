import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-navbard',
  templateUrl: './navbard.component.html',
  styleUrl: './navbard.component.css'
})
export class NavbardComponent  implements OnInit{

  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
      this.items = [
          {
              label: 'Novedades',
              icon: 'pi pi-sparkles',
              routerLink: 'new'
          },
          {
              label: 'Ofertas',
              icon: 'pi pi-bolt',
              routerLink: 'offers'
          },
          {
              label: 'Vestidos',
              icon: 'pi pi-shopping-bag',
              items: [
                  {
                      label: 'Blusas',
                      routerLink:'dressed'
                  },
              ]
          }
      ];
  }
}
