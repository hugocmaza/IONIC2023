import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabseminarioPageRoutingModule } from './tabseminario-routing.module';

import { TabseminarioPage } from './tabseminario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabseminarioPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TabseminarioPage]
})
export class TabseminarioPageModule {}
