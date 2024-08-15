import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonHeaderComponent } from './common-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [CommonHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[CommonHeaderComponent]
})
export class CommonHeaderModule { }
