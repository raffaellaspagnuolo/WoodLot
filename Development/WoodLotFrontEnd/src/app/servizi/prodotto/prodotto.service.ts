import {Injectable} from '@angular/core';
import {Albero} from "../../entita/albero/albero";
import {Paese} from "../../entita/paese/paese";
import {UsoLocale} from "../../entita/usoLocale/uso-locale";
import {Beneficio} from "../../entita/beneficio/beneficio";
import {Categoria} from "../../entita/categoria/categoria";

//TODO collegamento con il back-end
@Injectable({
  providedIn: 'root'
})
export class ProdottoService {

  constructor() {
  }


  //restituisce tutti i prodotti presenti nel DB
  public getProdotti() {
    return [
      new Albero(13.00, 34, "castagno"),
      new Albero(12.00, 434, "mandorlo"),
      new Albero(34.00, 434, "melograno"),
      new Albero(12.50, 43, "vite"),
      new Albero(13.00, 34, "castagno"),
      new Albero(12.00, 434, "mandorlo"),
      new Albero(34.00, 434, "melograno"),
      new Albero(12.50, 43, "vite"),
      new Albero(13.00, 34, "castagno"),
      new Albero(12.00, 434, "mandorlo"),
      new Albero(34.00, 434, "melograno"),
      new Albero(13.00, 34, "castagno"),
      new Albero(12.00, 434, "mandorlo"),
      new Albero(12.50, 43, "vite"),
      new Albero(34.00, 434, "melograno"),
      new Albero(12.50, 43, "vite"),
    ]
  }

  //restituisce un singolo prodotto
  public getProdottoInformazioni(nome: String) {
    return new Albero(13.00, 34, "castagno", new Paese("Italia", "Lorem ipsum dolor " +
        "sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
        "Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Eu lobortis elementum nibh tellus molestie. " +
        "Quisque id diam vel quam elementum. In massa tempor nec feugiat. Porta lorem mollis aliquam ut. Quis ipsum " +
        "suspendisse ultrices gravida dictum fusce ut placerat orci. A diam maecenas sed enim ut sem viverra aliquet eget. " +
        "Sit amet volutpat consequat mauris nunc congue nisi vitae suscipit. Nibh ipsum consequat nisl vel pretium."),
      "castagnoru", "Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Eu " +
      "lobortis elementum nibh tellus molestie.Quisque id diam vel quam elementum. In massa tempor nec feugiat. " +
      "Porta lorem mollis aliquam ut. Quis ipsum", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
      "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat " +
      "nisl pretium fusce. Eu lobortis elementum nibh tellus molestie. Quisque id diam vel quam elementum. In massa " +
      "tempor nec feugiat. Porta lorem mollis aliquam ut. Quis ipsum suspendisse ultrices gravida dictum fusce ut " +
      "placerat orci. A diam maecenas sed enim ut sem viverra aliquet eget. Sit amet volutpat consequat mauris nunc " +
      "congue nisi vitae suscipit. Nibh ipsum consequat nisl vel pretium.", 15, new Array<UsoLocale>(
        new UsoLocale("Uso Locale 1", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"),
        new UsoLocale("Uso Locale 2", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut"),
        new UsoLocale("Uso Locale 3", "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut")
      ), new Array<Beneficio>(
        new Beneficio("beneficio 1", "descrizione"),
        new Beneficio("beneficio 2", "descrizione"),
        new Beneficio("beneficio 3", "descrizione"),
      ), new Categoria("categoria", "orem ipsum dolor sit amet, consectetur adipiscing elit, sed do " +
        "eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus purus in massa tempor nec feugiat nisl " +
        "pretium fusce. Eu lobortis elementum nibh tellus molestie."))

  }
}
