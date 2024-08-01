import { Component } from '@angular/core';
import { Character } from '../model/character';
import { NgForm } from '@angular/forms';
import { CharacterService } from '../service/character.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  character: Character

  public message = '';
  constructor(private characterService: CharacterService) {
  }

  createCharacter(characterForm: NgForm) {
    if (characterForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
    } else {
      const character: Character = characterForm.value;
      console.log('Creating character', character);
      this.characterService.addCharacter(character).subscribe({
        next: () => {
          this.characterService.reloadCharacters()
        }
      })
    }
  }
}
