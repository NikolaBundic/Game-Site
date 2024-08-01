import { Injectable } from '@angular/core';
import { Character } from '../model/character';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private characterListSubject = new BehaviorSubject<Character[]>([]);

  constructor(private http: HttpClient) {
    this.reloadCharacters()
  }

   getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>("api/character")
   }

   addCharacter(character: Character){
    return this.http.post<Character>("api/character", character);
   }

  updateCharactersList(characters: Character[]) {
    this.characterListSubject.next(characters)
  }

  getCharacterListObservable(): Observable<Character[]> {
    return this.characterListSubject.asObservable();
  }

  reloadCharacters() {
    this.getCharacters().subscribe({
      next: (characters: Character[]) => {
        this.updateCharactersList(characters);
      },
      complete: () => {
        console.log("Finished loading characters in service!");
      }
    });
  }
}
