import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Example } from '../model/example.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getExample(): Observable<Example[]>{
    return this.httpClient.get<Example[]>('url-teste');
  }

  getByIdExample(id: number): Observable<Example>{
    return this.httpClient.get<Example>(`uri-teste/${id}`);
  }

  postExample(example: Example){
    if(example.id === null || example.id === undefined){
      return this.httpClient.post(`uri-teste`, example);
    } else {
      return this.httpClient.put(`uri-teste`, example);
    }
  }

  putFieldExample(id: number, campo: string){
    const headers = new HttpHeaders().append(
      'Content-Type',
      'application/json'
    );
    return this.httpClient.put(`uri-teste`, campo, {headers});
  }

  postFile(file: File){
    const headers = new HttpHeaders()
      .append('Content-Type', 'multipart/form-data')
      .append('Accept', 'application/json, text/plain, */*');
    const formData = new FormData();
    formData.append('file', file);
    this.httpClient.post('url-test', formData, {headers});
  }

  getFile(id: number){
    return this.httpClient.get(`url-teste/${id}`, {
      responseType: 'blob'
    });
  }
}

/*
Consumo API 
  exampleList: Example[];
  example: Example;
  file: File;

  funcao .. {
    this.service.metodoHttpExample(example)
      .subscribe(
        (resp: Example || Example[]) => { (...) }
        error => { (...) }
      );
  }

  this.getFile(id)
    .subscribe(
      (resp:any) => {
        const url = window.URL.createObjectURL(resp);
        window.open(url);
      },
      error => { (...) }
    );
*/