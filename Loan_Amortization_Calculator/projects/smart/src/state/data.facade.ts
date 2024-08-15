import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { ContentState } from '../../../ui/src/lib/tabularViewInterface';
import { Response } from './data.selectors';
import { DataCall } from './data.action';


@Injectable({
  providedIn: 'root',
})
export class DataFacade {
  constructor(private store: Store<ContentState>) {}
  Success$ = this.store.select(Response.getSuccess);
  Loading$ = this.store.select(Response.getLoading);
  Error = this.store.select(Response.getError);
  Loaded$ = this.store.select(Response.getLoaded);
  loadAll() {
    this.store.dispatch(new DataCall());
  }
}
