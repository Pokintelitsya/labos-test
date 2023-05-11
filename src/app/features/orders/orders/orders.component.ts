import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AppState, ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { Store } from "@ngrx/store";
import {
  FetchOrders,
  OrdersState,
  selectOrdersStatus,
  selectOrdersView,
} from "../state";
import { OrderView } from "app/shared/models/order.model";
import { AddOrder, DeleteOrder } from "app/core/favorits";

@Component({
  selector: "st-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  orders$ = this.ordersStore.select(selectOrdersView);
  ordersLoadingState$ = this.ordersStore.select(selectOrdersStatus);

  constructor(
    private ordersStore: Store<OrdersState>,
    private store: Store<AppState>
  ) {}

  fetchOrders() {
    this.ordersStore.dispatch(FetchOrders());
  }

  onAddFavorite(order: OrderView) {
    this.store.dispatch(AddOrder({ order }));
  }

  onDeleteFavorite(order: OrderView) {
    this.store.dispatch(DeleteOrder({ order }));
  }
}
