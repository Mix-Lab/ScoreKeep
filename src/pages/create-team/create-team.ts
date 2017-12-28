import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TeamService } from '../../app/services/team/team.service';

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
  playerNameString: string;
  teamNameString: string;

  @ViewChild('focusInput') playerNameInput;

  constructor(public navCtrl: NavController, public navParams: NavParams, private teamService: TeamService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateTeamPage');
  }

  addPlayer() {
    console.log("adding player to the team: " + this.playerNameString);
    this.playerNames.push(this.playerNameString);
    this.playerNameString = '';
    this.playerNameInput.setFocus();
  }

  createTeam() {
    console.log('about to call create team method');
    this.teamService.createTeam(this.teamNameString, this.playerNames);
    console.log('done calling create team method');
  }

}
