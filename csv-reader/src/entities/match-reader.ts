import { MatchData } from "../models/match-data.model";
import { DataReader } from "../models/match-reader.model";
import { MatchResult } from "../models/match-result.model";
import { dateParser } from "../utils/parser.util";
import { CsvFileReader } from "./csv-file-reader";

export class MatchReader {
  static fromCsv(filePath: string): MatchReader {
    return new MatchReader(new CsvFileReader(filePath));
  }

  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  load() {
    this.reader.read();
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => [
        dateParser(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ]
    );
  }
}
