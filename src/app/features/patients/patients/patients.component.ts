import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";
import { PatientsService } from "app/shared/services/patients/patients.service";

@Component({
  selector: "st-patients",
  templateUrl: "./patients.component.html",
  styleUrls: ["./patients.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;

  constructor(private patientsService: PatientsService) {}

  ngOnInit() {}

  fetchPatients() {
    this.patientsService.getPatients().subscribe((patients) => {
      console.log("patients resp", patients);
    });
  }
}
