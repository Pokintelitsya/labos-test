import { Patient } from "app/shared/models/patient.model";

export interface PatientsState {
  patients: Patient[];
  status: "NOT_LODED" | "LOADING" | "LOADED";
}
