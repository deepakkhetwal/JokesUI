import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostLikedJokeListComponent } from './most-liked-joke-list.component';

describe('MostLikedJokeListComponent', () => {
  let component: MostLikedJokeListComponent;
  let fixture: ComponentFixture<MostLikedJokeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostLikedJokeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostLikedJokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
