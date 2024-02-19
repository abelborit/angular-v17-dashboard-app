import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlFlowPageComponent } from './control-flow-page.component';

describe('ControlFlowPageComponent', () => {
  let component: ControlFlowPageComponent;
  let fixture: ComponentFixture<ControlFlowPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ControlFlowPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ControlFlowPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
