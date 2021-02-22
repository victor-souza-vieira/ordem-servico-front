import { Ordem } from './ordem.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdemService {

  baseUrl: string = "http://localhost:8080/ordens-servico"

  constructor(private snackBar: MatSnackBar,
    private httpClient: HttpClient) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(ordem: Ordem): Observable<Ordem> {
    return this.httpClient.post<Ordem>(this.baseUrl, ordem);
  }

  read(): Observable<Ordem[]>{
    return this.httpClient.get<Ordem[]>(this.baseUrl);
  }
}
