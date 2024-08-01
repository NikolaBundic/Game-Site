import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-character-cards',
  templateUrl: './character-cards.component.html',
  styleUrls: ['./character-cards.component.css']
})
export class CharacterCardsComponent{
  @Input() character: Character;

  constructor() {}

}
