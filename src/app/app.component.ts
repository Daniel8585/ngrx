import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 counter = 0;

get cannotDecrease():boolean{
  return this.counter <= 0
}

 imcrease(): void{
   this.counter++;
 }

 decrease(): void{
   this.counter--;
 }

 clear(): void{
   this.counter = 0;
 }


}
