import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  EventEmitter,
  Output,
} from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { Patient, PatientView } from "app/shared/models/patient.model";

@Component({
  selector: "st-patients-table",
  templateUrl: "./patients-table.component.html",
  styleUrls: ["./patients-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsTableComponent {
  @Input() set patients(patients: PatientView[]) {
    this.setTableData(patients);
  }
  @Input() withSearch = false;
  @Input() favoriteAction: "toggle" | "delete" = "toggle";
  @Output() deleteFavorite = new EventEmitter<PatientView>();
  @Output() addFavorite = new EventEmitter<PatientView>();

  dataSource: MatTableDataSource<PatientView>;
  displayedColumns: string[] = [
    "code",
    "firstName",
    "lastName",
    "age",
    "sex",
    "action",
  ];

  constructor() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

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

  private setTableData(patients: PatientView[]) {
    this.dataSource = new MatTableDataSource(patients);
    this.dataSource.filterPredicate = (data, filter) => {
      const orderName = data.firstName.trim().toLowerCase();
      const filterTerm = filter.trim().toLowerCase();
      return orderName.trim().includes(filterTerm);
    };
  }
}
