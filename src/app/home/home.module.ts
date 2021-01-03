import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SingInComponent } from './singin/singin.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule],
  declarations: [SingInComponent],
})
export class HomeModule {}
