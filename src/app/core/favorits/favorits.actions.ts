import { createAction, props } from "@ngrx/store";
import { Order } from "app/shared/models/order.model";
import { Patient } from "app/shared/models/patient.model";

export const AddPatient = createAction(
  "[Favorits] Add Patient",
  props<{ patient: Patient }>()
);

export const DeletePatient = createAction(
  "[Favorits] Delete Patient",
  props<{ patient: Patient }>()
);

export const AddOrder = createAction(
  "[Favorits] Add Order",
  props<{ order: Order }>()
);

export const DeleteOrder = createAction(
  "[Favorits] Delete Order",
  props<{ order: Order }>()
);
