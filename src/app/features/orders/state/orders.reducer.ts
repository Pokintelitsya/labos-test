import { createReducer, on } from "@ngrx/store";

import { OrdersState } from "./orders.model";
import * as OrdersActions from "./orders.actions";

export const initialOrdersState: OrdersState = {
  orders: [],
  status: "NOT_LODED",
};

export const ordersReducer = createReducer(
  initialOrdersState,
  on(OrdersActions.FetchOrders, (state) => {
    return { ...state, status: "LOADING" };
  }),
  on(OrdersActions.FetchOrdersSuccess, (state, { orders }) => {
    return { ...state, status: "LOADED", orders };
  })
);
