import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  ordem = null;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.ordem = navigation?.extras?.state;
   }

  ngOnInit(): void {
  }

  // PAROU EM 41:20

}
