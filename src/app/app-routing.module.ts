import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualMuseumComponent } from './virtual-museum/virtual-museum.component';


const routes: Routes = [
  {
    path: '',
    component: VirtualMuseumComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
