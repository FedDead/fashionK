import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cloth',
    loadChildren: () => import("./cloth/cloth.module").then(m => m.ClothModule),
  },
  {
    path: 'accesories',
    loadChildren: () => import("./accesories/accesories.module").then(m => m.AccesoriesModule)
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
