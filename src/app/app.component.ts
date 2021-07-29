import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public isPlaying: boolean = true
  public typeEnd: string

  public endGame(type: string){
    this.isPlaying = false
    this.typeEnd = type
  }

}
