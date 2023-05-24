import fs from "fs";
import { DataReader } from "../models/match-reader.model";

export class CsvFileReader implements DataReader{

  data: string[][] = [];

  constructor(private _fileName: string) {}

  read() {
    this.data = fs
      .readFileSync(this._fileName, {
        encoding: "utf-8",
      })

      .split("\n")
      .map((r: string): string[] => r.split(","))
  }
}
