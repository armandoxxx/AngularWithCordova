import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Article} from "../models/article";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private http: HttpClient) { }


  getData(): Observable<Article[]> {
    let url: string = 'https://www.klipingmap.com/v3.0/ws/Articles?dcStringToken=48d427c6-f103-46de-9718-eca79ab09136&format=json&provider=presscut';
    return this.http.get<Article[]>(url);
  }


}
