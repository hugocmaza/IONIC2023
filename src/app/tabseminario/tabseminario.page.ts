import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from '../model/tarea';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-tabseminario',
  templateUrl: './tabseminario.page.html',
  styleUrls: ['./tabseminario.page.scss'],
})
export class TabseminarioPage implements OnInit {

  tareas: Tarea[] = [];

  constructor(private service: TareasService,  private router: Router) { }

  ngOnInit(): void {
    this.service.getAllTareas().subscribe((resp: Tarea[])=>{
      this.tareas = resp;
    });
  }

}
