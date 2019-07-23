import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionsStockComponent } from './transactions-stock.component';

describe('TransactionsStockComponent', () => {
  let component: TransactionsStockComponent;
  let fixture: ComponentFixture<TransactionsStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionsStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionsStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
