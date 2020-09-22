import { Component, OnInit } from '@angular/core';
import { UtenteService } from '../../service/utente.service';
import { Utente } from '../../utente';
import { Router } from '@angular/router';

@Component({
  selector: 'app-utentilist',
  templateUrl: './utentilist.component.html',
  styleUrls: ['./utentilist.component.css']
})
export class UtentilistComponent implements OnInit {
  utenti: Utente[];

  constructor(private _utenteService:UtenteService, private _router:Router) { 
    
  }

  ngOnInit() {
    this._utenteService.getUtenti().subscribe((utenti) =>{
      console.log(utenti);
      this.utenti = utenti;
    }, (error) => {
      console.log(error);
    });
  }

  deleteUtente(utente: Utente){ 
      this._utenteService.deleteUtente(utente.username).subscribe((data)=>{
        this.utenti.splice(this.utenti.indexOf(utente),1);
      }, (error) => {
        console.log(error);
      });
    }

    updateUtente(utente: Utente){ 
        this._utenteService.setter(utente);
        this._router.navigate(['/form']);
    }

    createUtente(){
      let utente = new Utente();
      this._utenteService.setter(utente);
      this._router.navigate(['/form']);
    }
}
