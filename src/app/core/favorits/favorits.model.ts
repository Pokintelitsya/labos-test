import { Order } from "app/shared/models/order.model";
import { Patient } from "app/shared/models/patient.model";

export interface FavoritsState {
    orders: Order[];
    patients: Patient[];
    ordersIds: Record<string, true>;
    patientsIds: Record<string, true>;
}