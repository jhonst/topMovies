import { TestBed, inject } from '@angular/core/testing';

import { MoviesService } from './movies.service';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers:[MoviesService]
    });
    service = TestBed.inject(MoviesService);
  });

  /*
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  */

  it('should create service', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

});
