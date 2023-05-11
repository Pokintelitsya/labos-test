import { createFeatureSelector, createSelector } from "@ngrx/store";
import { OrdersState } from "./orders.model";
import { OrderView } from "app/shared/models/order.model";
import { selectFavoritsState } from "app/core/core.state";
import { FavoritsState } from "app/core/favorits";
import {
  PatientsState,
  selectPatientsFeature,
} from "app/features/patients/state";
import { PatientView } from "app/shared/models/patient.model";

const ordersStateFeatureKey = "orders";

export const selectOrdersFeature = createFeatureSelector<OrdersState>(
  ordersStateFeatureKey
);

export const selectOrders = createSelector(
  selectOrdersFeature,
  (state: OrdersState) => state.orders
);

export const selectPatientsView = createSelector(
  selectPatientsFeature,
  selectFavoritsState,
  (state: PatientsState, favoritsState: FavoritsState): PatientView[] =>
    state.patients.map((patient) => ({
      ...patient,
      isFavorite: favoritsState.patientsIds[patient.defaultId],
    }))
);

export const selectOrdersView = createSelector(
  selectOrdersFeature,
  selectFavoritsState,
  (state: OrdersState, favoritsState: FavoritsState): OrderView[] =>
    state.orders.map((order) => ({
      ...order,
      isFavorite: favoritsState.ordersIds[order.identifier],
    }))
);

export const selectOrdersStatus = createSelector(
  selectOrdersFeature,
  (state: OrdersState) => state.status
);

export const selectOrdersLoading = createSelector(
  selectOrdersFeature,
  (state: OrdersState) => state.status === "LOADING"
);
