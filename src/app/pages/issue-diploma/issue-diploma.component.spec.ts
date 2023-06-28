import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueDiplomaComponent } from './issue-diploma.component';

describe('IssueDiplomaComponent', () => {
  let component: IssueDiplomaComponent;
  let fixture: ComponentFixture<IssueDiplomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IssueDiplomaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IssueDiplomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
