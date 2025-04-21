import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalPersonalDetailsComponent } from './proposal-personal-details.component';

describe('ProposalPersonalDetailsComponent', () => {
  let component: ProposalPersonalDetailsComponent;
  let fixture: ComponentFixture<ProposalPersonalDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalPersonalDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalPersonalDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
