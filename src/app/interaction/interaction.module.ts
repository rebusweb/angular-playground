import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InteractionComponent } from './interaction.component';
import { CounterComponent } from './counter/counter.component';
import { IndecrementComponent } from './indecrement/indecrement.component';
import { FooComponent } from './foo/foo.component';
import { BandComponent } from './band/band.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    InteractionComponent,
    FooComponent,
    BandComponent,
    CounterComponent,
    IndecrementComponent
  ]
})
export class InteractionModule { }
