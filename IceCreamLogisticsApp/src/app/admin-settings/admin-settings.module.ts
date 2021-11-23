import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RecipeConfigComponent} from './recipe-config/recipe-config.component';
import {RouterModule} from '@angular/router';
import {routes} from './routing';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {ClientConfigComponent} from './client-config/client-config.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {IngredientConfigComponent} from './ingredient-config/ingredient-config.component';
import {RecipeIngredientsComponent} from './recipe-config/recipe-ingredients/recipe-ingredients.component';
import {TypeaheadModule} from "ngx-bootstrap/typeahead";
import { UserConfigComponent } from './user-config/user-config.component';
import {TabsModule} from 'ngx-bootstrap/tabs';


@NgModule({
  declarations: [RecipeConfigComponent, ClientConfigComponent, IngredientConfigComponent, RecipeIngredientsComponent, UserConfigComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ScrollingModule,
    FontAwesomeModule,
    FormsModule,
    SharedModule,
    TypeaheadModule,
    TabsModule
  ]
})
export class AdminSettingsModule {
}
