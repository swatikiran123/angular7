import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHomComponent } from './dashboard-hom.component';

describe('DashboardHomComponent', () => {
  let component: DashboardHomComponent;
  let fixture: ComponentFixture<DashboardHomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardHomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
