import { Injectable } from "@angular/core";
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';


@Injectable()
export class TeamService {
    constructor(private sqlite: SQLite) { }

    addTeam(players: string[]) {
        this.sqlite.create({
            name: 'scoreit.db',
            location: 'default'
        }).then((db: SQLiteObject) => {
            db.executeSql('CREATE TABLE IF NOT EXISTS Team(teamId TEXT PRIMARY KEY,teamName TEXT)', {})
                .then(res => (console.log('created team table')))
                .catch(e => console.log(e));
            db.executeSql('CREATE TABLE IF NOT EXISTS Players(playerId INTEGER,playerName TEXT,fkTeamId TEXT)', {})
                .then(res => (console.log('Players table created')))
                .catch(e => console.log(e));
        }).catch(e => console.log(e));
    }

}