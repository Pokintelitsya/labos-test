import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import { Patient, PatientView } from "app/shared/models/patient.model";

@Component({
  selector: "st-patients-table",
  templateUrl: "./patients-table.component.html",
  styleUrls: ["./patients-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsTableComponent {
  @Input() patients: Patient[] = [];
  @Input() favoriteAction: "toggle" | "delete" = "toggle";
  @Output() deleteFavorite = new EventEmitter<PatientView>();
  @Output() addFavorite = new EventEmitter<PatientView>();

  displayedColumns: string[] = ["code", "fullName", "age", "sex", "action"];

  constructor() {}

  toggleFavorite(patient: PatientView) {
    if (patient.isFavorite) {
      this.deleteFavorite.emit(patient);
    } else {
      this.addFavorite.emit(patient);
    }
  }

  deleteFromFavorite(patient: PatientView) {
    this.deleteFavorite.emit(patient);
  }
}
