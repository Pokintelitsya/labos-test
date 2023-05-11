import { createAction, props } from "@ngrx/store";
import { Patient } from "app/shared/models/patient.model";

export const FetchPatients = createAction("[Patients] Fetch Patients");
export const FetchPatientsSuccess = createAction(
  "[Patients] Fetch Patients Success",
  props<{ patients: Patient[] }>()
);
