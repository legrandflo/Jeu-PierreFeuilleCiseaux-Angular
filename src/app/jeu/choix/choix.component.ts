import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choix',
  templateUrl: './choix.component.html',
  styleUrls: ['./choix.component.css']
})
export class ChoixComponent implements OnInit {

@Input() title : string;
//declaration de variable notify
@Output() notify: EventEmitter<number> = new EventEmitter<number>();     
constructor() { }

ngOnInit() {
}
//fonction qui emet valeur dans le tuyau notify 
//qui est recuperer par $event et injecter dans choix de la fonction monchoix de game-panel....ts
//notify est appelé dans game-panel...html
monChoix(valeur) {
  console.log("mon choix: " +valeur)
  this.notify.emit(valeur) 
}
  
}

