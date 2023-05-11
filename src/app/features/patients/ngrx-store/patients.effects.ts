import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import * as PatientsActions from "./patients.actions";
import { PatientsService } from "app/shared/services/patients/patients.service";

@Injectable()
export class PatientsEffects {
  fetchPatients$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PatientsActions.FetchPatients),
      switchMap(() =>
        this.patientsService
          .getPatients()
          .pipe(map((patients) => PatientsActions.FetchPatientsSuccess({ patients })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private patientsService: PatientsService
  ) {}
}
