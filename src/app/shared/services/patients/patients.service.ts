import { Injectable } from "@angular/core";
import { ApiService } from "../api.service";
import { of } from "rxjs";
import { Patient } from "app/shared/models/patient.model";
import { catchError, map } from "rxjs/operators";
import { BaseResponse } from "app/shared/models/base-response.model";

interface PatientsResponse extends BaseResponse {
  patient: Patient[];
}

@Injectable({
  providedIn: "root",
})
export class PatientsService {
  constructor(private apiService: ApiService) {}

  getPatients() {
    return this.apiService.get<PatientsResponse>("51597ef3").pipe(
      map((response) => {
        if (response?.patient) return response.patient;
        else return [];
      }),
      catchError(() => of([]))
    );
  }
}
