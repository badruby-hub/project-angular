import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {
  b = 0;
  increaseP(){
    this.b += 5;  
  }
  increaseM(){
    this.b -= 5;  
  }
condition = true; 
toggleCondition(){
  this.condition = !this.condition
}
}
