import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EgyCurrentPipe } from './pipes/egy-current.pipe';

@NgModule({
  declarations: [ EgyCurrentPipe],
  imports: [CommonModule, RouterModule],
  exports: [ EgyCurrentPipe],
})
export class SharedModule {}
