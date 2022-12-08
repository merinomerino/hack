import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from 'rxjs';
import { Hack_Interface } from '../interfaces/hack-interface';
import { HackModel } from '../models/heroe.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  private url = 'https://loginapp-f3d37-default-rtdb.firebaseio.com';


  constructor(private http: HttpClient) { }


  crearHack(heroe: HackModel) {

    return this.http.post(`${this.url}/hack.json`, heroe)
      .pipe(
        map((resp: any) => {
          heroe.id = resp.name;
          return heroe;
        })
      );

  }

  actualizarHack(heroe: HackModel) {

    const heroeTemp = {
      ...heroe
    };


    return this.http.put(`${this.url}/hack/${heroe.id}.json`, heroeTemp);


  }

  borrarHack(id: string) {

    return this.http.delete(`${this.url}/hack/${id}.json`);

  }


  getHack(id: string) {

    return this.http.get(`${this.url}/hack/${id}.json`);

  }


  getHacks() {
    return this.http.get(`${this.url}/hack.json`)
      .pipe(
        map(this.crearArreglo),
        delay(0)
      );
  }



  private crearArreglo(heroesObj: any) {
    const heroes: HackModel[] = [];
    Object.keys(heroesObj).forEach(key => {
      const heroe: HackModel = heroesObj[key];
      heroe.id = key;
      heroes.push(heroe);
    });
    return heroes;
  }



}
