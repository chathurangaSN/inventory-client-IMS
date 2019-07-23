import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenstockStockComponent } from './openstock-stock.component';

describe('OpenstockStockComponent', () => {
  let component: OpenstockStockComponent;
  let fixture: ComponentFixture<OpenstockStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenstockStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenstockStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
