import {Injectable} from '@angular/core';
import {Contadino} from "../../entita/contadino/contadino";
import {ProdottoOrdine} from "../../entita/prodottoOrdine/prodotto-ordine";
import {Pagamento} from "../../entita/pagamento/pagamento";

@Injectable({
  providedIn: 'root'
})
export class ContadinoService {

  constructor() {
  }

  // restituisce un contadino
  public getContadino() {
    return new Contadino("Briciola", "Bricioloso", [
      new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
        "castagno", "Coordinate Geografiche", 45),
      new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
        "castagno", "Coordinate Geografiche", 45),
      new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
        "castagno", "Coordinate Geografiche", 45),
      new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
        "Coordinate Geografiche", 59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "piantato", "castagno", "Coordinate Geografiche",
        59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
    ], 1)
  }

  //restuituisce l'elenco di tutti i contadini presenti
  public getContadini() {
    return [
      new Contadino("Mario", "Rssi", [
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
          "Coordinate Geografiche", 59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "piantato", "castagno", "Coordinate Geografiche",
          59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
      ], 1),
      new Contadino("Marco", "Rossi", [
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
          "Coordinate Geografiche", 59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "piantato", "castagno", "Coordinate Geografiche",
          59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
      ], 2),
      new Contadino("Merlino", "Mago", [
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
          "Coordinate Geografiche", 59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "piantato", "castagno", "Coordinate Geografiche",
          59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
      ], 3),
      new Contadino("Britney", "Spears", [
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
          "Coordinate Geografiche", 59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "piantato", "castagno", "Coordinate Geografiche",
          59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
      ], 4),
      new Contadino("Cane", "Gattino", [
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "frutto",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 3, 45, new Date(), "fiore",
          "castagno", "Coordinate Geografiche", 45),
        new ProdottoOrdine(13.00, 4, 45, new Date(), "bocciolo", "mandorlo",
          "Coordinate Geografiche", 59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "piantato", "castagno", "Coordinate Geografiche",
          59),
        new ProdottoOrdine(13.00, 34, 45,
          new Date(), "dormineza", "mandorlo", "Coordinate Geografiche", 59)
      ], 5),
    ]
  }

  //restiusci tutti gli alberi non ancora assegnati a un contadino
  public getAlberiNonAssegnati() {
    return [
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "Non Assegnato", "mandorlo", "Coordinate Geografiche", 59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "Non Assegnato", "mandorlo", "Coordinate Geografiche", 59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "Non Assegnato", "mandorlo", "Coordinate Geografiche", 59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "Non Assegnato", "mandorlo", "Coordinate Geografiche", 59),
      new ProdottoOrdine(13.00, 34, 45,
        new Date(), "Non Assegnato", "mandorlo", "Coordinate Geografiche", 59)
    ]
  }

  // restuisce tutti i pagamenti di un contadini
  public getPagamenti() {
    return [
      new Pagamento(1, 20, new Date(), "Albero 1"),
      new Pagamento(2, 30, new Date(), "Albero 2"),
      new Pagamento(3, 40, new Date(), "Albero 3"),
      new Pagamento(4, 20, new Date(), "Albero 4"),
      new Pagamento(5, 50, new Date(), "Albero 5"),
      new Pagamento(6, 10, new Date(), "Albero 6"),
      new Pagamento(7, 20, new Date(), "Albero 7"),
      new Pagamento(8, 30, new Date(), "Albero 8"),
      new Pagamento(9, 220, new Date(), "Albero 9"),
    ]
  }
}
