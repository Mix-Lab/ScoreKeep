import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TeamListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-team-list',
  templateUrl: 'team-list.html',
})
export class TeamListPage {

  searchQuery: string = '';
  teams: string[];
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.initializeTeams();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamListPage');
  }

  initializeTeams() {
    this.teams = [
      'Royal Challengers',
      'Chennai Super Kings'
    ];
  }

  getTeams(ev: any) {
    // Reset teams back to all of the teams
    this.initializeTeams();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the teams
    if (val && val.trim() != '') {
      this.teams = this.teams.filter((team) => {
        return (team.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}
