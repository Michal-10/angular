import { TestBed } from '@angular/core/testing';
import { ListUsersLs11Service } from './list-users-ls11.service';


describe('ListUsersLs11Service', () => {
  let service: ListUsersLs11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListUsersLs11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
