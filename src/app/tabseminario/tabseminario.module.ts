import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabseminarioPageRoutingModule } from './tabseminario-routing.module';

import { TabseminarioPage } from './tabseminario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabseminarioPageRoutingModule
  ],
  declarations: [TabseminarioPage]
})
export class TabseminarioPageModule {}
