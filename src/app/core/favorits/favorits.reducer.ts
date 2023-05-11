import { createReducer, on } from "@ngrx/store";
import { FavoritsState } from "./favorits.model";
import * as fromFavoritsActions from "./favorits.actions";

export const initialState: FavoritsState = {
  orders: [],
  patients: [],
  patientsIds: {},
  ordersIds: {},
};

export const favoritsReducer = createReducer(
  initialState,
  on(fromFavoritsActions.AddOrder, (state, { order }) => {
    const id = order.identifier;
    const ordersIds = { ...state.ordersIds };
    ordersIds[id] = true;
    return { ...state, orders: state.orders.concat(order), ordersIds };
  }),
  on(fromFavoritsActions.DeleteOrder, (state, { order }) => {
    const id = order.identifier;
    const ordersIds = { ...state.ordersIds };
    const orders = state.orders.filter(
      (item) => item.identifier !== order.identifier
    );
    delete ordersIds[id];
    return { ...state, orders, ordersIds };
  }),
  on(fromFavoritsActions.AddPatient, (state, { patient }) => {
    const id = patient.defaultId;
    const patientsIds = { ...state.patientsIds };
    patientsIds[id] = true;
    return { ...state, patients: state.patients.concat(patient), patientsIds };
  }),
  on(fromFavoritsActions.DeletePatient, (state, { patient }) => {
    const id = patient.defaultId;
    const patientsIds = { ...state.patientsIds };
    const patients = state.patients.filter(
      (item) => item.defaultId !== patient.defaultId
    );
    delete patientsIds[id];
    return { ...state, patients, patientsIds };
  })
);
