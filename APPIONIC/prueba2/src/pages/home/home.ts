import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

lists:any[] = [];

  constructor(public navCtrl: NavController) {

  this.lists.push({
  name: 'nicolas'
  });

  this.lists.push({
  name: 'nicolas 1'
  });

  this.lists.push({
  name: 'nicolas 2'
  });

  }

}
