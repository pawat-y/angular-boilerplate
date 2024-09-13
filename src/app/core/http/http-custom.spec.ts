import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import {
  BLOB_RESPONSE_MOCK,
  HTTP_RESPONSE_MOCK,
} from '../../tests/mocks/http-custom.mock';
import { HttpCustom } from './http-custom';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

describe('HttpCustom', () => {
  let service: HttpCustom;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [],
    providers: [HttpCustom, provideHttpClient(withInterceptorsFromDi()), provideHttpClientTesting()]
});
    service = TestBed.inject(HttpCustom);
    httpMock = TestBed.inject(HttpTestingController);

    service.baseUrl = 'localhost:8080/api';
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should send get request', () => {
    service.get('/path').subscribe((data) => {
      expect(data).toEqual(HTTP_RESPONSE_MOCK);
    });

    const req = httpMock.expectOne('localhost:8080/api/path');
    expect(req.request.method).toBe('GET');
    req.flush(HTTP_RESPONSE_MOCK);
  });

  it('should send post request', () => {
    service.post('/path', HTTP_RESPONSE_MOCK).subscribe((data) => {
      expect(data).toEqual(HTTP_RESPONSE_MOCK);
    });

    const req = httpMock.expectOne('localhost:8080/api/path');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(HTTP_RESPONSE_MOCK);
    req.flush(HTTP_RESPONSE_MOCK);
  });

  it('should send put request', () => {
    service.put('/path', HTTP_RESPONSE_MOCK).subscribe((data) => {
      expect(data).toEqual(HTTP_RESPONSE_MOCK);
    });

    const req = httpMock.expectOne('localhost:8080/api/path');
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(HTTP_RESPONSE_MOCK);
    req.flush(HTTP_RESPONSE_MOCK);
  });

  it('should send delete request', () => {
    service.delete('/path').subscribe((data) => {
      expect(data).toEqual(HTTP_RESPONSE_MOCK);
    });

    const req = httpMock.expectOne('localhost:8080/api/path');
    expect(req.request.method).toBe('DELETE');
    req.flush(HTTP_RESPONSE_MOCK);
  });

  it('should send get request with blob response', () => {
    const mock = new Blob(['lorem ipsum'], { type: 'text/plain' });

    service.getBlob('/file').subscribe((data: any) => {
      expect(data.size).toBe(BLOB_RESPONSE_MOCK.size);
      expect(data.type).toBe(BLOB_RESPONSE_MOCK.type);
    });

    const req = httpMock.expectOne('localhost:8080/api/file');
    expect(req.request.method).toBe('GET');
    req.flush(BLOB_RESPONSE_MOCK);
  });
});
