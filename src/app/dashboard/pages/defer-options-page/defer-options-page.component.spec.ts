import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeferOptionsPageComponent } from './defer-options-page.component';

describe('DeferOptionsPageComponent', () => {
  let component: DeferOptionsPageComponent;
  let fixture: ComponentFixture<DeferOptionsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeferOptionsPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeferOptionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
