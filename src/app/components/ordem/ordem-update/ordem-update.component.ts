import { Ordem } from "./../ordem.model";
import { OrdemService } from "./../ordem.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-ordem-update",
  templateUrl: "./ordem-update.component.html",
  styleUrls: ["./ordem-update.component.css"],
})
export class OrdemUpdateComponent implements OnInit {

  data_abertura: any
  data_encerramento: any

  ordem: Ordem = {
    id: 0,
    busto: 0,
    cintura: 0,
    endereco: "",
    nomeCliente: "",
    preco: 0,
    quadril: 0,
    telefone: "",
    status: "",
  };

  constructor(
    private ordemService: OrdemService,
    private router: Router,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.ordemService.readById(id).subscribe((ordem) => {
      this.ordem = ordem;
      this.data_abertura = new FormControl(new Date(typeof this.ordem.data_abertura == 'string' ? this.ordem.data_abertura : ''));
      this.data_encerramento = new FormControl(new Date(typeof this.ordem.data_encerramento == 'string' ? this.ordem.data_encerramento : ''));
    });
  }

  updateOrdem(): void {
    if(this.ordem.data_abertura){
      this.ordem.data_abertura = `${new Date(this.ordem.data_abertura).toISOString()}`
    }
    
    if(this.ordem.data_encerramento){
      this.ordem.data_encerramento = `${new Date(this.ordem.data_encerramento).toISOString()}`
    }

    
    this.ordemService.update(this.ordem).subscribe(() => {
      this.ordemService.showMessage('Ordem modificada!');
      this.router.navigate(['/ordens'])
    })
  }

  cancelar(): void {
    this.router.navigate(["/ordens"]);
  }
}
