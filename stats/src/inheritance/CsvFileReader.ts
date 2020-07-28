import fs from 'fs';

export abstract class CsvFileReader<T> {
  data: T[] = []; // MatchData[] is implicitly 2D bc MatchData itself is an array

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // tells readFileSync to return a string to us, instead of a buffer
      })
      .split('\n')
      .map((row: string): string[] => row.split(','))
      .map(this.mapRow); // no specific references to any specific csv file format now
  }
}
