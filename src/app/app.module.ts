import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FormularioComponent } from './cliente/formulario/formulario.component';
import { ListagemComponent } from './listagem/listagem.component';
import {ListaService} from './services/lista.service';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListagemComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    // NgbModule.forRoot()
  ],
  providers: [ListaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
