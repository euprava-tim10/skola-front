import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminContestsComponent } from './admin-contests.component';

describe('AdminContestsComponent', () => {
  let component: AdminContestsComponent;
  let fixture: ComponentFixture<AdminContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminContestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
