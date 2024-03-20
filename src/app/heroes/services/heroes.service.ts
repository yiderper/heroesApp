
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environments } from '../../../environment/environment';
import { Hero } from '../interfaces/hero.interface';

@Injectable({ providedIn: 'root' })
export class HeroesService {

  private baseUrl: string = environments.baseUrl;

  constructor( private http: HttpClient ) { }

    getHeroes():Observable<Hero[]> {

      return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);

    }


}
