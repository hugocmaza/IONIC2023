import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-create-tarea',
  templateUrl: './create-tarea.page.html',
  styleUrls: ['./create-tarea.page.scss'],
})
export class CreateTareaPage implements OnInit {

  formulario: FormGroup;

  constructor(private tareasService: TareasService,
 private router: Router, formBuilder: FormBuilder) {
    /*this.form = new FormGroup({
     id: new FormControl(0),
   titulo : new FormControl(""),
   fecha : new FormControl(new Date())
 })*/

 this.formulario = formBuilder.group<Tarea>({
   id:0,
   titulo : '',
   fecha:new Date()
 });
 console.log(this.formulario);
 this.formulario.get('titulo')?.addValidators(Validators.required);

 this.formulario.get('fecha')?.addValidators([Validators.required]);
 }

ngOnInit(): void {
}

show(producto: Tarea){
 this.formulario.patchValue(producto);
}

formSubmit(){
 if (this.formulario.valid){
   this.tareasService.addTarea(this.formulario.value).subscribe(()=>{
     this.router.navigate(['home']);
   });
 }else{
 }
}
}
