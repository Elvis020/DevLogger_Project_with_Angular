import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { LogFormComponent } from './component/log-form/log-form.component';
import { LogsComponent } from './component/logs/logs.component';
import { LogService } from './services/log.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LogFormComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
