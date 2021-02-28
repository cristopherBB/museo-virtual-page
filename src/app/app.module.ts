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
import { CanvasComponent } from './virtual-museum/canvas/canvas.component';
import { PinIconComponent } from './virtual-museum/canvas/pin-icon/pin-icon.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    VirtualMuseumComponent,
    CanvasComponent,
    PinIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
