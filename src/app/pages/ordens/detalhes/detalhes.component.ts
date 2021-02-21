import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  ordem: any = null;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.ordem = navigation?.extras?.state;
   }

  ngOnInit(): void {
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
