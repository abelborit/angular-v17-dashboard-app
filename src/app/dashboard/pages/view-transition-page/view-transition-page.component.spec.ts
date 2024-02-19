import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTransitionPageComponent } from './view-transition-page.component';

describe('ViewTransitionPageComponent', () => {
  let component: ViewTransitionPageComponent;
  let fixture: ComponentFixture<ViewTransitionPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewTransitionPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewTransitionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
