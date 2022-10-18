import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'createTarea',
        loadChildren: () => import('../create-tarea/create-tarea.module').then(m => m.CreateTareaPageModule)
      },
      {
        path: 'editTarea',
        loadChildren: () => import('../edit-tarea/edit-tarea.module').then(m => m.EditTareaPageModule)
      },
      {
        path: 'acercaDe',
        loadChildren: () => import('../acerca-de/acerca-de.module').then(m => m.AcercaDePageModule)
      },
  {
    path: 'tabseminario',
    loadChildren: () => import('../tabseminario/tabseminario.module').then( m => m.TabseminarioPageModule)
  },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
