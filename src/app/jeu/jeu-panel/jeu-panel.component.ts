import { Component, OnInit } from '@angular/core';
//import du service
import { TirageAleatoireService } from '../service/tirage-aleatoire.service';


@Component({
  selector: 'app-jeu-panel',
  templateUrl: './jeu-panel.component.html',
  styleUrls: ['./jeu-panel.component.css']
})
export class JeuPanelComponent implements OnInit {

reponse : any;
  message : string;
  valeurMach : number;
  scoreMoi : number;
  scoreMachine : number;
  couleurReponse: string ;
  showMessage :string;

  choixPossible : string[];

  titre : string

  constructor(
    //definition du service
    public TirageAleatoireService:TirageAleatoireService
  ) 
  {
    this.reponse = "";
    this.message = "";
    this.valeurMach =  0;
    this.scoreMoi =  0;
    this.scoreMachine =  0;
    this.couleurReponse ="black"
    this.showMessage =""
    this.choixPossible = ["Pierre", "Feuille", "Ciseaux"]
    this.titre = "Choisissez un bouton : "
    
   }

  ngOnInit() {
  }
  
  monchoix2(choix){
    console.log('click sur : ' +choix)
    //on peut utilisé les variables d'un service
    console.log("service " +this.TirageAleatoireService.nomService)
    //on utilise le service en appelant et en ajoutant la fonction a utilisé
    this.game(choix,this.TirageAleatoireService.choixMachine());

  }
  //qui recupere choix machine et qui retourne choix en lettre
  
  //fonction qui defini aleatoirement le choix de la machine entre 1 et 3
  //mis dans service
  /*
  choixMachine() {
    let valeurMach =  Math.floor(Math.random()*2);
    return valeurMach;
  }
  */
  game(choix1,choix2) {
    console.log("mon choix : " +choix1+" choixMachine :"+ choix2)
    if (choix1 == choix2){
      console.log("Match Nul");
      this.reponse = "MATCH NUL!!";
      this.message = "La machine a choisi " + this.choixPossible[choix2];
      this.couleurReponse = "blue";
      this.scoreMoi = this.scoreMoi;
      this.scoreMachine = this.scoreMachine ;
    }
    else if ((choix1 == 0 && choix2 == 2) || (choix1 == 2 && choix2 == 1) || (choix1 == 1 && choix2 == 0)){
      console.log("Gagné!!");
      this.reponse = "GAGNE !!";
      this.message = "...Bravo!!! La machine a choisi " + this.choixPossible[choix2];
      this.couleurReponse = "green";
      this.scoreMoi = this.scoreMoi + 1;
      this.scoreMachine = this.scoreMachine ;
    }
    else 
    {
      console.log("Perdu!!");
      this.reponse = "PERDU !!";
      this.message = " : La machine a gagné. Elle a choisi " + this.choixPossible[choix2];
      this.couleurReponse = "red";
      this.scoreMoi = this.scoreMoi;
      this.scoreMachine = this.scoreMachine + 1;
    };
  }
  reset(){
    this.reponse = "";
    this.message = "";
    this.scoreMoi =  0;
    this.scoreMachine =  0;
  }
  
}