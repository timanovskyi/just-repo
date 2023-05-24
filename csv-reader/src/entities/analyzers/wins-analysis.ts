import { MatchData } from "../../models/match-data.model";
import { MatchResult } from "../../models/match-result.model";
import { Analyzer } from "../../models/summary.model";
import { Team } from "../../models/team.model";

export class WinsAnalysis implements Analyzer {
  constructor(private _team: Team) {}

  run(matches: MatchData[]): string {
    let wins = 0;
    for (let match of matches) {
      if (match[1] === this._team && match[5] === MatchResult.HOME_WIN) {
        wins++;
      } else if (match[2] === this._team && match[5] === MatchResult.AWAY_WIN) {
        wins++;
      }
    }

    return `Team ${this._team} won ${wins} games`;
  }
}
