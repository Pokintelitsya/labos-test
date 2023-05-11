import { createReducer, on } from "@ngrx/store";

import { PatientsState } from "./patients.model";
import * as PatientsActions from "./patients.actions";

export const initialPatientsState: PatientsState = {
  patients: [],
  status: "NOT_LODED",
};

export const patientsReducer = createReducer(
  initialPatientsState,
  on(PatientsActions.FetchPatients, (state) => {
    return { ...state, status: "LOADING" };
  }),
  on(PatientsActions.FetchPatientsSuccess, (state, { patients }) => {
    return { ...state, status: "LOADED", patients };
  })
);
