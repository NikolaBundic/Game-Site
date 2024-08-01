import { Component, OnInit } from '@angular/core';
import { Character } from '../model/character';
import { CharacterService } from '../service/character.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit{
  characters: Observable<Character[]>;

  constructor(private characterService: CharacterService){
  }

  ngOnInit(): void {
    this.characters = this.characterService.getCharacterListObservable();
  }
}
