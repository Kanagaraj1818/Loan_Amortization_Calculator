import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmortizationCalculatorModule } from '../../projects/smart/src/lib/amortization-calculator/amortization-calculator.module';
import { reducer } from '../../projects/smart/src/state/data.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { dataCallEffects } from '../../projects/smart/src/state/data.effects';
import { SmartModule } from '../../projects/smart/src/public-api';
import { DetailPageModule } from '../../projects/smart/src/lib/detail-page/detail-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AmortizationCalculatorModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SmartModule,
    DetailPageModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
