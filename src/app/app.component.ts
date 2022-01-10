import { Component } from "@angular/core";
import { jqxBarGaugeModule }  from 'jqwidgets-ng/jqxbargauge';  

@Component({
  selector:'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pageTitle: string = "Easy Travel";
}