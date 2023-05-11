import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PatientsState } from "./patients.model";

const patientsStateFeatureKey = "patients";

export const selectPatientsFeature = createFeatureSelector<PatientsState>(
  patientsStateFeatureKey
);

export const selectPatients = createSelector(
  selectPatientsFeature,
  (state: PatientsState) => state.patients
);

export const selectPatientssStatus = createSelector(
  selectPatientsFeature,
  (state: PatientsState) => state.status
);
