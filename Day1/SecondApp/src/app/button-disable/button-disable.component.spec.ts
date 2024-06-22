import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonDisableComponent } from './button-disable.component';

describe('ButtonDisableComponent', () => {
  let component: ButtonDisableComponent;
  let fixture: ComponentFixture<ButtonDisableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonDisableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonDisableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
