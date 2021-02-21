import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Ordem } from 'src/app/shared/models/ordem.interface';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  ordem: Ordem;

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.ordem = navigation?.extras?.state.value;
   }

  ngOnInit(): void {
    if(typeof this.ordem === 'undefined'){
      this.route.navigate(['list']);
    }
  }

  onGoToEditar(): void {
    this.navigationExtras.state.value = this.ordem;
    this.route.navigate(['editar'], this.navigationExtras);
  }

  onGoToFinalizar(): void {
    alert('Finalizado!');
  }

  onGoBackToLista(): void{
    this.route.navigate(['list']);
  }

}
