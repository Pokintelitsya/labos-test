import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Order } from "../../models/order.model";

@Component({
  selector: "st-orders-table",
  templateUrl: "./orders-table.component.html",
  styleUrls: ["./orders-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersTableComponent implements OnInit {
  @Input() orders: Order[] = [];

  displayedColumns: string[] = [
    "orderName",
    "creator",
    "creationDate",
    "facility",
    "patient",
    "action"
  ];

  constructor() {}

  ngOnInit(): void {
    this.setTableData();
  }

  private setTableData() {}
}
