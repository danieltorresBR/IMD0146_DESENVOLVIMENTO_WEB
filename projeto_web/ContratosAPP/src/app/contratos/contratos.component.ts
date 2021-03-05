import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { from } from 'rxjs';
import { ContratoService } from '../_services/contrato.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {
  contratosFiltrados: any = [];
  contratos: any = [];
  modalRef!: BsModalRef;
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
  openModal(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
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
      dataInicioVigencia: new FormControl,
      // tslint:disable-next-line:new-parens
      dataFimVigencia: new FormControl,
      // tslint:disable-next-line:new-parens
      processoTCE: new FormControl,
      // tslint:disable-next-line:new-parens
      linkRedmine: new FormControl,
      // tslint:disable-next-line:new-parens
      objetoAcordo: new FormControl,
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
    this.contratoService.getAllContratos().subscribe(
      response => {
      this.contratos = response;
      this.contratosFiltrados = this.contratos;
      console.log(response);
    }, error => {
      console.log(error);
    }
    );
  }
}
