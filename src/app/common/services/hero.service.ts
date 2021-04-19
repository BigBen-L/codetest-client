import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

import { Observable } from 'rxjs';
import Hero from '../../../../../server/src/models/hero';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private http: HttpClient) {}

  // Url that your server is running on
  private BASE_URL = 'http://localhost:3000';

  getAllHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${this.BASE_URL}/heroes`);
  }

  getHeroById(id: string): Observable<Hero> {
    return this.http.get<Hero>(`${this.BASE_URL}/heroes/${id}`);
  }
}
