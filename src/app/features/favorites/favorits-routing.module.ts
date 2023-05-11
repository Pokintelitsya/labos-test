import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FavoritesComponent } from "./favorites/favorites.component";

const routes: Routes = [
  { path: "", component: FavoritesComponent, data: { title: "Favourites" } },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class FavoritsRoutingModule {}
