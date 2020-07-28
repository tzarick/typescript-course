import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('HoLa');
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-30);
linkedList.add(-3);
linkedList.add(0);
// const sorter = new Sorter(linkedList);
// sorter.sort();
linkedList.sort();
linkedList.print();

// final:

// const numbersCollection = new NumbersCollection([10000, 3, -5, 0]);
// numbersCollection.sort();
// console.log(numbersCollection.data);

// const charactersCollection = new CharactersCollection('HoLa');
// charactersCollection.sort();
// console.log(charactersCollection.data);
