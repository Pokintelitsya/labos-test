import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from "@angular/core";
import { Patient } from "app/shared/models/patient.model";

@Component({
  selector: "st-patients-table",
  templateUrl: "./patients-table.component.html",
  styleUrls: ["./patients-table.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PatientsTableComponent implements OnInit {
  @Input() patients: Patient[] = [];

  displayedColumns: string[] = ["code", "fullName", "age", "sex"];

  constructor() {}

  ngOnInit(): void {
    this.setTableData();
  }

  private setTableData() {}
}
