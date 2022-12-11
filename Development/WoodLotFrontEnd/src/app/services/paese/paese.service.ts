import { Injectable } from '@angular/core';
import {Paese} from "../../entities/paese/paese";
//TODO collegamento con il back-end
@Injectable({
  providedIn: 'root'
})
export class PaeseService {

  constructor() { }

  public getPaesi(){
    return [
      new Paese("Italia", "descrizione"),
      new Paese("Argentina", "descrizione"),
      new Paese("Perù", "descrizione"),
      new Paese("Guatemala", "descrizione")
    ]
  }
}
