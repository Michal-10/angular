import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTaechersComponent } from './list-taechers.component';

describe('ListTaechersComponent', () => {
  let component: ListTaechersComponent;
  let fixture: ComponentFixture<ListTaechersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListTaechersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListTaechersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
