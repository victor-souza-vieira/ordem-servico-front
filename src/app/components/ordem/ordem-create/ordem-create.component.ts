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
    nomeCliente: "",
    telefone: "",
    endereco: "",
    preco: 0,
    busto: 0,
    cintura: 0,
    quadril: 0,
  }

  constructor(private ordemService: OrdemService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createOrdem(): void{
    this.ordemService.create(this.ordem).subscribe(() => {
      this.ordemService.showMessage('Ordem de serviço criada!')
      this.router.navigate(['/ordens'])
    })
    
  }

  cancelar(): void{
    this.router.navigate(['/ordens'])
  }

}
