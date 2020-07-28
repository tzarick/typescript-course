import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { ConsoleReport } from './reportTargets/consoleReport';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { Console } from 'console';
import { HtmlReport } from './reportTargets/HtmlReport';

// source of data is hardcoded
// const matches = fs
//   .readFileSync('football.csv', {
//     encoding: 'utf-8', // tells readFileSync to return a string to us, instead of a buffer
//   })
//   .split('\n')
//   .map((row: string): string[] => row.split(','));

// const reader = new MatchReader('football.csv');
// reader.read();

// const printMatchResult = (): MatchResult => {
//   if (match[5] === 'H') {
//     return MatchResult.HomeWin;
//   }

//   return MatchResult.AwayWin;
// }

// create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv');

// create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader);

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalysisWithHtmlReport('Man United');
matchReader.load();
summary.buildAndPrintReport(matchReader.matches);

// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport('report.html')
// );

// let manUnitedWins = 0;
// for (let match of matchReader.matches) {
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] == 'Man United' && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United won ${manUnitedWins} games`);
