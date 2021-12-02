import {Routes} from '@angular/router';
import {RecipeConfigComponent} from './recipe-config/recipe-config.component';
import {ClientConfigComponent} from './client-config/client-config.component';
import {IngredientConfigComponent} from './ingredient-config/ingredient-config.component';
import {UserConfigComponent} from './user-config/user-config.component';
import {SettingsGuard} from './settings-guard.service';

export const routes: Routes = [
  {
    canDeactivate: [SettingsGuard],
    path: 'recipes',
    component: RecipeConfigComponent
  },
  {
    canDeactivate: [SettingsGuard],
    path: 'clients',
    component: ClientConfigComponent
  },
  {
    canDeactivate: [SettingsGuard],
    path: 'ingredients',
    component: IngredientConfigComponent
  },
  {
    canDeactivate: [SettingsGuard],
    path: 'users',
    component: UserConfigComponent
  }
];
