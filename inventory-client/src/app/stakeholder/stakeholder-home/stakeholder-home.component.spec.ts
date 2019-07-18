import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StakeholderHomeComponent } from './stakeholder-home.component';

describe('StakeholderHomeComponent', () => {
  let component: StakeholderHomeComponent;
  let fixture: ComponentFixture<StakeholderHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StakeholderHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StakeholderHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
