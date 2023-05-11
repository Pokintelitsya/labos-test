import { createSelector } from "@ngrx/store";
import { selectFavoritsState } from "../core.state";
import { FavoritsState } from "./favorits.model";

export const selectFavoritsOrders = createSelector(
  selectFavoritsState,
  (state: FavoritsState) => state.orders
);

export const selectFavoritsPatients = createSelector(
  selectFavoritsState,
  (state: FavoritsState) => state.patients
);

export const selectIsInFavoritsOrders = (orderId: string) =>
  createSelector(
    selectFavoritsState,
    (state: FavoritsState) => state.ordersIds[orderId]
  );

export const selectIsInFavoritsPatients = (patientId: string) =>
  createSelector(
    selectFavoritsState,
    (state: FavoritsState) => state.patientsIds[patientId]
  );
