import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualMuseumComponent } from './virtual-museum/virtual-museum.component';
import { LandingComponent } from './views/landing/landing.component';


const routes: Routes = [
  {
    path: 'admin',
    component: VirtualMuseumComponent,
  },
  {
    path: '',
    component: LandingComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
