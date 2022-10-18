import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateTareaPageRoutingModule } from './create-tarea-routing.module';

import { CreateTareaPage } from './create-tarea.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreateTareaPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [CreateTareaPage]
})
export class CreateTareaPageModule {
}
