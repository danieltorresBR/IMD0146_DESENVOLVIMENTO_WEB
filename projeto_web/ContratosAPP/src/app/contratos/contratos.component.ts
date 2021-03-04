import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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

  _filtroLista!: string;

  constructor(
    private contratoService: ContratoService
    // tslint:disable-next-line:align
    , private modalService: BsModalService
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
    this.getContratos();
  }

  filtrarContratos(filtrarPor: string): any {
    filtrarPor = filtrarPor;
    return this.contratos.filter(
      contrato => contrato.processoTCE.indexOf(filtrarPor) !== -1
    );
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
