import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizePolicyDetailsComponent } from './customize-policy-details.component';

describe('CustomizePolicyDetailsComponent', () => {
  let component: CustomizePolicyDetailsComponent;
  let fixture: ComponentFixture<CustomizePolicyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomizePolicyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizePolicyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
