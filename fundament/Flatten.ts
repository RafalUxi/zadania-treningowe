// Zadanie: flatten bierze tablicę mogącą zawierać zagnieżdżone tablice (dowolnie głęboko) i zwraca jedną płaską.
// [1, [2, [3, 4]], 5]  →  [1, 2, 3, 4, 5]

const array = [1, 2, [3, 4]];
const arrayFlat = array.flat();

type NextArray<T> = (T | NextArray<T>)[];

function flatten<T>(array: NextArray<T>): T[] {
  const arrayOutput: T[] = [];
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (Array.isArray(item)) {
      arrayOutput.push(...flatten(item));
    } else {
      arrayOutput.push(item);
    }
  }

  return arrayOutput;
}

const arrayFlatOutput = flatten(array);

console.log(arrayFlat);
console.log(arrayFlatOutput);