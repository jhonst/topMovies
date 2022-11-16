import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomMovieComponent } from './random-movie.component';

describe('RandomMovieComponent', () => {
  let component: RandomMovieComponent;
  let fixture: ComponentFixture<RandomMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomMovieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RandomMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
