import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRecipeButtonComponent } from './new-recipe-button.component';

describe('NewRecipeButtonComponent', () => {
  let component: NewRecipeButtonComponent;
  let fixture: ComponentFixture<NewRecipeButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewRecipeButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewRecipeButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
