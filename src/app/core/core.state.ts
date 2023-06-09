import {
  ActionReducerMap,
  MetaReducer,
  createFeatureSelector,
} from "@ngrx/store";
import { routerReducer, RouterReducerState } from "@ngrx/router-store";

import { environment } from "../../environments/environment";

import { initStateFromLocalStorage } from "./meta-reducers/init-state-from-local-storage.reducer";
import { debug } from "./meta-reducers/debug.reducer";
import { AuthState } from "./auth/auth.models";
import { authReducer } from "./auth/auth.reducer";
import { RouterStateUrl } from "./router/router.state";
import { settingsReducer } from "./settings/settings.reducer";
import { SettingsState } from "./settings/settings.model";
import { FavoritsState } from "./favorits/favorits.model";
import { favoritsReducer } from "./favorits/favorits.reducer";

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer,
  settings: settingsReducer,
  router: routerReducer,
  favorits: favoritsReducer,
};

export const metaReducers: MetaReducer<AppState>[] = [
  initStateFromLocalStorage,
];

if (!environment.production) {
  if (!environment.test) {
    metaReducers.unshift(debug);
  }
}

export const selectAuthState = createFeatureSelector<AppState, AuthState>(
  "auth"
);

export const selectSettingsState = createFeatureSelector<
  AppState,
  SettingsState
>("settings");

export const selectRouterState = createFeatureSelector<
  AppState,
  RouterReducerState<RouterStateUrl>
>("router");

export const selectFavoritsState = createFeatureSelector<
  AppState,
  FavoritsState
>("favorits");

export interface AppState {
  auth: AuthState;
  settings: SettingsState;
  router: RouterReducerState<RouterStateUrl>;
  favorits: FavoritsState;
}
