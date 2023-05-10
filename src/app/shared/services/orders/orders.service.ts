import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { catchError, map } from "rxjs/operators";
import { Order } from "app/shared/models/order.model";
import { of } from "rxjs";
import { BaseResponse } from "app/shared/models/base-response.model";

interface OrdersResponse extends BaseResponse {
  order: Order[];
}
@Injectable({
  providedIn: "root",
})
export class OrdersService {
  constructor(private apiService: ApiService) {}

  getOrders() {
    return this.apiService.get<OrdersResponse>("79fb05cb").pipe(
      map((response) => {
        if (response?.order) return response.order;
        else return [];
      }),
      catchError(() => of([]))
    );
  }
}
