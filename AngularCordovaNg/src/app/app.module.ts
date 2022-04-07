import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import { CameraComponent } from './pages/camera/camera.component';
import { DataComponent } from './pages/data/data.component';
import { NotifyComponent } from './pages/notify/notify.component';
import {MatDividerModule} from "@angular/material/divider";
import {HttpClientModule} from "@angular/common/http";
import { LayoutComponent } from './pages/layout/layout.component';
import {BroadcastService} from "./services/broadcast.service";

@NgModule({
  declarations: [
    AppComponent,
    CameraComponent,
    DataComponent,
    NotifyComponent,
    LayoutComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [
    BroadcastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
