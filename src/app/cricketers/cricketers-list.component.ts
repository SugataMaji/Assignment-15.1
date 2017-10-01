import { ICricketList } from './../interface/cricketer-list';
import { Component, OnInit, trigger,state,style,transition,animate,keyframes } from '@angular/core';
import { CricketerService } from 'app/services/cricketer.service';

@Component({
  selector: 'app-cricketers-list',
  templateUrl: './cricketers-list.component.html',
  styleUrls: ['./cricketers-list.component.css'],
  animations:[ trigger('crciketerState', 
  [
    state('active', style({backgroundColor: '#cfd8dc'})),
  ]
)]
})
export class CricketersListComponent implements OnInit {

  state: any ='active'

  criketerDetail: ICricketList[];
  private searchData: string;
  private imageUrl: string = 'https://s3.amazonaws.com/uifaces/faces/twitter/fffabs/128.jpg';
  stateExpression: string;

  /** Using constructor, call the cricketService.
       this shorthand syntax automatically creates and
      initializes a new private member in the class */
  constructor(private _cricketService: CricketerService) { }


  ngOnInit() {
    this.searchData = '';
    /**Get the cricketerDetail from cricketer-app  */
    this.criketerDetail = this._cricketService.getCricketerList();
  };

  animateMe(){
    this.state = (this.state === 'active');
  }


}
