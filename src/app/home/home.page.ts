import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  tareas: Tarea[] = [];

  constructor(private service: TareasService,  private router: Router,
    public formBuilder: FormBuilder,) { }

  ngOnInit(): void {
    this.service.getAllTareas().subscribe((resp: Tarea[])=>{
      this.tareas = resp;
    });
  }

  borrar(id: number){
    this.service.deleteTarea(id)
    .subscribe((response) => {
        this.router.navigate(['/home']);

    });
  }

}
