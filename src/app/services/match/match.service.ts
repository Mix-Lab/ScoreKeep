import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Match } from '../../models/cricket/match.model';

@Injectable()
export class MatchService {
    private matchRef = this.db.list<Match>('match');
    constructor(private db: AngularFireDatabase) { }

    getMatch() {
        return this.matchRef;
    }

    addMatch(match: Match) {
        return this.matchRef.push(match);
    }

    removeMatch(match:Match) {
        return this.matchRef.remove(match.matchId);
    }

}