import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from "ionic-angular/platform/platform";


@Injectable()
export class TeamService {
    database: SQLiteObject;
    constructor(private sqlite: SQLite, private platform: Platform) {
        console.log('about to initialize team service');
        this.platform.ready().then(() => {
            console.log('platform ready received');
            this.sqlite.create({
                name: 'scoreit.db',
                location: 'default'
            }).then((db: SQLiteObject) => {
                this.database = db;
                console.log('SQLiteObject available, about to create tables');
                db.executeSql('CREATE TABLE IF NOT EXISTS Team(teamId INTEGER AUTOINCREMENT PRIMARY KEY,teamName TEXT)', {})
                    .then(res => (console.log('created team table')))
                    .catch(e => console.log(e));
                db.executeSql('CREATE TABLE IF NOT EXISTS Players(playerId INTEGER,playerName TEXT,fkTeamId INTEGER)', {})
                    .then(res => (console.log('Players table created')))
                    .catch(e => (console.log(e)));
            }).catch(e => (console.log(e)));
        }).catch(e => (console.log(e)));
        console.log('done initializing tables');
    }

    createTeam(teamName: string, players: string[]) {
        let fkTeamId: number;
        if (this.database) {
            console.log('create team button pressed. About to insert values');
            this.database.executeSql('INSERT INTO Team(teamName) VALUES(?)', [teamName])
                .then(res => {
                    console.log('inserted the team data, about to fetch team id');
                    this.database.executeSql('SELECT teamId AS teamId FROM Team WHERE teamName="' + teamName + '"', {})
                        .then(res => {
                            console.log('about to iterate results for teamId');
                            if (res.rows.length > 0) {
                                fkTeamId = parseInt(res.rows.item(0).teamId);
                                for (var player in players) {
                                    console.log('player is: ', player);
                                    this.database.executeSql('INSERT INTO Players(playerName,fkTeamId) VALUES(?)', [player, fkTeamId])
                                        .then(res => (console.log('successfully inserted the players')))
                                        .catch(e => (console.log(e)));
                                }
                            }
                        }).catch(e => (console.log(e)));
                }).catch(e => (console.log(e)));
        } else {
            console.log('Database object is not available');
        }
        console.log('exiting create team method');
    }
}