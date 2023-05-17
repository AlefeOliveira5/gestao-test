import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//IMPORTAÇÃO DOS MODULOS DO PROJETO
import { AppComponent } from './app.component';
import { AtendimentoComponent } from './components/atendimento.component';
import { AcaoComponent } from './components/acao/acao.component';
import { CursosModule } from './cursos/cursos.module';


//Representa os modulos
@NgModule({
  //METADADOS
  declarations: [
    AppComponent,
    AtendimentoComponent,
    AcaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CursosModule

  ],
  //SERVIÇOS SÃO NOS PROVIDERS TEM ESCOPO GLOBAL
  providers: [],
  //INSTANCIA O MODULO PRINCIPAL APP.MODULE
  bootstrap: [AppComponent]
  //FIM DOS METADADOS
})

export class AppModule { }
