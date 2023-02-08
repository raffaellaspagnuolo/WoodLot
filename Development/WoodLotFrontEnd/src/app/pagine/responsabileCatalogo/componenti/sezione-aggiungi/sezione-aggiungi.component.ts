import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {BeneficioService} from "../../../../servizi/beneficio/beneficio.service";
import {UsoLocaleService} from "../../../../servizi/usoLocale/uso-locale.service";
import {PaeseService} from "../../../../servizi/paese/paese.service";
import {
  ValidazioneFormProdottoService
} from "../../../../servizi/validazioneFormProdotto/validazione-form-prodotto.service";
import {Beneficio} from "../../../../entita/beneficio/beneficio";
import {UsoLocale} from "../../../../entita/usoLocale/uso-locale";
import {Paese} from "../../../../entita/paese/paese";
import {Categoria} from "../../../../entita/categoria/categoria";
import {CategoriaService} from "../../../../servizi/categoria/categoria.service";
import {ProdottoService} from "../../../../servizi/prodotto/prodotto.service";
import {Albero} from "../../../../entita/albero/albero";
import {dateTimestampProvider} from "rxjs/internal/scheduler/dateTimestampProvider";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sezione-aggiungi',
  templateUrl: './sezione-aggiungi.component.html',
  styleUrls: ['./sezione-aggiungi.component.scss']
})
export class SezioneAggiungiComponent implements OnInit {

  formInserimento: FormGroup
  submitted = false;
  formErrori: any;
  errorMessage: string = '';

  public listaBenefici !: Beneficio[]
  public listaUsiLocali !: UsoLocale[]
  public listaPaesi !: Paese[]
  public listaCategorie!: Categoria[]

  constructor(private serviceValidazioneFormProdotto: ValidazioneFormProdottoService,
              private serviceBeneficio: BeneficioService, private serviceCategoria: CategoriaService,
              private serviceUsiLocali: UsoLocaleService, private servicePaese: PaeseService,
              private serviceProdotto: ProdottoService, private router: Router) {
    this.formInserimento = new FormGroup(
      {
        nomeAlbero: new FormControl('', [Validators.required,
          Validators.maxLength(serviceValidazioneFormProdotto.regoleForm.nomeAlberoMax),
          Validators.pattern(serviceValidazioneFormProdotto.regoleForm.nomeAlbero)]),
        specieScientifica: new FormControl('', [Validators.required,
          Validators.maxLength(serviceValidazioneFormProdotto.regoleForm.specieScientificaMax),
          Validators.pattern(serviceValidazioneFormProdotto.regoleForm.specieScientifca)]),
        descrizioneBreve: new FormControl('', [Validators.required,
          Validators.maxLength(serviceValidazioneFormProdotto.regoleForm.descizioneBreveMax)]),
        descrizione: new FormControl('', [Validators.required,
          Validators.maxLength(serviceValidazioneFormProdotto.regoleForm.descrizioneMax)]),
        prezzo: new FormControl('', [Validators.required,
          Validators.pattern(serviceValidazioneFormProdotto.regoleForm.prezzo)]),
        salvaguardia: new FormControl('', [Validators.required,
          Validators.pattern(serviceValidazioneFormProdotto.regoleForm.salvaguardia)]),
        anidrideCarbonica: new FormControl('', [Validators.required,
          Validators.pattern(serviceValidazioneFormProdotto.regoleForm.anidrideCarbonica)]),
        foto1: new FormControl('', [Validators.required]),
        foto2: new FormControl('', [Validators.required]),
        foto3: new FormControl('', [Validators.required]),
        foto4: new FormControl('', [Validators.required]),
        paese: new FormControl('Argentina', [Validators.required]),
        usiLocali: new FormControl('', [Validators.required]),
        benefici: new FormControl('', [Validators.required]),
        categoria: new FormControl('Rischio estinzione', [Validators.required])
      }
    )
    this.formErrori = serviceValidazioneFormProdotto.errori
  }

  ngOnInit(): void {
    this.servicePaese.getPaesi().subscribe(data => {
      this.listaPaesi = data;
    });
    this.serviceUsiLocali.getUsiLocali().subscribe(data => {
      this.listaUsiLocali = data;
    });
    this.serviceBeneficio.getBenefici().subscribe(data => {
      this.listaBenefici = data;
    });
    this.serviceCategoria.getCategorie().subscribe(data => {
      this.listaCategorie = data
    })
  }

  onValidate() {
    this.submitted = true;

    return this.formInserimento.status === 'VALID';
  }

  onSubmit(): void {
    this.errorMessage = ''
    if (this.onValidate()) {

      let nomeAlbero = this.formInserimento.get('nomeAlbero')?.value
      let specieScientifica = this.formInserimento.get('specieScientifica')?.value
      let descrizioneBreve = this.formInserimento.get('descrizioneBreve')?.value
      let descrizione = this.formInserimento.get('descrizione')?.value
      let prezzo = this.formInserimento.get('prezzo')?.value
      let anidrideCarbonica = this.formInserimento.get('anidrideCarbonica')?.value
      let salvaguardia = this.formInserimento.get('salvaguardia')?.value

      let foto4 = this.formInserimento.get('foto4')?.value
      let foto3 = this.formInserimento.get('foto3')?.value
      let foto2 = this.formInserimento.get('foto2')?.value
      let foto1 = this.formInserimento.get('foto1')?.value

      let usiLocali = this.formInserimento.get('usiLocali')?.value
      let usiLocaliArray = new Array<UsoLocale>()
      usiLocali.forEach((e: string) => {
        let u = new UsoLocale(e, "")
        usiLocaliArray.push(u)
      });
      console.log(usiLocaliArray)

      let benefici = this.formInserimento.get('benefici')?.value
      let beneficiArray = new Array<Beneficio>()
      benefici.forEach((e: string) => {
        let u = new Beneficio(e, "")
        beneficiArray.push(u)
      });
      console.log(beneficiArray)

      let paese = this.formInserimento.get('paese')?.value
      let categoria = this.formInserimento.get('categoria')?.value

      let cat = new Categoria(categoria, "")
      let p = new Paese(paese, "")
      let albero = new Albero(prezzo, anidrideCarbonica, nomeAlbero,
        specieScientifica, descrizioneBreve, descrizione, salvaguardia, usiLocaliArray, beneficiArray, cat, p)
      console.log(albero)

      this.serviceProdotto.salvaAlbero(albero).subscribe(
        (data: Albero) => {

          this.serviceProdotto.salvaFoto("catalogo.webp", foto4)
          this.serviceProdotto.salvaFoto("01.webp", foto3)
          this.serviceProdotto.salvaFoto("02.webp", foto2)
          this.serviceProdotto.salvaFoto("03.webp", foto1)
          this.router.navigate(['/paginaProdotto', albero.nome])
        },
        (error) => {
          this.errorMessage = JSON.stringify(error.data)
        })
    }
  }

  //getter per un facile accesso ai campi del modulo
  get f() {
    return this.formInserimento.controls;
  }
}
