import { Order } from "app/shared/models/order.model";

export interface OrdersState {
  orders: Order[];
  status: "NOT_LODED" | "LOADING" | "LOADED";
}
