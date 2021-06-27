import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IonSwipeComponent } from './ion-swipe.component';

describe('IonSwipeComponent', () => {
  let component: IonSwipeComponent;
  let fixture: ComponentFixture<IonSwipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IonSwipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IonSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
