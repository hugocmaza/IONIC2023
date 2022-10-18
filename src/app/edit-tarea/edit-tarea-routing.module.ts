import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTareaPage } from './edit-tarea.page';

const routes: Routes = [
  {
    path: '',
    component: EditTareaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTareaPageRoutingModule {}
