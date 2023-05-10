import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, switchMap } from "rxjs/operators";

import { OrdersService } from "app/shared/services/orders/orders.service";
import * as OrdersActions from "./orders.actions";

@Injectable()
export class OrdersEffects {
  fetchOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrdersActions.FetchOrders),
      switchMap(() =>
        this.ordersService
          .getOrders()
          .pipe(map((orders) => OrdersActions.FetchOrdersSuccess({ orders })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ordersService: OrdersService
  ) {}
}
