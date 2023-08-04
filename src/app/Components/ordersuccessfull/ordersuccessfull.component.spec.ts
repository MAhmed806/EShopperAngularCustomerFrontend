import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersuccessfullComponent } from './ordersuccessfull.component';

describe('OrdersuccessfullComponent', () => {
  let component: OrdersuccessfullComponent;
  let fixture: ComponentFixture<OrdersuccessfullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersuccessfullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrdersuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
