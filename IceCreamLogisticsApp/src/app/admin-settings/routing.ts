import {Routes} from "@angular/router";
import {RecipeConfigComponent} from "./recipe-config/recipe-config.component";
import {ClientConfigComponent} from "./client-config/client-config.component";

export const routes: Routes = [
  {
    path: 'recipes',
    component: RecipeConfigComponent
  },
  {
    path: 'clients',
    component: ClientConfigComponent
  }
];
