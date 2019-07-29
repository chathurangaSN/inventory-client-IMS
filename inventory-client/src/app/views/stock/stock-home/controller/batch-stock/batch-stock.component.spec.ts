import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchStockComponent } from './batch-stock.component';

describe('BatchStockComponent', () => {
  let component: BatchStockComponent;
  let fixture: ComponentFixture<BatchStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
