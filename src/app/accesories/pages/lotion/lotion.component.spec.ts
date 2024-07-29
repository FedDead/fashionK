import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotionComponent } from './lotion.component';

describe('LotionComponent', () => {
  let component: LotionComponent;
  let fixture: ComponentFixture<LotionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LotionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LotionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
