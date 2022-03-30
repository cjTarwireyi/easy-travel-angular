import { Component, Input, OnInit, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'pm-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientDetailsComponent implements OnInit {
  @Input() client: any;
  @Output() clientChanged = new EventEmitter<any>();
  constructor() { }
 change(){
   this.client.name="MK";
   this.clientChanged.emit(this.client);

 }
  ngOnInit(): void {
  }

}
