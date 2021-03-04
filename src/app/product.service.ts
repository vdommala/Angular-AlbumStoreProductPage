import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators'

@Injectable()
export class ProductService {
  private _albumUrl = '../assets/album.json';
  constructor(private _http: Http) { }
 public getAlbum(id: number) {
    return this._http.get(this._albumUrl).pipe(map(res => res.json()));
 }
}
