import { Component, OnInit } from '@angular/core';
import {Livros} from '../shared/livros';
import { CategoriaService} from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';
import {FormGroup, FormControl} from '@angular/forms';

import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  formLivros: FormGroup;
  categoria = {} as Categoria;
  categorias: Categoria[];

    constructor(private categoriaService: CategoriaService) {}

  ngOnInit() {
    this.createForm(new Livros());
    this.getCategorias();

  }
  createForm(livros: Livros){
    this.formLivros = new FormGroup({
      titulo: new FormControl(livros.titulo),
      subtitulo:  new FormControl(livros.subtitulo),
      npaginas:  new FormControl(livros.npaginas),
      anop:  new FormControl(livros.anop),
      edicao: new FormControl(livros.edicao),
      categoria: new FormControl(livros.categoria),
      autor: new FormControl(livros.autor)
    })
  }
  saveCategoria(form: NgForm) {
    if (this.categoria.id !== undefined) {
      this.categoriaService.updateCategoria(this.categoria).subscribe(() => {
        this.cleanForm(form);
      });
    } else {
      this.categoriaService.saveCategoria(this.categoria).subscribe(() => {
        this.cleanForm(form);
      });
    }
  }

  // Chama o serviço para obtém todos os carros
  getCategorias() {
    this.categoriaService.getCategorias().subscribe((categorias: Categoria[]) => {
      this.categorias = categorias;
    });
  }

  // deleta um carro
  deleteCategoria(categoria: Categoria) {
    this.categoriaService.deleteCategoria(categoria).subscribe(() => {
      this.getCategorias();
    });
  }

  // copia o carro para ser editado.
  editCategoria(categoria: Categoria) {
    this.categoria = { ...categoria };
  }

  // limpa o formulario
  cleanForm(form: NgForm) {
    this.getCategorias();
    form.resetForm();
    this.categoria = {} as Categoria;
  }
  onSubmit() {
    console.log(this.formLivros.value);
  }
}
