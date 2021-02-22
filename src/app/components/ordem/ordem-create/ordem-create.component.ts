import { Ordem } from './../ordem.model';
import { OrdemService } from './../ordem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-create',
  templateUrl: './ordem-create.component.html',
  styleUrls: ['./ordem-create.component.css']
})
export class OrdemCreateComponent implements OnInit {

  ordem: Ordem = {
    nomeCliente: "Maria Clara",
    telefone: "909990909",
    endereco: "endereco é lá",
    preco: 11,
    busto: 12.4,
    cintura: 13.5,
    quadril: 14.6,
  }

  constructor(private ordemService: OrdemService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createOrdem(): void{
    this.ordemService.create(this.ordem).subscribe(() => {
      this.ordemService.showMessage('hey broder!')
      this.router.navigate(['/ordens'])
    })
    
  }

  cancelar(): void{
    this.router.navigate(['/ordens'])
  }

}
