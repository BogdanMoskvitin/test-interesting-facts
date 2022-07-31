import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { mockMath, mockNumber, mockDate } from '../mock/mock';
import { environment } from 'src/environments/environment';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;
  let apiUrl = environment.apiUrl;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    apiService = TestBed.inject(ApiService)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should created the ApiService', () => {
    expect(apiService).toBeTruthy();
  })

  it('should have made math request to GET data from expected URL', () => {
    const data = {name: 'math', math: 1}

    apiService.getData(data).subscribe((res) => {
      expect(res).toEqual(mockMath);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${apiUrl}${data.math}/math?json`
    });
    req.flush(mockMath);
  });

  it('should have made number request to GET data from expected URL', () => {
    const data = {name: 'number', number: 1}

    apiService.getData(data).subscribe((res) => {
      expect(res).toEqual(mockNumber);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${apiUrl}${data.number}?json`
    });
    req.flush(mockNumber);
  });

  it('should have made date request to GET data from expected URL', () => {
    const data = {name: 'date', day: 1, month: 2}

    apiService.getData(data).subscribe((res) => {
      expect(res).toEqual(mockDate);
    });

    const req = httpTestingController.expectOne({
      method: 'GET',
      url: `${apiUrl}${data.month}/${data.day}/date?json`
    });
    req.flush(mockDate);
  });
});
