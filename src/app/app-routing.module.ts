import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'listado-tareas',
    loadChildren: () => import('./listado-tareas/listado-tareas.module').then( m => m.ListadoTareasPageModule)
  },
  {
    path: 'create-tarea',
    loadChildren: () => import('./create-tarea/create-tarea.module').then( m => m.CreateTareaPageModule)
  },
  {
    path: 'edit-tarea/:id',
    loadChildren: () => import('./edit-tarea/edit-tarea.module').then( m => m.EditTareaPageModule)
  },
  {
    path: 'acerca-de',
    loadChildren: () => import('./acerca-de/acerca-de.module').then( m => m.AcercaDePageModule)
  },
  {
    path: 'modal-editar',
    loadChildren: () => import('./modal-editar/modal-editar.module').then( m => m.ModalEditarPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
