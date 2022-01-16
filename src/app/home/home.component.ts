import { Component } from '@angular/core';
import { Subscription } from 'rxjs';


@Component({
  templateUrl: './home.component.html'
})
export class HomeComponent {
  public pageTitle = 'Welcome to Home Page';  
  sub!: Subscription;
  showDefaultCard: boolean =false;
  tooltip: any =
    {
        visible: true,
        formatFunction: (value: string) => {
            let realVal = parseInt(value);
            return ('Year: 2016<br/>Price Index:' + realVal);
        }
    }
    values: number[] = [102, 115, 130, 140];

    ngOnInit(): void {     
  
         
      }
}