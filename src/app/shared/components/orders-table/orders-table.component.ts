import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";
import { Order, OrderView } from "../../models/order.model";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "st-orders-table",
  templateUrl: "./orders-table.component.html",
  styleUrls: ["./orders-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent {
  @Input() set orders(orders: OrderView[]) {
    this.setTableData(orders);
  }
  @Input() favoriteAction: "delete" | "toggle" = "toggle";
  @Input() withSearch = false;
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
  dataSource: MatTableDataSource<OrderView>;

  constructor() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

  private setTableData(orders: OrderView[]) {
    this.dataSource = new MatTableDataSource(orders);
    this.dataSource.filterPredicate = (data, filter) => {
      const orderName = data.orderName.trim().toLowerCase();
      const filterTerm = filter.trim().toLowerCase();
      return orderName.trim().includes(filterTerm);
    };
  }
}
