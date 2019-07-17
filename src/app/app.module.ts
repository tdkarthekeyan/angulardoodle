import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MyMaterialModule } from './material.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { DataTableComponent } from './data-table/data-table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { SendRequestComponent } from './send-request/send-request.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainScreenComponent,
    DataTableComponent,
    AddUserComponent,
    SendRequestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MyMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'main-screen', component: MainScreenComponent },
      { path: 'data-table', component: DataTableComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'send-request', component: SendRequestComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

