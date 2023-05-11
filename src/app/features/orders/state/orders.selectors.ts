import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrdersState } from "./orders.model";

const ordersStateFeatureKey = "orders";

export const selectOrdersFeature = createFeatureSelector<OrdersState>(
  ordersStateFeatureKey
);

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState) => state.orders
);

export const selectOrdersStatus = createSelector(
  selectOrdersFeature,
  (state: OrdersState) => state.status
);
