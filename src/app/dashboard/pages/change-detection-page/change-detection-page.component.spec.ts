import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionPageComponent } from './change-detection-page.component';

describe('ChangeDetectionPageComponent', () => {
  let component: ChangeDetectionPageComponent;
  let fixture: ComponentFixture<ChangeDetectionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeDetectionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChangeDetectionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
