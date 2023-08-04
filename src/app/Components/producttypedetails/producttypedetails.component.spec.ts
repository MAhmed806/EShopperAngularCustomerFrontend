import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducttypedetailsComponent } from './producttypedetails.component';

describe('ProducttypedetailsComponent', () => {
  let component: ProducttypedetailsComponent;
  let fixture: ComponentFixture<ProducttypedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducttypedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProducttypedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
