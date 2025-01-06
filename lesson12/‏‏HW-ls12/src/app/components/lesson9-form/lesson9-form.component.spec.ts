import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lesson9FormComponent } from './lesson9-form.component';

describe('Lesson9FormComponent', () => {
  let component: Lesson9FormComponent;
  let fixture: ComponentFixture<Lesson9FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lesson9FormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Lesson9FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
