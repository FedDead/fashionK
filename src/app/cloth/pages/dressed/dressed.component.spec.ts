import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DressedComponent } from './dressed.component';

describe('DressedComponent', () => {
  let component: DressedComponent;
  let fixture: ComponentFixture<DressedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DressedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DressedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
