import { OrdemService } from './../ordem.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordem-create',
  templateUrl: './ordem-create.component.html',
  styleUrls: ['./ordem-create.component.css']
})
export class OrdemCreateComponent implements OnInit {

  constructor(private ordemService: OrdemService,
    private router: Router) { }

  ngOnInit(): void {
    
  }

  createOrdem(): void{
    this.ordemService.hh('hey broder!')
  }

  cancelar(): void{
    this.router.navigate(['/ordens'])
  }

}
