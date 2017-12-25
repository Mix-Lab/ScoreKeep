import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CreateTeamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-team',
  templateUrl: 'create-team.html',
})
export class CreateTeamPage {

  playerNames = [];
  playerNameString: string = '';
  @ViewChild('focusInput') playerNameInput;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTeamPage');
  }

  onPlayerAdded() {
    console.log("adding player to the team: " + this.playerNameString);
    this.playerNames.push(this.playerNameString);
    this.playerNameString='';
    this.playerNameInput.setFocus();
  }

}
