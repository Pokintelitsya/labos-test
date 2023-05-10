import { createAction, props } from "@ngrx/store";
import { Order } from "app/shared/models/order.model";

export const FetchOrders = createAction("[Orders] Fetch Orders");
export const FetchOrdersSuccess = createAction(
  "[Orders] Fetch Orders Success",
  props<{ orders: Order[] }>()
);
