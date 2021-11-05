import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeConfigComponent} from './recipe-config/recipe-config.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {ClientConfigComponent} from './client-config/client-config.component';
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";


@NgModule({
  declarations: [RecipeConfigComponent, ClientConfigComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminSettingsModule {
}
