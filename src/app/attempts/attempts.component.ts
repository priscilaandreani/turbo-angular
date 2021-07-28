import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Heart } from '../shared/heart.model'


@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit, OnChanges {
  @Input() public attempts: number

  public hearts: Heart[] = [
    new Heart(true),
    new Heart(true),
    new Heart(true),
  ]


  constructor() { console.log(this.hearts); }

  ngOnChanges() {

    if (this.attempts !== this.hearts.length) {
      let index = this.hearts.length - this.attempts
      this.hearts[index - 1].full = false
    }

    console.log('tentatvias', this.attempts)

  }

  ngOnInit(): void {
  }

}
