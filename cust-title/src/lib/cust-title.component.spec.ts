import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustTitleComponent } from './cust-title.component';

describe('CustTitleComponent', () => {
  let component: CustTitleComponent;
  let fixture: ComponentFixture<CustTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
