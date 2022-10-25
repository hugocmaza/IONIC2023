import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-modal-editar',
  templateUrl: './modal-editar.page.html',
  styleUrls: ['./modal-editar.page.scss'],
})
export class ModalEditarPage implements OnInit {

  @Input() idTarea: number;
  formulario: FormGroup;

  constructor(
    private modalController: ModalController,  private service: TareasService,
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
    this.service.getTareabyId(this.idTarea).subscribe((tarea: Tarea)=>{
      console.log('--------------'+tarea.fecha.toLocaleDateString);
      this.formulario.patchValue(tarea);
    });
   }
  async closeModel() {
    const close = 'Modal Removed';
    this.service.updateTarea(this.idTarea,this.formulario.value).subscribe(()=>{

    });
    await this.modalController.dismiss(close);
  }



}
