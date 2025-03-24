import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleQuotationComponent } from './single-quotation.component';

describe('SingleQuotationComponent', () => {
  let component: SingleQuotationComponent;
  let fixture: ComponentFixture<SingleQuotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleQuotationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
