import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PanelComponent } from './panel/panel.component';
import { ProgressComponent } from './progress/progress.component';
import { AttemptsComponent } from './attempts/attempts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PanelComponent,
    ProgressComponent,
    AttemptsComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
