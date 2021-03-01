import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  contratos: any;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.getContratos();
  }

  // tslint:disable-next-line:typedef
  getContratos() {
    this.http.get('https://localhost:5001/api/values').subscribe(response => {
      this.contratos = response;
      console.log(response);
    }, error => {
      console.log(error);
    }
    );
  }
}
