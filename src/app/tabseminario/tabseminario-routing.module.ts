import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabseminarioPage } from './tabseminario.page';

const routes: Routes = [
  {
    path: '',
    component: TabseminarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabseminarioPageRoutingModule {}
