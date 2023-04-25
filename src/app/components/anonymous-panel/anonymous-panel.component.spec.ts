import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnonymousPanelComponent } from './anonymous-panel.component';

describe('AnonymousPanelComponent', () => {
  let component: AnonymousPanelComponent;
  let fixture: ComponentFixture<AnonymousPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnonymousPanelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnonymousPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
