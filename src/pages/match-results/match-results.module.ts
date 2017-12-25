import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatchResultsPage } from './match-results';

@NgModule({
  declarations: [
    MatchResultsPage,
  ],
  imports: [
    IonicPageModule.forChild(MatchResultsPage),
  ],
})
export class MatchResultsPageModule {}
