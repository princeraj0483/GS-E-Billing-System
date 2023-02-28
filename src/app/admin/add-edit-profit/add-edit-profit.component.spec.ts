import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditProfitComponent } from './add-edit-profit.component';

describe('AddEditProfitComponent', () => {
  let component: AddEditProfitComponent;
  let fixture: ComponentFixture<AddEditProfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditProfitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditProfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
