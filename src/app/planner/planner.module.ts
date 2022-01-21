import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [OverviewComponent, CardComponent],
  imports: [CommonModule],
  exports: [OverviewComponent],
})
export class PlannerModule {}
