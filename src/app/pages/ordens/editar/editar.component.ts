import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  value = null;
  constructor(private route: Router) {
    const navigation = this.route.getCurrentNavigation();
    this.value = navigation?.extras?.state;
  }

  ngOnInit(): void {
  }

}
