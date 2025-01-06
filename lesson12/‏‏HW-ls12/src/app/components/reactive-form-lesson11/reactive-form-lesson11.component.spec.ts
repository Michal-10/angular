import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormLesson11Component } from './reactive-form-lesson11.component';

describe('ReactiveFormLesson11Component', () => {
  let component: ReactiveFormLesson11Component;
  let fixture: ComponentFixture<ReactiveFormLesson11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormLesson11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormLesson11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
