import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardsComponent } from './character-cards.component';

describe('CharacterCardsComponent', () => {
  let component: CharacterCardsComponent;
  let fixture: ComponentFixture<CharacterCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharacterCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
