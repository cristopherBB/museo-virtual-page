import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VirtualMuseumComponent } from './virtual-museum/virtual-museum.component';
import { LandingComponent } from './views/landing/landing.component';
import { TourDetailsComponent } from './views/tour-details/tour-details.component';
import { ToolCreatorComponent } from './tool-creator/tool-creator.component';


const routes: Routes = [
  {
    path: 'admin/:id',
    component: TourDetailsComponent
  },
  {
    path: 'admin',
    component: VirtualMuseumComponent,
  },
  {
    path: 'tool-creator',
    component: ToolCreatorComponent
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
