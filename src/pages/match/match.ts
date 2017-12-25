import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Match } from '../../app/models/cricket/match.model';
import { MatchService } from '../../app/services/match/match.service';

/**
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-match',
  templateUrl: 'match.html',
})
export class MatchPage {

  selectTeamOptions = {
    title: 'Teams'
  };

  match: Match = {
    team1: '',
    team2: '',
    date: new Date(),
    venue: '',
    overs: undefined,
    tossWonBy: '',
    tossTeamOptedFor: '',
    noBallRuns: undefined,
    wideBallRuns: undefined
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, private matchService: MatchService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatchPage');
  }

  addMatch(match: Match) {
    this.matchService.addMatch(match).then(ref => {
      console.log("executed addMatch method", match);
      //this.navCtrl.setRoot()
    })
  }

}
