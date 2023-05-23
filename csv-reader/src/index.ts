import { MatchReader } from "./entities/match-reader";
import { MatchResult } from "./models/match-result.model";

const matches = new MatchReader("./assests/football.csv");
matches.read();

let manUnitedWins = 0;
for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatchResult.HOME_WIN) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResult.AWAY_WIN) {
    manUnitedWins++;
  }
}

console.log(manUnitedWins);
