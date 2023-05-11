import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../../shared/shared.module";

import { OrdersComponent } from "./orders/orders.component";
import { OrdersRoutingModule } from "./orders-routing.module";
import { StoreModule } from "@ngrx/store";
import { OrdersEffects, ordersReducer } from "./state";
import { EffectsModule } from "@ngrx/effects";

@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    SharedModule,
    OrdersRoutingModule,
    StoreModule.forFeature("orders", ordersReducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule {}
