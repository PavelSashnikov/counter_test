import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Api } from 'src/app/entities/api/api.namespace';
import { getUrl } from '../helpers/api.helper';

@Injectable()
export class IncrementService {
  constructor(private http: HttpClient) {}

  increment(num: number): Observable<Api.incrementResponse> {
    return this.http.post<Api.incrementResponse>(getUrl('increment'), { num });
  }
}
