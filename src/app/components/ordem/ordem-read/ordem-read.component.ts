import { Ordem } from './../ordem.model';
import { OrdemService } from './../ordem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-read',
  templateUrl: './ordem-read.component.html',
  styleUrls: ['./ordem-read.component.css']
})
export class OrdemReadComponent implements OnInit {

  ordens: Ordem[] = []
  displayedColumns = ['Nº', 'Cliente', 'Telefone', 'Preço (R$)', 'Status', 'Abertura', 'Encerramento']
  constructor(private ordemService: OrdemService) { 
    
  }

  ngOnInit(): void {
    this.ordemService.read().subscribe(ordens => {
      this.ordens = ordens
      console.log(ordens)
    })
  }

}
