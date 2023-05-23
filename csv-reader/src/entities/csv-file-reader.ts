import fs from "fs";
import { MathData } from "../models/match-data.model";
import { MatchResult } from "../models/match-result.model";
import { dateParser } from "../utils/parser.util";

export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(private _fileName: string) {}

  read() {
    this.data = fs
      .readFileSync(this._fileName, {
        encoding: "utf-8",
      })

      .split("\n")
      .map((r: string): string[] => r.split(","))
      .map(this.mapRow);
  }

  abstract mapRow(row: string[]): T;
}
