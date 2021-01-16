import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SingInComponent } from './singin/singin.component';
import { SingUpComponent } from './singup/singup.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, RouterModule, FormsModule],
  declarations: [SingInComponent, SingUpComponent],
})
export class HomeModule {}
