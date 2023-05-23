import { MathData } from "../models/match-data.model";
import { MatchResult } from "../models/match-result.model";
import { dateParser } from "../utils/parser.util";
import { CsvFileReader } from "./csv-file-reader";

export class MatchReader extends CsvFileReader<MathData> {
  mapRow(row: string[]): MathData {
    return [
      dateParser(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
