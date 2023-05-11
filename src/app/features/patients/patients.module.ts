import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { SharedModule } from "../../shared/shared.module";

import { PatientsRoutingModule } from "./patients-routing.module";
import { PatientsComponent } from "./patients/patients.component";

import { PatientsEffects, patientsReducer } from "./ngrx-store";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [PatientsComponent],
  imports: [
    CommonModule,
    SharedModule,
    PatientsRoutingModule,
    StoreModule.forFeature("patients", patientsReducer),
    EffectsModule.forFeature([PatientsEffects]),
  ],
  providers: [],
})
export class PatientsModule {}
