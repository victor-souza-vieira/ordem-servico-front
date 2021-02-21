import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  navigationExtras: NavigationExtras = {
    state: {
      value: null
    }
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  onGoToEditar(ordem: any) : void {
    this.navigationExtras.state.value = ordem;
    this.route.navigate(['editar'], this.navigationExtras);
  }
  onGoToDetalhes(ordem: any) : void {
    this.navigationExtras.state.value = ordem;
    this.route.navigate(['detalhes'], this.navigationExtras);
  }
  onGoToApagar(ordem: any) : void {
    alert('deletado');
   }

}
