import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersLs11Component } from './list-users-ls11.component';

describe('ListUsersLs11Component', () => {
  let component: ListUsersLs11Component;
  let fixture: ComponentFixture<ListUsersLs11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUsersLs11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUsersLs11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
