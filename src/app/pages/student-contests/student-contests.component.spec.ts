import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentContestsComponent } from './student-contests.component';

describe('StudentContestsComponent', () => {
  let component: StudentContestsComponent;
  let fixture: ComponentFixture<StudentContestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentContestsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentContestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
