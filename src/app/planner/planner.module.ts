import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';
import { PlannerComponent } from './planner/planner.component';

@NgModule({
  declarations: [CardComponent, PlannerComponent],
  imports: [CommonModule, SharedModule],
  exports: [PlannerComponent],
})
export class PlannerModule {}
