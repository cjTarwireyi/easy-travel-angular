import { AgencyService } from "./../agency.service";
import { Injectable } from "@angular/core";
import * as AgencyAction from "./agency.action";
import { mergeMap, map } from "rxjs/operators";
import { Actions, createEffect, ofType } from "@ngrx/effects";

@Injectable()
export class AgencyEffects {
  constructor(
    private actions$: Actions,
    private agencyService: AgencyService
  ) {}

  loadAgencies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AgencyAction.LoadAgencies),
      mergeMap(() =>
        this.agencyService
          .getAgencies()
          .pipe(map((agencies) => AgencyAction.LoadAgencySuccess({ agencies })))
      )
    );
  });
}
