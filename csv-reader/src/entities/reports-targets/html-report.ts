import { OutputTarget } from "../../models/summary.model";
import fs from "fs";

export class HtmlReport implements OutputTarget {
  constructor(private _fileName: string) {}
  print(report: string): void {
    const html = `
     <div>
         <h1>Analysis Output</h1>
         <div>${report}</div>
     </div>
  `;

    fs.writeFileSync(this._fileName, html);
  }
}
