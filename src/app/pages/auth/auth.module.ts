import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  
  declarations: [ LoginComponent,
    RegisterComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
