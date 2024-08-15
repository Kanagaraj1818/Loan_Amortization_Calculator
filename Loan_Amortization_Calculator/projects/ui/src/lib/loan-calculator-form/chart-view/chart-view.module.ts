import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartViewComponent } from './chart-view.component';



@NgModule({
  declarations: [ChartViewComponent],
  imports: [
    CommonModule
  ],
  exports:[ChartViewComponent]
})
export class ChartViewModule { }
