import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "app/core/core.state";
import {
  DeleteOrder,
  DeletePatient,
  selectFavoritsOrders,
  selectFavoritsPatients,
} from "app/core/favorits";
import { OrderView } from "app/shared/models/order.model";
import { PatientView } from "app/shared/models/patient.model";

@Component({
  selector: "st-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent {
  patients$ = this.store.select(selectFavoritsPatients);
  orders$ = this.store.select(selectFavoritsOrders);

  constructor(private store: Store<AppState>) {}

  onDeleteOrderFavorite(order: OrderView) {
    this.store.dispatch(DeleteOrder({ order }));
  }

  onDeletePatientFavorite(patient: PatientView) {
    this.store.dispatch(DeletePatient({ patient }));
  }
}
