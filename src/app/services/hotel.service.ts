import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { State, City, Chain, Brand, Hotel } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http: HttpClient) { }
  result: any;
  getStates(): Observable<State[]> {
    return this.http.get<State[]>('http://localhost:5000/home/states');
  }

  getCities(id: number): Observable<City[]> {
    return this.http.get<City[]>('http://localhost:5000/home/cities?stateId=' + id);
  }

  getChain(): Observable<Chain[]> {
    return this.http.get<Chain[]>('http://localhost:5000/home/chains');
  }

  getBrand(id: number): Observable<Brand[]> {
    return this.http.get<Brand[]>('http://localhost:5000/home/brands?chainId=' + id);
  }

  saveHotel(hotel: Hotel): Observable<any> {
    return this.http.post<Hotel>('http://localhost:5000/home/CreateHotel', hotel);
  }
}
