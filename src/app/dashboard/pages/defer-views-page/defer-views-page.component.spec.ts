import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferViewsPageComponent } from './defer-views-page.component';

describe('DeferViewsPageComponent', () => {
  let component: DeferViewsPageComponent;
  let fixture: ComponentFixture<DeferViewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferViewsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferViewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
