import { Component, OnInit } from '@angular/core';
import {CategoriaService} from "../../../../../servizi/categoria/categoria.service";
import {UsoLocaleService} from "../../../../../servizi/usoLocale/uso-locale.service";
import {PaeseService} from "../../../../../servizi/paese/paese.service";

@Component({
  selector: 'app-filtro-list',
  templateUrl: './filtro-list.component.html',
  styleUrls: ['./filtro-list.component.scss']
})
export class FiltroListComponent implements OnInit {

  public listNomiFiltri = [
    "Prezzo", "CO2","Categorie", "Paesi", "Usi Locali"
  ]

  public listPrezzo = [
    "Prezzo crescente", "Prezzo descrescente"
  ]

  public listCO2 = [
    "Meno CO2 assorbita", "Meno CO2 assorbita"
  ]

  public listFiltri

  constructor(private serviceCategorie:CategoriaService, private serviceUsiLocali:UsoLocaleService, private servicePaese:PaeseService) {
    let listUsiLocali = new Array<String>()
    let listCategorie = new Array<String>()
    let listPaesi = new Array<String>()

    serviceCategorie.getCategorie().forEach(e => {
      listCategorie.push(e.nome)
    })

    servicePaese.getPaesi().forEach(e => {
      listPaesi.push(e.nome)
    })

    serviceUsiLocali.getUsiLocali().forEach(e => {
      listUsiLocali.push(e.nome)
    })

     this.listFiltri= [this.listPrezzo, this.listCO2, listCategorie, listPaesi, listUsiLocali]
  }

  ngOnInit(): void {
  }



}
