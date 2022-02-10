import { Component, Input, OnChanges, Output, EventEmitter } from "@angular/core";

@Component({
selector:'pm-star',
templateUrl:'./star.component.html',
styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
@Input() rating:number = 0;
cropWidth:number = 67;

@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
onClick(): void{
    this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
}
ngOnChanges(): void {
    this.cropWidth = this.rating * 67/5
    
}
}