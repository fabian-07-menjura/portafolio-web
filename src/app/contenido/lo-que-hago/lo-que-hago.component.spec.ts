import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoQueHagoComponent } from './lo-que-hago.component';

describe('LoQueHagoComponent', () => {
  let component: LoQueHagoComponent;
  let fixture: ComponentFixture<LoQueHagoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoQueHagoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoQueHagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
