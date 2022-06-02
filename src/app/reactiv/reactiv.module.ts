import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactivRoutingModule } from './reactiv-routing.module';
import { BasicosComponent } from './basicos/basicos.component';
import { DinamicosComponent } from './dinamicos/dinamicos.component';
import { SwitchesComponent } from './switches/switches.component';



@NgModule({
  declarations: [
    BasicosComponent,
    DinamicosComponent,
    SwitchesComponent
  ],
  imports: [
    CommonModule,
    ReactivRoutingModule
  ]
})
export class ReactivModule { }
