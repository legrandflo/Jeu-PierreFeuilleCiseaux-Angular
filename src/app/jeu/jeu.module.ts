import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreComponent } from './score/score.component';
import { JeuPanelComponent } from './jeu-panel/jeu-panel.component';
import { ChoixComponent } from './choix/choix.component';
//uniquement pour utilisé les fonctions avancés de Bootstrap
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TirageAleatoireService } from './service/tirage-aleatoire.service';

@NgModule({
  imports: [
    CommonModule
    //Ajouter si on veut utilisé les fonctions avancés de Bootstrap
    //,NgbModule.forRoot()
  ],
  declarations: [ScoreComponent, JeuPanelComponent, ChoixComponent],
  exports : [JeuPanelComponent], //pas ScoreComponent,ChoixComponent car utilisé dans JeuPanelComponent
  providers : [TirageAleatoireService]
})
export class JeuModule { }
