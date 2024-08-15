import { NgModule } from '@angular/core';
import { SmartComponent } from './smart.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../state/data.reducer';
import { EffectsModule } from '@ngrx/effects';
import { dataCallEffects } from '../state/data.effects';



@NgModule({
  declarations: [
    SmartComponent
  ],
  imports: [
    StoreModule.forFeature('contentData',reducer),
    EffectsModule.forFeature([dataCallEffects]),
  ],
  exports: [
    SmartComponent
  ]
})
export class SmartModule { }
