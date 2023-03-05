import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLossComponent } from './add-edit-loss.component';

describe('AddEditLossComponent', () => {
  let component: AddEditLossComponent;
  let fixture: ComponentFixture<AddEditLossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLossComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
