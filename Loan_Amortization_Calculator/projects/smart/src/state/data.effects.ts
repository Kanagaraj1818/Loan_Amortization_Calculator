import { Injectable } from "@angular/core";
import { SmartService } from "../public-api";
import { Store } from "@ngrx/store";
import { Schedule } from "../../../ui/src/lib/tabularViewInterface";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ActionType, Loaded, LoadFail } from "./data.action";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EMPTY, of } from "rxjs";
import { UiService } from "../../../ui/src/public-api";

@Injectable()
export class dataCallEffects {
  constructor(
    private service: SmartService,
    private uiService: UiService,
    private store: Store<Schedule>,
    private action: Actions
  ) {}

  dataCall = createEffect(() => {
    return this.action.pipe(
      ofType(ActionType.dataCall),
      mergeMap(() => {
        return this.service.generateAmortizationSchedule(this.uiService.loanAmount,this.uiService.interestRate,this.uiService.loanTerm).pipe(
          map((data) => {
            if (data) {
            //   this.store.dispatch(new Loaded(Object(data)));
              return new Loaded(data)
            } else {
              return new LoadFail(data);  
            }
          })
        );
      })
    );
  });
}