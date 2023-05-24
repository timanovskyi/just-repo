import { MatchData } from "../models/match-data.model";
import { Analyzer, OutputTarget } from "../models/summary.model";
import { Team } from "../models/team.model";
import { WinsAnalysis } from "./analyzers/wins-analysis";
import { ConsoleReport } from "./reports-targets/console-report";
import { HtmlReport } from "./reports-targets/html-report";

export class Summary {
  static winsAnalysisWithHtmlReport(team: Team, fileName: string): Summary {
    return new Summary(new WinsAnalysis(team), new HtmlReport(fileName));
  }
  static winsAnalysisWithConsoleReport(team: Team): Summary {
    return new Summary(new WinsAnalysis(team), new ConsoleReport());
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(matches: MatchData[]): void {
    const ouput = this.analyzer.run(matches);
    this.outputTarget.print(ouput);
  }
}
