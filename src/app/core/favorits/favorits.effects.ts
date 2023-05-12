import { Injectable, NgZone } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { tap } from "rxjs/operators";

import * as fromFavoritsActions from "./favorits.actions";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class FavoritesEffects {
  addOrder$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromFavoritsActions.AddOrder),
        tap(() => {
          this.showMessage("Order has been added to favorites");
        })
      ),
    { dispatch: false }
  );

  addPatient$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromFavoritsActions.AddPatient),
        tap(() => {
          this.showMessage("Patient has been added to favorites");
        })
      ),
    { dispatch: false }
  );

  deleteOrder$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromFavoritsActions.DeleteOrder),
        tap(() => {
          this.showMessage("Order has been removed from favorites");
        })
      ),
    { dispatch: false }
  );

  deletePatient$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromFavoritsActions.DeletePatient),
        tap(() => {
          this.showMessage("Patient has been removed from favorites");
        })
      ),
    { dispatch: false }
  );

  private showMessage(message: string) {
    this.zone.run(() =>
      this.snackBar.open(message, null, {
        duration: 2000,
        panelClass: "success-notification-overlay",
      })
    );
  }

  constructor(
    private actions$: Actions,
    private readonly snackBar: MatSnackBar,
    private readonly zone: NgZone
  ) {}
}
