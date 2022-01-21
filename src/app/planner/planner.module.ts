import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OverviewComponent, CardComponent],
  imports: [CommonModule, SharedModule],
  exports: [OverviewComponent],
})
export class PlannerModule {}
