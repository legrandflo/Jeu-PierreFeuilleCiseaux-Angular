//service pour calcul aleatoire du choix machine 
//injecté dans dans composant principal.ts jeu-panel.component.ts
//declaration du service dans providers du jeumodule
//
import { Injectable } from '@angular/core';

@Injectable()
export class TirageAleatoireService {
  //on peut injecté des variables dans jeu-panel.component.ts
nomService = "tirageAleatoire";
  constructor() { }
  //on peut injecté des fonctions dans jeu-panel.component.ts
  choixMachine() {
    let valeurMach =  Math.floor(Math.random()*2);
    return valeurMach;
}
}
