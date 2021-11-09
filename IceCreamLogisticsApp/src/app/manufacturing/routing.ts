import {Routes} from '@angular/router';
import {CreateMixingBatchComponent} from './create-mixing-batch/create-mixing-batch.component';
import {MixingComponent} from './mixing/mixing.component';
import {MixingListComponent} from './mixing-list/mixing-list.component';

export const routes: Routes = [
  {
    path: 'create-batch',
    component: CreateMixingBatchComponent
  },
  {
    path: 'batch/:id',
    component: MixingComponent
  },
  {
    path: 'batch',
    component: MixingListComponent
  }
];
