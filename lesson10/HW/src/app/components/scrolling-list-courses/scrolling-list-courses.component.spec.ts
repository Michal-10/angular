import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingListCoursesComponent } from './scrolling-list-courses.component';

describe('ScrollingListCoursesComponent', () => {
  let component: ScrollingListCoursesComponent;
  let fixture: ComponentFixture<ScrollingListCoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScrollingListCoursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScrollingListCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
