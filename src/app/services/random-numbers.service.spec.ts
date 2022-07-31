import { TestBed } from '@angular/core/testing';
import { RandomNumbersService } from './random-numbers.service';

describe('RandomNumbersService', () => {
  let service: RandomNumbersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomNumbersService);
  });

  it('should created the randomNumberService', () => {
    expect(service).toBeTruthy();
  });

  it('should return randomListMath with five elements', () => {
    const arr = service.getRandomListMath()
    expect(arr.length).toBe(5)
  })

  it('should return randomListNumber with five elements', () => {
    const arr = service.getRandomListNumber()
    expect(arr.length).toBe(5)
  })

  it('should return randomListDate with five elements', () => {
    const arr = service.getRandomListDate()
    expect(arr.length).toBe(5)
  })
});
