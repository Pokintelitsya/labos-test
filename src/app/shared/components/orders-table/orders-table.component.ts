import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Order, OrderView } from "../../models/order.model";

@Component({
  selector: "st-orders-table",
  templateUrl: "./orders-table.component.html",
  styleUrls: ["./orders-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent {
  @Input() orders: OrderView[] = [];
  @Input() favoriteAction: "delete" | "toggle" = "toggle";
  @Output() deleteFavorite = new EventEmitter<OrderView>();
  @Output() addFavorite = new EventEmitter<OrderView>();

  displayedColumns: string[] = [
    "orderName",
    "creator",
    "creationDate",
    "facility",
    "patient",
    "action",
  ];

  constructor() {}

  toggleFavorite(order: OrderView) {
    if (order.isFavorite) {
      this.deleteFavorite.emit(order);
    } else {
      this.addFavorite.emit(order);
    }
  }

  deleteFromFavorite(order: OrderView) {
    this.deleteFavorite.emit(order);
  }
}
