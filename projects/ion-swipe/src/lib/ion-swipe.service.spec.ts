import { TestBed } from '@angular/core/testing';

import { IonSwipeService } from './ion-swipe.service';

describe('IonSwipeService', () => {
  let service: IonSwipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonSwipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
