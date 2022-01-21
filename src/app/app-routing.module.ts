import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlannerModule } from './planner/planner.module';
import { RecipesModule } from './recipes/recipes.module';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
