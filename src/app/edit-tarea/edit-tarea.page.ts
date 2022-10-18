import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.page.html',
  styleUrls: ['./edit-tarea.page.scss'],
})
export class EditTareaPage implements OnInit {

  formulario: FormGroup;
  id: any;

  constructor(
    private service: TareasService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.formulario = formBuilder.group<Tarea>({
      id:0,
      titulo : '',
      fecha:new Date()
    });
    console.log(this.formulario);
    this.formulario.get('titulo')?.addValidators(Validators.required);
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: any)=>{
      const id = params.id;
      this.service.getTareabyId(id).subscribe((tarea: Tarea)=>{
        console.log('--------------'+tarea.fecha.toLocaleDateString);
        this.formulario.patchValue(tarea);
      });
    });
  }

  updateTarea(){
    console.log('-------'+this.id+'-----'+ this.formulario);
		this.service.updateTarea(this.id,this.formulario.value).subscribe(()=>{
      this.router.navigate(['/tabs/home']);
    });
	}


}
