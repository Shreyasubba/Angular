import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {
  @Output('gamestarted') gamestart: EventEmitter<number>=new EventEmitter<number>();
  private count:number=0;
  ref;
     onStart(){
            
            this.ref=setInterval(( )=>{
              this.count=this.count+1;
              this.gamestart.emit(this.count)
            },1000)
        
     }
     onStop(){
      clearInterval(this.ref)

     }
}
