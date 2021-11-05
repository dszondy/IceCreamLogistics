import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateMixingBatchComponent} from './create-mixing-batch/create-mixing-batch.component';
import {MixingComponent} from './mixing/mixing.component';
import {RouterModule} from "@angular/router";
import {routes} from "./routing";
import {AlertModule} from "ngx-bootstrap/alert";
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {MixingItemComponent} from './mixing/mixing-item/mixing-item.component';
import {TabsModule} from "ngx-bootstrap/tabs";
import {SharedModule} from "../shared/shared.module";
import {SelectOrdersComponent} from './create-mixing-batch/select-orders/select-orders.component';
import {BatchContentComponent} from './create-mixing-batch/batch-content/batch-content.component';
import {BatchOverviewComponent} from './create-mixing-batch/batch-overview/batch-overview.component';
import {FormsModule} from "@angular/forms";
import {ScrollingModule} from "@angular/cdk/scrolling";


@NgModule({
  declarations: [CreateMixingBatchComponent, MixingComponent, MixingItemComponent, SelectOrdersComponent, BatchContentComponent, BatchOverviewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AlertModule,
    FontAwesomeModule,
    TabsModule,
    SharedModule,
    FormsModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule,
    ScrollingModule
  ]
})
export class ManufacturingModule {
}
