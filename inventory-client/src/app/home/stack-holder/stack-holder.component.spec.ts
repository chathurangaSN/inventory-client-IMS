import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StackHolderComponent } from './stack-holder.component';

describe('StackHolderComponent', () => {
  let component: StackHolderComponent;
  let fixture: ComponentFixture<StackHolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StackHolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StackHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
