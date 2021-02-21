import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { OrdemFormComponent } from './ordem-form.component';



@NgModule({
  declarations: [OrdemFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports:[OrdemFormComponent]
})
export class OrdemFormModule { }
