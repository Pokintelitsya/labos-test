import { Component, ChangeDetectionStrategy } from "@angular/core";

import { AppState, ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { FetchPatients, PatientsState, selectPatientsLoading } from "../state";
import { Store } from "@ngrx/store";
import { selectPatientsView } from "app/features/orders/state";
import { PatientView } from "app/shared/models/patient.model";
import { AddPatient, DeletePatient } from "app/core/favorits";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  patients$ = this.patientsStore.select(selectPatientsView);
  patientsLoading$ = this.patientsStore.select(selectPatientsLoading);

  constructor(
    private patientsStore: Store<PatientsState>,
    private store: Store<AppState>
  ) {}

  fetchPatients() {
    this.patientsStore.dispatch(FetchPatients());
  }

  onAddFavorite(patient: PatientView) {
    this.store.dispatch(AddPatient({ patient }));
  }

  onDeleteFavorite(patient: PatientView) {
    this.store.dispatch(DeletePatient({ patient }));
  }
}
