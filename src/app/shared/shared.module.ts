import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AsideComponent } from './components/aside/aside.component';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { ModalComponent } from './components/modal/modal.component';
import { RecipesService } from './services/recipes.service';

@NgModule({
  declarations: [
    AsideComponent,
    DropdownComponent,
    NavigationComponent,
    LayoutComponent,
    ModalComponent,
  ],
  imports: [CommonModule, AppRoutingModule],
  exports: [
    AsideComponent,
    DropdownComponent,
    NavigationComponent,
    LayoutComponent,
    ModalComponent,
  ],
})
export class SharedModule {}
