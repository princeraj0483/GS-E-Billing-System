import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditLedgerComponent } from './add-edit-ledger.component';

describe('AddEditLedgerComponent', () => {
  let component: AddEditLedgerComponent;
  let fixture: ComponentFixture<AddEditLedgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditLedgerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
