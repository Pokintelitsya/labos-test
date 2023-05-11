import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { OrdersService } from "app/shared/services/orders/orders.service";
import { Store } from "@ngrx/store";
import { FetchOrders, OrdersState, selectOrders } from "../state";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$ = this.store.select(selectOrders);

  constructor(private store: Store<OrdersState>) {}

  ngOnInit() {}

  fetchOrders() {
    this.store.dispatch(FetchOrders());
  }
}
