import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-crud',
  templateUrl: './ordem-crud.component.html',
  styleUrls: ['./ordem-crud.component.css']
})
export class OrdemCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToOrdemCreate(): void{
    this.router.navigate(['/ordens/ordem-create'])
  }

}
