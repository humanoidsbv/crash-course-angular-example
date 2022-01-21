import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlannerModule } from './planner/planner.module';
import { RecipesModule } from './recipes/recipes.module';
import { NavigationComponent } from './navigation/navigation.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, ModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PlannerModule,
    RecipesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
