import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  even:number=1;
  count:Number;
  AfterStarted(count){
    this.count=count
    if(count%2==0){
      this.even=1;
    }
    else{
      this.even=0;
    }
  }
}

