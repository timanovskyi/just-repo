import { OutputTarget } from "../../models/summary.model";

export class ConsoleReport implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }
}
