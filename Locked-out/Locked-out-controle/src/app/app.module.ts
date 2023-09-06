import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TelaInicialComponent } from './tela-inicial/tela-inicial.component';
import { BloquearUrlComponent } from './bloquear-url/bloquear-url.component';
import { HistoricoComponent } from './historico/historico.component';
import { ConfiguracoesComponent } from './configuracoes/configuracoes.component';
import { SairComponent } from './sair/sair.component';

@NgModule({
  declarations: [
    AppComponent,
    BloquearUrlComponent,
    HistoricoComponent,
    ConfiguracoesComponent,
    SairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
