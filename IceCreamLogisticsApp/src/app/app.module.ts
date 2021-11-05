import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CoreModule} from "./core/core.module";
import {FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {fas} from "@fortawesome/free-solid-svg-icons";
import {far} from "@fortawesome/free-regular-svg-icons";
import {RoutingModule} from "./routing/routing.module";
import {RouterModule} from "@angular/router";
import {environment} from "../environments/environment";
import {API_BASE_URL} from "./core/api/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    FontAwesomeModule,
    RoutingModule,
    RouterModule,
  ],
  providers: [{provide: API_BASE_URL, useFactory: () => environment.API_BASE_URL}],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIconPacks(fas, far);
  }
}
