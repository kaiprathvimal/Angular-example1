import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {ServerComponent} from "./Server/server.component";
import {ServersComponent} from "./Servers/servers.component";
import {WarningComponent} from "./Warning/warning.component";
import {ErrorComponent} from "./Error/error.component";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
