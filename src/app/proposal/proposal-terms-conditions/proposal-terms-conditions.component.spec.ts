import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalTermsConditionsComponent } from './proposal-terms-conditions.component';

describe('ProposalTermsConditionsComponent', () => {
  let component: ProposalTermsConditionsComponent;
  let fixture: ComponentFixture<ProposalTermsConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalTermsConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalTermsConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
