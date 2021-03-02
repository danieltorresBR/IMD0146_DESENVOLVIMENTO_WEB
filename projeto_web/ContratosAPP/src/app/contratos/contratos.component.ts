import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  _filtroLista!: string;
  get filtroLista(): string {
    return this._filtroLista;
  }

  set filtroLista(value: string) {
    this._filtroLista = value;
    this.contratosFiltrados = this.filtroLista ? this.filtrarContratos(this.filtroLista) : this.contratos;
  }

  contratosFiltrados: any = [];
  contratos: any = [];
  constructor(private http: HttpClient) { }

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
    this.http.get('https://localhost:5001/api/values').subscribe(response => {
      this.contratos = response;
      this.contratosFiltrados = this.contratos;
      console.log(response);
    }, error => {
      console.log(error);
    }
    );
  }
}
