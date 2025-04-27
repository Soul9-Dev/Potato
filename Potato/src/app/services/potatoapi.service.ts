
// Service  |  requisito

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  // <--


@Injectable({
  providedIn: 'root'
})
export class PotatoApiService{

  constructor(private http: HttpClient) { }  

  //função para buscar dados da API
  pegarDados() {

                    //método get  |  requisito 
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
