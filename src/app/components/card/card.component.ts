import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  gameCover:string = ''

  // propriedades copiadas dos sub-componentes para o componente principal
  @Input()
  gameLabel:string = ''

  @Input()
  gameType:string = ''

  @Input()
  gamePrice:string = ''

}
