import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.scss']
})
export class ContratosComponent implements OnInit {

  contratos: any = [
    {
      Id: 10,
      DataInicioVigencia: '01/01/2010',
      DataFimVigencia: '01/01/2011',
      ProcessoTCE: '00010-00011',
      LinkRedmine: 'www.testeFront.com.br',
      ObjetoAcordo: 'Isso é um teste no Front'
    },
    {
      Id: 12,
      DataInicioVigencia: '01/05/2011',
      DataFimVigencia: '01/05/2012',
      ProcessoTCE: '00010-00022',
      LinkRedmine: 'www.testeFront.com.br',
      ObjetoAcordo: 'Isso é um teste no Front com Id12'
    },
    {
      Id: 15,
      DataInicioVigencia: '01/01/2015',
      DataFimVigencia: '01/01/2016',
      ProcessoTCE: '00010-00020',
      LinkRedmine: 'www.testeFront.com.br/TCE',
      ObjetoAcordo: 'Isso é um teste no Front id15'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
