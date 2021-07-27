import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {
  public heartEmpty: string = `assets/coracao_vazio.png`
  public heartFull: string = `assets/coracao_cheio.png`

  constructor() { }
  ngOnInit(): void {
  }

}
