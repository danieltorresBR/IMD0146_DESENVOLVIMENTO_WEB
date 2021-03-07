import { Component, OnInit, TemplateRef } from '@angular/core';
import { ContratoService } from '../_services/contrato.service';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { ContratoInterface } from '../_models/ContratoInterface';
import { templateJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  contratosFiltrados: any = [];
  contratos!: ContratoInterface[];
  registerForm!: FormGroup;
  registerFormControl!: FormControl;

  _filtroLista!: string;

  get f(): any {
    return this.registerForm.controls;
  }

  constructor(
    private contratoService: ContratoService
    // tslint:disable-next-line:align
    , private modalService: BsModalService,
    private fb: FormBuilder
    ) { }

  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.contratosFiltrados = this.filtroLista ? this.filtrarContratos(this.filtroLista) : this.contratos;
  }

  // tslint:disable-next-line:typedef
  openModal(template: any){
    template.show();
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.validation();
    this.getContratos();
  }

  filtrarContratos(filtrarPor: string): any {
    filtrarPor = filtrarPor;
    return this.contratos.filter(
      contrato => contrato.processoTCE.indexOf(filtrarPor) !== -1
    );
  }

  // tslint:disable-next-line:typedef
  validation(){
    this.registerForm = new FormGroup({
      // tslint:disable-next-line:new-parens
      dataInicioVigencia: new FormControl('', Validators.required),
      // tslint:disable-next-line:new-parens
      dataFimVigencia: new FormControl('', Validators.required),
      // tslint:disable-next-line:new-parens
      processoTCE: new FormControl('', Validators.required),
      // tslint:disable-next-line:new-parens
      linkRedmine: new FormControl('', Validators.required),
      // tslint:disable-next-line:new-parens
      objetoAcordo: new FormControl('',
        [Validators.required, Validators.minLength(4), Validators.maxLength(50)]),
    });
  }


  // tslint:disable-next-line:typedef
  // validations(){
  //   this.registerForm = this.fb.group({
  //     // tslint:disable-next-line:new-parens
  //     Data_de_início_da_vigência: ['', Validators.required],
  //     // tslint:disable-next-line:new-parens
  //     Data_de_fim_da_vigência: ['', Validators.required],
  //     // tslint:disable-next-line:new-parens
  //     Nº_do_Processo_TCE: ['TCE-', Validators.required],
  //     // tslint:disable-next-line:new-parens
  //     Link_do_Redmine: ['', Validators.required],
  //     // tslint:disable-next-line:new-parens
  //     Objeto_de_Acordo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]]
  //   });
  // }

  // tslint:disable-next-line:typedef
  salvarAlteracao(){

  }


  // tslint:disable-next-line:typedef
  getContratos() {
  }
}
