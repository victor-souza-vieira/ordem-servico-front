import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ordem } from '../../models/ordem.interface';

@Component({
  selector: 'app-ordem-form',
  templateUrl: './ordem-form.component.html',
  styleUrls: ['./ordem-form.component.scss']
})
export class OrdemFormComponent implements OnInit {
  ordem: Ordem;
  ordemForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) {
    const navigation = this.route.getCurrentNavigation();
    this.ordem = navigation?.extras?.state?.value;
  }

  ngOnInit(): void {
    this.initForm();

    if(typeof this.ordem === 'undefined'){
      this.route.navigate(['new']);
    }else{
      this.ordemForm.patchValue(this.ordem);
    }
  }

  onSave(): void{
    console.log('salvo', this.ordemForm.value);
  }

  private initForm(): void{
    this.ordemForm = this.fb.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      endereco: ['', [Validators.required]],
      preco: ['', [Validators.required]],
    });
  }

  onGoBackLista(): void{
    this.route.navigate(['list']);
  }
}
