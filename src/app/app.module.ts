import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VirtualMuseumComponent } from './virtual-museum/virtual-museum.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CanvasComponent } from './virtual-museum/canvas/canvas.component';
import { VirtualViewComponent } from './virtual-museum/virtual-view/virtual-view.component';
import { LandingComponent } from './views/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    VirtualMuseumComponent,
    CanvasComponent,
    VirtualViewComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
