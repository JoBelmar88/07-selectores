import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RESTPaisesResponse } from '../interfaces/paises.interface';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = 'https://restcountries.com/v3.1';

  private _regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  get regiones(): string[] {
    return [...this._regiones];
  }

  constructor(private http: HttpClient) { }

  getPaisesPorRegion(region: string): Observable<RESTPaisesResponse[]>{
    const url: string = `${this.baseUrl}/region/${region}?fields=name,cca3`;
    return this.http.get<RESTPaisesResponse[]>( url );
  };
}
