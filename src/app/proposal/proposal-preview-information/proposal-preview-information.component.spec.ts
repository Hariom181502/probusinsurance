import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalPreviewInformationComponent } from './proposal-preview-information.component';

describe('ProposalPreviewInformationComponent', () => {
  let component: ProposalPreviewInformationComponent;
  let fixture: ComponentFixture<ProposalPreviewInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalPreviewInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProposalPreviewInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
