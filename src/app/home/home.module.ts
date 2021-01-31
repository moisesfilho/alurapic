import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { VMessageModule } from '../shared/components/vmessage/vmessage.module';
import { SingInComponent } from './singin/singin.component';
import { SignUpComponent } from './signup/singup.component';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, VMessageModule, RouterModule, ReactiveFormsModule],
  declarations: [SingInComponent, SignUpComponent, HomeComponent],
})
export class HomeModule {}
