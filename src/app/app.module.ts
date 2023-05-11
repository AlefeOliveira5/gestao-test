import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AtendimentoComponent } from './components/atendimento.component';
import { AcaoComponent } from './components/acao/acao.component';

@NgModule({
  declarations: [
    AppComponent,
    AtendimentoComponent,
    AcaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
