import { Component, OnInit } from '@angular/core';
import { ListaService } from '../services/lista.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  listagem: Array<any>;
  constructor(private listaService: ListaService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.listaService.listar().subscribe(dados => this.listagem = dados);
  }

}
