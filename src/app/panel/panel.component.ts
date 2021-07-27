import { Component, OnInit } from '@angular/core';
import { Phrase } from '../shared/phrase.model'
import { PHRASE } from './phrase-mock'
@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: Phrase[] = PHRASE
  public instruction: string = 'Traduza a frase:'
  public answer: string = ''

  public round: number = 0
  public roundPhrase: Phrase

  public progress: number = 0


  constructor() {
    this.updateRound()
  }

  ngOnInit(): void {
  }

  updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  verifyAnswer(): void {
    if (this.roundPhrase.phrasePT === this.answer) {
      alert('A tradução está correta')

      this.round++
      this.progress = this.progress + (100 / this.phrases.length)
      this.updateRound()
    } else {
      alert('Tente novamente.')
    }
  }

  updateRound(): void {

    //define phrase
    this.roundPhrase = this.phrases[this.round]

    //clean answer
    this.answer = ''
  }
}
