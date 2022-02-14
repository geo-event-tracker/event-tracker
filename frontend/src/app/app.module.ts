import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventListComponent } from './event-list/event-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EventMapComponent } from './event-map/event-map.component';

@NgModule({
  declarations: [
    AppComponent,
    EventListComponent,
    NavBarComponent,
    EventMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
