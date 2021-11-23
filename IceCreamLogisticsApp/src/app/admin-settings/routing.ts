import {Routes} from '@angular/router';
import {RecipeConfigComponent} from './recipe-config/recipe-config.component';
import {ClientConfigComponent} from './client-config/client-config.component';
import {IngredientConfigComponent} from './ingredient-config/ingredient-config.component';
import {UserConfigComponent} from './user-config/user-config.component';

export const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeConfigComponent
  },
  {
    path: 'clients',
    component: ClientConfigComponent
  },
  {
    path: 'ingredients',
    component: IngredientConfigComponent
  },
  {
    path: 'users',
    component: UserConfigComponent
  }
];
