import { NgModule } from "@angular/core";
import { FavoritesComponent } from "./favorites/favorites.component";
import { CommonModule } from "@angular/common";
import { SharedModule } from "app/shared/shared.module";
import { FavoritsRoutingModule } from "./favorits-routing.module";

@NgModule({
  declarations: [FavoritesComponent],
  imports: [CommonModule, SharedModule, FavoritsRoutingModule],
})
export class FavoritesModule {}
