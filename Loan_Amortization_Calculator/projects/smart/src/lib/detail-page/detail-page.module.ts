import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPageComponent } from './detail-page.component';
import { CommonHeaderModule } from '../../../../ui/src/lib/common-header/common-header.module';
import { CommonFooterModule } from '../../../../ui/src/lib/common-footer/common-footer.module';
import { ChartViewModule } from '../../../../ui/src/lib/loan-calculator-form/chart-view/chart-view.module';



@NgModule({
  declarations: [DetailPageComponent],
  imports: [
    CommonModule,
    CommonHeaderModule,
    CommonFooterModule,
    ChartViewModule
  ],
  exports:[DetailPageComponent]
})
export class DetailPageModule { }
