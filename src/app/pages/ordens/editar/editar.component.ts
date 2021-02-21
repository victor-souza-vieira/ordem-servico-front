import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  ordem = null;
  ordemForm: FormGroup;
  constructor(private route: Router, private fb: FormBuilder) {
    const navigation = this.route.getCurrentNavigation();
    this.ordem = navigation?.extras?.state;
  }

  ngOnInit(): void {
    this.initForm();
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

}
