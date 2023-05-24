import { MatchReader } from "./entities/match-reader";
import { Summary } from "./entities/summary";
import { Team } from "./models/team.model";

const matchReader = MatchReader.fromCsv("./assests/football.csv");
matchReader.load();

const summary = Summary.winsAnalysisWithHtmlReport(
  Team.ARSENAL,
  "report.html"
);
summary.buildAndPrintReport(matchReader.matches);
