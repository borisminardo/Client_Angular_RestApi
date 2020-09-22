import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../../service/utente.service';
import { Utente } from '../../utente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utenteform',
  templateUrl: './utenteform.component.html',
  styleUrls: ['./utenteform.component.css']
})
export class UtenteformComponent implements OnInit {
  utente: Utente;

  constructor(private _utenteService: UtenteService, private _router: Router) { }

  ngOnInit() {
    this.utente = this._utenteService.getter();
  }

  processForm() {
    if (this.utente.id == undefined) {
      this._utenteService.saveUtente(this.utente).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      });
    } else {
      this._utenteService.updateUtente(this.utente).subscribe((u) => {
        console.log(u);
        this._router.navigate(['/'])
      }, (error) => {
        console.log(error);
      });
    }
  }
}

